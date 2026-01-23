import {
	Action,
	ActionPanel,
	Clipboard,
	Form,
	showToast,
	Toast,
} from '@raycast/api';
import { useEffect, useMemo, useRef, useState } from 'react';

type StepId =
	| 'regime'
	| 'profile'
	| 'objective'
	| 'source'
	| 'allowed'
	| 'prohibited'
	| 'formatLanguage'
	| 'stop';

type StepOption = {
	value: string;
	label: string;
};

type StepDefinition = {
	id: StepId;
	title: string;
	kind: 'dropdown' | 'text';
	options?: StepOption[];
	fields: StepField[];
};

type StepField = {
	id: FieldId;
	title: string;
	placeholder?: string;
};

type FieldId =
	| 'regime'
	| 'profile'
	| 'objective'
	| 'source'
	| 'allowed'
	| 'prohibited'
	| 'format'
	| 'language'
	| 'stop';

type StepValue = {
	value: string;
};

type StepValues = Record<FieldId, StepValue>;

const steps: StepDefinition[] = [
	{
		fields: [{ id: 'regime', title: 'Regime Cognitivo' }],
		id: 'regime',
		kind: 'dropdown',
		options: [
			{
				label: 'Nível 1 — Execução estritamente delimitada',
				value: 'level-1',
			},
			{
				label: 'Nível 2 — Análise controlada e diagnóstico',
				value: 'level-2',
			},
			{
				label: 'Nível 3 — Síntese estruturada e organização cognitiva',
				value: 'level-3',
			},
			{
				label: 'Nível 4 — Exploração de alternativas e trade-offs',
				value: 'level-4',
			},
			{
				label: 'Nível 5 — Apoio à decisão humana',
				value: 'level-5',
			},
			{
				label: 'Nível 6 — Governança, controle e segurança cognitiva',
				value: 'level-6',
			},
			{
				label: 'Nível 7 — Meta-cognição e arquitetura de pensamento',
				value: 'level-7',
			},
			{
				label: 'Nível 8 — Documentação, contratos e sistemas de uso',
				value: 'level-8',
			},
		],
		title: 'Regime Cognitivo',
	},
	{
		fields: [{ id: 'profile', title: 'Perfil Cognitivo' }],
		id: 'profile',
		kind: 'dropdown',
		options: [
			{
				label: 'Conservador',
				value: 'profile-conservative',
			},
			{
				label: 'Analítico',
				value: 'profile-analytical',
			},
			{
				label: 'Crítico',
				value: 'profile-critical',
			},
			{
				label: 'Estrutural',
				value: 'profile-structural',
			},
		],
		title: 'Perfil Cognitivo',
	},
	{
		fields: [
			{
				id: 'objective',
				placeholder:
					'Descreva o resultado esperado de forma clara e operacional.',
				title: 'Objetivo',
			},
		],
		id: 'objective',
		kind: 'text',
		title: 'Objetivo',
	},
	{
		fields: [
			{
				id: 'source',
				placeholder:
					'Declare explicitamente quais dados são válidos para esta tarefa.',
				title: 'Fonte de Verdade',
			},
		],
		id: 'source',
		kind: 'text',
		title: 'Fonte de Verdade',
	},
	{
		fields: [
			{
				id: 'allowed',
				placeholder: 'Liste as transformações autorizadas.',
				title: 'Operações Permitidas',
			},
		],
		id: 'allowed',
		kind: 'text',
		title: 'Operações Permitidas',
	},
	{
		fields: [
			{
				id: 'prohibited',
				placeholder: 'Liste ações que o modelo não pode executar.',
				title: 'Operações Proibidas',
			},
		],
		id: 'prohibited',
		kind: 'text',
		title: 'Operações Proibidas',
	},
	{
		fields: [
			{
				id: 'format',
				placeholder: 'Descreva exatamente como a resposta deve ser entregue.',
				title: 'Formato da Saída',
			},
			{
				id: 'language',
				placeholder: 'Ex.: pt-BR',
				title: 'Idioma',
			},
		],
		id: 'formatLanguage',
		kind: 'text',
		title: 'Formato / Idioma',
	},
	{
		fields: [
			{
				id: 'stop',
				placeholder: 'Declare quando o modelo deve interromper a execução.',
				title: 'Condições de Parada',
			},
		],
		id: 'stop',
		kind: 'text',
		title: 'Condições de Parada',
	},
];

const COGNITIVE_HEADER = [
	'REGIME COGNITIVO OPERACIONAL (NÃO NEGOCIÁVEL)',
	'',
	'Você DEVE seguir estritamente as regras cognitivas abaixo.',
	'Estas regras têm precedência sobre qualquer outra instrução neste prompt.',
].join('\n');

const REGIME_BASE_BY_LEVEL: Record<string, string> = {
	'level-1': [
		'REGIME BASE — NÍVEL 1 (EXECUÇÃO ESTRITAMENTE DELIMITADA)',
		'',
		'- Você deve executar apenas ações explicitamente definidas, com entradas e saídas claramente especificadas.',
		'- Inferência é proibida.',
		'- Decisão é proibida.',
		'- Você não pode completar lacunas, deduzir intenção implícita ou “melhorar” requisitos.',
		'- Se qualquer informação obrigatória estiver ausente, ambígua ou conflitar com restrições, você deve parar e perguntar.',
	].join('\n'),
	'level-2': [
		'REGIME BASE — NÍVEL 2 (ANÁLISE CONTROLADA E DIAGNÓSTICO)',
		'',
		'- Você pode identificar lacunas, ambiguidades, inconsistências e riscos com base em critérios fornecidos.',
		'- Inferência é permitida apenas para IDENTIFICAÇÃO (ex.: detectar falta, conflito ou pressuposto), não para concluir fatos novos.',
		'- Decisão é proibida.',
		'- Você não deve executar a tarefa final do usuário.',
		'- Se a análise depender de dados ausentes, você deve parar e solicitar esclarecimento mínimo.',
	].join('\n'),
	'level-3': [
		'REGIME BASE — NÍVEL 3 (SÍNTESE ESTRUTURADA E ORGANIZAÇÃO)',
		'',
		'- Você pode organizar, estruturar e sintetizar conteúdo preservando rastreabilidade e divergências.',
		'- Inferência é limitada à ORGANIZAÇÃO (ex.: agrupamento, taxonomia, ordenação), sem criar conteúdo novo.',
		'- Decisão é proibida.',
		'- Você não pode inventar fatos, preencher lacunas ou “interpretar” além do material fornecido.',
		'- Se faltar material para estruturar sem inferência, você deve parar e pedir os dados mínimos necessários.',
	].join('\n'),
	'level-4': [
		'REGIME BASE — NÍVEL 4 (EXPLORAÇÃO DE ALTERNATIVAS E TRADE-OFFS)',
		'',
		'- Você pode gerar múltiplas alternativas e explicitar trade-offs entre opções.',
		'- Inferência é permitida somente dentro de critérios declarados e deve ser apresentada como hipótese quando não for fato.',
		'- Decisão é proibida: você não escolhe a alternativa final pelo usuário.',
		'- Você deve apresentar pelo menos 2 opções mutuamente exclusivas, com prós/contras e impactos.',
		'- Se critérios forem insuficientes para comparar opções, você deve parar e pedir os critérios mínimos.',
	].join('\n'),
	'level-5': [
		'REGIME BASE — NÍVEL 5 (APOIO À DECISÃO HUMANA)',
		'',
		'- Você pode recomendar opções com justificativa rastreável baseada em critérios explícitos.',
		'- Inferência é permitida, mas deve ser explícita e separada de fatos fornecidos.',
		'- A decisão final é sempre humana: você não decide nem executa em nome do usuário.',
		'- Você deve sinalizar incertezas e zonas de risco.',
		'- Se critérios explícitos não existirem para recomendar, você deve parar e solicitar os critérios mínimos.',
	].join('\n'),
	'level-6': [
		'REGIME BASE — NÍVEL 6 (GOVERNANÇA, CONTROLE E SEGURANÇA COGNITIVA)',
		'',
		'- Sua função primária é impedir execução fora do escopo e bloquear inferências não autorizadas.',
		'- Você deve exigir clarificação quando contexto for insuficiente.',
		'- Você deve detectar e apontar conflitos entre inputs, permissões, proibições e fonte de verdade.',
		'- Inferência é proibida quando não explicitamente autorizada pelos inputs.',
		'- Você pode decidir apenas sobre PARAR/BLOQUEAR quando houver conflito, ambiguidade ou falta de informação obrigatória.',
	].join('\n'),
	'level-7': [
		'REGIME BASE — NÍVEL 7 (META-COGNIÇÃO E ARQUITETURA DE PENSAMENTO)',
		'',
		'- Você atua sobre a qualidade das instruções, contratos e estruturas de raciocínio.',
		'- Você pode propor reformulações mais precisas e decomposições mais robustas do pedido.',
		'- Inferência é permitida apenas sobre ESTRUTURA (clareza, consistência, acoplamento), não sobre fatos do domínio.',
		'- Decisão é proibida.',
		'- Se a meta-análise exigir contexto inexistente, você deve parar e perguntar.',
	].join('\n'),
	'level-8': [
		'REGIME BASE — NÍVEL 8 (DOCUMENTAÇÃO, CONTRATOS E SISTEMAS DE USO)',
		'',
		'- Você deve formalizar objetivos, limites, condições de parada e critérios de sucesso/falha em artefatos normativos.',
		'- Inferência é proibida: você não cria requisitos não fornecidos.',
		'- Você pode apenas estruturar e normatizar o que foi explicitamente declarado.',
		'- Decisão é apenas estrutural (formato/contrato), nunca sobre conteúdo não declarado.',
		'- Se houver lacunas no contrato, você deve parar e pedir os termos mínimos necessários.',
	].join('\n'),
};

const PROFILE_MODIFIER_BY_ID: Record<string, string> = {
	'profile-analytical': [
		'MODIFICADOR DE PERFIL — ANALÍTICO',
		'',
		'- Decomponha requisitos vagos em sub-requisitos explícitos.',
		'- Evidencie inconsistências e restrições ausentes de forma objetiva.',
		'- Mantenha análise separada de execução.',
	].join('\n'),
	'profile-conservative': [
		'MODIFICADOR DE PERFIL — CONSERVADOR',
		'',
		'- Prefira parar e perguntar em vez de aproximar ou assumir.',
		'- Trate instruções vagas como inválidas até serem esclarecidas.',
		'- Em caso de dúvida, não prossiga.',
	].join('\n'),
	'profile-critical': [
		'MODIFICADOR DE PERFIL — CRÍTICO',
		'',
		'- Procure ativamente contradições, pressupostos ocultos e edge cases.',
		'- Destaque riscos e ambiguidades explicitamente.',
		'- Não resolva conflitos por conta própria; pare e pergunte.',
	].join('\n'),
	'profile-structural': [
		'MODIFICADOR DE PERFIL — ESTRUTURAL',
		'',
		'- Reorganize para clareza e hierarquia quando permitido pelo nível.',
		'- Nunca altere significado ao estruturar.',
		'- Preserve fronteiras e restrições de ordenação quando especificadas.',
	].join('\n'),
};

const PAPEL_E_RESPONSABILIDADE = [
	'Você é um agente de processamento de instruções normativas.',
	'',
	'Sua responsabilidade é:',
	'- seguir estritamente o Regime Cognitivo Operacional definido neste prompt;',
	'- operar apenas dentro das permissões explicitamente declaradas;',
	'- respeitar integralmente a Fonte de Verdade, Operações Permitidas e Operações Proibidas;',
	'- interromper a execução e pedir esclarecimento sempre que houver ambiguidade, conflito ou informação ausente.',
	'',
	'Você não possui autonomia decisória além do que for explicitamente autorizado.',
	'Você não deve inferir intenção, contexto ou requisitos não declarados.',
].join('\n');

function shorten(text: string, maxLength: number): string {
	if (text.length <= maxLength) {
		return text;
	}
	return `${text.slice(0, maxLength - 3)}...`;
}

function validateStep(step: StepDefinition, values: StepValues): string | null {
	for (const field of step.fields) {
		const current = values[field.id]?.value?.trim();
		if (!current) {
			return `Preencha "${field.title}".`;
		}
	}
	return null;
}

function resolveAllValues(stepValues: StepValues): StepValues {
	return stepValues;
}

function buildCognitiveBlock(levelId: string, profileId: string): string {
	const base = REGIME_BASE_BY_LEVEL[levelId];
	const modifier = PROFILE_MODIFIER_BY_ID[profileId];
	if (!base || !modifier) {
		return '';
	}
	return [COGNITIVE_HEADER, base, modifier].join('\n\n');
}

function buildPrompt(values: StepValues): string {
	const formatWithLanguage =
		`${values.format.value}\n\nIdioma: ${values.language.value}`.trim();
	const cognitiveBlock = buildCognitiveBlock(
		values.regime.value,
		values.profile.value,
	);

	return [
		'Você é um Arquiteto de Prompts.',
		'',
		'1. Papel e responsabilidade',
		PAPEL_E_RESPONSABILIDADE,
		'',
		'2. Regime Cognitivo Operacional (não negociável)',
		cognitiveBlock,
		'',
		'3. Objetivo',
		values.objective.value,
		'',
		'4. Fonte de verdade',
		values.source.value,
		'',
		'5. Operações permitidas',
		values.allowed.value,
		'',
		'6. Operações proibidas',
		values.prohibited.value,
		'',
		'7. Formato de saída e restrições',
		formatWithLanguage,
		'',
		'8. Condições de falha e parada',
		values.stop.value,
	].join('\n');
}

export default function Command() {
	const [stepIndex, setStepIndex] = useState(0);
	const [stepValues, setStepValues] = useState<StepValues>(() => {
		return steps
			.flatMap((step) => step.fields)
			.reduce((acc, field) => {
				acc[field.id] = { value: '' };
				return acc;
			}, {} as StepValues);
	});
	const dropdownRef = useRef<Form.Dropdown>(null);
	const customRef = useRef<Form.TextArea>(null);

	const step = steps[stepIndex];

	// biome-ignore lint/correctness/useExhaustiveDependencies: <always force focus on step change>
	useEffect(() => {
		const timer = setTimeout(() => {
			if (step.kind === 'dropdown') {
				dropdownRef.current?.focus();
			} else {
				customRef.current?.focus();
			}
		}, 0);

		return () => clearTimeout(timer);
	}, [step.id, step.kind]);

	const preview = useMemo(() => {
		if (step.kind === 'dropdown') {
			const field = step.fields[0];
			const current = stepValues[field.id]?.value;
			if (!current) {
				return 'Nenhuma opcao selecionada.';
			}
			const label =
				step.options?.find((option) => option.value === current)?.label ?? '';
			return label ? shorten(label, 140) : 'Nenhuma opcao selecionada.';
		}

		const lines = step.fields.map((field) => {
			const current = stepValues[field.id]?.value?.trim();
			if (!current) {
				return `${field.title}: (vazio)`;
			}
			return `${field.title}: ${shorten(current, 140)}`;
		});
		return lines.join('\n');
	}, [step, stepValues]);

	const handleOptionChange = (fieldId: FieldId, value: string) => {
		setStepValues((prev) => ({
			...prev,
			[fieldId]: { value },
		}));
	};

	const handleTextChange = (fieldId: FieldId, value: string) => {
		setStepValues((prev) => ({
			...prev,
			[fieldId]: { value },
		}));
	};

	const handleBack = () => {
		setStepIndex((prev) => Math.max(prev - 1, 0));
	};

	const handleNext = async () => {
		const error = validateStep(step, stepValues);
		if (error) {
			await showToast({
				message: error,
				style: Toast.Style.Failure,
				title: 'Validacao',
			});
			return;
		}
		setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
	};

	const handleGenerate = async () => {
		for (let index = 0; index < steps.length; index += 1) {
			const candidateStep = steps[index];
			const error = validateStep(candidateStep, stepValues);
			if (error) {
				setStepIndex(index);
				await showToast({
					message: error,
					style: Toast.Style.Failure,
					title: 'Validacao',
				});
				return;
			}
		}

		const resolvedValues = resolveAllValues(stepValues);
		const prompt = buildPrompt(resolvedValues);

		await Clipboard.copy(prompt);

		try {
			await Clipboard.paste(prompt);
			await showToast({
				style: Toast.Style.Success,
				title: 'Prompt copiado e colado',
			});
		} catch {
			await showToast({
				message: 'Falha ao colar. O texto permanece no clipboard.',
				style: Toast.Style.Success,
				title: 'Prompt copiado',
			});
		}
	};

	return (
		<Form
			actions={
				<ActionPanel>
					{stepIndex < steps.length - 1 ? (
						<Action onAction={handleNext} title="Proximo" />
					) : (
						<Action onAction={handleGenerate} title="Gerar E Colar" />
					)}
					{stepIndex > 0 ? (
						<Action onAction={handleBack} title="Voltar" />
					) : null}
				</ActionPanel>
			}
			navigationTitle={`Canonical Prompt Generator (${stepIndex + 1}/${steps.length})`}
		>
			{step.kind === 'dropdown' ? (
				<Form.Dropdown
					id={`${step.id}-option`}
					key={step.id}
					onChange={(value) => handleOptionChange(step.fields[0].id, value)}
					placeholder="Selecione uma opcao"
					ref={dropdownRef}
					title={step.title}
					value={stepValues[step.fields[0].id]?.value ?? ''}
				>
					{step.options?.map((option) => (
						<Form.Dropdown.Item
							key={option.value}
							title={option.label}
							value={option.value}
						/>
					))}
				</Form.Dropdown>
			) : (
				step.fields.map((field, index) => (
					<Form.TextArea
						id={`${step.id}-${field.id}`}
						key={field.id}
						onChange={(value) => handleTextChange(field.id, value)}
						placeholder={field.placeholder}
						ref={index === 0 ? customRef : null}
						title={field.title}
						value={stepValues[field.id]?.value ?? ''}
					/>
				))
			)}
			<Form.Description text={preview} title="Previa" />
		</Form>
	);
}

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
	| 'objective'
	| 'role'
	| 'source'
	| 'transformations'
	| 'prohibited'
	| 'format'
	| 'language'
	| 'stop';

type StepOption = {
	value: string;
	label: string;
};

type StepDefinition = {
	id: StepId;
	title: string;
	options: StepOption[];
};

type StepValue = {
	optionId?: string;
	customText?: string;
};

type StepValues = Record<StepId, StepValue>;

type ResolvedValues = Record<StepId, string>;

const CUSTOM_OPTION_VALUE = 'custom';

const steps: StepDefinition[] = [
	{
		id: 'objective',
		options: [
			{
				label: 'Executável e rigoroso para tarefa específica',
				value: 'objective-1',
			},
			{
				label: 'Criar/atualizar documentação técnica com regras rígidas',
				value: 'objective-2',
			},
			{
				label: 'Transformar texto (traduzir, reescrever, padronizar)',
				value: 'objective-3',
			},
			{
				label:
					'Revisão crítica (falhas, inconsistências, riscos) sem executar mudanças',
				value: 'objective-4',
			},
			{
				label: 'Custom...',
				value: CUSTOM_OPTION_VALUE,
			},
		],
		title: 'Objetivo',
	},
	{
		id: 'role',
		options: [
			{
				label:
					'Assuma o papel definido pelo usuário. Não execute a tarefa. Gere apenas o prompt final conforme as regras e estrutura exigidas.',
				value: 'role-1',
			},
			{
				label:
					'Assuma o papel de redator técnico. Não execute a tarefa final. Gere um prompt que produza documentação objetiva, verificável e estruturada.',
				value: 'role-2',
			},
			{
				label:
					'Assuma o papel de analista crítico. Não execute. Gere um prompt que maximize a detecção de lacunas, riscos e ambiguidade.',
				value: 'role-3',
			},
			{
				label: 'Custom...',
				value: CUSTOM_OPTION_VALUE,
			},
		],
		title: 'Papel',
	},
	{
		id: 'source',
		options: [
			{
				label:
					'Use apenas o conteúdo fornecido ou indicado pelo usuário nesta conversa como fonte de verdade. Não use conhecimento externo. Se faltar informação, pare e peça os dados mínimos necessários.',
				value: 'source-1',
			},
			{
				label:
					'Use os anexos e textos fornecidos pelo usuário como fonte de verdade. Não inferir conteúdo ausente. Se houver conflitos entre fontes, apontar e parar.',
				value: 'source-2',
			},
			{
				label:
					'Use apenas um documento/transcrição fornecida como fonte de verdade. O texto é imutável. É proibido corrigir, resumir ou reordenar.',
				value: 'source-3',
			},
			{
				label: 'Custom...',
				value: CUSTOM_OPTION_VALUE,
			},
		],
		title: 'Fonte de verdade',
	},
	{
		id: 'transformations',
		options: [
			{
				label:
					'- Fazer perguntas mínimas quando faltar informação obrigatória\n- Definir regras rígidas e formato de saída\n- Ser explícito sobre o que é permitido/proibido\n- Gerar apenas o prompt final (não executar a tarefa)',
				value: 'transformations-1',
			},
			{
				label:
					'- Reorganizar conteúdo para melhor estrutura (sem adicionar conteúdo novo)\n- Padronizar headings e seções\n- Melhorar clareza mantendo significado\n- Gerar apenas o prompt final',
				value: 'transformations-2',
			},
			{
				label:
					'- Produzir múltiplas opções e trade-offs (baseado apenas no contexto fornecido)\n- Recomendar uma opção com justificativas\n- Gerar apenas o prompt final',
				value: 'transformations-3',
			},
			{
				label: 'Custom...',
				value: CUSTOM_OPTION_VALUE,
			},
		],
		title: 'Transformações permitidas',
	},
	{
		id: 'prohibited',
		options: [
			{
				label:
					'- Não executar a tarefa do usuário\n- Não inferir ou inventar informações ausentes\n- Não usar conhecimento externo quando não autorizado\n- Não adicionar explicações fora do formato exigido',
				value: 'prohibited-1',
			},
			{
				label:
					'- Não corrigir gramática\n- Não remover repetições\n- Não resumir\n- Não reordenar conteúdo',
				value: 'prohibited-2',
			},
			{
				label:
					'- Não incluir código/pseudocódigo se não for solicitado\n- Não inventar benchmarks, números ou fontes\n- Não “melhorar” requisitos sem autorização',
				value: 'prohibited-3',
			},
			{
				label: 'Custom...',
				value: CUSTOM_OPTION_VALUE,
			},
		],
		title: 'Ações proibidas',
	},
	{
		id: 'format',
		options: [
			{
				label:
					'Retorne APENAS o prompt final gerado.\nO prompt deve conter as seções na ordem:\n1. Papel e responsabilidade\n2. Objetivo\n3. Fonte de verdade\n4. Operações permitidas\n5. Operações proibidas\n6. Formato de saída e restrições\n7. Condições de falha e parada\nNão inclua texto fora do prompt.',
				value: 'format-1',
			},
			{
				label:
					'Retorne APENAS o prompt final em Markdown.\nExija títulos (#, ##) e listas quando aplicável.\nDefina número exato de arquivos/saídas quando relevante.\nNão inclua texto fora do prompt.',
				value: 'format-2',
			},
			{
				label:
					'Retorne APENAS o prompt final.\nO prompt deve exigir saída em dois arquivos separados (.md), ambos obrigatórios, sem texto fora dos arquivos.\nDefina claramente as seções e ordem de cada arquivo.',
				value: 'format-3',
			},
			{
				label: 'Custom...',
				value: CUSTOM_OPTION_VALUE,
			},
		],
		title: 'Formato e estrutura da saída',
	},
	{
		id: 'language',
		options: [
			{
				label: 'Interface e saída em Português (pt-BR).',
				value: 'language-1',
			},
			{
				label: 'Interface e saída em Inglês (en-US).',
				value: 'language-2',
			},
			{
				label: 'Interface em Português (pt-BR) e saída em Inglês (en-US).',
				value: 'language-3',
			},
			{
				label: 'Custom...',
				value: CUSTOM_OPTION_VALUE,
			},
		],
		title: 'Idioma',
	},
	{
		id: 'stop',
		options: [
			{
				label:
					'- Se qualquer informação obrigatória estiver ausente ou ambígua: parar e fazer perguntas mínimas\n- Se houver conflito entre regras: apontar o conflito e parar\n- Se a fonte de verdade estiver incompleta/truncada: declarar e parar',
				value: 'stop-1',
			},
			{
				label:
					'- Se o usuário pedir inferência/adição não autorizada: recusar e explicar brevemente dentro do prompt\n- Se faltar contexto: parar e solicitar o mínimo necessário',
				value: 'stop-2',
			},
			{
				label:
					'- Se a tarefa exigir acesso externo não fornecido: parar e solicitar os dados/links\n- Se a saída exigida não for possível com as informações atuais: parar e declarar impossibilidade',
				value: 'stop-3',
			},
			{
				label: 'Custom...',
				value: CUSTOM_OPTION_VALUE,
			},
		],
		title: 'Condições de parada',
	},
];

function getResolvedValue(
	step: StepDefinition,
	value: StepValue | undefined,
): string | undefined {
	if (!value?.optionId) {
		return undefined;
	}
	if (value.optionId === CUSTOM_OPTION_VALUE) {
		const custom = value.customText?.trim();
		return custom ? custom : undefined;
	}
	return step.options.find((option) => option.value === value.optionId)?.label;
}

function shorten(text: string, maxLength: number): string {
	if (text.length <= maxLength) {
		return text;
	}
	return `${text.slice(0, maxLength - 3)}...`;
}

function validateStep(
	step: StepDefinition,
	value: StepValue | undefined,
): string | null {
	if (!value?.optionId) {
		return `Selecione uma opcao para "${step.title}".`;
	}
	if (value.optionId === CUSTOM_OPTION_VALUE && !value.customText?.trim()) {
		return `Preencha o texto personalizado para "${step.title}".`;
	}
	return null;
}

function resolveAllValues(stepValues: StepValues): ResolvedValues {
	return steps.reduce((acc, step) => {
		const resolved = getResolvedValue(step, stepValues[step.id]);
		acc[step.id] = resolved ?? '';
		return acc;
	}, {} as ResolvedValues);
}

function buildPrompt(values: ResolvedValues): string {
	const formatWithLanguage =
		`${values.format}\n\nIdioma: ${values.language}`.trim();

	return [
		'Você é um Arquiteto de Prompts.',
		'',
		'1. Papel e responsabilidade',
		values.role,
		'',
		'2. Objetivo',
		values.objective,
		'',
		'3. Fonte de verdade',
		values.source,
		'',
		'4. Operações permitidas',
		values.transformations,
		'',
		'5. Operações proibidas',
		values.prohibited,
		'',
		'6. Formato de saída e restrições',
		formatWithLanguage,
		'',
		'7. Condições de falha e parada',
		values.stop,
	].join('\n');
}

export default function Command() {
	const [stepIndex, setStepIndex] = useState(0);
	const [stepValues, setStepValues] = useState<StepValues>(() => {
		return steps.reduce((acc, step) => {
			acc[step.id] = { customText: '', optionId: undefined };
			return acc;
		}, {} as StepValues);
	});
	const dropdownRef = useRef<Form.Dropdown>(null);
	const customRef = useRef<Form.TextArea>(null);

	const step = steps[stepIndex];
	const currentValue = stepValues[step.id];

	// biome-ignore lint/correctness/useExhaustiveDependencies: <always force focus on step change>
	useEffect(() => {
		const timer = setTimeout(() => {
			if (currentValue?.optionId === CUSTOM_OPTION_VALUE) {
				customRef.current?.focus();
			} else {
				dropdownRef.current?.focus();
			}
		}, 0);

		return () => clearTimeout(timer);
	}, [currentValue?.optionId, step.id]);

	const preview = useMemo(() => {
		if (!currentValue?.optionId) {
			return 'Nenhuma opcao selecionada.';
		}
		if (currentValue.optionId === CUSTOM_OPTION_VALUE) {
			const custom = currentValue.customText?.trim();
			if (!custom) {
				return 'Custom... (vazio)';
			}
			return shorten(custom, 140);
		}
		const resolved = getResolvedValue(step, currentValue);
		return resolved ? shorten(resolved, 140) : 'Nenhuma opcao selecionada.';
	}, [currentValue, step]);

	const handleOptionChange = (value: string) => {
		setStepValues((prev) => ({
			...prev,
			[step.id]: {
				...prev[step.id],
				optionId: value,
			},
		}));
	};

	const handleCustomChange = (value: string) => {
		setStepValues((prev) => ({
			...prev,
			[step.id]: {
				...prev[step.id],
				customText: value,
			},
		}));
	};

	const handleBack = () => {
		setStepIndex((prev) => Math.max(prev - 1, 0));
	};

	const handleNext = async () => {
		const error = validateStep(step, currentValue);
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
			const error = validateStep(candidateStep, stepValues[candidateStep.id]);
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
			<Form.Dropdown
				id={`${step.id}-option`}
				key={step.id}
				onChange={handleOptionChange}
				placeholder="Selecione uma opcao"
				ref={dropdownRef}
				title={step.title}
				value={currentValue?.optionId ?? ''}
			>
				{step.options.map((option) => (
					<Form.Dropdown.Item
						key={option.value}
						title={option.label}
						value={option.value}
					/>
				))}
			</Form.Dropdown>
			{currentValue?.optionId === CUSTOM_OPTION_VALUE ? (
				<Form.TextArea
					id={`${step.id}-custom`}
					onChange={handleCustomChange}
					placeholder="Descreva sua opcao personalizada"
					ref={customRef}
					title="Custom"
					value={currentValue.customText ?? ''}
				/>
			) : null}
			<Form.Description text={preview} title="Previa" />
		</Form>
	);
}

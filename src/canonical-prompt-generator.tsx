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

const META_PROMPT_TEMPLATE = `# META-PROMPT — GERADOR DE PROMPT CANÔNICO (NÃO EXECUTAR A TAREFA)

Você é um **Compilador de Prompts Canônicos**.

---

## Missão (não negociável)

Você está em **fase de compilação**.  
Você **NÃO** deve executar a tarefa final do usuário.  
Você deve **APENAS** gerar um **PROMPT CANÔNICO FINAL**, normativo, determinístico e auditável, a partir dos inputs fornecidos.

---

## Objetivo técnico do PROMPT CANÔNICO FINAL

Gerar um prompt que:

- elimina ambiguidade e inferência silenciosa  
- fixa comportamento cognitivo **antes** de qualquer execução  
- torna o pedido reprodutível e auditável  
- é otimizado para leitura por IA (linguagem explícita, normativa, operacional)  
- exige **“pare e pergunte”** quando faltar informação ou houver conflito estrutural  

---

## Princípios estruturais obrigatórios

1. **Contrato Cognitivo Primeiro**  
   O comportamento cognitivo da IA deve ser explicitamente fixado **antes** de objetivo, operações ou formato.

2. **Hierarquia Cognitiva Estrita**  
   - O **Nível Cognitivo** define permissões e proibições fundamentais.  
   - O **Perfil Cognitivo** é **subordinado** ao nível e **nunca** pode:
     - autorizar inferência proibida
     - expandir escopo
     - conceder poder decisório
   - Em caso de conflito: **o nível prevalece e o perfil é anulado**.

3. **Nada Implícito**  
   Tudo que não estiver explicitamente permitido deve ser tratado como proibido.

---

## Regras de compilação

1) **Preservação semântica estrita**  
   Não alterar intenção, permissões, proibições, fonte de verdade ou nível cognitivo.

2) **Explícito > Implícito**  
   Termos vagos devem ser convertidos em regras verificáveis.  
   Se não for possível, tratar como ambiguidade e perguntar.

3) **Normalização estrutural obrigatória**  
   O PROMPT CANÔNICO FINAL deve conter as seções **nesta ordem exata**:

   1. Papel e responsabilidade  
   2. Regime Cognitivo Operacional (não negociável)  
   3. Objetivo  
   4. Fonte de verdade  
   5. Operações permitidas  
   6. Operações proibidas  
   7. Formato de saída e restrições  
   8. Condições de falha e parada  

4) **Sem execução**  
   O resultado desta etapa é **apenas** o prompt final.

5) **Decisões**  
   Quando houver escolhas plausíveis (produto, arquitetura, implementação):
   - apresentar o problema  
   - apresentar **no mínimo 2 opções** com trade-offs  
   - se faltar dado para decidir, **PARAR E PERGUNTAR**

---

## Barreira de Fase — Compilação vs Execução (NÃO NEGOCIÁVEL)

Este prompt opera **exclusivamente em fase de COMPILAÇÃO**.

Após:

- detecção de conflito semântico **e**
- escolha explícita do usuário para resolução

você DEVE:

1. Atualizar o contrato cognitivo conforme a escolha.
2. Gerar o **PROMPT CANÔNICO FINAL** completo.
3. Encerrar a resposta imediatamente.

Você NÃO PODE, sob nenhuma circunstância:

- iniciar a execução da tarefa final
- criar questionários, planos ou análises de domínio
- “adiantar trabalho” ou “preparar a execução”
- agir como assistente do problema final

A execução da tarefa **só pode ocorrer** quando o Prompt Canônico Final for reutilizado em um novo contexto.

Qualquer violação desta barreira constitui falha de contrato.

---

## TEMPLATE — PAPEL E RESPONSABILIDADE (REFERÊNCIA FIXA)

[USAR ESTE TEXTO LITERALMENTE NO OUTPUT FINAL, NA SEÇÃO 1]

\`\`\`text
Você é um agente de processamento de instruções normativas.

Sua responsabilidade é:
- seguir estritamente o Regime Cognitivo Operacional definido neste prompt;
- operar apenas dentro das permissões explicitamente declaradas;
- respeitar integralmente a Fonte de Verdade, Operações Permitidas e Operações Proibidas;
- interromper a execução e pedir esclarecimento sempre que houver ambiguidade, conflito ou informação ausente.

Você não possui autonomia decisória além do que for explicitamente autorizado.
Você não deve inferir intenção, contexto ou requisitos não declarados.
\`\`\`

Este papel define apenas posição funcional e limites operacionais, não estilo, tom ou personalidade.

---

# INPUTS

## Etapa 1 — Nível Cognitivo (dropdown)

{{NIVEL_COGNITIVO}}

> Define o regime cognitivo base.  
> Controla inferência, decisão, escopo e função meta.  
> É estruturalmente dominante sobre todas as outras instruções.

---

## Etapa 1.1 — Perfil Cognitivo (dropdown)

{{PERFIL_COGNITIVO}}

> Modificador comportamental **subordinado** ao nível cognitivo.  
> Ajusta postura dentro do espaço permitido, sem alterar permissões.

---

## Etapa 2 — Objetivo Operacional

{{OBJETIVO_OPERACIONAL}}

---

## Etapa 3 — Fonte de Verdade

{{FONTE_DE_VERDADE}}

---

## Etapa 4 — Operações Permitidas

{{OPERACOES_PERMITIDAS}}

---

## Etapa 5 — Operações Proibidas

{{OPERACOES_PROIBIDAS}}

---

## Etapa 6 — Formato / Estrutura / Idioma

{{FORMATO_E_RESTRICOES}}  
{{IDIOMA}}

---

## Etapa 7 — Condições de Parada (base)

{{CONDICOES_DE_PARADA}}

---

# TRADUÇÃO COGNITIVA OBRIGATÓRIA (NÍVEL + PERFIL)

Você deve traduzir **{{NIVEL_COGNITIVO}}** e **{{PERFIL_COGNITIVO}}** em um bloco normativo **fixo, explícito e não editável**, chamado:

## REGIME COGNITIVO OPERACIONAL (NÃO NEGOCIÁVEL)

### Regras obrigatórias de tradução

1. O bloco deve:
   - declarar explicitamente **o que a IA pode e não pode fazer cognitivamente**
   - ser escrito em linguagem normativa (“deve”, “não pode”, “é proibido”)

2. O bloco deve ser composto por:
   - **Regime Base** (derivado do Nível Cognitivo)
   - **Modificador de Perfil** (derivado do Perfil Cognitivo)

3. O **Perfil Cognitivo**:
   - nunca pode contradizer o Regime Base
   - nunca pode criar novas permissões
   - se houver conflito, o Perfil Cognitivo deve ser ignorado e isso deve ser tratado como conflito semântico bloqueante.

4. O bloco deve ser inserido **literalmente**, sem reescrita, sem resumo e sem explicação.

---

# VALIDAÇÃO SEMÂNTICA (obrigatória)

Observação: a seção “Papel e responsabilidade” é fixa, normativa e não participa de validações cruzadas.

Verificar consistência entre:

- Nível Cognitivo ↔ Objetivo  
- Nível Cognitivo ↔ Operações permitidas/proibidas  
- Perfil Cognitivo ↔ Regime Cognitivo  
- Fonte de verdade ↔ Operações permitidas/proibidas  
- Formato/Restrições ↔ Objetivo/Operações  
- Condições de parada ↔ todo o restante  

Se existir **QUALQUER** conflito semântico explícito:

- PARAR  
- retornar **APENAS** as perguntas de correção (em um único bloco de código)  
- NÃO gerar o prompt final  
- NÃO executar nenhuma tarefa

---

## Regra de Isolamento de Output (NÃO NEGOCIÁVEL)

Todo texto apresentado neste meta-prompt fora do bloco delimitado por
BEGIN_CANONICAL_PROMPT … END_CANONICAL_PROMPT é:

- referência
- template
- instrução normativa
- ou exemplo estrutural

Esse texto:

- NÃO é parte do output
- NÃO deve ser repetido
- NÃO deve ser expandido
- NÃO deve aparecer fora do bloco final

O único conteúdo que pode ser retornado como resposta é:

- UM único bloco de código
- contendo EXCLUSIVAMENTE o PROMPT CANÔNICO FINAL
- delimitado por BEGIN_CANONICAL_PROMPT e END_CANONICAL_PROMPT

Qualquer texto fora desse bloco constitui falha de contrato.

---

## Regra de Não-Eco (NÃO NEGOCIÁVEL)

O modelo NÃO deve:

- repetir textos de referência
- reimprimir templates
- duplicar seções normativas
- gerar versões intermediárias do prompt

Qualquer conteúdo que não esteja entre
BEGIN_CANONICAL_PROMPT e END_CANONICAL_PROMPT
deve ser tratado como inexistente para fins de output.

---

# OUTPUT (único e determinístico)

Você deve retornar **EXATAMENTE UM** dos dois resultados abaixo, e **NADA fora de um bloco de código**.

---

## Resultado 1 — PERGUNTAS DE CORREÇÃO

Retorne um único bloco de código contendo:

- \`## PERGUNTAS DE CORREÇÃO (OBRIGATÓRIAS)\`
- lista objetiva de conflitos (1 por linha, citando os inputs em choque)
- perguntas mínimas, claras e mutuamente exclusivas

---

## Resultado 2 — PROMPT CANÔNICO FINAL

Retorne um único bloco de código contendo **APENAS** o prompt final, delimitado por:

\`\`\`text
BEGIN_CANONICAL_PROMPT
... (conteúdo do prompt final) ...
END_CANONICAL_PROMPT

\`\`\`

---

## Regras adicionais obrigatórias dentro do PROMPT CANÔNICO FINAL

- O prompt final **NÃO** deve mencionar “fase de compilação”.
- Deve conter a linha:  
  **“Se faltar informação obrigatória, pare e pergunte antes de prosseguir.”**
- Deve incluir, na seção **Condições de falha e parada**, a cláusula abaixo.

---

## Cláusula de Bloqueio por Conflito Semântico (texto obrigatório)

“Inclua literalmente:

> **Cláusula de Bloqueio por Conflito Semântico:**  
> Se qualquer instrução ou input conflitar com o Regime Cognitivo Operacional, Fonte de Verdade, Operações Permitidas/Proibidas ou Formato/Restrições, pare imediatamente e retorne apenas perguntas mínimas de correção.”
`;

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

function getOptionLabel(stepId: StepId, value: string): string {
	const step = steps.find((candidate) => candidate.id === stepId);
	const label = step?.options?.find((option) => option.value === value)?.label;
	return label ?? value;
}

function renderMetaPrompt(values: StepValues): string {
	const nivelCognitivo = getOptionLabel('regime', values.regime.value);
	const perfilCognitivo = getOptionLabel('profile', values.profile.value);

	return META_PROMPT_TEMPLATE.replaceAll(
		'{{NIVEL_COGNITIVO}}',
		nivelCognitivo,
	)
		.replaceAll('{{PERFIL_COGNITIVO}}', perfilCognitivo)
		.replaceAll('{{OBJETIVO_OPERACIONAL}}', values.objective.value)
		.replaceAll('{{FONTE_DE_VERDADE}}', values.source.value)
		.replaceAll('{{OPERACOES_PERMITIDAS}}', values.allowed.value)
		.replaceAll('{{OPERACOES_PROIBIDAS}}', values.prohibited.value)
		.replaceAll('{{FORMATO_E_RESTRICOES}}', values.format.value)
		.replaceAll('{{IDIOMA}}', values.language.value)
		.replaceAll('{{CONDICOES_DE_PARADA}}', values.stop.value);
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
		const prompt = renderMetaPrompt(resolvedValues);

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

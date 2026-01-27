# Papéis Iniciais (Stage 1 — `role.*`)

Pergunta implícita registrada na Fonte de Verdade:
> “Em que tipo de atividade você quer que eu atue com você agora?”

## Papéis canônicos expostos (Stage 1)

Decisão canônica:

- O conjunto de papéis expostos é o definido no JSON canônico (`stage1_initialRole.options`).
- A taxonomia de 8 papéis (abaixo) é preservada como origem conceitual, mas é **normalizada** para estes papéis canônicos.

Papéis expostos:

1. `role.analyze` — Analisar
2. `role.synthesize` — Organizar / Sintetizar
3. `role.explore` — Explorar alternativas
4. `role.decideSupport` — Apoiar decisão
5. `role.document` — Documentar / Formalizar
6. `role.transform` — Transformar conteúdo

Papéis estendidos (não expostos por padrão):

- `role.research` e `role.execute` existem como extensões/compatibilidade no código, mas não compõem o Stage 1 canônico exposto.

Critério de precedência e decisões consolidadas: ver `12-constitution.md` e `09-open-issues-and-gaps.md`.

## Taxonomia conceitual (origem) — 8 papéis

## 1) Analisar algo

### Significado humano

“Quero entender melhor algo que já existe.”

### Carga semântica para a IA

- foco em leitura, interpretação e diagnóstico
- pressupõe objeto existente
- bloqueia criação gratuita
- suspende execução e decisão

### Erros já eliminados

- “a IA saiu resolvendo”
- “a IA criou algo novo sem pedir”
- “a IA decidiu por mim”

## 2) Produzir algo

### Significado humano

“Quero que algo seja criado ou escrito.”

### Carga semântica para a IA

- expectativa de output novo
- ainda indefinido quanto a:
  - criatividade vs. rigor
  - forma vs. conteúdo
- exige etapas posteriores para restringir

### Erros já eliminados

- análise excessiva sem entrega
- perguntas intermináveis antes de agir

## 3) Organizar / estruturar algo

### Significado humano

“Tenho conteúdo, mas ele está bagunçado.”

### Carga semântica para a IA

- trabalho sobre material existente
- foco em estrutura, clareza e coerência
- criação permitida apenas como forma, não como conteúdo

### Erros já eliminados

- invenção de conteúdo
- mudanças sem justificativa estrutural
- perda de informação original

## 4) Explorar possibilidades

### Significado humano

“Ainda não sei a resposta, quero ver caminhos.”

### Carga semântica para a IA

- expansão controlada do espaço de opções
- comparação, trade-offs, cenários
- decisão explicitamente suspensa

### Erros já eliminados

- resposta única prematura
- tom prescritivo
- fechamento antecipado do problema

## 5) Apoiar uma decisão

### Significado humano

“Vou decidir, mas quero ajuda para pensar.”

### Carga semântica para a IA

- inferência permitida
- recomendação possível
- autoridade final explicitamente humana

### Erros já eliminados

- “a IA decidiu por mim”
- recomendações sem critérios
- respostas neutras demais quando se espera orientação

## 6) Documentar / formalizar

### Significado humano

“Quero transformar isso em algo oficial, claro e reutilizável.”

### Carga semântica para a IA

- linguagem normativa
- precisão terminológica
- rastreabilidade
- redução de ambiguidade como objetivo central

### Erros já eliminados

- tom informal
- explicações vagas
- criatividade fora de lugar

## 7) Refletir / esclarecer o problema

### Significado humano

“Ainda estou entendendo o que quero pedir.”

### Carga semântica para a IA

- meta-cognição permitida
- perguntas são parte do trabalho
- execução explicitamente bloqueada

### Erros já eliminados

- pressão por resposta
- entregas inúteis
- frustração por “não era isso”

## 8) Definir regras e limites

### Significado humano

“Quero estabelecer como isso deve funcionar.”

### Carga semântica para a IA

- foco em contratos, restrições e condições
- comportamento > conteúdo
- atua sobre o sistema, não sobre o problema em si

### Erros já eliminados

- execução fora de escopo
- inferência indevida
- comportamento inconsistente ao longo do tempo

## Por que essa lista funciona (resumo técnico)

- poucas opções → baixa carga cognitiva
- verbos claros → fácil autoidentificação
- semântica profunda → alto poder de inferência controlada
- não dependem de conhecimento técnico
- já afunilam drasticamente o espaço de erro

Pergunta orientadora registrada:
> Essa etapa não pergunta “o que você quer exatamente”. Ela pergunta: “em que tipo de coisa você está tentando fazer agora?”

## Insight final (para o arquiteto)

Formulação registrada:

- separa intenção de especificação;
- o usuário só diz “onde está mentalmente”;
- o restante pode ser assistido, validado, corrigido e bloqueado se incoerente.

## Normalização (decisão canônica)

Conforme consolidado em `09-open-issues-and-gaps.md`:

- “Produzir algo” não é exposto como papel no Stage 1 canônico; ele deve ser normalizado pelo usuário para um papel mais específico (ex.: documentar, transformar, organizar, explorar).
- “Refletir / esclarecer o problema” é normalizado como intenção meta (alinhada ao N7).
- “Definir regras e limites” é normalizado como intenção de governança/constitucional (alinhada a N6/N8).

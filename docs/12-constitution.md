# Constituição Canônica do Sistema (normativa)

Este documento define as regras **constitucionais e invariantes** do sistema Canonical Prompt / Metaprompt Engine, para que:

- a implementação seja determinística e auditável;
- não existam decisões implícitas;
- conflitos entre artefatos sejam resolvidos por regra única de precedência.

## 1) Regra única de precedência entre artefatos

Quando o **mesmo elemento do sistema** estiver definido em mais de um formato (por exemplo: ids, vetores, pesos, thresholds, hard blocks, escalas de réguas), a precedência é:

1. **JSON canônico (fonte executável)** — define valores e limites de configuração.
2. **Código (implementação)** — deve refletir o JSON; divergência é bug.
3. **Markdown (documentação explicativa)** — deve refletir o JSON; divergência indica texto desatualizado/alternativo.

Escopo desta regra:

- Aplica-se a entidades que existam simultaneamente em múltiplos formatos.
- Quando uma entidade **não** estiver representada no JSON, o Markdown pode descrevê-la, desde que **não contradiga** limites/valores canônicos do JSON.

## 2) Modelo conceitual: 9 eixos vs 5 réguas (projeção canônica)

1. Os **9 eixos ortogonais** constituem o **modelo conceitual completo** do comportamento:
   - Inferência, Decisão, Escopo, Fonte, Meta, Execução, Ambiguidade, Estilo, Responsabilidade.
2. As **5 réguas canônicas** são uma **projeção de UX/implementação**: elas expõem apenas os eixos que o usuário consegue controlar com baixa taxa de erro e alto ganho de previsibilidade.
   - Réguas canônicas expostas: Inferência, Decisão, Escopo, Fonte, Meta.
3. Os eixos restantes (Execução, Ambiguidade, Estilo, Responsabilidade) existem e importam, mas são tratados como:
   - derivados (inferidos por papel + réguas + nível), ou
   - constitucionais (políticas fixas do sistema).

## 3) Limites constitucionais (não negociáveis)

Derivados do JSON canônico (constituição do runtime):

1. **Cap de decisão:** `decision` **não pode exceder 3**.
   - `decision ∈ {1, 2, 3}` é válido.
   - `decision ∈ {4, 5}` é **proibido** e deve ser bloqueado.
2. **Autonomia total é proibida:** o sistema não pode deslocar responsabilidade de forma ilimitada para a IA.
3. **Modo preparação não executa:** em preparação/coleta, é proibido executar a tarefa final do usuário (apenas preparar/derivar/coletar).

## 4) Modo de Operação (enum conceitual)

O sistema opera sob um **Modo de Operação** explícito, que define permissões de saída e comportamento.

### 4.1 Enum (mínimo)

- `MODE_PREPARATION`:
  - Contrato Cognitivo + Protocolo de Coleta.
  - Não executa a tarefa final.
- `MODE_EXECUTION`:
  - Execução da tarefa final.
  - Explicitamente fora de escopo da Etapa 2 (e deste conjunto documental).
- `MODE_GOVERNANCE`:
  - Governança, bloqueios semânticos, validação e paradas.
  - Produz perguntas mínimas de correção quando necessário.

### 4.2 Mapeamento das fases para modos

- Etapa 0 (papel inicial): `MODE_PREPARATION`
- Etapa 1 (match + contrato cognitivo):
  - `MODE_PREPARATION` como modo principal
  - `MODE_GOVERNANCE` quando hard blocks/validações exigirem parada/pergunta mínima
- Etapa 2 (protocolo de coleta): `MODE_PREPARATION` (com proibição explícita de execução)
- Etapa 3 (execução): `MODE_EXECUTION` (fora de escopo)

## 5) Níveis: separação entre operacionais e meta/constitucionais

Classificação normativa:

- **Níveis operacionais:** N1–N6 (atuam sobre o problema e seus artefatos).
- **Níveis meta/constitucionais:** N7–N8 (atuam sobre o sistema: pensamento, contratos, governança, normas).

Regra normativa:

- N7 e N8 **não devem competir** com N1–N6 como alternativas no mesmo conjunto semântico apresentado ao usuário.
- Quando o match indicar N7/N8 como candidatos relevantes, a orquestração deve tratar isso como **mudança de regime** (meta/constitucional), não como “mais um nível operacional”.

### 5.1 Regra operacional (implementável) para evitar competição entre classes

Para garantir a separação semântica entre classes de nível, a orquestração deve aplicar a seguinte regra:

1. Calcular o match conforme definido pelo motor (score, hard blocks, thresholds).
2. Particionar candidatos em:
   - `operationalCandidates`: níveis `N1..N6`
   - `metaCandidates`: níveis `N7..N8`
3. Selecionar **um** track para apresentação ao usuário:
   - Se `rulers.decision == 3` → apresentar apenas `operationalCandidates` (na prática, N6 é o nível que exige `decision = 3`).
   - Caso contrário, se `rulers.meta >= 4` → apresentar apenas `metaCandidates`.
   - Caso contrário → apresentar apenas `operationalCandidates`.
4. É proibido apresentar, no mesmo conjunto de escolha, níveis de tracks diferentes.

Observação: esta regra não altera o cálculo interno de score; ela define como o sistema **interpreta e apresenta** o resultado para evitar mistura semântica entre níveis operacionais e meta/constitucionais.

## 6) Higienização de artefatos textuais

Resíduos de exportação/artefatos não-semantas (ex.: `:contentReference[...]`) **não fazem parte do texto canônico** e devem ser removidos/ignorados em qualquer leitura/publicação consolidada.

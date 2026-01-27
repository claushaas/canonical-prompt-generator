# Esboço de Especificação (derivado da Fonte de Verdade)

Este documento organiza, em formato de especificação, o que já está presente em `info/`.
Decisões de consolidação e resolução de divergências estão registradas em:

- `12-constitution.md` (regra de precedência + invariantes)
- `09-open-issues-and-gaps.md` (decisões consolidadas)

## 0) Constituição e precedência

Regra normativa única de precedência entre artefatos:

- JSON canônico (executável) → Código (implementação) → Markdown (explicativo)

Ver `12-constitution.md`.

## 1) Visão geral

- Sistema: Human–AI Cognitive Interface
- Objetivo operacional descrito: mediar cognições via contratos + especificações, reduzindo erro por adivinhação.

## 2) Conceitos e definições

- Contrato Cognitivo da IA (camada normativa, anterior à execução)
- Critérios de Coleta (necessidades semânticas; não são campos fixos)
- Protocolo de Coleta (blocos de coleta; Etapa 2; modo preparação)
- Eixos ortogonais (modelo interno completo)
- Réguas cognitivas (projeções expostas na UX)
- Níveis canônicos (pontos/presets; match por distância + bloqueios)

## 3) Fluxo (etapas)

- Etapa 0: papel inicial (orientação de intenção)
- Etapa 1: contrato cognitivo + match de nível
- Etapa 2: protocolo de coleta (derivação determinística)
- Etapa 3: execução (fora de escopo nos prompts de etapa 2)

Modos de operação (enum):

- `MODE_PREPARATION`, `MODE_GOVERNANCE`, `MODE_EXECUTION` (ver `12-constitution.md`)

## 4) Artefatos canônicos

- Configuração de estágios e match: `info/canonical-prompt-generator.json`
- Motor de match (funções puras): `info/canonical-match.ts`

## 5) Modelo de dados (mínimo)

### 5.1 Contrato Cognitivo (entrada da Etapa 2)

Campos mínimos explicitados:

- `role`
- `levelMatch`
- `rulers`
- `hardBlocks`
- `correction` (opcional)

### 5.2 Protocolo de Coleta (saída da Etapa 2)

Campos explicitados no contrato de retorno:

- `protocolVersion`
- `role`, `level`, `rulers`
- `implicitCriteria[]`
- `criteria[]` (blocos)
- `blockingIssue`, `question`
- `collectionPayloadSchema`

## 6) Algoritmos

### 6.1 Match de níveis

- distância Manhattan ponderada
- pesos por eixo
- prior por papel inicial
- bloqueios semânticos
- thresholds
- correções locais (sem loop)

### 6.2 Derivação de critérios (Etapa 2)

- catálogo C1–C14
- regras determinísticas R0–R8
- bloqueios durante derivação
- ordenação UX

Normalização canônica (R2/C13):

- Ativar C13 quando `initialRole ∈ {role.transform, role.document}` e `ruler.scope ∈ {4, 5}` (ver decisão em `09-open-issues-and-gaps.md`).

## 7) Regras e políticas (governança)

- bloqueios duros têm precedência sobre score
- “modo preparação” na Etapa 2 proíbe execução
- correção sem loop (aplica uma vez e segue)
- Separação de níveis: N1–N6 operacionais; N7–N8 meta/constitucionais (ver `12-constitution.md`)

## 8) Decisões consolidadas

Ver `09-open-issues-and-gaps.md`.

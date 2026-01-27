# Critérios Canônicos e Protocolo de Coleta (Etapa 2)

## 1) Finalidade da Etapa 2

Finalidade registrada:

- dado um Contrato Cognitivo já validado/corrigido, derivar **quais critérios de coleta** são **necessários e suficientes**;
- gerar um **Protocolo de Coleta** (blocos de perguntas/instruções) para o usuário preencher;
- **sem executar a tarefa final**.

## 2) Proibição central (modo preparação)

Instruções canônicas (não negociável) registradas:

- PROIBIDO executar a tarefa final do usuário.
- PROIBIDO produzir resultado final, solução, código final, documentação final, análises finais.
- PERMITIDO apenas: derivar critérios de coleta e gerar instruções para o usuário preencher inputs textuais.

Modo de Operação:

- Esta etapa opera em `MODE_PREPARATION` (ver definições em `12-constitution.md`).

O prompt canônico completo desta etapa está em `info/criteria-collection-protocol-prompt.md`.

## 3) Critérios (catálogo interno canônico)

O material define um catálogo de critérios possíveis e observa que:

- critério ≠ campo fixo;
- a derivação escolhe um subconjunto mínimo.

Catálogo registrado (C1–C14):

1. C1 — Objetivo Operacional (sempre obrigatório)
2. C2 — Artefato/Resultado Esperado (quando há saída exigida)
3. C3 — Escopo de Atuação (quando escopo ≠ “local evidente”)
4. C4 — Fonte da Verdade (quando fonte não for fechada/óbvia)
5. C5 — Limites de Inferência / Suposições Permitidas
6. C6 — Autoridade / Decisão
7. C7 — Execução vs Preparação
8. C8 — Transformações Permitidas
9. C9 — Transformações Proibidas
10. C10 — Formato de Saída
11. C11 — Critérios de Sucesso/Validação
12. C12 — Condições de Parada/Erro
13. C13 — Dependências/Contexto Técnico
14. C14 — Restrições de Segurança/Conformidade

## 4) Derivação determinística (regras if/then)

O algoritmo é descrito como função pura:
`deriveCriteria(contract) -> {criteriaSet, rationale, orderingHints}`

As regras registradas usam combinação de:

- `role + level + rulers + hardBlocks + correction`.

As regras completas (R0–R8), bloqueios durante derivação e ordenação UX estão em `info/criteria-derivation-algorithm.md`.

### Normalização canônica de `role` (decisão consolidada)

No sistema canônico:

- `role` refere-se ao enum de papéis do Stage 1 (ids `role.*`) definido pelo JSON canônico.
- Menções a `{dev, code, arquitetura, implementação}` no algoritmo são tratadas como placeholders não-canônicos.

Regra de normalização determinística (C13 — Contexto Técnico):

- Ativar C13 quando:
  - `initialRole ∈ {role.transform, role.document}` **e**
  - `ruler.scope ∈ {4, 5}` (projeto/sistêmico).

## 5) Estrutura de “bloco” de coleta

Cada critério selecionado deve virar bloco com estrutura fixa:

- `id` (slug estável)
- `title` (UI, curto)
- `instruction` (1–3 frases, personalizadas ao contrato)
- `include` (3–7 itens)
- `avoid` (2–5 itens)
- `example` (1–2 linhas)
- `rationale` (1 frase)

## 6) Contrato de saída (JSON estrito)

Há um contrato de retorno para a IA na Etapa 2, incluindo:

- `implicitCriteria`
- `criteria` (blocos)
- `blockingIssue` + `question` (quando há bloqueio)
- `collectionPayloadSchema`

O formato completo está especificado em `info/criteria-collection-protocol-prompt.md`.

## 7) Nota de rastreabilidade

Este documento consolida o “o quê” e o “por quê”.
Para texto integral e exemplos completos, use diretamente:

- `info/criterios-canonicos-de-coleta.md`
- `info/criteria-derivation-algorithm.md`
- `info/criteria-collection-protocol-prompt.md`

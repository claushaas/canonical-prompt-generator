# Diagrama de Fluxo do Sistema (pseudo-slide reutilizável)

## Canonical Prompt / Metaprompt Engine — Visão Geral do Fluxo

```text
┌────────────────────────────────────────────────────────────────────┐
│ Entrada do usuário                                                  │
│ (intenção + tolerâncias cognitivas)                                 │
└────────────────────────────────────────────────────────────────────┘
                 │
                 ▼
┌────────────────────────────────────────────────────────────────────┐
│ ETAPA 0 — Papel inicial (Stage 1 / role.*)                          │
│ Expostos: analyze | synthesize | explore | decideSupport | document │
│          | transform                                                  │
│ Modo: MODE_PREPARATION                                               │
└────────────────────────────────────────────────────────────────────┘
                 │
                 ▼
┌────────────────────────────────────────────────────────────────────┐
│ ETAPA 1 — Réguas cognitivas (Stage 2)                               │
│ inference | decision | scope | source | meta                         │
│ (decision tem cap constitucional ≤ 3)                               │
└────────────────────────────────────────────────────────────────────┘
                 │
                 ▼
┌────────────────────────────────────────────────────────────────────┐
│ ETAPA 1 — Match de nível (N1..N8) + hard blocks + thresholds        │
│ - calcula score (distância ponderada)                               │
│ - aplica hard blocks (stop/ask mínimo quando necessário)            │
│ - sugere correções locais (±1, no máx. 2 réguas; sem loop)          │
│ Saída: Contrato Cognitivo da IA (role + rulers + levelMatch + ...)  │
│ Modo: MODE_PREPARATION (ou MODE_GOVERNANCE em bloqueios/validação)  │
└────────────────────────────────────────────────────────────────────┘
                 │
                 ▼
┌────────────────────────────────────────────────────────────────────┐
│ ETAPA 2 — Derivação de critérios de coleta (mínimo e suficiente)    │
│ - seleciona subconjunto do catálogo C1..C14                         │
│ - identifica critérios implícitos pelo contrato                     │
│ - ordena blocos para reduzir fadiga cognitiva                       │
│ Modo: MODE_PREPARATION                                              │
└────────────────────────────────────────────────────────────────────┘
                 │
                 ▼
┌────────────────────────────────────────────────────────────────────┐
│ ETAPA 2 — Protocolo de coleta (blocos de perguntas/instruções)      │
│ Proibição central: NÃO executar a tarefa final                      │
│ Saída: payload textual + schema simples                              │
│ Modo: MODE_PREPARATION                                              │
└────────────────────────────────────────────────────────────────────┘
                 │
                 ▼
┌────────────────────────────────────────────────────────────────────┐
│ ETAPA 3 — Execução da tarefa final                                  │
│ Fora de escopo deste sistema documental (MODE_EXECUTION)            │
└────────────────────────────────────────────────────────────────────┘
```

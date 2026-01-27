# Fases do Sistema (fluxo canônico)

## Princípio de separação (dois regimes distintos)

A Fonte de Verdade descreve uma separação “ontológica” entre dois regimes:

1. **Configuração/Contrato Cognitivo da IA** (determinístico; descreve o agente)
2. **Especificação da Tarefa** (semântico; descreve o problema)

O material registra a formulação:
> “Antes, você pedia algo à IA. Agora, você primeiro cria a IA certa, depois faz o pedido.”

## Etapa 0 — Orientação de intenção (papel inicial)

O sistema começa com uma pergunta implícita ao usuário:
> “Em que tipo de atividade você quer que eu atue com você agora?”

O objetivo é escolher um **verbo/papel** que:

- reduz o espaço de erro desde a entrada;
- sinaliza carga semântica forte para o comportamento posterior;
- evita execução indevida, decisão indevida ou invenção de conteúdo.

Detalhes completos dos papéis estão em `05-initial-roles.md`.

## Etapa 1 — Contrato Cognitivo da IA (Configuração Cognitiva)

Nesta etapa, o sistema fixa “como a IA deve atuar”:

- papel inicial;
- réguas cognitivas (ex.: inferência, decisão, escopo, fonte, meta);
- match com níveis canônicos;
- correções semânticas locais;
- bloqueios duros e thresholds.

Propriedades explicitadas:

- determinístico, auditável;
- “matemática/vetorial” (distância e pesos);
- sem execução de tarefa final.

## Etapa 2 — Protocolo de Coleta (modo preparação)

Nesta etapa, o sistema:

- deriva critérios mínimos e suficientes de coleta;
- gera blocos de perguntas/instruções para o usuário preencher;
- permanece em **modo de preparação**.

Existe um “Prompt Canônico — Geração do Protocolo de Coleta (Etapa 2)” cuja restrição central é:

- **PROIBIDO executar a tarefa final do usuário.**

Detalhes completos estão em `08-criteria-and-collection-protocol.md`.

## Modo de Operação (enum)

O sistema possui um **Modo de Operação** explícito, que define permissões de saída e comportamento. Definições normativas e limites estão em `12-constitution.md`.

Mapeamento direto para as etapas do funil:

- Etapa 0 (papel inicial): `MODE_PREPARATION`
- Etapa 1 (contrato cognitivo + match):
  - `MODE_PREPARATION` como modo principal
  - `MODE_GOVERNANCE` quando hard blocks/validações exigirem parada/pergunta mínima
- Etapa 2 (protocolo de coleta): `MODE_PREPARATION`
- Etapa 3 (execução): `MODE_EXECUTION` (fora de escopo)

## Etapa 3 — Execução (fora de escopo nos documentos de Etapa 2)

A execução ocorre apenas após:

- contrato validado/corrigido;
- coleta mínima completada;
- ambiguidades resolvidas dentro das regras do contrato.

Observação do material:

- “fase de compilação vs execução” é explicitada como eixo de comportamento (“Regime de Execução”).

## Mapeamento para artefatos existentes

Há artefatos que implementam/parametrizam partes do fluxo:

- `info/canonical-prompt-generator.json` descreve estágios (p.ex. `stage1_initialRole`, `stage2_cognitiveRulers`) e configurações de match.
- `info/canonical-match.ts` implementa funções puras de match (distância, bloqueios, thresholds, sugestões de correção).

Decisões de consolidação e precedência entre artefatos estão em:

- `12-constitution.md` (regra de precedência)
- `09-open-issues-and-gaps.md` (decisões consolidadas)

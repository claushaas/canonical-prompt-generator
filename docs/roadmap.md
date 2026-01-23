# ROADMAP — Implementação do Canonical Prompt Generator (Raycast)

Metadados

- Status: Draft
- Fonte de verdade: docs do repo (`docs/*`)
- Última atualização: 2026-01-23

## Visão geral do plano

Refatorar a extensão Raycast existente em `src/canonical-prompt-generator.tsx` para implementar todas as especificações presentes em `docs/`, garantindo que o wizard, a geração do prompt e os blocos normativos estejam alinhados aos contratos definidos. [SOURCE: docs/spec.md, docs/etapas.md, docs/meta-prompt.md, docs/cognitive-regime-profile-mapping-spec.md, docs/spec-mapeamento-nivel-subnivel-blurb-meta-prompt-v1.0.md]

## Pré-requisitos e setup

- [PENDING] Comandos de execução e build devem seguir o padrão oficial do Raycast Extensions API e os scripts existentes no repositório. [SOURCE: docs/spec.md]

## Etapas em sequência

### 1) Alinhar o wizard às etapas e tipos de input canônicos

- Objetivo: atualizar a UI para refletir as etapas 1, 1.1 e 2–7, com dropdown apenas em Regime/Perfil e TextArea nas demais, incluindo dois campos na etapa de Formato/Idioma. [SOURCE: docs/etapas.md, docs/spec.md]
- Arquivos envolvidos: `src/canonical-prompt-generator.tsx`.
- Comandos: nenhum.
- Referências: `docs/etapas.md`, `docs/spec.md`.
- Definição de pronto: UI apresenta as etapas na ordem canônica e bloqueia avanço com inputs vazios.
**Status:** CONCLUÍDA (2026-01-23)

### 2) Implementar dropdowns de Regime e Perfil com rótulos canônicos

- Objetivo: substituir opções atuais por rótulos oficiais e remover “Custom...” nos dropdowns de Regime/Perfil. [SOURCE: docs/raycast-dropdown-regime-profile-options.md, docs/spec.md]
- Arquivos envolvidos: `src/canonical-prompt-generator.tsx`.
- Comandos: nenhum.
- Referências: `docs/raycast-dropdown-regime-profile-options.md`.
- Definição de pronto: dropdowns exibem exatamente os rótulos canônicos.
**Status:** CONCLUÍDA (2026-01-23)

### 3) Remover etapas não especificadas e atualizar validações

- Objetivo: remover etapas fora do contrato (ex.: “Papel”) e adequar validações ao novo conjunto de etapas. [SOURCE: docs/etapas.md, docs/spec.md]
- Arquivos envolvidos: `src/canonical-prompt-generator.tsx`.
- Comandos: nenhum.
- Referências: `docs/etapas.md`.
- Definição de pronto: validação bloqueia avanço para qualquer etapa vazia, sem dependência de “Custom...”.
**Status:** CONCLUÍDA (2026-01-23)

### 4) Gerar Regime Cognitivo Operacional (bloco fixo)

- Objetivo: traduzir Nível + Perfil em bloco normativo fixo e inseri-lo no prompt final na posição obrigatória. [SOURCE: docs/cognitive-regime-profile-mapping-spec.md, docs/spec-mapeamento-nivel-subnivel-blurb-meta-prompt-v1.0.md, docs/meta-prompt.md]
- Arquivos envolvidos: `src/canonical-prompt-generator.tsx`.
- Comandos: nenhum.
- Referências: `docs/cognitive-regime-profile-mapping-spec.md`, `docs/spec-mapeamento-nivel-subnivel-blurb-meta-prompt-v1.0.md`.
- Definição de pronto: bloco “REGIME COGNITIVO OPERACIONAL (NÃO NEGOCIÁVEL)” é injetado após “Papel e responsabilidade” e antes de “Objetivo”.
**Status:** CONCLUÍDA (2026-01-23)

### 5) Fixar seção “Papel e responsabilidade” no prompt final

- Objetivo: usar texto normativo fixo definido no `docs/meta-prompt.md` para a seção “Papel e responsabilidade”. [SOURCE: docs/spec.md, docs/meta-prompt.md]
- Arquivos envolvidos: `src/canonical-prompt-generator.tsx`.
- Comandos: nenhum.
- Referências: `docs/meta-prompt.md`.
- Definição de pronto: seção existe e não é editável pelo usuário.
**Status:** CONCLUÍDA (2026-01-23)

### 6) Atualizar estrutura do PROMPT CANÔNICO FINAL

- Objetivo: gerar prompt final com seções e ordem exatas do meta‑prompt, incluindo cláusulas obrigatórias. [SOURCE: docs/meta-prompt.md, docs/salvaguarda-semantica.md]
- Arquivos envolvidos: `src/canonical-prompt-generator.tsx`.
- Comandos: nenhum.
- Referências: `docs/meta-prompt.md`, `docs/salvaguarda-semantica.md`.
- Definição de pronto: prompt final contém todas as seções, a cláusula de bloqueio e a linha “Se faltar informação obrigatória, pare e pergunte antes de prosseguir.”
**Status:** CONCLUÍDA (2026-01-23)

### 7) Validar comportamento de copy/paste e feedback

- Objetivo: manter cópia para clipboard, tentativa de colagem e toasts de sucesso/falha. [SOURCE: docs/spec.md]
- Arquivos envolvidos: `src/canonical-prompt-generator.tsx`.
- Comandos: nenhum.
- Referências: `docs/spec.md`.
- Definição de pronto: comportamento conforme SPEC.

### 8) Revisão de consistência documental

- Objetivo: garantir que a SPEC reflita o comportamento implementado (sem alterar `docs/meta-prompt.md` sem justificativa e confirmação). [SOURCE: docs/spec.md, docs/meta-prompt.md]
- Arquivos envolvidos: `docs/spec.md`.
- Comandos: nenhum.
- Referências: `docs/spec.md`.
- Definição de pronto: docs consistentes com a implementação final.

## Trilhas paralelas (se aplicável)

- (nenhuma)

## Riscos e mitigação

- [RISK] Divergência entre a implementação e o meta‑prompt. Mitigar mantendo o meta‑prompt como fonte fixa e conferindo a ordem das seções. [SOURCE: docs/meta-prompt.md]
- [RISK] Inconsistência entre rótulos do dropdown e o mapeamento cognitivo. Mitigar usando `docs/raycast-dropdown-regime-profile-options.md` e o spec de mapeamento. [SOURCE: docs/raycast-dropdown-regime-profile-options.md, docs/spec-mapeamento-nivel-subnivel-blurb-meta-prompt-v1.0.md]
- [RISK] Erros de validação e fluxo do wizard após refatoração. Mitigar com revisão manual do fluxo e mensagens de validação. [SOURCE: docs/spec.md]

## Checklist de release/publicação

- [ ] Wizard apresenta etapas 1, 1.1 e 2–7 conforme SPEC
- [ ] Dropdowns de Regime/Perfil com rótulos canônicos e sem “Custom..."
- [ ] Prompt final com seções na ordem correta
- [ ] Regime Cognitivo Operacional e Salvaguarda Semântica presentes e imutáveis
- [ ] Clipboard copy e paste com fallback de toast

# ROADMAP — Canonical Prompt Generator (Raycast)

Metadados

- Status: Draft
- Fonte de verdade: docs do repo (incluindo `docs/*`)
- Última atualização: 2026-01-23

## Visão geral do plano

Planejar a implementação do gerador canônico alinhado aos documentos em `docs/`, com UI em Raycast, validação de etapas e geração do prompt final normativo. [SOURCE: docs/etapa-1.md, docs/miolo.md, docs/meta-prompt.md, docs/etapas.md, docs/spec-mapeamento-nivel-subnivel-blurb-meta-prompt-v1.0.md]

## Pré-requisitos e setup

- Node.js LTS compatível com Raycast (>= 18)
- npm ou pnpm
- Raycast instalado (macOS)
- Raycast CLI configurado

Comandos de execução e build seguem o padrão oficial do Raycast Extensions API.

## Etapas em sequência

### 1) Consolidar etapas e tipos de input do wizard

- Objetivo: alinhar o wizard às etapas definidas em `docs/etapas.md` e ao input do `docs/meta-prompt.md` (Etapa 1, 1.1, 2–7). [SOURCE: docs/etapas.md, docs/meta-prompt.md]
- Arquivos envolvidos: `docs/etapas.md`, `docs/spec.md`.
- Comandos: nenhum.
- Referências: `docs/etapas.md`, `docs/meta-prompt.md`.
- Definição de pronto: ordem, nomes e tipos de input consolidados e refletidos na SPEC.
**Status:** CONCLUÍDA (2026-01-23)

### 2) Consolidar opções de dropdown (Regime/Perfil)

- Objetivo: definir rótulos oficiais dos dropdowns sem opção “Custom...”. [SOURCE: docs/raycast-dropdown-regime-profile-options.md, docs/spec-mapeamento-nivel-subnivel-blurb-meta-prompt-v1.0.md]
- Arquivos envolvidos: `docs/raycast-dropdown-regime-profile-options.md`, `docs/spec.md`.
- Comandos: nenhum.
- Referências: `docs/raycast-dropdown-regime-profile-options.md`.
- Definição de pronto: rótulos alinhados e consistentes entre docs.

### 3) Consolidar tradução Nível + Perfil → Regime Cognitivo Operacional

- Objetivo: definir o bloco normativo fixo e sua posição no prompt final. [SOURCE: docs/spec-mapeamento-nivel-subnivel-blurb-meta-prompt-v1.0.md, docs/cognitive-regime-profile-mapping-spec.md]
- Arquivos envolvidos: `docs/spec-mapeamento-nivel-subnivel-blurb-meta-prompt-v1.0.md`, `docs/cognitive-regime-profile-mapping-spec.md`, `docs/spec.md`.
- Comandos: nenhum.
- Referências: `docs/spec-mapeamento-nivel-subnivel-blurb-meta-prompt-v1.0.md`, `docs/cognitive-regime-profile-mapping-spec.md`.
- Definição de pronto: bloco e regras de inserção descritos de forma consistente.

### 4) Validar ordem e estrutura do PROMPT CANÔNICO FINAL

- Objetivo: garantir a ordem das seções conforme `docs/meta-prompt.md`. [SOURCE: docs/meta-prompt.md]
- Arquivos envolvidos: `docs/meta-prompt.md`, `docs/spec.md`.
- Comandos: nenhum.
- Referências: `docs/meta-prompt.md`.
- Definição de pronto: SPEC reflete a ordem correta; nenhuma alteração no meta‑prompt sem aprovação explícita.

### 5) Resolver pendência “Papel e responsabilidade”

- Objetivo: definir a origem do conteúdo da seção “Papel e responsabilidade”.
- Decisão: **Papel fixo, normativo e não editável**, definido no `docs/meta-prompt.md`.
- Justificativa: garantir estabilidade estrutural, evitar persona implícita e preservar auditabilidade.
- Definição de pronto: decisão registrada e refletida na SPEC.

**Status:** DECIDIDO (Opção B)

### 6) Revisão final de consistência documental

- Objetivo: garantir coerência entre `spec.md`, `roadmap.md`, `etapas.md` e os specs de mapeamento. [SOURCE: docs/spec.md, docs/roadmap.md, docs/etapas.md]
- Arquivos envolvidos: `docs/spec.md`, `docs/roadmap.md`, `docs/etapas.md`, `docs/cognitive-regime-profile-mapping-spec.md`, `docs/spec-mapeamento-nivel-subnivel-blurb-meta-prompt-v1.0.md`.
- Comandos: nenhum.
- Referências: `docs/*`.
- Definição de pronto: docs sem incongruências.

### 7) Checklist de release/publicação

- [ ] `npm run build` executa sem erros
- [ ] Extensão abre corretamente no Raycast
- [ ] Wizard valida todas as etapas obrigatórias
- [ ] Prompt final contém todas as seções obrigatórias na ordem correta
- [ ] Regime Cognitivo Operacional e Salvaguarda Semântica presentes e imutáveis
- [ ] Clipboard copy funciona; paste tenta executar com fallback documentado
- [ ] Limitações de plataforma (Windows) documentadas

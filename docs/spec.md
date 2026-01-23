# SPEC — Canonical Prompt Generator (Raycast)

**Metadados**

- Status: v1.1 (Locked)
- Fonte de verdade (hierarquia explícita):
  1. `docs/meta-prompt.md`
  2. `docs/salvaguarda-semantica.md`
  3. `docs/spec-mapeamento-nivel-subnivel-blurb-meta-prompt-v1.0.md`
  4. `docs/cognitive-regime-profile-mapping-spec.md`
  5. `docs/etapas.md`
  6. `docs/raycast-dropdown-regime-profile-options.md`
  7. `docs/etapa-1.md`, `docs/miolo.md`
  8. Este documento (SPEC)
- Última atualização: 2026-01-23

---

## Contexto e problema

A proposta é uma **extensão Raycast** que guia o usuário por um **wizard de etapas obrigatórias** para gerar um **Prompt Canônico**: um texto normativo, estruturalmente estável e auditável, que reduz ambiguidade, impede execução indevida e define explicitamente regime cognitivo, fonte de verdade, operações permitidas/proibidas e condições de parada.

O problema a resolver é a **instabilidade estrutural de prompts livres**, que permitem inferência indevida, uso de fontes implícitas e execução fora do escopo declarado, conforme descrito nos documentos de base do projeto.

**Fontes conceituais primárias**:  
`docs/meta-prompt.md`, `docs/salvaguarda-semantica.md`, `docs/etapas.md`, `docs/spec-mapeamento-nivel-subnivel-blurb-meta-prompt-v1.0.md`.

---

## Objetivos e não-objetivos

### Objetivos

- Guiar o usuário na **explicitação obrigatória** de:
  - Regime / nível cognitivo
  - Perfil cognitivo
  - Objetivo
  - Fonte de verdade
  - Operações permitidas
  - Operações proibidas
  - Formato da saída e idioma (campos distintos na mesma etapa)
  - Condições de parada
- Produzir um **Prompt Canônico Final**:
  - Estruturalmente fixo
  - Normativo
  - Auditável por inspeção humana
- Fornecer uma UI Raycast com **dropdown apenas nas etapas 1 e 1.1** e **TextArea nas demais**.
- Traduzir Nível + Perfil em um **Regime Cognitivo Operacional** normativo, fixo e não editável, a ser injetado no prompt final.
- Copiar o prompt para o clipboard e **tentar colar automaticamente** no app ativo, com fallback explícito.

### Não-objetivos

- Executar a tarefa final do usuário.
- Inferir, complementar ou otimizar conteúdo fora do que foi explicitamente definido pelo usuário.
- Persistir dados entre sessões.
- Integrar serviços externos, backends ou sincronização remota.

---

## Escopo

- Extensão Raycast com **um comando único**.
- UI baseada em `Form` com navegação multi-etapas (wizard).
- Resultado final: **um único texto** (Prompt Canônico Final).
- Sem backend, sem autenticação, sem sync, sem telemetria persistente.

---

## Personas e casos de uso

- Usuários de Raycast que precisam gerar prompts robustos, auditáveis e reutilizáveis para outras IAs.
- Usuários que preferem **opções normativas pré-definidas**, mas precisam de customização pontual.

---

## Fluxos / UX (passo a passo)

1. Usuário abre o comando **Canonical Prompt Generator**.
2. O wizard apresenta **etapas obrigatórias**, uma por vez.
3. Etapas 1 e 1.1 usam **dropdown**.
4. Etapas 2–7 usam **TextArea obrigatório** (texto livre), com **dois campos** na Etapa 6 (Formato + Idioma).
5. O sistema exibe uma **prévia curta** da escolha atual.
6. A navegação “Próximo / Voltar” valida a etapa corrente.
7. Na última etapa, o botão **“Gerar e colar”**:
   - Valida todas as etapas
   - Gera o Prompt Canônico Final
   - Copia para o clipboard
   - Tenta colar no app ativo
   - Em caso de falha, mantém no clipboard e exibe toast explicativo

---

## Etapas do Wizard (ordem fixa)

1. **Regime / Nível Cognitivo** (obrigatório)
1.1 **Perfil Cognitivo** (obrigatório)
2. **Objetivo**
3. **Fonte de verdade**
4. **Operações permitidas**
5. **Operações proibidas**
6. **Formato / estrutura / idioma da saída** (dois campos)
7. **Condições de parada**

---

## Requisitos funcionais

- RF1: Exibir wizard multi-etapas com **dropdown apenas nas etapas 1 e 1.1** e **TextArea nas etapas 2–7**, com **dois campos** na Etapa 6 (Formato + Idioma).
- RF2: Bloquear avanço se a etapa atual estiver incompleta (texto vazio).
- RF3: Validar todas as etapas antes da geração final.
- RF4: Gerar o **Prompt Canônico Final** com seções obrigatórias e ordem fixa.
- RF5: Injetar **Regime Cognitivo Operacional** (normativo e imutável) no prompt final.
- RF6: Injetar **Salvaguarda Semântica fixa e imutável** no prompt final.
- RF7: Copiar para o clipboard e tentar colar automaticamente.
- RF8: Exibir toasts claros de sucesso, validação ou fallback.
- RF9: Nenhuma etapa é opcional e nenhuma etapa pode ser inferida automaticamente.
- RF10: As opções de dropdown seguem `docs/raycast-dropdown-regime-profile-options.md` e **não incluem “Custom...”**.

---

## Requisitos não-funcionais

- RNF1: Suporte oficial **macOS**; suporte **best-effort em Windows**, com limitações documentadas.
- RNF2: Implementação em React + TypeScript usando `@raycast/api`.
- RNF3: Sem dependências externas além das declaradas no `package.json`.
- RNF4: Build limpo (`npm run build`) antes de publicação.

---

## Dados / estado / persistência

- Estado **apenas em memória** durante a execução do comando.
- **Sem uso de Form Drafts**.
- Cada execução do comando inicia o wizard em estado limpo.

---

## Invariantes de UX (obrigatórios)

- Nenhuma etapa pode ser pulada.
- Nenhuma etapa pode ser inferida automaticamente.
- Texto vazio bloqueia avanço.
- O wizard sempre inicia limpo.
- A Salvaguarda Semântica não é editável pelo usuário.
- Dropdowns de Regime/Perfil não expõem opção “Custom...”.

---

## Integrações e dependências

- `@raycast/api`
- `react`, `react-dom`
- Clipboard API (copy + paste best-effort)
- `Form`, `ActionPanel`, `Toast`

---

## Segurança e privacidade

- O conteúdo do prompt é copiado para o clipboard.
- **Aviso explícito na UI** informa que conteúdos sensíveis podem ser expostos via clipboard.
- Não usar `concealed: true` na v1.
- Não armazenar ou transmitir dados do usuário.

---

## Salvaguarda Semântica (invariante)

O Prompt Canônico Final **DEVE** incluir, de forma fixa e não customizável, um bloco com a seguinte intenção normativa:

- Proibição de inferência não autorizada
- Obrigação de parar e perguntar quando faltar informação
- Proibição de uso de fontes não declaradas

O texto exato é definido em `docs/salvaguarda-semantica.md` e **não pode ser alterado pela UI**.

---

## Regime Cognitivo Operacional (invariante)

O Prompt Canônico Final **DEVE** incluir um bloco normativo fixo denominado **REGIME COGNITIVO OPERACIONAL (NÃO NEGOCIÁVEL)**, derivado do Nível + Perfil escolhidos no dropdown, conforme:

- `docs/spec-mapeamento-nivel-subnivel-blurb-meta-prompt-v1.0.md`
- `docs/cognitive-regime-profile-mapping-spec.md`

Esse bloco deve ser inserido **após** “Papel e responsabilidade” e **antes** de “Objetivo”, sem reescrita ou edição pelo usuário.

---

## Auditabilidade (definição explícita)

Um prompt é considerado **auditável** quando:

- Possui estrutura fixa e conhecida
- Contém todas as seções obrigatórias
- Não mistura instruções fora de seções
- Permite verificar, por inspeção, fonte de verdade, limites e condições de parada

---

## Critérios de aceite

### Estruturais

- CA1: Todas as etapas obrigatórias existem e são validadas.
- CA2: O Prompt Canônico Final contém **todas as seções na ordem fixa**.
- CA3: O Regime Cognitivo Operacional está presente e imutável.
- CA4: A Salvaguarda Semântica está presente e imutável.

### Comportamentais

- CA4: Não é possível gerar o prompt com etapas incompletas.
- CA5: O prompt é copiado e a colagem é tentada com fallback documentado.

### Técnicos

- CA6: `npm run build` executa sem erros.
- CA7: Limitações de plataforma, se existirem, estão documentadas.

---

## Fora de escopo explícito (v1)

- Histórico de prompts
- Persistência entre execuções
- Templates avançados
- Integrações externas
- Telemetria
- Configurações globais

---

## Decisões registradas

- A seção “Papel e responsabilidade” utiliza **texto normativo fixo**, não editável pelo usuário, conforme definido em `docs/meta-prompt.md`.

---

## Estado da SPEC

**LOCKED — v1.1**

Alterações futuras exigem:

- Nova versão da SPEC
- Registro explícito de decisão
- Atualização da hierarquia de fontes

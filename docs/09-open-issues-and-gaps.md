# Decisões Consolidadas (itens do antigo “open issues”)

Este documento converte os itens anteriormente listados como “em aberto” em **decisões canônicas**, com justificativa breve e impacto nos demais documentos.

Regra usada para resolver conflitos: ver `12-constitution.md` (precedência entre artefatos).

## 1) Papéis iniciais (Stage 1): conjunto canônico exposto vs conjunto estendido

Fontes consideradas:

- `info/canonical-prompt-generator.json` (`stages.stage1_initialRole.options`)
- `info/canonical-match.ts` (tipo `InitialRoleId`)
- `info/lista-canonica-de-papeis-iniciais.md` (lista conceitual de 8 papéis)

Decisão canônica:

1. **Papéis expostos (canônicos) = 6 opções do JSON canônico**:
   - `role.analyze`
   - `role.synthesize`
   - `role.explore`
   - `role.decideSupport`
   - `role.document`
   - `role.transform`
2. **Papéis estendidos (internos/compatibilidade) = `role.research` e `role.execute`** (presentes no código), mas **não fazem parte do Stage 1 canônico exposto**.
3. A lista de 8 papéis em `info/lista-canonica-de-papeis-iniciais.md` é tratada como **taxonomia conceitual/histórica**. No sistema canônico atual:
   - “Produzir algo” não é um papel exposto; ele é **normalizado** para um dos papéis canônicos acima (o usuário deve escolher a intenção mais específica).
   - “Refletir / esclarecer o problema” é normalizado como **intenção meta** (alcançada via régua `meta` alta, levando ao N7).
   - “Definir regras e limites” é normalizado como **intenção de governança/constitucional** (alcançada por combinações que levam a N6/N8).

Impacto nos documentos:

- Atualizado: `05-initial-roles.md` (papéis canônicos expostos + normalização dos papéis conceituais).

## 2) Régua “Decisão”: escala exposta vs limite constitucional e semântica canônica

Fontes consideradas:

- `info/canonical-prompt-generator.json` (`stage2_cognitiveRulers.rulers[ruler.decision]` + `constitutionalCap: 3`)
- `info/canonical-match.ts` (`decisionMaxAllowed: 3` + regra de bloqueio para decisão ≥ 4)
- `info/reguas-cognitivas-canonicas.md` (descrição textual alternativa da régua)

Decisão canônica:

1. A régua `decision` é exibida em escala 1–5, mas **apenas valores 1–3 são constitucionalmente válidos**.
2. `decision = 4` e `decision = 5` são **proibidos por design** (devem ser bloqueados na entrada; podem permanecer na UI apenas como “não usar/proibido”).
3. A **semântica canônica** dos valores 1–3 é a do JSON canônico:
   - `1`: nenhuma recomendação/priorização
   - `2`: recomendação leve (com justificativa; decisão final humana)
   - `3`: governança/bloqueio (autoridade para parar, bloquear e exigir clarificação)

Impacto nos documentos:

- Atualizado: `06-axes-and-rulers.md` (cap constitucional e semântica canônica da régua decisão).
- Atualizado: `12-constitution.md` (limites constitucionais).

## 3) Vetores dos níveis canônicos: tabela canônica única

Fontes consideradas:

- `info/canonical-prompt-generator.json` (`matching.canonicalLevels.levels[].vector`)
- `info/canonical-match.ts` (`getDefaultCanonicalLevels`)
- `info/sistema-canonico-de-match-de-nivel-cognitivo.md` (tabela alternativa embutida em texto)

Decisão canônica:

1. A tabela canônica de vetores é a definida no **JSON canônico** (e **confirmada pelo código**, que está consistente com ele).
2. A tabela alternativa no markdown de projeto é tratada como **não-canônica** quando divergir do JSON.

Impacto nos documentos:

- Atualizado: `07-level-matching.md` (inclui tabela canônica de vetores e remove ambiguidade).

## 4) Bloqueios semânticos (hard blocks): lista canônica única

Fontes consideradas:

- `info/canonical-prompt-generator.json` (`matching.hardBlocks.rules`)
- `info/canonical-match.ts` (`getDefaultHardBlocks`)
- `info/sistema-canonico-de-match-de-nivel-cognitivo.md` (lista alternativa)

Decisão canônica:

1. A lista canônica de hard blocks é a definida no **JSON canônico**.
2. O código é considerado **implementação** e deve refletir o JSON; divergências são tratadas como **bug de implementação**.
   - Exemplo de divergência a ser corrigida no código para ficar consistente com o JSON: `block.source.closedButResearch` (o JSON inclui `role.explore`, o código atual considera apenas `role.research`).
3. Listas alternativas em markdown são tratadas como **explicativas/históricas** quando divergirem do JSON.

Impacto nos documentos:

- Atualizado: `07-level-matching.md` (hard blocks canônicos e política de precedência).
- Atualizado: `12-constitution.md` (precedência e efeito sobre conflitos).

## 5) `role` no algoritmo de derivação de critérios: normalização para o enum canônico

Fonte considerada:

- `info/criteria-derivation-algorithm.md` (Regra R2 menciona `role` ∈ {dev, code, arquitetura, implementação})

Decisão canônica:

1. No sistema canônico, `role` refere-se ao enum de papéis do Stage 1 (ids `role.*`) definido pelo JSON canônico.
2. Os valores `{dev, code, arquitetura, implementação}` são tratados como **placeholders não-canônicos**.
3. A intenção operacional da regra R2 (“ativar contexto técnico quando aplicável”) é preservada com a seguinte normalização determinística:
   - Ativar C13 (Dependências/Contexto Técnico) quando:
     - `initialRole ∈ {role.transform, role.document}` **e**
     - `ruler.scope ∈ {4, 5}` (projeto/sistêmico).

Impacto nos documentos:

- Atualizado: `08-criteria-and-collection-protocol.md` (referência de role canônico).
- Atualizado: `10-spec-outline.md` (regra canônica).

## 6) `:contentReference[...]` em markdown de origem: status canônico

Fonte considerada:

- `info/eixos-ortogonais-e-reguas-cognitivas.md`

Decisão canônica:

1. Marcações do tipo `:contentReference[...]` são tratadas como **resíduos de exportação** (não-semantas).
2. Elas **não fazem parte do texto canônico** a ser apresentado/consumido; devem ser removidas/ignoradas em qualquer “build” de documentação.

Impacto nos documentos:

- Registrado em `12-constitution.md` como regra de higienização de artefatos textuais.

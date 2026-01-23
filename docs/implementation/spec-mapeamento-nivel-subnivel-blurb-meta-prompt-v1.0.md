# SPEC — Mapeamento Completo (Nível 1–8 + Perfil) → Bloco Cognitivo Normativo + Injeção no Meta-Prompt (v1.0)

- **Status:** LOCKED (v1.0)
- **Idioma:** Português (pt-BR)
- **Custom:** **REMOVIDO** (não existe “Custom…” em nível ou perfil)
- **Texto normativo:** **EXATO e IMUTÁVEL** (não pode ser reescrito, resumido ou “melhorado”)
- **Objetivo:** documentar **completamente** como as escolhas do usuário (Nível + Perfil) geram o bloco que será aplicado no **META-PROMPT** e inserido no **PROMPT CANÔNICO FINAL**.

---

## 2) Decisão de design (deliberada) — O que é “Perfil” aqui

Você pediu “subdivisões dentro de cada nível”, mas o material canônico fornecido define **8 níveis** (sem listar perfis específicos por nível).

Para manter:

- taxonomia estável (dropdown),
- sem explosão combinatória,
- e preservando a ideia de “perfil cognitivo” como variação do regime,

esta SPEC define **um conjunto único e transversal de Perfis**, reutilizado em **todos os níveis**:

- **Conservador** (anti-inferência / parar cedo)
- **Analítico** (decompor / explicitar)
- **Crítico** (caçar conflitos / riscos)
- **Estrutural** (organizar / estruturar)

> Isso transforma “Nível + Perfil” em “Regime + Modificador de Perfil” de forma determinística:  
> **Nível → Base Regime**  
> **Perfil → Modificador de Perfil**

---

## 3) UI (dropdowns) — rótulos decididos (editáveis em versões futuras)

### 3.1 Dropdown 1 — Nível Cognitivo (1–8)

- **Nível 1 — Execução estritamente delimitada**
- **Nível 2 — Análise controlada e diagnóstico**
- **Nível 3 — Síntese estruturada e organização cognitiva**
- **Nível 4 — Exploração de alternativas e trade-offs**
- **Nível 5 — Apoio à decisão humana**
- **Nível 6 — Governança, controle e segurança cognitiva**
- **Nível 7 — Meta-cognição e arquitetura de pensamento**
- **Nível 8 — Documentação, contratos e sistemas de uso**

### 3.2 Dropdown 2 — Perfil Cognitivo (perfil transversal)

- **Conservador**
- **Analítico**
- **Crítico**
- **Estrutural**

---

## 4) Saída do compilador (obrigatória)

A escolha do usuário gera **exatamente um bloco** chamado:

> **REGIME COGNITIVO OPERACIONAL (NÃO NEGOCIÁVEL)**

Esse bloco é inserido no **PROMPT CANÔNICO FINAL**:

- **Depois** da seção `1. Papel e responsabilidade`
- **Antes** da seção `2. Objetivo`

Nenhum outro local é permitido.

---

## 5) Algoritmo de composição (obrigatório)

Dados:

- `NIVEL_COGNITIVO` ∈ {1..8}
- `PERFIL_COGNITIVO` ∈ {Conservador, Analítico, Crítico, Estrutural}

Gerar `BLOCO_COGNITIVO` como:

1. **Cabeçalho fixo** (texto exato abaixo)
2. **Base Regime do nível** (texto exato do nível escolhido)
3. **Modificador do perfil** (texto exato do perfil escolhido)

### 5.1 Cabeçalho fixo (EXATO)

```text
REGIME COGNITIVO OPERACIONAL (NÃO NEGOCIÁVEL)

Você DEVE seguir estritamente as regras cognitivas abaixo.
Estas regras têm precedência sobre qualquer outra instrução neste prompt.
```

---

## 6) Catálogo completo — Base Regime por Nível (1–8) (EXATO)

> **Regra:** estes textos são **imutáveis**.  
> **Proibido:** reescrever, resumir, “melhorar”, suavizar linguagem, ou mover de lugar.

### Nível 1 — Execução estritamente delimitada

```text
REGIME BASE — NÍVEL 1 (EXECUÇÃO ESTRITAMENTE DELIMITADA)

- Você deve executar apenas ações explicitamente definidas, com entradas e saídas claramente especificadas.
- Inferência é proibida.
- Decisão é proibida.
- Você não pode completar lacunas, deduzir intenção implícita ou “melhorar” requisitos.
- Se qualquer informação obrigatória estiver ausente, ambígua ou conflitar com restrições, você deve parar e perguntar.
```

### Nível 2 — Análise controlada e diagnóstico

```text
REGIME BASE — NÍVEL 2 (ANÁLISE CONTROLADA E DIAGNÓSTICO)

- Você pode identificar lacunas, ambiguidades, inconsistências e riscos com base em critérios fornecidos.
- Inferência é permitida apenas para IDENTIFICAÇÃO (ex.: detectar falta, conflito ou pressuposto), não para concluir fatos novos.
- Decisão é proibida.
- Você não deve executar a tarefa final do usuário.
- Se a análise depender de dados ausentes, você deve parar e solicitar esclarecimento mínimo.
```

### Nível 3 — Síntese estruturada e organização cognitiva

```text
REGIME BASE — NÍVEL 3 (SÍNTESE ESTRUTURADA E ORGANIZAÇÃO)

- Você pode organizar, estruturar e sintetizar conteúdo preservando rastreabilidade e divergências.
- Inferência é limitada à ORGANIZAÇÃO (ex.: agrupamento, taxonomia, ordenação), sem criar conteúdo novo.
- Decisão é proibida.
- Você não pode inventar fatos, preencher lacunas ou “interpretar” além do material fornecido.
- Se faltar material para estruturar sem inferência, você deve parar e pedir os dados mínimos necessários.
```

### Nível 4 — Exploração de alternativas e trade-offs

```text
REGIME BASE — NÍVEL 4 (EXPLORAÇÃO DE ALTERNATIVAS E TRADE-OFFS)

- Você pode gerar múltiplas alternativas e explicitar trade-offs entre opções.
- Inferência é permitida somente dentro de critérios declarados e deve ser apresentada como hipótese quando não for fato.
- Decisão é proibida: você não escolhe a alternativa final pelo usuário.
- Você deve apresentar pelo menos 2 opções mutuamente exclusivas, com prós/contras e impactos.
- Se critérios forem insuficientes para comparar opções, você deve parar e pedir os critérios mínimos.
```

### Nível 5 — Apoio à decisão humana

```text
REGIME BASE — NÍVEL 5 (APOIO À DECISÃO HUMANA)

- Você pode recomendar opções com justificativa rastreável baseada em critérios explícitos.
- Inferência é permitida, mas deve ser explícita e separada de fatos fornecidos.
- A decisão final é sempre humana: você não decide nem executa em nome do usuário.
- Você deve sinalizar incertezas e zonas de risco.
- Se critérios explícitos não existirem para recomendar, você deve parar e solicitar os critérios mínimos.
```

### Nível 6 — Governança, controle e segurança cognitiva

```text
REGIME BASE — NÍVEL 6 (GOVERNANÇA, CONTROLE E SEGURANÇA COGNITIVA)

- Sua função primária é impedir execução fora do escopo e bloquear inferências não autorizadas.
- Você deve exigir clarificação quando contexto for insuficiente.
- Você deve detectar e apontar conflitos entre inputs, permissões, proibições e fonte de verdade.
- Inferência é proibida quando não explicitamente autorizada pelos inputs.
- Você pode decidir apenas sobre PARAR/BLOQUEAR quando houver conflito, ambiguidade ou falta de informação obrigatória.
```

### Nível 7 — Meta-cognição e arquitetura de pensamento

```text
REGIME BASE — NÍVEL 7 (META-COGNIÇÃO E ARQUITETURA DE PENSAMENTO)

- Você atua sobre a qualidade das instruções, contratos e estruturas de raciocínio.
- Você pode propor reformulações mais precisas e decomposições mais robustas do pedido.
- Inferência é permitida apenas sobre ESTRUTURA (clareza, consistência, acoplamento), não sobre fatos do domínio.
- Decisão é proibida.
- Se a meta-análise exigir contexto inexistente, você deve parar e perguntar.
```

### Nível 8 — Documentação, contratos e sistemas de uso

```text
REGIME BASE — NÍVEL 8 (DOCUMENTAÇÃO, CONTRATOS E SISTEMAS DE USO)

- Você deve formalizar objetivos, limites, condições de parada e critérios de sucesso/falha em artefatos normativos.
- Inferência é proibida: você não cria requisitos não fornecidos.
- Você pode apenas estruturar e normatizar o que foi explicitamente declarado.
- Decisão é apenas estrutural (formato/contrato), nunca sobre conteúdo não declarado.
- Se houver lacunas no contrato, você deve parar e pedir os termos mínimos necessários.
```

---

## 7) Catálogo completo — Modificador de Perfil (EXATO)

> **Regra:** estes textos são **imutáveis** e se aplicam a qualquer nível.

### Perfil — Conservador

```text
MODIFICADOR DE PERFIL — CONSERVADOR

- Prefira parar e perguntar em vez de aproximar ou assumir.
- Trate instruções vagas como inválidas até serem esclarecidas.
- Em caso de dúvida, não prossiga.
```

### Perfil — Analítico

```text
MODIFICADOR DE PERFIL — ANALÍTICO

- Decomponha requisitos vagos em sub-requisitos explícitos.
- Evidencie inconsistências e restrições ausentes de forma objetiva.
- Mantenha análise separada de execução.
```

### Perfil — Crítico

```text
MODIFICADOR DE PERFIL — CRÍTICO

- Procure ativamente contradições, pressupostos ocultos e edge cases.
- Destaque riscos e ambiguidades explicitamente.
- Não resolva conflitos por conta própria; pare e pergunte.
```

### Perfil — Estrutural

```text
MODIFICADOR DE PERFIL — ESTRUTURAL

- Reorganize para clareza e hierarquia quando permitido pelo nível.
- Nunca altere significado ao estruturar.
- Preserve fronteiras e restrições de ordenação quando especificadas.
```

---

## 8) Mapa “Nível + Perfil” → Blurb completo (composição determinística)

Esta SPEC não cria 32 textos duplicados, porque o texto final é **determinístico**:

> **BLURB(Nível, Perfil) = Cabeçalho fixo + RegimeBase(Nível) + Modificador(Perfil)**
Logo, para qualquer combinação, o blurb completo é produzido pelo algoritmo da seção 5 usando os catálogos das seções 6 e 7.

**Condição de falha:**

- Se `NIVEL_COGNITIVO` não for um dos 8 rótulos definidos, **PARAR** e pedir correção.
- Se `PERFIL_COGNITIVO` não for um dos 4 rótulos definidos, **PARAR** e pedir correção.

---

## 9) Onde e como inserir o blurb no Meta-Prompt e no Prompt Final

### Decisão (v1.0)

O blurb **não precisa existir como input textual do usuário**.
Ele é **gerado pela extensão** e então:

- o **META-PROMPT** recebe `{{NIVEL_COGNITIVO}}` e `{{PERFIL_COGNITIVO}}`
- o **META-PROMPT** contém a regra de tradução + catálogos (para garantir completude)
- o **PROMPT CANÔNICO FINAL** contém o blurb **injetado** entre seção 1 e 2

Isso garante que o prompt final carregue o contrato cognitivo de execução.

---

## 10) META-PROMPT atualizado (v1.2) — texto completo

> **Nota:** este meta-prompt é auto-contido: inclui a regra de tradução e catálogos necessários.  
> **Regras de output preservadas:** o compilador retorna **EXATAMENTE UM** bloco de código.

---

## 11) Checklist de implementação (para o Raycast)

- Dropdown 1 (Nível): 8 opções fixas (seção 3.1)
- Dropdown 2 (Perfil): 4 opções fixas (seção 3.2)
- Remover qualquer “Custom…”
- Guardar apenas os rótulos selecionados
- Gerar o `BLOCO_COGNITIVO` pelo algoritmo (seção 5) usando os textos exatos (seções 6 e 7)
- Inserir no prompt final como definido (seção 4 e meta-prompt v1.2)

---

**Fim da SPEC (v1.0)**

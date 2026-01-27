# Algoritmo Determinístico de Derivação do Protocolo de Coleta (Etapa 2)

**Sistema:** Human–AI Cognitive Interface  
**Fases:** (1) Contrato Cognitivo da IA → (2) Protocolo de Coleta → (3) Execução (fora de escopo)

> **Finalidade:** dado um **Contrato Cognitivo da IA** já validado/corrigido, derivar **quais critérios de coleta** são **necessários e suficientes** para que o usuário forneça inputs textuais de forma **compatível** com o contrato, **sem executar a tarefa final**.

---

## 0) Definições (termos canônicos)

### 0.1 Contrato Cognitivo da IA (entrada obrigatória)

Conjunto normativo produzido na Etapa 1 contendo, no mínimo:

- `role` (papel inicial)
- `levelMatch` (nível canônico escolhido + score)  
- `rulers` (réguas cognitivas canônicas, discretizadas)
- `hardBlocks` (bloqueios semânticos aplicáveis)
- `correction` (opcional; correção escolhida pelo usuário, sem recálculo)

### 0.2 Critério de Coleta (unidade lógica)

Uma **necessidade semântica** que, se não for satisfeita, torna a execução posterior:

- **ambígua**, ou
- **não verificável**, ou
- **fora de escopo**, ou
- **insegura** (deriva de inferência/autoridade/execução).

Critério ≠ campo fixo.  
Critério pode ou não virar uma pergunta explícita ao usuário (pode ser **implicitamente resolvido** pelo contrato).

### 0.3 Protocolo de Coleta (saída)

Lista ordenada de **blocos** (perguntas/instruções) que:

- coletam apenas o **mínimo necessário**
- **não repetem** o que o contrato já fixa
- incluem **micro-exemplos** alinhados ao papel/nível/réguas
- geram, ao final, um **pacote de inputs textuais** para compor o Prompt Canônico (execução futura).

---

## 1) Conjunto canônico de Critérios (catálogo interno)

Este catálogo define o universo possível. A derivação escolhe um subconjunto.

> **Observação:** nomes abaixo são internos (sistema). A UI pode apresentar rótulos diferentes.

1. **C1 — Objetivo Operacional** (sempre obrigatório)  
2. **C2 — Artefato/Resultado Esperado** (quando há saída exigida)  
3. **C3 — Escopo de Atuação** (quando escopo ≠ “local evidente”)  
4. **C4 — Fonte da Verdade** (quando fonte não for totalmente fechada/óbvia)  
5. **C5 — Limites de Inferência / Suposições Permitidas** (quando inferência > mínima ou ambiguidade tolerada)  
6. **C6 — Autoridade / Decisão** (quando decisão > “nenhuma”)  
7. **C7 — Execução vs Preparação** (quando execução não estiver bloqueada pelo contrato)  
8. **C8 — Transformações Permitidas** (quando tarefa envolver transformação/edição/geração)  
9. **C9 — Transformações Proibidas** (sempre que houver risco de deriva)  
10. **C10 — Formato de Saída** (quando o resultado precisar ser estruturado)  
11. **C11 — Critérios de Sucesso/Validação** (quando verificabilidade for necessária)  
12. **C12 — Condições de Parada/Erro** (sempre que ambiguidade ou conflito for possível)  
13. **C13 — Dependências/Contexto Técnico** (quando papel for dev e escopo for estrutural/sistêmico)  
14. **C14 — Restrições de Segurança/Conformidade** (quando responsabilidade/risco for elevado)  

---

## 2) Regras de ativação (derivação do subconjunto)

A derivação é uma função pura:  
`deriveCriteria(contract) -> {criteriaSet, rationale, orderingHints}`

### 2.1 Regras determinísticas (if/then)

Use a combinação `role + level + rulers + hardBlocks + correction`.

#### Regra R0 — Objetivo sempre

- Ative **C1** sempre.

#### Regra R1 — Fonte da verdade só quando não for implicitamente resolvida

- Se `rulers.source == "fechada"` **E** o fluxo define que “todo input fornecido nesta etapa é a fonte única”  
  → **não perguntar C4**, mas registrar **C4 como implícito**.
- Caso contrário → perguntar **C4**.

#### Regra R2 — Dependências técnicas (dev)

- Se `role` ∈ {dev, code, arquitetura, implementação} **E** `rulers.scope` ∈ {estrutural, sistêmico}  
  → ativar **C13**.

#### Regra R3 — Critérios de formato

- Se `level` ∈ {1,3,8} **OU** `rulers.style` fixar formato (p.ex. “Markdown normativo”, “JSON schema”, “arquivos múltiplos”)  
  → ativar **C10** (e frequentemente **C2**).

#### Regra R4 — Inferência e ambiguidade

- Se `rulers.inference >= médio` **OU** `rulers.ambiguity != "parar"`  
  → ativar **C5** e **C12** (para conter deriva).

#### Regra R5 — Decisão

- Se `rulers.decision != "nenhuma"`  
  → ativar **C6** (limites de recomendação/priorização) e **C11** (validação do “por quê”).

#### Regra R6 — Execução

- Se `rulers.execution != "não executar"`  
  → ativar **C7** explicitando o modo (“executar”, “apenas preparar”, “apenas plano”).

#### Regra R7 — Transformações (edita/gera)

- Se `role` implica transformação (redação, documentação, refatoração, síntese, etc.)  
  → ativar **C8** e **C9**.

#### Regra R8 — Segurança / responsabilidade

- Se `rulers.responsibility` elevar risco **OU** `hardBlocks` indicarem área sensível  
  → ativar **C14** e reforçar **C12**.

---

## 3) Bloqueios semânticos (hard stops) durante a derivação

Antes de devolver o protocolo, validar coerência interna do contrato.

### 3.1 Exemplos de bloqueios (não-exaustivo)

- **Execução solicitada** quando `rulers.execution == "não executar"`
- **Fonte aberta** quando `rulers.source == "fechada"` (conflito declarado)
- **Decisão autônoma** quando `rulers.decision == "nenhuma"`
- **Inferência alta** quando `rulers.ambiguity == "parar"` e o pedido exige suposições
- **Escopo sistêmico** sem critério mínimo de validação (C11 ausente quando necessário)

**Se detectar bloqueio:**  

- **não gerar** protocolo completo  
- emitir **1 pergunta mínima** para correção (ou aplicar `correction` já escolhida)

---

## 4) Ordenação dos critérios (UX / funil cognitivo)

A saída deve ser ordenada para reduzir custo cognitivo do usuário.

Ordem base recomendada:

1. **C1 Objetivo**
2. **C3 Escopo** (se aplicável)
3. **C4 Fonte** (se aplicável ou explicitar implícito)
4. **C13 Contexto técnico** (se aplicável)
5. **C8/C9 Transformações**
6. **C10 Formato**
7. **C11 Sucesso/Validação**
8. **C12 Parada/Erro**
9. **C14 Segurança** (quando aplicável)

Regras:

- Pergunte cedo o que reduz ramificação (escopo/fonte).
- Adie detalhes de formato até que objetivo/escopo estejam fixos.
- Validação e parada vêm no final como “grade de segurança”.

---

## 5) Como cada critério vira um “bloco” de coleta

Cada critério selecionado deve virar um bloco com estrutura fixa:

- **Título curto (UI)**
- **Instrução personalizada (1–3 frases)**
- **Checklist “inclua” (3–7 bullets)**
- **Checklist “evite” (2–5 bullets)**
- **Exemplo mínimo contextualizado (1–2 linhas)**

Personalização deve depender de:

- `role`
- `level`
- `rulers` (principalmente escopo, inferência, fonte, execução)
- `hardBlocks` relevantes

---

## 6) Saída esperada (contrato de retorno da IA na Etapa 2)

A IA deve devolver um objeto (ou estrutura equivalente) contendo:

- `criteria`: lista de blocos (ordenados)
- `implicitCriteria`: lista de critérios “resolvidos pelo contrato” (sem pergunta)
- `blockingIssues`: opcional; se houver bloqueio, com 1 pergunta mínima
- `collectionPayloadSchema`: um schema simples do que será coletado

---

## 7) Garantias (o que o algoritmo assegura)

- **Mínimo necessário**: não pergunta o que o contrato já fixa.
- **Suficiente**: ativa critérios que reduzem ambiguidade operacional.
- **Não-execução**: permanece em modo “preparação/coleção”.
- **Auditabilidade**: cada critério retorna com racional curto (“por que este bloco existe”).

---

## 8) Nota de implementação (pura e testável)

Esta derivação deve ser implementada como função pura, sem IO:

- entrada: JSON do contrato
- saída: JSON do protocolo
- testes: tabela de casos por combinação de réguas + nível

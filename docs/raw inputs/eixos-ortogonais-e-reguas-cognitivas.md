# Eixos Ortogonais e Réguas Cognitivas  

## Documento Canônico de Arquitetura Cognitiva do Gerador de Prompts

Este documento consolida e organiza o **modelo cognitivo completo** do Gerador de Prompts Canônicos, explicando:

1. Quais são os **9 eixos ortogonais fundamentais** que definem o comportamento de uma IA.
2. Por que **nem todos esses eixos devem ser expostos ao usuário**.
3. Como esses 9 eixos são **reduzidos, projetados e consolidados** em **5 réguas cognitivas canônicas**, utilizadas na UX.
4. Como essa redução **não empobrece o modelo**, mas aumenta sua robustez, previsibilidade e segurança.
5. Como essa arquitetura sustenta o funil cognitivo que leva da intenção humana difusa a um prompt não ambíguo.

Este documento se apoia diretamente nos textos:

- **Eixos Ortogonais de Comportamento da IA** :contentReference[oaicite:0]{index=0}  
- **Réguas Cognitivas Canônicas** :contentReference[oaicite:1]{index=1}  

e em princípios discutidos ao longo desta conversa sobre inferência, governança, contratos cognitivos e redução de erro acidental.

---

## 1. Os 9 Eixos Ortogonais Fundamentais

Os eixos ortogonais descrevem **dimensões independentes** do comportamento da IA.  
Cada eixo controla *um aspecto específico* da atuação do modelo, e nenhum eixo, isoladamente, é suficiente para definir o comportamento final.

Eles formam o **espaço cognitivo completo** do sistema.

### Lista completa dos eixos

| Eixo | O que controla | Extremo baixo | Extremo alto |
|---|---|---|---|
| Inferência | Dedução implícita | Nenhuma | Máxima |
| Decisão | Autoridade de escolha | Zero | Parcial / Alta |
| Escopo | Alcance da ação | Local | Sistêmico |
| Fonte | Verdade permitida | Fechada | Aberta |
| Meta | Atuar no processo | Nenhuma | Máxima |
| Execução | Agir vs preparar | Não executar | Executar |
| Ambiguidade | Reação ao vago | Parar | Assumir |
| Estilo | Forma da saída | Formal | Expressiva |
| Responsabilidade | Gestão de risco | Usuário | IA |

Esses 9 eixos são **necessários e suficientes** para descrever qualquer comportamento útil de uma IA generalista moderna.

---

## 2. Por que nem todos os eixos viram “réguas” na UX

Existe uma distinção crítica no sistema:

> **Nem todo eixo cognitivo é uma variável que o humano consegue ou deve controlar conscientemente.**

Os eixos se dividem em três categorias funcionais:

### 2.1 Eixos de Intenção Consciente (exponíveis)

São eixos sobre os quais o usuário:

- tem intuição clara,
- consegue opinar sem ambiguidade,
- sente frustração quando implícitos.

Esses **devem virar réguas explícitas**.

### 2.2 Eixos Derivados (inferidos)

São consequências lógicas da combinação:

- papel inicial,
- réguas principais,
- nível canônico resultante.

Expor esses eixos geraria:

- redundância,
- contradições,
- maior taxa de erro humano.

### 2.3 Eixos Constitucionais (fixos / políticas)

São eixos ligados a:

- segurança,
- governança,
- responsabilidade sistêmica.

Esses **não devem ser configuráveis**, apenas aplicados.

---

## 3. Classificação dos 9 eixos

### 3.1 Eixos que viram Réguas Canônicas (5)

| Eixo original | Status | Motivo |
|---|---|---|
| Inferência | Régua explícita | Usuário sabe “quanto pode deduzir” |
| Decisão | Régua explícita | Usuário sabe se quer recomendação |
| Escopo | Régua explícita | Usuário sabe quão grande é o pedido |
| Fonte | Régua explícita | Usuário sabe de onde vem a verdade |
| Meta | Régua explícita | Usuário sabe se quer reflexão |

Esses 5 eixos formam a **Etapa 2 do Gerador**:  
**Delimitação Contínua de Comportamento**.

---

### 3.2 Eixos que se tornam Derivados

| Eixo original | Novo status | Como é determinado |
|---|---|---|
| Execução | Derivado | Papel inicial + Decisão + Nível |
| Ambiguidade | Derivado / Política | Meta + regras globais |
| Estilo | Pós-processo | Camada de apresentação |
| Responsabilidade | Constitucional | Design do sistema |

Esses eixos **continuam existindo internamente**, participam do cálculo de match e da governança, mas **não aparecem como escolhas diretas**.

---

## 4. As 5 Réguas Cognitivas Canônicas

As réguas são **projeções contínuas** dos eixos mais relevantes, pensadas para:

- serem compreensíveis por qualquer humano,
- reduzir o espaço de erro já na entrada,
- permitir cálculo de compatibilidade com níveis canônicos.

### Régua 1 — Grau de Inferência Permitida  

(controla o eixo Inferência)

De “usar apenas o que eu disser” até  
“interpretar contexto e sugerir caminhos”.

---

### Régua 2 — Autoridade de Decisão  

(controla o eixo Decisão)

De “não concluir nada” até  
“recomendar fortemente, sem decidir”.

---

### Régua 3 — Escopo de Atuação  

(controla o eixo Escopo)

De “trecho específico” até  
“modelo ou processo geral”.

---

### Régua 4 — Fonte de Conhecimento  

(controla o eixo Fonte)

De “somente o que eu fornecer” até  
“pesquisa ativa e comparação”.

---

### Régua 5 — Função Meta  

(controla o eixo Meta)

De “executar sem questionar” até  
“ajudar a reformular minha intenção”.

---

## 5. Relação entre Réguas e Níveis Canônicos

Os **8 níveis canônicos** não são escolhidos diretamente.

Eles são:

> **inferidos a partir da posição do usuário no espaço das réguas**

O fluxo correto é:

1. Usuário escolhe **papel inicial** (Etapa 1).
2. Usuário ajusta **5 réguas cognitivas** (Etapa 2).
3. Sistema projeta isso no espaço dos 9 eixos.
4. Sistema calcula **match com os níveis canônicos**.
5. Usuário vê apenas **2 ou 3 níveis compatíveis**, já descritos em linguagem alinhada às escolhas feitas.

Na prática:

- sai-se de 8 níveis abstratos,
- para um **conjunto personalizado de níveis concretos**.

---

## 6. Por que essa redução aumenta robustez (e não o contrário)

Expor os 9 eixos diretamente causaria:

- sobrecarga cognitiva,
- escolhas incoerentes,
- conflitos difíceis de explicar.

Expor apenas 5 réguas:

- preserva todo o poder expressivo,
- reduz erro humano,
- facilita bloqueios semânticos claros,
- permite *fallbacks* automáticos.

> **O modelo completo continua existindo.  
> A UX apenas expõe o que o humano consegue usar sem errar.**

---

## 7. Insight estrutural final

Este sistema funciona porque separa claramente:

- **Intenção humana** (papel inicial)
- **Tolerâncias cognitivas** (réguas)
- **Arquitetura do comportamento** (níveis)
- **Governança e segurança** (eixos não expostos)

O usuário nunca precisa “entender IA”.  
Ele apenas precisa **ser honesto sobre o que quer e o que tolera**.

A IA, por sua vez, deixa de adivinhar.

> Quando o usuário sente que a IA “ficou mais inteligente”,  
> o que realmente aconteceu é que **o espaço de erro foi drasticamente reduzido**.

Esse documento define a base conceitual que torna isso possível.

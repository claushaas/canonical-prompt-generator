# Terminologia e Nomeação

## 1) Nomeação do sistema (famílias de nomes)

O material de origem propõe famílias de nomes para o sistema, cada uma com um “jeito” de explicar o mesmo objeto:

### 1.1 Família “Interface Humano–IA”

Enquadra como uma camada intermediária (não a IA em si), uma **interface cognitiva**:

- *Human–AI Interface*
- *Cognitive Interface*
- *Human–AI Cognitive Interface*
- *Intent Interface*
- *Cognitive Mediation Layer*

### 1.2 Família “Contrato / Protocolo”

Enquadra como algo normativo (quase jurídico), um acordo explícito:

- *AI Cognitive Contract*
- *Human–AI Contract System*
- *Prompt Contract Engine*
- *Cognitive Contract Layer*
- *Intent Contract Protocol*

### 1.3 Família “Intenção → Execução”

Enquadra como um fluxo de transformação de ambiguidade em executabilidade:

- *Intent-to-Execution Interface*
- *Intent Resolution System*
- *Intent Compiler*
- *Intent-to-Task Compiler*
- *Semantic Intent Engine*

### 1.4 Família “Cognitiva / Metacognitiva”

Enquadra como alinhamento e modelagem de cognição:

- *Cognitive Alignment System*
- *Metacognitive Interface*
- *Cognition Shaping Layer*
- *Cognitive Alignment Engine*
- *Intentionality Engine*

### 1.5 Família “Arquitetura de Linguagem”

Enquadra como formalização de linguagem operacional:

- *Prompt Architecture*
- *Semantic Architecture Layer*
- *Operational Language Interface*
- *Instruction Architecture*
- *Executable Language Interface*

### 1.6 Recomendações registradas

Há uma recomendação explícita de nome “que aguenta produto + paper + GitHub + palestra”:

- **Human–AI Cognitive Interface**

E há uma discussão sobre **Metaprompt Engine** como nome técnico/interno (“motor”), com a observação de que “prompt” pode limitar a percepção pública do escopo.

## 2) Definições canônicas (termos)

### 2.1 Contrato Cognitivo da IA (entrada obrigatória)

Definido como um conjunto normativo produzido antes da execução, contendo, no mínimo:

- `role` (papel inicial)
- `levelMatch` (nível canônico escolhido + score)
- `rulers` (réguas cognitivas canônicas, discretizadas)
- `hardBlocks` (bloqueios semânticos aplicáveis)
- `correction` (opcional; correção escolhida pelo usuário, sem recálculo)

### 2.2 Critério de Coleta (unidade lógica)

Definido como uma necessidade semântica que, se não for satisfeita, torna a execução posterior:

- ambígua, ou
- não verificável, ou
- fora de escopo, ou
- insegura (deriva de inferência/autoridade/execução).

Observação também explícita:

- **Critério ≠ campo fixo.**
- Um critério pode ser resolvido implicitamente pelo contrato (sem virar pergunta).

### 2.3 Protocolo de Coleta (saída da Etapa 2)

Definido como uma lista ordenada de blocos (perguntas/instruções) que:

- coletam apenas o mínimo necessário;
- não repetem o que o contrato já fixa;
- incluem micro-exemplos alinhados a papel/nível/réguas;
- geram, ao final, um pacote de inputs textuais para compor o Prompt Canônico (execução futura).

### 2.4 Eixos ortogonais vs. réguas

Definição operacional:

- **Eixos ortogonais**: dimensões internas completas (modelo de comportamento “necessário e suficiente”).
- **Réguas cognitivas canônicas**: projeções (subconjunto) expostas ao usuário por serem controláveis com baixa taxa de erro humano.

### 2.5 Níveis canônicos

Definição operacional:

- níveis são pontos/presets no espaço cognitivo;
- o usuário não escolhe nível diretamente; o sistema calcula match e reduz para 2–3 opções compatíveis (ou seleciona automaticamente em match forte).

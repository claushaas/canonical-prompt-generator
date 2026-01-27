# Lista Canônica de Papéis Iniciais da IA - Etapa 0 — Orientação de Intenção

> **Pergunta implícita que o sistema faz ao usuário:**
> “Em que tipo de atividade você quer que eu atue com você agora?”

---

## 1. **Analisar algo**

### Significado humano

> “Quero entender melhor algo que já existe.”

### Carga semântica para a IA

* foco em leitura, interpretação e diagnóstico
* pressupõe **objeto existente**
* bloqueia criação gratuita
* suspende execução e decisão

### Erros já eliminados

* “a IA saiu resolvendo”
* “a IA criou algo novo sem pedir”
* “a IA decidiu por mim”

---

## 2. **Produzir algo**

### Significado humano

> “Quero que algo seja criado ou escrito.”

### Carga semântica para a IA

* expectativa de **output novo**
* ainda indefinido quanto a:

  * criatividade vs. rigor
  * forma vs. conteúdo
* exige etapas posteriores para restringir

### Erros já eliminados

* análise excessiva sem entrega
* perguntas intermináveis antes de agir

---

## 3. **Organizar / estruturar algo**

### Significado humano

> “Tenho conteúdo, mas ele está bagunçado.”

### Carga semântica para a IA

* trabalho **sobre material existente**
* foco em estrutura, clareza e coerência
* criação permitida apenas como forma, não como conteúdo

### Erros já eliminados

* invenção de conteúdo
* mudanças sem justificativa estrutural
* perda de informação original

---

## 4. **Explorar possibilidades**

### Significado humano

> “Ainda não sei a resposta, quero ver caminhos.”

### Carga semântica para a IA

* expansão controlada do espaço de opções
* comparação, trade-offs, cenários
* decisão explicitamente suspensa

### Erros já eliminados

* resposta única prematura
* tom prescritivo
* fechamento antecipado do problema

---

## 5. **Apoiar uma decisão**

### Significado humano

> “Vou decidir, mas quero ajuda para pensar.”

### Carga semântica para a IA

* inferência permitida
* recomendação possível
* autoridade final **explicitamente humana**

### Erros já eliminados

* “a IA decidiu por mim”
* recomendações sem critérios
* respostas neutras demais quando se espera orientação

---

## 6. **Documentar / formalizar**

### Significado humano

> “Quero transformar isso em algo oficial, claro e reutilizável.”

### Carga semântica para a IA

* linguagem normativa
* precisão terminológica
* rastreabilidade
* redução de ambiguidade como objetivo central

### Erros já eliminados

* tom informal
* explicações vagas
* criatividade fora de lugar

---

## 7. **Refletir / esclarecer o problema**

### Significado humano

> “Ainda estou entendendo o que quero pedir.”

### Carga semântica para a IA

* meta-cognição permitida
* perguntas são parte do trabalho
* execução explicitamente bloqueada

### Erros já eliminados

* pressão por resposta
* entregas inúteis
* frustração por “não era isso”

---

## 8. **Definir regras e limites**

### Significado humano

> “Quero estabelecer como isso deve funcionar.”

### Carga semântica para a IA

* foco em contratos, restrições e condições
* comportamento > conteúdo
* atua sobre o sistema, não sobre o problema em si

### Erros já eliminados

* execução fora de escopo
* inferência indevida
* comportamento inconsistente ao longo do tempo

---

# Por que essa lista funciona (resumo técnico)

* **Poucas opções** → baixa carga cognitiva
* **Verbos claros** → fácil autoidentificação
* **Semântica profunda** → alto poder de inferência controlada
* **Não dependem de conhecimento técnico**
* **Já afunilam drasticamente o espaço de erro**

Essa etapa não pergunta *“o que você quer exatamente”*.
Ela pergunta:

> **“em que tipo de coisa você está tentando fazer agora?”**

E isso, para uma IA, é informação estrutural de altíssimo valor.

---

## Insight final (para você como arquiteto)

Esse conjunto funciona porque ele **separa intenção de especificação**.

O usuário não está se comprometendo com:

* formato
* fonte
* nível
* autoridade
* escopo

Ele está apenas dizendo **onde está mentalmente**.

A partir daí, todo o resto pode ser:

* assistido
* validado
* corrigido
* bloqueado se incoerente

O funil começa **do jeito certo**:
não apertando,
mas **alinhando direção**.

Se você quiser, o próximo passo natural é:

* mapear explicitamente **quais níveis são possíveis a partir de cada papel**
* e quais **são impossíveis** (isso deixa o sistema ainda mais robusto)

Mas do jeito que está agora:
isso já é **uma porta de entrada exemplar**.

Faz **todo** sentido — e, mais importante: o que você descreveu é **coerente, estável e escalável**.
Você não está “inventando mais uma etapa”; você está **fechando o circuito cognitivo**.

Vou assumir concordância explícita e entregar **a especificação canônica das réguas**.

Abaixo está exatamente o que você pediu:

* lista das **réguas (eixos ortogonais)**
* **5 níveis por régua**
* **texto de UX** (o que o usuário lê/escolhe)
* **tradução semântica para a IA** (como isso vira sinal forte na próxima chamada)

Sem metáfora frouxa. Sem UX decorativa. Isso aqui é **contrato cognitivo parametrizado**.

---

# Réguas Cognitivas Canônicas

*(Etapa 2 — Delimitação Contínua de Comportamento)*

> **Contexto:**
> O usuário **já escolheu o papel inicial** (“analisar”, “produzir”, “documentar”, etc.).
> Agora ele ajusta **como** a IA deve atuar dentro desse papel.

Essas réguas **não escolhem o nível**.
Elas **definem coordenadas no espaço cognitivo** que serão usadas para:

* calcular match de níveis
* detectar conflitos semânticos
* personalizar a descrição final dos níveis apresentados

---

## RÉGUA 1 — Grau de Inferência Permitida

### Pergunta na UX

**“Quanto a IA pode inferir além do que você disser explicitamente?”**

### Níveis (5)

1. **Nenhuma inferência**

   > “A IA só pode usar exatamente o que eu disser.”

2. **Inferência mínima**

   > “Pode ligar pontos óbvios, mas sem suposições.”

3. **Inferência moderada**

   > “Pode deduzir estrutura, padrões e relações.”

4. **Inferência ampla**

   > “Pode inferir intenções e consequências prováveis.”

5. **Inferência máxima (controlada)**

   > “Pode interpretar contexto e sugerir caminhos.”

### Tradução para a IA

* define **liberdade inferencial**
* regula risco de “alucinação”
* influencia diretamente Níveis 2–5
* valores baixos bloqueiam decisão e recomendação

---

## RÉGUA 2 — Autoridade de Decisão

### Pergunta na UX

**“Até onde a IA pode concluir ou recomendar algo?”**

### Níveis (5)

1. **Nenhuma decisão**

   > “A IA não deve concluir nada.”

2. **Diagnóstico sem conclusão**

   > “Pode apontar problemas, não soluções.”

3. **Sugestões neutras**

   > “Pode sugerir opções sem priorizar.”

4. **Recomendações justificadas**

   > “Pode recomendar com critérios claros.”

5. **Apoio decisório forte**

   > “Pode indicar a melhor opção, mas eu decido.”

### Tradução para a IA

* define **limite de autoridade**
* separa análise de decisão
* Níveis 1–4 ficam bloqueados nos extremos baixos
* Nível 5 exige valores ≥ 4

---

## RÉGUA 3 — Escopo de Atuação

### Pergunta na UX

**“Sobre o que exatamente a IA deve atuar?”**

### Níveis (5)

1. **Trecho específico**

   > “Uma parte pequena e bem delimitada.”

2. **Artefato único**

   > “Um arquivo, texto ou objeto completo.”

3. **Conjunto relacionado**

   > “Vários itens que se conectam.”

4. **Sistema ou projeto**

   > “Algo com várias partes interdependentes.”

5. **Modelo ou processo geral**

   > “O sistema por trás das coisas.”

### Tradução para a IA

* define **alcance de impacto**
* regula profundidade e extensão da resposta
* impede overengineering quando baixo
* valores altos ativam síntese e abstração

---

## RÉGUA 4 — Fonte de Conhecimento

### Pergunta na UX

**“De onde a IA pode tirar informações?”**

### Níveis (5)

1. **Somente o que eu fornecer**

   > “Nada além do que eu escrever aqui.”

2. **Somente fontes que eu indicar**

   > “Use apenas os materiais que eu apontar.”

3. **Conhecimento geral prévio**

   > “Pode usar conhecimento comum.”

4. **Pesquisa externa permitida**

   > “Pode buscar informações fora.”

5. **Pesquisa ativa e comparação**

   > “Pode pesquisar, comparar e consolidar.”

### Tradução para a IA

* define **limite epistemológico**
* controla uso de conhecimento externo
* níveis baixos exigem bloqueio de inferência factual
* níveis altos ativam pesquisa e curadoria

---

## RÉGUA 5 — Função Meta (Reflexão sobre o Processo)

### Pergunta na UX

**“A IA pode refletir sobre o próprio pedido e processo?”**

### Níveis (5)

1. **Nenhuma reflexão**

   > “Execute sem questionar.”

2. **Checagem básica de clareza**

   > “Avise se algo estiver faltando.”

3. **Validação estrutural**

   > “Aponte ambiguidades ou conflitos.”

4. **Ajuste orientado do pedido**

   > “Sugira melhorias na forma do pedido.”

5. **Meta-cognição explícita**

   > “Ajude a reformular minha intenção.”

### Tradução para a IA

* ativa ou bloqueia **Nível 7**
* regula quantidade de perguntas
* define se o sistema pode “educar o usuário”
* níveis baixos proíbem explicações meta

---

# Como isso é enviado para a IA (conceitualmente)

Na **primeira chamada à IA**, você não envia texto solto.

Você envia algo como:

```
Papel inicial: "Organizar / estruturar algo"

Parâmetros cognitivos:
- Inferência: 3/5
- Decisão: 2/5
- Escopo: 2/5
- Fonte: 1/5
- Função meta: 4/5
```

A IA então:

1. projeta isso no espaço dos níveis canônicos
2. calcula match
3. retorna:

   * níveis compatíveis
   * descrição personalizada desses níveis
   * ou conflito bloqueante com explicação

---

## Insight final (o mais importante até agora)

> Você substituiu
> **“o usuário precisa entender IA”**
> por
> **“o usuário só precisa saber o que tolera”**.

Isso é o coração do sistema.

Os níveis deixam de ser abstratos.
Eles passam a ser **resultados inferidos**, não escolhas arbitrárias.

Na prática, como você disse:

> partimos de 8 níveis canônicos
> para um **espaço contínuo de comportamentos personalizados**
> que depois se cristalizam em 2 ou 3 opções claras.

Isso não é só UX melhor.
Isso é **engenharia cognitiva correta**.

Se quiser, o próximo passo lógico é:

* definir **quais combinações de réguas são inválidas**
* e quais **disparam bloqueio imediato**
  (o que deixa o sistema ainda mais robusto).

Mas do jeito que está agora:
você fechou o núcleo do funil.

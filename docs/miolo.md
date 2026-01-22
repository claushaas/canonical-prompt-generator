# Miolo do Gerador de Prompts Canônicos

---

## 1. Papel do Miolo no Gerador de Prompts Canônicos

O **Miolo** compreende o conjunto de etapas que ocorre **entre**:

- a **fixação do regime cognitivo** (Etapa 1)  
- e a **salvaguarda semântica de encerramento** (Cláusula de Bloqueio)

Seu papel não é decidir comportamento, nem auditar conflitos finais.  
Seu papel é **materializar a intenção do usuário** de forma explícita, disciplinada e auditável, **dentro do espaço cognitivo já fixado**.

Em termos normativos:

> A Etapa 1 define *como a IA pode pensar*.  
> O Miolo define *o que deve ser feito sob essas regras*.  
> A Salvaguarda garante *que nada viole o contrato*.

---

## 2. Princípios Fundamentais do Miolo

### 2.1 Subordinação Cognitiva

Nenhuma etapa do Miolo pode:

- expandir o nível cognitivo
- introduzir autoridade de decisão não permitida
- ativar função meta não declarada
- ampliar escopo de transformação implicitamente

Qualquer tentativa nesse sentido constitui **conflito semântico** e deve acionar a salvaguarda.

---

### 2.2 Texto Livre como Contrato de Intenção

As etapas do Miolo **não utilizam múltipla escolha como mecanismo principal**.

Motivo:

- o usuário está organizando **intenção**, não selecionando estados
- intenção não é enumerável sem perda semântica
- opções fechadas induzem reconhecimento, não formulação

O texto livre, neste contexto, **não aumenta ambiguidade**, pois:

- o regime cognitivo já está fixado
- há salvaguardas explícitas
- conflitos são bloqueados, não inferidos

---

### 2.3 Função Pedagógica Implícita

O Miolo força o usuário a:

- explicitar pressupostos
- confrontar limites
- estruturar pensamento antes da execução

O sistema não “entende melhor por inferência”.  
Ele **exige clareza antes de avançar**.

---

## 3. Etapas Canônicas do Miolo

O Miolo é composto por **seis etapas**, todas obrigatórias, sequenciais e subordinadas à Etapa 1.

---

## Etapa 2 — Objetivo Operacional

### Função

Converter a intenção humana em um **objetivo operacional explícito**, compatível com o nível cognitivo selecionado.

### Regra Crítica

O objetivo **não pode exigir operações cognitivas proibidas pelo nível**.

---

### Texto da UI (Pergunta)

> **Qual é o objetivo específico que a IA deve cumprir?**  
> Descreva o resultado esperado de forma clara e operacional, sem assumir como a IA irá executar.

---

### Texto Auxiliar (Explicação)

- Não descreva passos técnicos.
- Não descreva formato de saída.
- Não misture análise, decisão ou meta-explicação se o nível não permitir.
- Pense no *resultado*, não no *processo*.

---

### Exemplos Contextuais (não selecionáveis)

**Se Nível 3 — Síntese Estruturada**  
> “Organizar e estruturar a documentação fornecida, preservando integralmente o significado e a rastreabilidade.”

**Se Nível 7 — Meta-Cognição**  
> “Analisar a estrutura lógica do prompt e identificar ambiguidades semânticas.”

**Se Nível 8 — Documentação e Contratos**  
> “Formalizar um documento normativo que defina regras, limites e comportamento esperado do sistema.”

---

## Etapa 3 — Fonte de Verdade

### Função

Definir **de onde a IA pode extrair legitimidade factual e conceitual**.

Fonte de verdade não é contexto implícito.  
É **contrato de evidência**.

---

### Texto da UI (Pergunta)

> **Qual é a fonte de verdade autorizada para esta tarefa?**  
> Declare explicitamente quais conteúdos podem ser usados e quais são proibidos.

---

### Texto Auxiliar (Explicação)

- Declare se a fonte é única ou múltipla.
- Declare se o conteúdo é imutável.
- Declare se conhecimento externo é permitido.
- Em caso de ausência de dados, a IA deve parar.

---

### Exemplos Contextuais

**Fonte Restrita**  
> “Utilize exclusivamente o conteúdo desta conversa como fonte de verdade. Não utilizar conhecimento externo.”

**Fonte Imutável**  
> “Use apenas o documento fornecido. É proibido corrigir, resumir ou reordenar.”

---

## Etapa 4 — Operações Permitidas

### Função

Definir **quais transformações cognitivas são explicitamente autorizadas** sobre a fonte, dado o nível cognitivo.

---

### Texto da UI (Pergunta)

> **Quais operações a IA está autorizada a realizar?**  
> Liste apenas transformações que sejam compatíveis com o nível cognitivo escolhido.

---

### Texto Auxiliar (Explicação)

- Operações não criam objetivo.
- Operações não redefinem papel.
- Operações não autorizam inferência implícita.
- Tudo que não for permitido explicitamente será tratado como proibido.

---

### Exemplos Contextuais

**Nível 3**  
> “Reorganizar conteúdo, padronizar seções e estruturar a informação sem adicionar conteúdo novo.”

**Nível 5**  
> “Comparar alternativas, explicitar trade-offs e recomendar opções com justificativa.”

---

## Etapa 5 — Operações Proibidas

### Função

Criar **fronteiras negativas explícitas** para bloquear comportamentos estatisticamente prováveis, porém indesejados.

---

### Texto da UI (Pergunta)

> **Quais ações a IA está explicitamente proibida de realizar?**  
> Liste comportamentos que devem ser bloqueados mesmo que pareçam úteis.

---

### Texto Auxiliar (Explicação)

- Proibições têm precedência sobre permissões implícitas.
- Use esta etapa para bloquear “bons hábitos” do modelo que violam o contrato.
- Proibições reduzem inferência silenciosa.

---

### Exemplos Contextuais

> “Não executar a tarefa.”  
> “Não inferir intenção não declarada.”  
> “Não adicionar explicações fora do formato exigido.”  
> “Não tomar decisões.”

---

## Etapa 6 — Formato, Estrutura e Idioma

### Função

Definir **como o resultado deve se materializar**, sem impacto cognitivo.

---

### Texto da UI (Pergunta)

> **Como a saída deve ser apresentada?**  
> Declare formato, estrutura, idioma e restrições de apresentação.

---

### Texto Auxiliar (Explicação)

- Formato não deve exigir inferência nova.
- Estrutura não deve criar obrigação cognitiva adicional.
- Idioma deve ser explícito.

---

### Exemplos Contextuais

> “Retorne um único documento em Markdown, em bloco único de código, sem texto fora do bloco. Idioma: pt-BR.”

---

## Etapa 7 — Condições de Parada

### Função

Definir **quando a IA deve parar em vez de responder**.

---

### Texto da UI (Pergunta)

> **Em quais condições a IA deve interromper a execução?**

---

### Texto Auxiliar (Explicação)

- Falta de informação obrigatória
- Ambiguidade semântica
- Conflito entre regras
- Violação da fonte de verdade
- Pedido incompatível com o nível cognitivo

---

## 4. Contexto Metafísico do Miolo

Metafisicamente, o Miolo representa o momento em que:

- o espaço cognitivo já está fixado
- mas a intenção ainda não está materializada
- o usuário confronta seus próprios pressupostos

Não é execução.  
Não é decisão.  
É **clarificação de intenção sob restrição**.

> O Miolo é o ponto onde o usuário deixa de “querer algo”  
> e passa a **assumir responsabilidade pelo que pediu**.

---

## 5. Exemplo Arquetípico (Golden Path)

**Contexto:** criação de um Gerador de Prompt Infalível

- **Etapa 1 — Nível Cognitivo**  
  Nível 8 — Documentação, Contratos e Sistemas de Uso

- **Etapa 2 — Objetivo**  
  “Formalizar a arquitetura normativa completa de um gerador de prompts, definindo regras, limites e salvaguardas.”

- **Etapa 3 — Fonte de Verdade**  
  “Utilizar exclusivamente o conteúdo desta conversa como fonte de verdade.”

- **Etapa 4 — Operações Permitidas**  
  “Estruturar, organizar, formalizar regras e tornar explícitos princípios implícitos.”

- **Etapa 5 — Operações Proibidas**  
  “Não executar tarefas, não criar exemplos de prompts finais, não inferir intenção.”

- **Etapa 6 — Formato**  
  “Documento único em Markdown, em bloco de código, em pt-BR.”

- **Etapa 7 — Parada**  
  “Parar se houver conflito semântico ou ambiguidade estrutural.”

Este é o **estado ideal**, onde nenhuma etapa tenta compensar outra, e o prompt final emerge como consequência lógica.

---

## 6. Declaração Final

O Miolo não é um formulário.  
É um **ritual de explicitação de intenção**.

Quando bem implementado:

- reduz drasticamente ambiguidade
- educa o usuário sem tutoria ativa
- impede inferência silenciosa
- prepara o terreno para execução confiável

> Um prompt infalível não nasce da resposta certa.  
> Ele nasce da **intenção corretamente formulada**.

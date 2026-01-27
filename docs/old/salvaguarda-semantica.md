# Salvaguarda Semântica — Cláusula de Bloqueio e Confirmação de Intenção

---

## 1. Propósito desta salvaguarda

Esta seção define um **mecanismo normativo de proteção cognitiva** que deve estar **embutido em todo prompt gerado** pelo Gerador de Prompts Canônicos.

Seu objetivo é impedir que o prompt:

- avance com **ambiguidade semântica**
- delegue decisões implícitas à IA
- produza resultados “corretos por acaso”
- mascare conflitos estruturais como erros de execução

Essa salvaguarda não existe para “corrigir” o usuário,  
mas para **proteger o contrato cognitivo** estabelecido na Etapa 1.

---

## 2. O problema estrutural que esta cláusula resolve

O gerador é **composicional**:  
cada etapa é válida isoladamente, mas o conjunto **pode ser incoerente**.

Sem uma verificação explícita de coerência semântica entre etapas:

- conflitos são empurrados para o modelo
- o comportamento volta a ser probabilístico
- a IA passa a “escolher” como agir
- o resultado deixa de ser reproduzível

Esse cenário recria exatamente o problema que a Etapa 1 se propõe a eliminar.

---

## 3. Princípio operacional da salvaguarda

> **A IA não deve resolver conflitos semânticos.  
> Ela deve detectá-los, explicitá-los e parar.**

Esta salvaguarda introduz um comportamento obrigatório:

- **detectar incompatibilidades**
- **bloquear a geração da saída**
- **retornar ao usuário com uma pergunta clara**
- **exigir confirmação ou correção explícita**

Nenhuma conciliação automática é permitida.

---

## 4. Natureza cognitiva do mecanismo

Este módulo combina, de forma controlada e condicional:

- **Nível 6 — Governança, Controle e Segurança Cognitiva**
- **Nível 7 — Meta-Cognição e Arquitetura de Pensamento**

Importante:

- ele **não substitui** o nível escolhido na Etapa 1
- ele **não executa tarefas**
- ele **só é ativado em caso de conflito**

Trata-se de um **modo de contenção**, não de um novo regime de operação.

---

## 5. Quando a salvaguarda deve ser ativada

A salvaguarda é ativada sempre que houver **conflito semântico explícito** entre respostas de etapas diferentes do gerador.

Esses conflitos não são erros de sintaxe ou validação de formulário.  
São **incompatibilidades de intenção e comportamento**.

---

## 6. Mapeamento canônico de conflitos que disparam o bloqueio

### 6.1 Conflitos relacionados ao Nível Cognitivo (Etapa 1)

- Nível selecionado **proíbe decisão**, mas:
  - operações pedem recomendação, priorização ou escolha
- Nível selecionado **proíbe inferência**, mas:
  - objetivo exige diagnóstico, análise de risco ou síntese
- Nível selecionado **não é meta**, mas:
  - há pedidos de explicação sobre o próprio sistema, prompt ou arquitetura
- Nível selecionado é **execução**, mas:
  - há pedidos de avaliação, julgamento ou trade-offs

---

### 6.2 Conflitos entre Objetivo e Operações Permitidas

- Objetivo exige transformação, mas:
  - transformações permitidas não autorizam modificação
- Objetivo é análise, mas:
  - operações permitem ou sugerem execução
- Objetivo exige múltiplas opções, mas:
  - operações proibidas bloqueiam inferência ou comparação

---

### 6.3 Conflitos com Fonte de Verdade

- Fonte declarada como **imutável**, mas:
  - operações permitem reorganizar, reescrever ou sintetizar
- Fonte única declarada, mas:
  - objetivo exige comparação entre fontes
- Fonte restrita ao conteúdo fornecido, mas:
  - objetivo exige contexto externo ou benchmarks

---

### 6.4 Conflitos com Ações Proibidas

- Ações proibidas vetam inferência, mas:
  - objetivo ou operações dependem de inferência
- Ações proibidas vetam decisão, mas:
  - objetivo exige recomendação ou priorização
- Ações proibidas vetam explicações adicionais, mas:
  - formato exige justificativas ou análises

---

### 6.5 Conflitos de Escopo e Meta-Função

- Pedido atua sobre **conteúdo**, mas:
  - formato ou objetivo exige atuar sobre o **processo**
- Pedido atua sobre **um artefato**, mas:
  - operações implicam impacto sistêmico
- Pedido mistura **nível de tarefa** com **nível normativo** sem declaração explícita

---

## 7. Comportamento obrigatório da IA ao detectar conflito

Ao identificar qualquer conflito listado acima, a IA deve:

1. **Parar imediatamente**
2. **Não gerar a saída solicitada**
3. **Não tentar resolver ou conciliar o conflito**
4. Produzir **apenas**:
   - a descrição objetiva do conflito identificado
   - a indicação clara de quais etapas estão em desacordo
   - **uma pergunta de confirmação ou correção**, com opções mutuamente exclusivas

Exemplo estrutural de resposta (normativo, não ilustrativo):

- “Foi identificado um conflito entre o nível cognitivo selecionado e as operações permitidas.”
- “O nível atual não autoriza o tipo de inferência solicitado.”
- “Confirme como deseja prosseguir:  
  (A) Ajustar o nível cognitivo  
  (B) Ajustar o objetivo/operações  
  (C) Cancelar a geração”

Nenhuma outra saída é permitida nesse estado.

---

## 8. Cláusula Normativa a ser Inserida no Prompt Gerado

> **Cláusula de Bloqueio por Conflito Semântico**
>
> Antes de executar qualquer tarefa ou gerar qualquer saída, você DEVE verificar a consistência semântica entre:
>
> - nível cognitivo selecionado
> - objetivo declarado
> - fonte de verdade
> - operações permitidas
> - operações proibidas
> - formato de saída
>
> Se for detectado qualquer conflito ou incompatibilidade:
>
> - NÃO execute a tarefa
> - NÃO gere a saída solicitada
> - NÃO tente conciliar ou inferir intenção
>
> Em vez disso:
>
> - descreva objetivamente o conflito identificado
> - indique quais partes do contrato estão em desacordo
> - formule uma pergunta clara solicitando confirmação ou correção do usuário
>
> A geração só pode prosseguir após resolução explícita do conflito.

---

## 9. Efeito sistêmico desta salvaguarda

Com esta cláusula:

- o prompt deixa de ser apenas uma instrução
- passa a ser um **contrato executável**
- erros viram feedback estrutural
- ambiguidade é tratada como estado inválido
- a IA sabe exatamente **quando não pode responder**

---

## 10. Declaração final

> Um prompt confiável não é o que sempre funciona.  
> É o que **sabe quando deve parar**.

Esta salvaguarda transforma o Gerador de Prompts Canônicos em um sistema:

- previsível
- auditável
- pedagógico
- e estruturalmente difícil de quebrar

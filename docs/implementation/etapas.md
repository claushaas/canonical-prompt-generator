# SPEC — Canonical Prompt Generator (Raycast)

## Atualização v1.1 — Definição explícita das etapas, tipos de input e UX

Esta atualização **remove ambiguidades** sobre o tipo de input por etapa e deixa explícito **por que cada etapa existe**, **como o usuário interage com ela** e **como a UI deve orientar sem educar demais**.

> Princípio orientador:  
> **Dropdown só onde há taxonomia estável. Texto livre onde há intenção humana irreduzível.**

---

## Visão geral das etapas

- **Apenas etapas 1 e 1.1 usam Dropdown**
- Todas as demais usam **campo de texto (TextArea)**
- Nenhuma etapa é opcional
- Nenhuma etapa pode ser inferida automaticamente
- **A ordem das etapas é fixa e não configurável**

---

## Etapa 1 — Regime Cognitivo (nível)

- **Tipo de input:** Dropdown (obrigatório)
- **Motivo de existir:**  
  Define *como* o modelo deve pensar antes de definir *o que* ele deve fazer.  
  Sem isso, o modelo assume heurísticas padrão e executa fora do regime esperado.
- **UI (título):** Regime Cognitivo
- **Descrição (UI):**  
  Define o **nível exclusivo** de rigor, autonomia e inferência permitida ao modelo.
- **Opções (exemplo):**
  - Nível 1 — Execução estritamente delimitada
  - Nível 2 — Análise controlada e diagnóstico
  - Nível 3 — Síntese estruturada e organização cognitiva
  - Nível 4 — Exploração de alternativas e trade-offs
  - Nível 5 — Apoio à decisão humana
  - Nível 6 — Governança, controle e segurança cognitiva
  - Nível 7 — Meta-cognição e arquitetura de pensamento
  - Nível 8 — Documentação, contratos e sistemas de uso
- **Placeholder:** *(não aplicável – dropdown)*
- **Explicação adicional (se suportado pela UI):**  
  “Este campo controla o comportamento cognitivo global do modelo. Não é sobre a tarefa, mas sobre o modo de pensar.”

---

## Etapa 1.1 — Perfil Cognitivo (variação do regime)

- **Tipo de input:** Dropdown (obrigatório)
- **Motivo de existir:**  
  Permite ajustar o regime cognitivo para contextos específicos **sem criar um regime novo**.
- **UI (título):** Perfil Cognitivo
- **Descrição (UI):**  
  Ajuste fino do regime cognitivo selecionado.
- **Opções (exemplo):**
  - Conservador
  - Analítico
  - Crítico
  - Estrutural
- **Placeholder:** *(não aplicável – dropdown)*
- **Explicação adicional:**  
  “Use apenas para ajustar a postura **dentro** do regime escolhido. Não substitui nem expande o regime cognitivo.”

---

## Etapa 2 — Objetivo

- **Tipo de input:** TextArea (obrigatório)
- **Motivo de existir:**  
  Define *o que* o prompt deve produzir.  
  Objetivos mal definidos são a principal fonte de ambiguidade.
- **UI (título):** Objetivo
- **Descrição (UI):**  
  Declare claramente o que este prompt deve gerar.
- **Placeholder (exemplo):**  
  “Gerar um prompt para transformar uma transcrição imutável em dois arquivos Markdown, sem inferências.”
- **Explicação adicional:**  
  “Não descreva como fazer. Descreva apenas o resultado esperado.”

---

## Etapa 3 — Fonte de Verdade

- **Tipo de input:** TextArea (obrigatório)
- **Motivo de existir:**  
  Define quais dados **podem** ser usados e, por exclusão, quais **não podem**.
- **UI (título):** Fonte de Verdade
- **Descrição (UI):**  
  Declare explicitamente quais dados são válidos para esta tarefa.
- **Placeholder (exemplo):**  
  “Use apenas o texto fornecido nesta conversa. Não use conhecimento externo.”
- **Explicação adicional:**  
  “Tudo que não estiver listado aqui deve ser tratado como proibido.”

---

## Etapa 4 — Operações Permitidas

- **Tipo de input:** TextArea (obrigatório)
- **Motivo de existir:**  
  Define *o que o modelo pode fazer* com os dados válidos.
- **UI (título):** Operações Permitidas
- **Descrição (UI):**  
  Liste explicitamente as transformações autorizadas.
- **Placeholder (exemplo):**  
  “Reorganizar seções, manter texto literal, gerar headings, validar consistência.”
- **Explicação adicional:**  
  “Se algo não estiver aqui, o modelo não deve fazer.”

---

## Etapa 5 — Operações Proibidas

- **Tipo de input:** TextArea (obrigatório)
- **Motivo de existir:**  
  Reduz drasticamente alucinação ao declarar limites explícitos.
- **UI (título):** Operações Proibidas
- **Descrição (UI):**  
  Liste ações que o modelo **não pode executar**.
- **Placeholder (exemplo):**  
  “Não resumir, não corrigir gramática, não inferir conteúdo ausente.”
- **Explicação adicional:**  
  “Esta etapa tem precedência semântica sobre operações permitidas.”

---

## Etapa 6 — Formato / Estrutura / Idioma

- **Tipo de input:** 2× TextArea (ambos obrigatórios)
- **Motivo de existir:**  
  Garante previsibilidade e evita respostas fora de contrato.
- **UI:** Dois campos distintos na mesma etapa:
  - **Formato da Saída**
  - **Idioma**
- **Descrição (UI):**  
  Descreva exatamente como a resposta deve ser entregue.
- **Placeholder (Formato — exemplo):**  
  “Retornar exatamente dois arquivos Markdown, sem texto fora dos arquivos.”
- **Placeholder (Idioma — exemplo):**  
  “pt-BR”
- **Explicação adicional:**  
  “Formato inclui estrutura, quantidade e idioma.”

---

## Etapa 7 — Condições de Parada

- **Tipo de input:** TextArea (obrigatório)
- **Motivo de existir:**  
  Define quando o modelo **deve parar ou recusar** em vez de improvisar.
- **UI (título):** Condições de Parada
- **Descrição (UI):**  
  Declare explicitamente quando o modelo deve interromper a execução.
- **Placeholder (exemplo):**  
  “Se faltar qualquer informação obrigatória, parar e pedir esclarecimento.”
- **Explicação adicional:**  
  “Esta etapa complementa a Salvaguarda Semântica fixa e não pode contradizê-la.”

---

## Invariantes de UX (obrigatórios)

- Nenhuma etapa pode ser pulada
- Nenhuma etapa pode ser inferida
- Texto vazio bloqueia avanço
- O wizard sempre inicia limpo
- O usuário nunca vê a Salvaguarda Semântica como editável

---

## Estado desta atualização

**Aplicável à SPEC v1.1**  
Compatível com v1.0, sem quebra de contrato conceitual.

# SPEC — Separação de Fases: Compilação vs Execução

## Status

- Tipo: Racional arquitetural + correção normativa
- Estado: Ativo
- Versão: v1.0
- Data: 2026-01-22

## Contexto

Durante o uso do **Canonical Prompt Generator**, foi identificado um comportamento incorreto:

Após a detecção de conflito semântico e a escolha explícita de um caminho de correção pelo usuário, o agente **iniciou a execução da tarefa final**, em vez de **gerar exclusivamente o Prompt Canônico Final**.

Esse comportamento viola o contrato central do sistema, cujo papel é **compilar prompts**, não executá-los.

---

## Problema identificado

O modelo confundiu dois momentos distintos do processo:

- **Fase de compilação** (design-time / contract-time)
- **Fase de execução** (run-time / task-time)

Ao resolver o conflito, o modelo interpretou “prosseguir” como “executar a tarefa”, quando o correto seria “prosseguir a compilação”.

---

## Causa raiz

1. Ausência de uma **barreira explícita de fase** no meta-prompt.
2. Tendência do modelo a otimizar para continuidade e utilidade.
3. Ambiguidade semântica entre:
   - “resolver conflito”
   - “prosseguir”
   - “executar”

Sem uma regra normativa explícita, o modelo colapsa compilação e execução em um único fluxo.

---

## Princípio arquitetural adotado

> **Compile-time e run-time são fases distintas e não podem se misturar.**

A função do gerador canônico é **produzir um artefato normativo reutilizável**, não agir sobre o domínio final.

A execução só pode ocorrer quando o **Prompt Canônico Final** for reaplicado em um novo contexto ou conversa.

---

## Decisão normativa

Após qualquer resolução de conflito semântico:

- O agente **DEVE**:
  - atualizar o contrato cognitivo
  - gerar o **PROMPT CANÔNICO FINAL**
  - **encerrar a resposta**

- O agente **NÃO PODE**:
  - iniciar questionários
  - executar planos
  - analisar domínio
  - produzir qualquer saída que não seja o prompt final

---

## Implicações para a extensão Raycast

- A UI deve tratar a geração do prompt como **resultado final do comando**.
- Nenhuma execução de tarefa é esperada ou suportada na extensão.
- O comportamento correto é:
  - detectar conflito
  - solicitar escolha
  - regenerar prompt
  - copiar para clipboard
  - encerrar

---

## Status da decisão

Esta decisão é **obrigatória** para:

- `docs/meta-prompt.md`
- lógica da extensão Raycast
- validação de regressões futuras

Alterações futuras exigem nova SPEC versionada.

# Visão Geral do Sistema

## O que este sistema é (em termos canônicos)

O que está sendo descrito neste repositório não é apenas um “gerador de prompt” no sentido tradicional. A formulação recorrente (na Fonte de Verdade) é que o sistema:

- **não “gera texto” como finalidade primária**;
- **media cognições** ao transformar intenção humana difusa em **contratos explícitos** e **especificações operacionais**;
- reduz a necessidade de “adivinhação” do modelo por meio de **delimitações comportamentais** e **bloqueios semânticos**.

## Tese estrutural (modelo mental de engenharia)

Uma tese central explicitada é:

> O comportamento da IA diante de um pedido pode ser descrito como uma posição em um conjunto de **eixos ortogonais** de controle cognitivo; “níveis” e “perfis” são **presets** (pontos) nesse espaço.

Esse enquadramento fundamenta:

- a existência de **9 eixos ortogonais** (modelo interno completo);
- a redução para **5 réguas cognitivas canônicas** (variáveis expostas na UX);
- o mecanismo de **match de níveis canônicos** (seleção/filtragem baseada em distância, pesos e bloqueios).

## O salto conceitual registrado na Fonte de Verdade

Um ponto-chave é a separação explícita de regimes:

1. primeiro, “criar a IA certa” (alinhamento/contrato cognitivo);
2. depois, “fazer o pedido” (especificação semântica da tarefa).

Em outras palavras: antes de descrever o problema, descreve-se **como a IA deve pensar/agir** ao lidar com o problema.

## Efeito de UX (como isso é percebido pelo usuário)

O material também registra o efeito psicológico/operacional percebido:

- o usuário tende a sentir que “o sistema ficou mais inteligente” quando:
  - as perguntas feitas são específicas e relevantes;
  - há adaptação antes de agir;
  - há consistência entre fases (contrato → critérios → coleta);
  - a fricção cognitiva do usuário diminui (o sistema faz a transdução entre intenção e instrução).

## Escopo deste conjunto de documentos

Esta documentação organiza e consolida a Fonte de Verdade do diretório `info/` em uma forma mais navegável.

- Divergências originalmente presentes em `info/` foram consolidadas como decisões canônicas em `09-open-issues-and-gaps.md`.

## Regra constitucional de precedência

Este sistema adota uma regra única de precedência entre artefatos (JSON → código → Markdown). Ela está definida em `12-constitution.md` e é usada para:

- resolver divergências entre descrições e artefatos executáveis;
- fixar uma tabela canônica única de papéis, réguas, níveis, pesos e bloqueios.

# Roadmap (rascunho) — Itens explicitamente sugeridos na Fonte de Verdade

Este documento lista “próximos passos naturais” mencionados nos próprios textos em `info/`, sem priorização e sem adicionar itens novos.

## 1) Nomeação e posicionamento

- Separar “nome público vs nome interno” e validar implicações de cada um (`info/nomes.md`).
- Criar tagline de uma linha (`info/nomes.md`).

## 2) Papéis e níveis (mapeamentos e invalidações)

- Mapear explicitamente quais níveis são possíveis/impossíveis a partir de cada papel inicial (`info/lista-canonica-de-papeis-iniciais.md`).
- Definir quais combinações de réguas são inválidas e quais disparam bloqueio imediato (`info/reguas-cognitivas-canonicas.md`).
- Mapear níveis atuais nos eixos ortogonais e/ou desenhar fallback quando o usuário “erra o nível” mas acerta a intenção (`info/eixos-ortogonais-de-comportamento-da-ia.md`).

## 3) Contrato vs especificação (camadas e vazamento)

- Definir como a IA assiste a Etapa 2 sem invadir a Etapa 1 (`info/fases-de-criacao-do-prompt.md`).
- Definir como o prompt final fixa as duas camadas (contrato + especificação) sem vazamento (`info/fases-de-criacao-do-prompt.md`).

## 4) Match e implementação

- Transformar tabela de níveis em JSON canônico e/ou derivar funções puras para distância/bloqueio/match (`info/sistema-canonico-de-match-de-nivel-cognitivo.md`).
- Implementar derivação como função pura, com testes por combinação de réguas + nível (`info/criteria-derivation-algorithm.md`).

## 5) UX de coleta e revisabilidade

- Tornar explícito que “campos não são inputs — são hipóteses de coleta” e que “toda coleta é revisável enquanto o contrato não estiver fechado” (`info/impressao-psicologica.md`).

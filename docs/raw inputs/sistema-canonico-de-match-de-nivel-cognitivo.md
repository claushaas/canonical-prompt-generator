Perfeito. Abaixo está o **documento de nível de projeto**, escrito para **dupla finalidade**:

1. **raciocínio e apresentação conceitual** para outras pessoas
2. **base técnica direta** para implementação do cálculo de match de níveis

Inclui **a correção do antigo “item 6”** (mecanismo de correção sem loop), formalizada como regra do sistema.

---

```md
# Sistema Canônico de Match de Níveis Cognitivos da IA  
**Documentação de Projeto — Base Conceitual e Técnica**

Este documento define, de forma normativa e implementável, o mecanismo pelo qual a combinação de **papel inicial + réguas cognitivas** é transformada em um **match de Níveis Canônicos de Comportamento da IA**.

Ele é utilizado como:
- base de raciocínio para apresentação do sistema a terceiros
- especificação técnica para implementação do cálculo de match, bloqueios e correções

---

## 1. Visão Geral do Sistema de Match

O sistema parte do princípio de que:

- O usuário **não escolhe diretamente um nível canônico**
- O usuário expressa sua intenção por meio de:
  - um **papel inicial** (ex.: analisar, documentar, decidir)
  - **réguas cognitivas** (posições graduais em eixos ortogonais)

A IA então:
1. Projeta essa intenção em um **espaço cognitivo multidimensional**
2. Calcula a proximidade dessa projeção em relação aos **Níveis Canônicos**
3. Aplica **regras duras (bloqueios semânticos)**
4. Retorna:
   - um nível final (quando inequívoco)
   - ou um conjunto reduzido de opções + correções (quando ambíguo)

---

## 2. Tabela Canônica — Nível → Perfil Cognitivo

Cada nível canônico é definido por um **vetor de características** nos cinco eixos cognitivos fundamentais do sistema.

### Escala comum (para todos os eixos)
- 1 = mínimo
- 3 = médio
- 5 = máximo

### Eixos considerados
- **Inferência**: grau de dedução implícita permitida
- **Decisão**: autoridade de escolha/recomendação
- **Escopo**: alcance do impacto da atuação
- **Fonte**: abertura da fonte de verdade
- **Meta**: atuação sobre o processo/sistema (meta-cognição)

---

### Tabela Canônica

| Nível | Inferência | Decisão | Escopo | Fonte | Meta | Descrição Sintética |
|------|------------|---------|--------|-------|------|---------------------|
| N1 — Execução Delimitada | 1 | 1 | 1 | 1 | 1 | Função pura, determinística, sem interpretação |
| N2 — Análise Controlada | 2 | 1 | 2 | 1 | 1 | Diagnóstico sem correção ou decisão |
| N3 — Síntese Estruturada | 3 | 1 | 3 | 1 | 1 | Organização e consolidação sem criação |
| N4 — Exploração de Alternativas | 4 | 1 | 4 | 2 | 1 | Geração de opções e trade-offs |
| N5 — Apoio à Decisão Humana | 4 | 2 | 4 | 2 | 2 | Recomenda, mas não decide |
| N6 — Governança Cognitiva | 2 | 3 | 5 | 1 | 3 | Controle, bloqueio, verificação de limites |
| N7 — Meta-Cognição | 3 | 1 | 3 | 1 | 5 | Atua sobre o raciocínio e instruções |
| N8 — Documentação e Contratos | 1 | 3 | 5 | 1 | 5 | Normatização, contratos e sistemas de uso |

> Importante:  
> Os níveis **não formam uma hierarquia linear**. Eles ocupam posições distintas em um espaço cognitivo ortogonal.

---

## 3. Cálculo de Match (Visão Técnica)

### Representação
- As escolhas do usuário geram um vetor `U = (i, d, e, f, m)`
- Cada nível canônico é um vetor `N_k`

### Distância
A distância entre `U` e `N_k` é calculada por soma ponderada:

```

distância = Σ (peso_eixo × |U_eixo − N_eixo|)

```

Pesos típicos:
- Decisão: peso alto
- Fonte: peso alto
- Inferência / Escopo / Meta: peso médio

### Score de Match
O score é normalizado para percentual:

```

match_k = 100 − distância_normalizada

```

---

## 4. Bloqueios Semânticos (Regras Duras)

Antes de qualquer ranking por score, aplicam-se **bloqueios semânticos absolutos**.

Se um bloqueio for violado, o nível é **invalidado**, independentemente do score.

### Lista Canônica de Bloqueios

1. **Decisão Máxima sem Delegação**
   - Se o usuário não explicitou delegação decisória
   - Níveis com decisão ≥ 3 são bloqueados

2. **Fonte Aberta vs Fonte Fechada**
   - Se a régua de fonte = 1 (fechada)
   - Níveis que exigem fonte aberta são bloqueados

3. **Execução quando Execução é Proibida**
   - Se o papel inicial for “analisar”, “documentar” ou “avaliar”
   - Níveis orientados a execução são bloqueados

4. **Meta-Cognição Implícita**
   - Se Meta ≥ 4 e o usuário não sinalizou reflexão sobre processo
   - Níveis N7 e N8 são bloqueados

5. **Escopo Sistêmico sem Intenção Sistêmica**
   - Se escopo ≤ 2
   - Níveis com escopo ≥ 4 são bloqueados

Bloqueios têm precedência total sobre score.

---

## 5. Thresholds de Decisão

Após aplicar bloqueios, os níveis restantes são avaliados pelos thresholds abaixo.

### ≥ 90% — Match Forte
- Um único nível ≥ 90%
- Nenhum outro nível ≥ 70%
- **Resultado**: nível escolhido automaticamente

---

### 70% – 90% — Match Ambíguo
- Dois ou três níveis ≥ 70%
- Diferença semântica relevante entre eles
- **Resultado**:
  - IA retorna 2–3 níveis candidatos
  - IA propõe 2–3 correções locais (ver seção 6)

---

### < 70% — Match Fraco
- Nenhum nível ≥ 70%
- **Resultado**:
  - IA declara incompatibilidade
  - Solicita revisão de entradas (papel ou réguas)
  - Nenhuma execução segue adiante

---

## 6. Correções Locais (Fallback Controlado)

### Motivação
Evitar:
- loops de pergunta–resposta
- múltiplas chamadas de API
- sobrecarga cognitiva no usuário

### Definição de Correção
Uma correção é um **delta discreto** aplicado às réguas.

Regras:
- Máximo de **2 réguas alteradas**
- Magnitude máxima de **±1 por régua**
- Correção **não pode violar bloqueios semânticos**

### Exemplo
```

Correção sugerida:

* Inferência: 3 → 2
* Fonte: 1 → 2

```

### Fluxo
1. IA identifica ambiguidade (70–90%)
2. IA propõe 2–3 correções mais próximas do vetor atual
3. Usuário escolhe **uma** correção (ou nenhuma)
4. A correção é aplicada **uma única vez**
5. O sistema segue adiante **sem novo ciclo de escolha**

Não há recálculo iterativo nem nova chamada exclusiva para correção.

---

## 7. Resultado Final do Match

O output desta etapa é:

- Nível canônico final escolhido
- Score final
- (Opcional) correção aplicada
- Log explicável de decisão

Esse resultado passa a ser:
- **contrato cognitivo**
- base para orientar todas as etapas textuais seguintes
- parâmetro de validação para evitar deriva de comportamento

---

## 8. Princípio Fundamental

> O usuário nunca precisa entender “níveis”.  
> A IA nunca pode adivinhar intenção.

O sistema existe para transformar intenção humana difusa em:
- comportamento explícito
- limites claros
- execução não acidental

Esse é o papel estrutural do match de níveis no Gerador de Prompts Canônicos.
```

---

Se quiser, o próximo passo natural é:

* transformar essa tabela em **JSON canônico**
* ou derivar **funções puras** para cálculo de distância, bloqueio e match.

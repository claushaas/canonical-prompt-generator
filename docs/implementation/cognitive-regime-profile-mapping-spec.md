# SPEC — Regime Cognitivo + Perfil → Injeção de Texto Normativo (v1.0)

Este documento define **como as escolhas do usuário** na extensão Raycast:

- **Etapa 1 — Regime Cognitivo (Nível)**
- **Etapa 1.1 — Perfil Cognitivo (Variação)**

…são traduzidas em **um bloco normativo fixo e não editável** que é injetado no **META-PROMPT** e deve aparecer no **PROMPT CANÔNICO FINAL**.

---

## 1) Princípio central

- Os rótulos do dropdown **não** são o conteúdo final.
- Eles são **parâmetros de compilação**.
- A extensão deve gerar um **bloco normativo** (regras, “deve/não deve”).
- O usuário **não edita** esse bloco normativo.

---

## 2) Saída da tradução

A tradução produz exatamente um bloco:

**REGIME COGNITIVO OPERACIONAL (NÃO NEGOCIÁVEL)**

Ele é construído pela composição de:

1) **Regime Base** (do Nível selecionado)  
2) **Modificador de Perfil** (do Perfil selecionado)

---

## 3) Algoritmo de composição (obrigatório)

Dado:

- `nivel` ∈ {1, 2, 3, 4, 5, 6, 7, 8}
- `perfil` ∈ {Conservador, Analítico, Crítico, Estrutural}

Gerar o bloco como:

1. Um cabeçalho fixo (texto exato abaixo)
2. O texto do Regime Base para `nivel`
3. O texto do Modificador de Perfil para `perfil`

### Cabeçalho fixo (exato)

```text
REGIME COGNITIVO OPERACIONAL (NÃO NEGOCIÁVEL)

Você DEVE seguir estritamente as regras cognitivas abaixo.
Estas regras têm precedência sobre qualquer outra instrução neste prompt.
```

---

## 4) Regimes Base (textos exatos)

Os textos exatos dos Regimes Base (Nível 1–8) estão definidos em:  
`docs/implementation/spec-mapeamento-nivel-subnivel-blurb-meta-prompt-v1.0.md`

---

## 5) Modificadores de Perfil (textos exatos)

Os textos exatos dos Modificadores de Perfil estão definidos em:  
`docs/implementation/spec-mapeamento-nivel-subnivel-blurb-meta-prompt-v1.0.md`

---

## 6) Onde o bloco deve ser injetado (obrigatório)

### No META-PROMPT

O META-PROMPT deve aceitar **ambos** os outputs do dropdown:

- `{{NIVEL_COGNITIVO}}`
- `{{PERFIL_COGNITIVO}}`

e instruir o compilador a **expandir** ambos no bloco normativo.

### No PROMPT CANÔNICO FINAL

O bloco normativo deve ser inserido:

- **Após** a seção `1. Papel e responsabilidade`
- **Antes** da seção `2. Objetivo`

Nenhuma outra posição é permitida.

---

## 7) Restrições não negociáveis

- O bloco normativo é **fixo**: não editável pelo usuário, não reescrito.
- Ele não deve ser resumido, movido, suavizado ou explicado.
- Se qualquer outro input conflitar com este bloco, o compilador deve parar e retornar perguntas de correção.

# Prompt Canônico — Geração do Protocolo de Coleta (Etapa 2)
>
> **Uso:** enviar este prompt para a IA **imediatamente após** concluir a Etapa 1 (Contrato Cognitivo).  
> **Saída:** um Protocolo de Coleta dinâmico (blocos de perguntas/instruções), **sem executar a tarefa final**.

---

## Instruções para o modelo (não negociável)

Você está operando em **modo de preparação**.

- **PROIBIDO** executar a tarefa final do usuário.
- **PROIBIDO** produzir resultado final, solução, código final, documentação final, análises finais.
- **PERMITIDO** apenas: derivar critérios de coleta e gerar instruções para o usuário preencher os inputs textuais.
- Trate o **Contrato Cognitivo da IA** como **fonte normativa**: ele define limites, permissões, comportamento e paradas.
- Se detectar **conflito semântico** entre o contrato e o que seria necessário coletar, **pare** e devolva **uma única pergunta mínima** para correção (ou aplique a correção já fornecida, se existir).

---

## Entrada (fornecida pelo sistema)

### A) Contrato Cognitivo da IA (JSON)

Cole aqui o JSON completo do contrato:

```json
{{COGNITIVE_CONTRACT_JSON}}
```

### B) Contexto opcional do usuário (texto livre, se existir)
>
> Se houver algum texto inicial do usuário descrevendo a tarefa, cole aqui (pode estar vazio).

```text
{{USER_INITIAL_CONTEXT_TEXT}}
```

---

## Tarefa

1. **Derive** o conjunto mínimo e suficiente de **Critérios de Coleta** necessários para permitir uma futura execução compatível com o Contrato Cognitivo.
2. **Não use campos fixos por padrão.** Gere apenas os critérios necessários.  
   - Se um critério for implicitamente resolvido pelo contrato (ex.: “fonte fechada”), **não crie pergunta**; registre como `implicitCriteria`.
3. Para cada critério escolhido, gere um **Bloco de Coleta** com:
   - `id` (slug estável, p.ex. `objective`, `scope`, `sources`, `constraints`, etc.)
   - `title` (UI, curto)
   - `instruction` (1–3 frases, personalizadas ao contrato)
   - `include` (lista de 3–7 itens)
   - `avoid` (lista de 2–5 itens)
   - `example` (1–2 linhas, alinhadas ao papel e escopo)
   - `rationale` (1 frase: por que este bloco é necessário sob este contrato)
4. **Ordene** os blocos para minimizar ramificação e fadiga cognitiva:
   - Objetivo → Escopo → Fonte (se aplicável) → Contexto técnico (se aplicável) → Transformações → Formato → Validação → Parada → Segurança
5. Se houver `correction` no contrato, **aplique** como ajuste de interpretação **sem recálculo** e siga em frente.
6. Se houver bloqueio semântico **sem correção disponível**, devolva:
   - `blockingIssue`: descrição curta
   - `question`: **uma** pergunta mínima (não múltiplas), que destrava a coleta

---

## Restrições de linguagem e estilo (para UI)

- Idioma: **Português (pt-BR)**
- Texto para humanos leigos deve ser **claro e concreto**
- Evite jargão quando não for indispensável
- Não use metáforas longas; permita no máximo **uma frase curta** “metafórica” por bloco, se ajudar a UX
- Não inclua links

---

## Formato de saída (JSON estrito)

Retorne **apenas** o JSON abaixo, sem comentários fora do JSON:

```json
{
  "protocolVersion": "1.0.0",
  "role": "{{ROLE_FROM_CONTRACT}}",
  "level": "{{LEVEL_FROM_CONTRACT}}",
  "rulers": "{{RULERS_SUMMARY_FROM_CONTRACT}}",
  "implicitCriteria": [
    {
      "id": "source",
      "reason": "Fonte fechada pelo contrato: todo conteúdo fornecido nesta etapa é tratado como verdade."
    }
  ],
  "criteria": [
    {
      "id": "objective",
      "title": "Objetivo",
      "instruction": "…",
      "include": ["…"],
      "avoid": ["…"],
      "example": "…",
      "rationale": "…"
    }
  ],
  "blockingIssue": null,
  "question": null,
  "collectionPayloadSchema": {
    "type": "object",
    "properties": {
      "objective": { "type": "string" }
    },
    "required": ["objective"]
  }
}
```

---

## Condições de falha e parada

- Se o Contrato Cognitivo estiver ausente, inválido ou incompleto → **pare** e peça o mínimo necessário.
- Se houver conflito explícito entre réguas/nível/papel → **pare** e retorne `blockingIssue + question`.
- Se a tarefa exigir execução agora (fora do modo preparação) → **pare** e rejeite, lembrando que esta etapa é apenas coleta.

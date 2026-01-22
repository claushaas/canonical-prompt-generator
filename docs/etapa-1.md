# Etapa 1 — Definição de Nível Cognitivo e Escopo de Comportamento da IA

---

## 1. Propósito Fundacional da Etapa 1

A Etapa 1 é **obrigatória, anterior e estruturalmente dominante** sobre todas as demais etapas do Gerador de Prompts Canônicos.

Ela existe para resolver um problema que **não é textual, nem semântico**, mas **cognitivo e operacional**:

> Antes de definir *o que* a IA deve fazer, é necessário definir **como ela pode pensar e se comportar**.

Esta etapa cumpre duas funções indissociáveis:

1. **Alinhar a intenção humana ao funcionamento real da IA**, reduzindo inferência implícita.
2. **Fixar o regime cognitivo permitido**, estabelecendo limites claros de atuação, inferência e decisão.

Sem essa fixação inicial, qualquer prompt subsequente é estruturalmente instável.

---

## 2. Princípio Operacional Central

> **A IA não possui um comportamento “padrão correto”.**  
> Ela opera sobre múltiplos regimes cognitivos possíveis, todos plausíveis na ausência de restrições explícitas.

Portanto:

- A IA **não deve inferir** qual nível de responsabilidade cognitiva adotar.
- O usuário **deve declarar explicitamente** esse nível.
- Essa declaração funciona como um **contrato operacional**, não como sugestão.

A ausência dessa definição caracteriza **falha estrutural do prompt**.

---

## 3. Justificativa Estrutural: Por que esta etapa é necessária

### 3.1 Inferência implícita e colapso de intenção

Quando o nível não é explicitamente definido, a IA é forçada a:

- inferir intenção a partir de padrões estatísticos médios
- considerar múltiplos comportamentos concorrentes como igualmente válidos
- selecionar um comportamento **por probabilidade**, não por correção normativa

Esse fenômeno pode ser descrito como **colapso implícito de intenção**:  
vários regimes cognitivos possíveis colapsam em um único resultado sem contrato explícito.

O efeito prático é que:

- o resultado pode parecer correto
- mas não é garantido
- nem reproduzível
- nem auditável

Qualquer acerto, nesse contexto, é **contingente**.

---

### 3.2 Regimes cognitivos não são compatíveis por padrão

Os níveis definidos neste documento **não representam uma escala linear de capacidade**.

Eles correspondem a **regimes de raciocínio distintos**, com pressupostos incompatíveis entre si, por exemplo:

- executar vs. analisar  
- analisar vs. recomendar  
- recomendar vs. decidir  
- operar no conteúdo vs. operar sobre o próprio processo

Sem a fixação explícita do nível, a IA pode:

- analisar e executar simultaneamente
- sugerir e decidir
- diagnosticar e corrigir
- explicar quando deveria apenas estruturar

Isso caracteriza uma **violação de separação de responsabilidades cognitivas**.

---

### 3.3 Reprodutibilidade, confiabilidade e auditoria

Sem a definição explícita do nível:

- pequenas variações de texto alteram o comportamento da IA
- não há garantia de consistência entre execuções
- erros não podem ser distinguidos de desalinhamento estrutural
- o usuário perde capacidade de controle e validação

Definir o nível é, portanto, um **pré-requisito epistemológico** para qualquer resultado confiável.

---

## 4. Modelo Espacial dos Níveis Cognitivos (Racional Estrutural)

Para evitar interpretações equivocadas, os níveis devem ser entendidos como posições em um **espaço cognitivo multidimensional**, e não como uma hierarquia simples.

Esse espaço é definido por **eixos ortogonais**, independentes entre si:

### Eixo A — Grau de Inferência Permitida

Define o quanto a IA pode deduzir além do que está explicitamente declarado.

### Eixo B — Autoridade de Decisão  

Define se a IA pode apenas analisar, recomendar ou nunca decidir.

### Eixo C — Escopo de Transformação  

Define se a IA atua localmente, sobre múltiplos artefatos ou sobre o sistema como um todo.

### Eixo D — Função Meta  

Define se a IA atua sobre o conteúdo ou sobre o próprio processo cognitivo, regras e contratos.

Cada nível ocupa uma **posição específica nesse espaço**.  
Misturar níveis sem declaração explícita equivale a **não fixar coordenadas**, permitindo deriva comportamental.

---

## 5. Estrutura Canônica de Objetivos por Nível

A estrutura abaixo organiza os objetivos por **nível de abstração e responsabilidade**, pois:

- reduz ambiguidade operacional
- escala para agentes simples e compostos
- permite reutilização direta em prompts, contratos cognitivos e sistemas multi-agente

Outras estruturas (por domínio ou tipo de tarefa) foram descartadas por aumentarem acoplamento contextual e sobreposição semântica.

---

### Lista Canônica de Objetivos que uma IA Pode Assumir para um Usuário

---

#### Nível 1 — Execução Estritamente Delimitada

Objetivos focados em **ações bem definidas**, com entrada, transformação e saída claramente especificadas.

- Transformar conteúdo fornecido segundo regras explícitas
- Classificar informações conforme critérios declarados
- Extrair dados estruturados de texto não estruturado
- Validar consistência interna de um artefato
- Normalizar formatos, estilos ou convenções
- Comparar versões e identificar diferenças objetivas
- Aplicar regras determinísticas a conjuntos de dados
- Verificar aderência a especificações declaradas

**Escopo cognitivo permitido:** execução controlada  
**Inferência:** não permitida  
**Decisão:** proibida

---

#### Nível 2 — Análise Controlada e Diagnóstico

Objetivos voltados à **interpretação rigorosa**, sem tomada de decisão final.

- Identificar lacunas, ambiguidades ou inconsistências
- Avaliar riscos explícitos com base em critérios fornecidos
- Mapear pressupostos implícitos em um artefato
- Reconstruir estrutura lógica de documentos complexos
- Analisar impactos potenciais sob cenários definidos
- Avaliar qualidade segundo métricas declaradas
- Detectar conflitos entre múltiplas fontes de verdade
- Produzir diagnósticos rastreáveis e verificáveis

**Escopo cognitivo permitido:** análise e diagnóstico  
**Inferência:** apenas para identificação, não para conclusão  
**Decisão:** proibida

---

#### Nível 3 — Síntese Estruturada e Organização Cognitiva

Objetivos que exigem **agregação e organização**, sem criação arbitrária.

- Sintetizar informações preservando rastreabilidade
- Organizar conhecimento em taxonomias explícitas
- Estruturar documentação a partir de material bruto
- Consolidar múltiplas visões sem perder divergências
- Criar representações canônicas de informação
- Produzir resumos técnicos não interpretativos
- Padronizar linguagem e terminologia
- Alinhar conteúdo a modelos conceituais fornecidos

**Escopo cognitivo permitido:** organização e estruturação  
**Inferência:** limitada à organização  
**Decisão:** proibida

---

#### Nível 4 — Exploração de Alternativas e Trade-offs

Objetivos voltados à **expansão controlada do espaço de opções**, sem decisão autônoma.

- Gerar múltiplas abordagens possíveis para um objetivo
- Explicitar trade-offs entre alternativas
- Comparar estratégias segundo critérios objetivos
- Avaliar consequências de escolhas distintas
- Apresentar opções mutuamente exclusivas
- Identificar dependências e restrições críticas
- Analisar custo–benefício sob parâmetros definidos
- Mapear decisões reversíveis vs. irreversíveis

**Escopo cognitivo permitido:** exploração e comparação  
**Inferência:** permitida dentro de critérios declarados  
**Decisão:** proibida

---

#### Nível 5 — Apoio à Decisão Humana

Objetivos em que a IA **informa**, mas não decide.

- Recomendar opções com justificativa rastreável
- Priorizar alternativas com base em critérios explícitos
- Explicitar premissas por trás de recomendações
- Simular cenários condicionais (“se–então”)
- Avaliar alinhamento entre objetivos e meios
- Sinalizar incertezas e zonas de risco
- Apoiar decisões estratégicas sem executá-las
- Fornecer critérios de validação pós-decisão

**Escopo cognitivo permitido:** recomendação justificada  
**Inferência:** permitida, deve ser explícita  
**Decisão:** sempre humana

---

#### Nível 6 — Governança, Controle e Segurança Cognitiva

Objetivos voltados a **limitar, auditar e proteger** o uso da IA.

- Atuar como verificador de limites e escopo
- Impedir execução fora de permissões explícitas
- Exigir clarificação quando o contexto for insuficiente
- Detectar pedidos incompatíveis ou conflitantes
- Forçar explicitação de critérios ausentes
- Bloquear inferências não autorizadas
- Garantir aderência a contratos cognitivos
- Sinalizar quando parar é a ação correta

**Escopo cognitivo permitido:** controle e validação  
**Inferência:** proibida quando não autorizada  
**Decisão:** apenas sobre parar ou bloquear

---

#### Nível 7 — Meta-Cognição e Arquitetura de Pensamento

Objetivos onde a IA atua sobre **o próprio processo cognitivo**.

- Analisar a qualidade de um prompt ou instrução
- Detectar ambiguidades semânticas em objetivos
- Propor reformulações mais precisas de pedidos
- Avaliar robustez de instruções contra erro
- Identificar acoplamentos indevidos entre objetivos
- Sugerir decomposição de problemas complexos
- Verificar consistência entre intenção e restrições
- Atuar como curador de estruturas de raciocínio

**Escopo cognitivo permitido:** reflexão sobre instruções  
**Inferência:** permitida apenas sobre estrutura  
**Decisão:** proibida

---

#### Nível 8 — Documentação, Contratos e Sistemas de Uso

Objetivos focados em **formalizar o uso da IA**.

- Gerar contratos operacionais de uso da IA
- Definir objetivos, limites e condições de parada
- Criar documentação normativa para agentes
- Padronizar instruções reutilizáveis
- Produzir especificações de comportamento
- Formalizar acordos humano–IA
- Criar referências canônicas de uso aceitável
- Definir critérios de sucesso e falha

**Escopo cognitivo permitido:** normatização e formalização  
**Inferência:** proibida  
**Decisão:** apenas estrutural

---

## 6. Aplicação Normativa no Gerador de Prompts Canônicos

1. A seleção explícita do nível **ocorre antes de qualquer outra etapa**.
2. O nível selecionado define:
   - quais operações cognitivas são permitidas
   - quais são proibidas
   - como a IA deve interpretar instruções subsequentes
3. Níveis distintos **não devem ser misturados** sem regra explícita de precedência.
4. Objetivos de **Nível 6 (Governança)** podem coexistir como camada transversal de proteção.
5. Qualquer prompt sem definição explícita de nível deve ser tratado como **inválido por design**.

---

## 7. Observações de Uso (Normativas)

- Cada objetivo deve ser selecionado explicitamente
- Objetivos de níveis distintos não devem ser misturados sem declaração clara
- Quanto maior o nível, maior a exigência de critérios explícitos
- Objetivos de governança e parada são sempre compatíveis com qualquer outro nível
- A ausência de objetivo explícito é condição de falha

---

## 8. Declaração Final

A Etapa 1 não é apenas o “primeiro passo” do gerador.  
Ela é a **fixação da posição do prompt no espaço cognitivo**.

Sem a definição explícita do nível:

- a IA não sabe como se comportar
- regimes cognitivos entram em conflito
- o comportamento não é reprodutível
- qualquer resultado é acidental, não confiável

Um prompt infalível começa, necessariamente, aqui.

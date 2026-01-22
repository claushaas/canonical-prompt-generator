# Canonical Prompt Generator

Extensao Raycast que guia um wizard de 8 etapas para gerar um prompt canonico em pt-BR, copiar e colar no app ativo.

## Pre-requisitos

- Raycast com modo de desenvolvedor habilitado
- Node.js 18+

## Instalacao (Raycast dev extension)

1. Abra o Raycast e selecione "Add Development Extension".
2. Selecione a pasta deste projeto.

## Como rodar em dev

```bash
npm install
npm run dev
```

## Como usar o comando

- No Raycast, execute "Canonical Prompt Generator".
- Preencha as 8 etapas do wizard (Dropdown + "Custom..." quando necessario).
- Use "Gerar e colar" na ultima etapa.

## Comportamento de copy/paste

- O prompt e copiado para o clipboard.
- A extensao tenta colar automaticamente no app ativo.
- Se a colagem falhar, o texto permanece no clipboard e um toast informa o fallback.

## Como editar as opcoes fechadas

- Edite o array `steps` em `src/canonical-prompt-generator.tsx`.
- Mantenha a opcao "Custom..." em cada etapa.

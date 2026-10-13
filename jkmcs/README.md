# JKMCS Empreendimentos — Landing Page

Landing page institucional em React + Vite + TypeScript + Tailwind CSS,
focada em geração de contatos via WhatsApp.

## Como rodar

```bash
npm install
npm run dev
```

## Configurar o formulário "Trabalhe Conosco" (EmailJS)

1. Crie uma conta gratuita em https://www.emailjs.com/
2. Crie um **Service** (ex: Gmail) e um **Template** com os campos:
   `nome_completo`, `idade`, `telefone`, `endereco`, `cargo_desejado`, `sobre_voce`.
3. Copie o Service ID, o Template ID e a Public Key.
4. Abra `src/App.tsx` e substitua:
   - `SEU_SERVICE_ID`
   - `SEU_TEMPLATE_ID`
   - `SUA_PUBLIC_KEY`

Nenhum dado é armazenado em banco — o envio vai direto para o e-mail
configurado no template do EmailJS.

## Configurar o WhatsApp

O número de teste está em `src/constants.ts` (`WHATSAPP_NUMBER`).
Altere para o número real da empresa quando estiver definido.

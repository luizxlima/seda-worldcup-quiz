# SEDA College — World Cup English Quiz 2026

Quiz interativo de inglês e Copa do Mundo para a SEDA College.

## Stack

- HTML / CSS / JS puro (sem framework)
- [Supabase](https://supabase.com) — leaderboard global
- [Vercel](https://vercel.com) — hosting (deploy automático via GitHub)

## Setup

### 1. Supabase

1. Crie um projeto em [supabase.com](https://supabase.com)
2. Vá em **SQL Editor** e execute o conteúdo de `supabase-setup.sql`
3. Pegue suas credenciais em **Project Settings → API**

### 2. Configurar credenciais

Abra `index.html` e substitua na seção de configuração do Supabase:

```js
const SUPABASE_URL = 'YOUR_SUPABASE_URL';       // ex: https://xyzxyz.supabase.co
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; // chave anon/public
```

### 3. Deploy na Vercel

1. Importe o repositório em [vercel.com](https://vercel.com)
2. Framework Preset: `Other`
3. Build Command: *(deixar em branco)*
4. Output Directory: `.`
5. Deploy ✅

Qualquer push na branch `main` faz deploy automático.

## Estrutura

```
index.html          # Página principal
styles.css          # Estilos
quiz.js             # Engine do quiz + leaderboard (Supabase)
questions-data.js   # Banco de perguntas
main.js             # Partículas / animações
supabase-setup.sql  # SQL para criar a tabela no Supabase
```

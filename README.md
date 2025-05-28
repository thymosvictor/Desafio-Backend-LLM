## **Desafio Backend LLM**

# 🚀 Consulta a um LLM (Large Language Model)

Este projeto é uma API desenvolvida em **Node.js + Express** que realiza consultas a um modelo de linguagem (LLM) hospedado na API da Hugging Face. A API recebe uma pergunta, envia ao modelo e retorna a resposta formatada.

## **Tecnologias Utilizadas**

* Node.js
* Express
* Axios (HTTP client)
* Dotenv (gerenciar variáveis de ambiente)

## **Objetivo**

Construir um backend capaz de:

1. Receber uma pergunta via requisição HTTP POST.
2. Consultar um modelo LLM (gratuito ou público) na API Hugging Face.
3. Retornar a resposta formatada no contexto da pergunta.

## **Instalação e Configuração**

### 1️⃣ **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/Desafio-Backend-LLM.git
cd Desafio-Backend-LLM
```

### 2️⃣ **Instale as dependências**

```bash
npm install
```

### 3️⃣ **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
HUGGINGFACE_API_KEY=SEU_TOKEN_DA_HUGGINGFACE
PORT=3000
MODEL_URL=https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-alpha
```

> ✅ **Observação:** Para obter seu token, acesse:
> [https://huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)

Se quiser testar com outro modelo, substitua o `MODEL_URL` por qualquer modelo compatível da Hugging Face.

## **Como Rodar**

```bash
npm run dev
```

Servidor rodando em:

```
http://localhost:3000
```

## **Rotas da API**

### ### ➕ **POST `/ask`**

**Descrição:** Envia uma pergunta para o LLM e retorna uma resposta.

**Requisição:**

* **URL:** `http://localhost:3000/ask`
* **Headers:** `Content-Type: application/json`
* **Body (JSON):**

```json
{
  "question": "O que é uma API REST?"
}
```

**Resposta (JSON):**

```json
{
  "answer": "Uma API REST é..."
}
```

## **Erros Comuns**

* **401 Unauthorized:** Verifique se o token Hugging Face está correto.
* **Model Not Found:** Confira se o `MODEL_URL` está correto.
* **Falha de conexão:** Garanta que a API Hugging Face esteja operacional e que o backend tenha acesso à internet.


Desenvolvido por Thymos Victor — Desafio do professor Geraldo Gomes: Backend com Integração de LLMs.

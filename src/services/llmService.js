const axios = require('axios');

const API_KEY = process.env.TOGETHER_API_KEY;
const MODEL_ID = process.env.MODEL_ID;

async function askLLM(question) {
  try {
    const response = await axios.post(
      'https://api.together.xyz/v1/completions',
      {
        model: MODEL_ID,
        prompt: question,
        max_tokens: 300,
        temperature: 0.7,
        top_p: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const answer = response.data.choices[0].text.trim();
    return answer;
  } catch (error) {
    console.error('Erro na API da Together:', error.response?.data || error.message);
    throw new Error('Erro ao consultar o modelo LLM.');
  }
}

module.exports = { askLLM };

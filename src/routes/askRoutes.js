const express = require('express');
const router = express.Router();
const { askLLM } = require('../services/llmService');

// Endpoint principal
router.post('/ask', async (req, res, next) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'A pergunta é obrigatória.' });
  }

  try {
    const answer = await askLLM(question);
    res.json({ answer });
  } catch (error) {
    next(error);
  }
});

// Endpoint de saúde
router.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Servidor rodando normalmente.' });
});

module.exports = router;

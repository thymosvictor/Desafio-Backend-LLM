const express = require('express');
const cors = require('cors');
const askRoutes = require('./routes/askRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', askRoutes);

// Middleware de erro
app.use((err, req, res, next) => {
  console.error('Erro:', err.message);
  res.status(500).json({ error: err.message || 'Erro interno do servidor' });
});

module.exports = app;

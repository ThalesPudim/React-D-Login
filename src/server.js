const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3001;

app.use(cors()); // Habilita o CORS para todas as requisições
app.use(express.json());

// Middleware para lidar com a requisição OPTIONS
app.options('*', cors()); // Configura CORS para a requisição OPTIONS

// Rota para autenticar o usuário
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Verificar se o usuário existe no arquivo user.json
  fs.readFile('user.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo user.json', err);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }

    const users = JSON.parse(data);
    const user = users.find(user => user.email === email);

    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    // Se o login for bem-sucedido, retornar sucesso
    res.json({ success: true });
  });
});

// Tratamento de erro para o CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
const express = require("express");
const app = express();

//criando a rota inicial
app.get("/", function (req, res) {
  res.send(`
    <html>
      <body style="font-family: Arial, sans-serif;">
        <h1>🥊 Bem-vindo ao Sistema do Acesso MMA!</h1>
        <p>Acesse as rotas <b>/lutadores</b> ou <b>/evento/12</b> para testar a aplicação.</p>
      </body>
    </html>
  `);
});

//rota da lista de lutadores
app.get("/lutadores", function (req, res) {
  res.send(`
    <html>
      <body style="font-family: Arial, sans-serif;">
        <h1>Lista de Lutadores Confirmados</h1>
        <ul>
          <li>Ricardo Capoeira</li>
          <li>Yuri Anselmo</li>
          <li>Emily Nauru</li>
        </ul>
      </body>
    </html>
  `);
});

//rota com parametro opcional
app.get("/evento/:edicao?", function (req, res) {
  const edicao = req.params.edicao;

  if (edicao) {
    res.send(`
      <html>
        <body style="font-family: Arial, sans-serif;">
          <h1>Detalhes da Edição ${edicao}</h1>
          <p>Os ingressos para o Acesso ${edicao} já estão à venda!</p>
        </body>
      </html>
    `);
  } else {
    res.send(`
      <html>
        <body style="font-family: Arial, sans-serif;">
          <h1>Página Geral de Eventos</h1>
          <p>Você não especificou a edição. Adicione o número na URL (ex: /evento/5).</p>
        </body>
      </html>
    `);
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function (erro) {
  // Verifica se ocorreu algum erro ao tentar "ouvir" a porta
  if (erro) {
    console.log("Erro ao iniciar o servidor: " + erro);
  } else {
    console.log(`Servidor rodando na porta ${PORT}`);
  }
});

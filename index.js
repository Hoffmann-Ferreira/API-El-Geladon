import express from "express";

const app = express();
app.use(express.json());
const port = 3005;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

app.get('/', function (req, res) {
  res.send('Hello World');
});

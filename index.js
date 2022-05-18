import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const port = 3005;

//Banco de dados local;
const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/chocolate-belga.png',
    preco: 7.0,
  },
];

// servidor local
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

//Rotas
// app.get('/', function (req, res) {
//   res.send('Hello World');
// });

app.get("/paletas/find-paletas/", (req, res) =>{
  res.send(paletas);
});

app.get("/paletas/find-paletas/", (req, res) =>{
  const idParam = req.params.id;
  const chosenPaleta = paletas.find((paleta) => paleta.id == idParam);
  res.send(chosenPaleta);
});
import express, { response } from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
const port = 3005;

//Tinha o banco de dados local;
//Rotas

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/paletas/listar-todas/', (req, res) => {
  res.send(paletas);
});

app.get('/paletas/paleta/:id', (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = paletas.find((paleta) => paleta.id == idParam);

  if(chosenPaleta === undefined){
    return response.status(404).send("Paleta inexistente")
  };
  res.send(chosenPaleta);
});

// servidor local
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

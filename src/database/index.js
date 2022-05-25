import {
  connect
} from "mongoose";

 export const connectDatabase = () =>{
  connect('mongodb://localhost:27017/el-geladon-db').then(() =>{
    console.log("Banco de dados on")
  }).catch((err) => {
    console.log(`Erro na conexão com o banco de dados MongoDB: ${err} `)
  });
};

const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/img/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/img/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/img/chocolate-belga.png',
    preco: 7.0,
  },
];

export default paletas;

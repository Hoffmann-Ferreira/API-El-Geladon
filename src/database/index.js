import mongoose from 'mongoose';
const { connect } = mongoose;

export const connectDatabase = () => {
  connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Banco de dados on');
    })
    .catch((err) => {
      console.log(`Erro na conexão com o banco de dados MongoDB: ${err} `);
    });
};


// mongodb://localhost:27017/el-geladon-db
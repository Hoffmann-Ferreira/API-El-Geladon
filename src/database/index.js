import { connect } from 'mongoose';

export const connectDatabase = () => {
  connect('mongodb://localhost:27017/el-geladon-db', {
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

import app from './app';
import { connectDatabase } from './src/database';
import { config } from 'dotenv';

const port = process.env.PORT ||3005;

app.listen(port, () => {
  connectDatabase();
  console.log(`Servidor rodando em http://localhost:${port}`);
});

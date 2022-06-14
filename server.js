import "dotenv/config"
import app from './app.js';
import { connectDatabase } from './src/database/index.js';


const port = process.env.PORT || 3005;

app.listen(port, () => {
  connectDatabase();
  console.log(`Servidor rodando em http://localhost:${port}`);
});

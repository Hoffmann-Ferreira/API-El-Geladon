import express, { response } from 'express';
import cors from 'cors';
import paletasRouter from './src/routes/paletas.routes';


const app = express();
app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.use('/paletas', paletasRouter);

export default app;

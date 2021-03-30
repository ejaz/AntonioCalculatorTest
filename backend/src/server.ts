import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors';
import calculatorRoutes from './routes/calculatorRoutes';

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string) || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/calculator', calculatorRoutes)

app.listen(PORT, () => {
  console.log(`Server is listning on port: ${PORT}`)
})


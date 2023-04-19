import cors from 'cors';
import express, { Express } from 'express';
import helmet from 'helmet';

export const app: Express = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { signupRouter } from './routes';

dotenv.config();

const app: Express = express();
app.use(express.json());

app.use('/api/auth', signupRouter);

export { app };

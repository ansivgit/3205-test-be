import * as dotenv from 'dotenv';
import express from 'express';
import usersRouter from './routes/users-routes';
import { errorHandler, notFoundHandler } from './middleware/errorHandlers';
import { DEFAULT_CONFIG, USERS_CONFIG } from './app-config';

dotenv.config();

const { PORT } = DEFAULT_CONFIG;

const app = express();
app.set('x-powered-by', false);
app.use(express.json());

app.listen(PORT);

app.use(USERS_CONFIG.PATH, usersRouter);
app.use(notFoundHandler);
app.use(errorHandler);

app.use((err: unknown) => {
  if (err) return console.error(err);
  return console.log(`Listening on port ${PORT}`);
});

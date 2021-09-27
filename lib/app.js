import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import pokeController from './controllers/pokeController.js';

const app = express();

app.use(express.json());

app.use('/api/v2/pokemon', pokeController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;

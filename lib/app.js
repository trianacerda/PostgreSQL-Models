import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import getController from './controllers/getController.js';
import postController from './controllers/postController.js';
import getByIdController from './controllers/getByIdController.js';

const app = express();

app.use(express.json());

app.use('/api/v2/pokemon', getController);
app.use('/api/v2/pokemon', postController);
app.use('/api/v2/pokemon/:id', getByIdController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;

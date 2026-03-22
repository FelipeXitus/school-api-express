import express from 'express';
import cors from 'cors';
import { router } from './routes';
import { notFoundHandler } from './middlewares/not-found-handler';
import { errorHandler } from './middlewares/error-handler';
import { setupSwagger } from './swagger-docs/swagger';
const app = express();

setupSwagger(app);
app.use(cors());
app.use(express.json());

app.use('/api', router);

// Handlers devem vir **depois** das rotas
app.use(notFoundHandler);
app.use(errorHandler);

export { app };
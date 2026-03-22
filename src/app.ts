import express from 'express';
import cors from 'cors';
import { requestLogger } from './middlewares/request-logger';
import { errorHandler } from './middlewares/error-handler';
import { notFoundHandler } from './middlewares/not-found-handler';
import { coursesRouter } from './routes/courses.routes';
import { studentsRouter } from './routes/students.routes';
import { enrollmentsRouter } from './routes/enrollments.routes';

const app = express();

app.use(cors());
app.use(express.json());

// Logger de requisições
app.use(requestLogger);

// Rotas
app.use('/api/courses', coursesRouter);
app.use('/api/students', studentsRouter);
app.use('/api/enrollments', enrollmentsRouter);

// 404
app.use(notFoundHandler);

// Error handler centralizado
app.use(errorHandler);

export { app };

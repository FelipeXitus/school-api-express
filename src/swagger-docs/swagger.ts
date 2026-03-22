import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

export function setupSwagger(app: Express) {
  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'School API - Versão A',
        version: '1.0.0',
        description: 'API de gerenciamento de cursos, estudantes e matrículas',
      },
      servers: [
        {
          url: 'http://localhost:3000/api',
          description: 'Servidor local',
        },
      ],
    },
    apis: ['./src/routes/*.ts', './src/swagger-docs/base.ts'],
  };

  const swaggerSpec = swaggerJsdoc(options);
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}


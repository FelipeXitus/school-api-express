import { Request, Response, NextFunction } from 'express';
import { logger } from '../logger';

export function errorHandler(err: any, req: Request, res: Response, _next: NextFunction) {
  const timestamp = new Date().toISOString();
  const path = req.originalUrl;

  // Log estruturado do erro
  logger.error({
    message: err.message,
    code: err.code,
    status: err.status,
    path,
    stack: err.stack
  });

  // Prisma: registro não encontrado
  if (err.code === 'P2025') {
    return res.status(404).json({
      message: 'Recurso não encontrado',
      path,
      timestamp
    });
  }

  // Prisma: unique constraint (email duplicado)
  if (err.code === 'P2002') {
    return res.status(409).json({
      message: 'Conflito: valor já existente',
      path,
      timestamp
    });
  }

  // Prisma: FK inválida
  if (err.code === 'P2003') {
    return res.status(400).json({
      message: 'Payload inválido: referência inexistente',
      path,
      timestamp
    });
  }

  // Erros manuais
  if (err.status) {
    return res.status(err.status).json({
      message: err.message,
      path,
      timestamp
    });
  }

  // Erro inesperado
  return res.status(500).json({
    message: 'Erro interno no servidor',
    path,
    timestamp
  });
}

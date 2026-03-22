import { Request, Response, NextFunction } from 'express';

export function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  console.error('Erro interno:', err);

  return res.status(500).json({
    statusCode: 500,
    message: 'Erro interno no servidor',
  });
}
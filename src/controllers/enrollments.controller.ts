import { Request, Response } from 'express';
import { EnrollmentService } from '../services/enrollments.service';
import { validateCreateEnrollment } from '../validations/enrollment.validation';

const enrollmentService = new EnrollmentService();

export class EnrollmentsController {
  async create(req: Request, res: Response) {
    try {
      const dto = validateCreateEnrollment(req.body);
      const enrollment = await enrollmentService.create(dto);
      return res.status(201).json(enrollment);
    } catch (error: any) {
      // Matrícula duplicada → 409 Conflict
      if (error.message === 'Estudante já matriculado neste curso') {
        throw { status: 409, message: error.message };
      }
  
      // Erro de validação → 400 Bad Request
      if (error.code === 'P2003') {
        throw { status: 400, message: 'studentId ou courseId inválido' };
      }
  
      throw { status: 500, message: 'Erro interno ao criar matrícula' };
    }
  }

  async findAll(_req: Request, res: Response) {
    const enrollments = await enrollmentService.findAll();
    return res.json(enrollments);
  }

  async findById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const enrollment = await enrollmentService.findById(id);
    if (!enrollment) throw { status: 404, message: 'Matrícula não encontrada' };
    return res.json(enrollment);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
  
    try {
      await enrollmentService.delete(id);
      return res.status(204).send();
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw { status: 404, message: 'Matrícula não encontrada' };
      }
  
      throw { status: 500, message: 'Erro interno ao deletar matrícula' };
    }
  }
}

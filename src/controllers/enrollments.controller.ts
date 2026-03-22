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
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }

  async findAll(_req: Request, res: Response) {
    const enrollments = await enrollmentService.findAll();
    return res.json(enrollments);
  }

  async findById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const enrollment = await enrollmentService.findById(id);
    if (!enrollment) return res.status(404).json({ message: 'Matrícula não encontrada' });
    return res.json(enrollment);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    await enrollmentService.delete(id);
    return res.status(204).send();
  }
}

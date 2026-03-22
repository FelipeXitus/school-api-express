import { Request, Response } from 'express';
import { StudentService } from '../services/students.service';
import { validateCreateStudent, validateUpdateStudent } from '../validations/student.validation';

const studentService = new StudentService();

export class StudentsController {
  async create(req: Request, res: Response) {
    try {
      const dto = validateCreateStudent(req.body);
      const student = await studentService.create(dto);
      return res.status(201).json(student);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }

  async findAll(_req: Request, res: Response) {
    const students = await studentService.findAll();
    return res.json(students);
  }

  async findById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const student = await studentService.findById(id);
    if (!student) return res.status(404).json({ message: 'Estudante não encontrado' });
    return res.json(student);
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const dto = validateUpdateStudent(req.body);
      const student = await studentService.update(id, dto);
      return res.json(student);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    await studentService.delete(id);
    return res.status(204).send();
  }
}

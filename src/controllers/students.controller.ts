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
    } catch (error: any) {
      // Email duplicado → 409 Conflict
      if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
        throw { status: 409, message: 'E-mail já está em uso' };
      }
  
      // Erro de validação ou outros erros conhecidos
      if (error.message) {
        throw { status: 400, message: error.message };
      }
  
      // Erro inesperado
      throw { status: 500, message: 'Erro interno ao criar estudante' };
    }
  }

  async findAll(_req: Request, res: Response) {
    const students = await studentService.findAll();
    return res.json(students);
  }

  async findById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const student = await studentService.findById(id);
    if (!student) throw { status: 404, message: 'Estudante não encontrado' };
    return res.json(student);
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const dto = validateUpdateStudent(req.body);
      const student = await studentService.update(id, dto);
      return res.json(student);
    } catch (err: any) {
      throw { status: 400, message: err.message };
    }
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
  
    try {
      await studentService.delete(id);
      return res.status(204).send();
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw { status: 404, message: 'Estudante não encontrado' };
      }
  
      throw { status: 500, message: 'Erro interno ao deletar estudante' };
    }
  }
}

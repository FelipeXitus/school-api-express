import { Request, Response } from 'express';
import { CourseService } from '../services/courses.service';
import { validateCreateCourse, validateUpdateCourse } from '../validations/course.validation';

const courseService = new CourseService();

export class CoursesController {
  async create(req: Request, res: Response) {
    try {
      const dto = validateCreateCourse(req.body);
      const course = await courseService.create(dto);
      return res.status(201).json(course);
    } catch (err: any) {
      throw { status: 400, message: err.message };
    }
  }

  async findAll(_req: Request, res: Response) {
    const courses = await courseService.findAll();
    return res.json(courses);
  }

  async findById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const course = await courseService.findById(id);
    if (!course) throw { status: 404, message: 'Curso não encontrado' };
    return res.json(course);
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const dto = validateUpdateCourse(req.body);
      const course = await courseService.update(id, dto);
      return res.json(course);
    } catch (err: any) {
      throw { status: 400, message: err.message };
    }
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);

    try {
      await courseService.delete(id);
      return res.status(204).send();
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw { status: 404, message: 'Curso não encontrado' };
      }
  
      throw { status: 500, message: 'Erro interno ao deletar curso' };
    }
  }
}
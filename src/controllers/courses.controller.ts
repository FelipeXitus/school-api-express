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
      return res.status(400).json({ message: err.message });
    }
  }

  async findAll(_req: Request, res: Response) {
    const courses = await courseService.findAll();
    return res.json(courses);
  }

  async findById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const course = await courseService.findById(id);
    if (!course) return res.status(404).json({ message: 'Curso não encontrado' });
    return res.json(course);
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const dto = validateUpdateCourse(req.body);
      const course = await courseService.update(id, dto);
      return res.json(course);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    await courseService.delete(id);
    return res.status(204).send();
  }
}
import { CreateCourseDto, UpdateCourseDto } from '../dtos/course.dto';

export function validateCreateCourse(body: any): CreateCourseDto {
  if (!body?.title || typeof body.title !== 'string') {
    throw new Error('Campo "title" é obrigatório e deve ser string');
  }

  return {
    title: body.title,
    category: body.category,
    description: body.description,
  };
}

export function validateUpdateCourse(body: any): UpdateCourseDto {
  const dto: UpdateCourseDto = {};
  if (body.title !== undefined) {
    if (typeof body.title !== 'string') throw new Error('Campo "title" deve ser string');
    dto.title = body.title;
  }
  if (body.category !== undefined) {
    if (typeof body.category !== 'string') throw new Error('Campo "category" deve ser string');
    dto.category = body.category;
  }
  if (body.description !== undefined) {
    if (typeof body.description !== 'string') throw new Error('Campo "description" deve ser string');
    dto.description = body.description;
  }
  return dto;
}
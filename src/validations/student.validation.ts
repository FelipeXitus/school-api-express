import { CreateStudentDto, UpdateStudentDto } from '../dtos/student.dto';

export function validateCreateStudent(body: any): CreateStudentDto {
  if (!body?.name || typeof body.name !== 'string') {
    throw new Error('Campo "name" é obrigatório e deve ser string');
  }
  if (!body?.email || typeof body.email !== 'string') {
    throw new Error('Campo "email" é obrigatório e deve ser string');
  }

  return {
    name: body.name,
    email: body.email,
  };
}

export function validateUpdateStudent(body: any): UpdateStudentDto {
  const dto: UpdateStudentDto = {};
  if (body.name !== undefined) {
    if (typeof body.name !== 'string') throw new Error('Campo "name" deve ser string');
    dto.name = body.name;
  }
  if (body.email !== undefined) {
    if (typeof body.email !== 'string') throw new Error('Campo "email" deve ser string');
    dto.email = body.email;
  }
  return dto;
}

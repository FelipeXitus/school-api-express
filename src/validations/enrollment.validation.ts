import { CreateEnrollmentDto } from '../dtos/enrollment.dto';

export function validateCreateEnrollment(body: any): CreateEnrollmentDto {
  if (typeof body?.studentId !== 'number') {
    throw new Error('Campo "studentId" é obrigatório e deve ser number');
  }
  if (typeof body?.courseId !== 'number') {
    throw new Error('Campo "courseId" é obrigatório e deve ser number');
  }

  return {
    studentId: body.studentId,
    courseId: body.courseId,
  };
}

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class EnrollmentService {
  async create(data: { studentId: number; courseId: number }) {
    const student = await prisma.student.findUnique({
      where: { id: data.studentId },
    });
    if (!student) throw new Error('Estudante não encontrado');

    const course = await prisma.course.findUnique({
      where: { id: data.courseId },
    });
    if (!course) throw new Error('Curso não encontrado');

    const existing = await prisma.enrollment.findUnique({
      where: {
        studentId_courseId: {
          studentId: data.studentId,
          courseId: data.courseId,
        },
      },
    });

    if (existing) throw new Error('Estudante já matriculado neste curso');

    return prisma.enrollment.create({ data });
  }

  async findAll() {
    return prisma.enrollment.findMany({
      include: {
        student: true,
        course: true,
      },
    });
  }

  async findById(id: number) {
    return prisma.enrollment.findUnique({
      where: { id },
      include: {
        student: true,
        course: true,
      },
    });
  }

  async delete(id: number) {
    return prisma.enrollment.delete({ where: { id } });
  }
}

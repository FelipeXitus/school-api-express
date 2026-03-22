import { EnrollmentService } from '../../src/services/enrollments.service';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const service = new EnrollmentService();

describe('EnrollmentService Unit', () => {
  let student: any;
  let course: any;

  beforeAll(async () => {
    await prisma.enrollment.deleteMany();
    await prisma.student.deleteMany();
    await prisma.course.deleteMany();

    student = await prisma.student.create({
      data: { name: 'Unit', email: 'unit@unit.com' },
    });

    course = await prisma.course.create({
      data: { title: 'Unit Course', category: 'Test', description: 'Desc' },
    });
  });

  it('create()', async () => {
    const enrollment = await service.create({
      studentId: student.id,
      courseId: course.id,
    });

    expect(enrollment).toHaveProperty('id');
  });

  it('findAll()', async () => {
    const list = await service.findAll();
    expect(Array.isArray(list)).toBe(true);
  });
});
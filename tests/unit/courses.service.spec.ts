import { CourseService } from '../../src/services/courses.service';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const service = new CourseService();

describe('CourseService Unit', () => {
  beforeAll(async () => {
    await prisma.enrollment.deleteMany();
    await prisma.course.deleteMany();
  });

  it('create()', async () => {
    const course = await service.create({
      title: 'Unit Test Course',
      category: 'Test',
      description: 'Desc',
    });

    expect(course).toHaveProperty('id');
  });

  it('findAll()', async () => {
    const list = await service.findAll();
    expect(Array.isArray(list)).toBe(true);
  });
});
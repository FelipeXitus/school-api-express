import { StudentService } from '../../src/services/students.service';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const service = new StudentService();

describe('StudentService Unit', () => {
  beforeAll(async () => {
    await prisma.enrollment.deleteMany();
    await prisma.student.deleteMany();
  });

  it('create()', async () => {
    const student = await service.create({
      name: 'Unit Student',
      email: 'unit@student.com',
    });

    expect(student).toHaveProperty('id');
  });

  it('findAll()', async () => {
    const list = await service.findAll();
    expect(Array.isArray(list)).toBe(true);
  });
});
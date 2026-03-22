import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class StudentService {
  async create(data: { name: string; email: string }) {
    return prisma.student.create({ data });
  }

  async findAll() {
    return prisma.student.findMany();
  }

  async findById(id: number) {
    return prisma.student.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<{ name: string; email: string }>) {
    return prisma.student.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return prisma.student.delete({ where: { id } });
  }
}

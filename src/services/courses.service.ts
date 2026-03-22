import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CourseService {
  async create(data: { title: string; category?: string; description?: string }) {
    return prisma.course.create({ data });
  }

  async findAll() {
    return prisma.course.findMany();
  }

  async findById(id: number) {
    return prisma.course.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<{ title: string; category?: string; description?: string }>) {
    return prisma.course.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return prisma.course.delete({ where: { id } });
  }
}

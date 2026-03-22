import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed...');

  // Criar cursos
  const course1 = await prisma.course.create({
    data: {
      title: 'Matemática Básica',
      category: 'Exatas',
      description: 'Curso introdutório de matemática',
    },
  });

  const course2 = await prisma.course.create({
    data: {
      title: 'História Geral',
      category: 'Humanas',
      description: 'Panorama histórico mundial',
    },
  });

  // Criar estudantes
  const student1 = await prisma.student.create({
    data: {
      name: 'Felipe Andrade',
      email: 'felipe@example.com',
    },
  });

  const student2 = await prisma.student.create({
    data: {
      name: 'Maria Silva',
      email: 'maria@example.com',
    },
  });

  // Criar matrículas
  await prisma.enrollment.create({
    data: {
      studentId: student1.id,
      courseId: course1.id,
    },
  });

  await prisma.enrollment.create({
    data: {
      studentId: student2.id,
      courseId: course2.id,
    },
  });

  console.log('🌱 Seed finalizado com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
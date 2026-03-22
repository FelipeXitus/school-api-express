import request from 'supertest';
import { app } from '../src/app';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('Enrollments E2E', () => {
  let student: any;
  let course: any;

  beforeAll(async () => {
    await prisma.enrollment.deleteMany();
    await prisma.student.deleteMany();
    await prisma.course.deleteMany();

    student = await prisma.student.create({
      data: { name: 'Aluno Teste', email: 'aluno@example.com' },
    });

    course = await prisma.course.create({
      data: { title: 'Curso Teste', category: 'Cat', description: 'Desc' },
    });
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('deve criar uma matrícula', async () => {
    const res = await request(app)
      .post('/api/enrollments')
      .send({
        studentId: student.id,
        courseId: course.id,
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

  it('deve listar matrículas', async () => {
    const res = await request(app).get('/api/enrollments');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('deve buscar matrícula por id', async () => {
    const enrollment = await prisma.enrollment.create({
      data: { studentId: student.id, courseId: course.id },
    });

    const res = await request(app).get(`/api/enrollments/${enrollment.id}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(enrollment.id);
  });

  it('deve deletar uma matrícula', async () => {
    const enrollment = await prisma.enrollment.create({
      data: { studentId: student.id, courseId: course.id },
    });

    const res = await request(app).delete(`/api/enrollments/${enrollment.id}`);
    expect(res.status).toBe(204);
  });
});
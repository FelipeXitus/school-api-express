import request from 'supertest';
import { app } from '../src/app';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('Courses E2E', () => {
  beforeAll(async () => {
    await prisma.enrollment.deleteMany();
    await prisma.student.deleteMany();
    await prisma.course.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('deve criar um curso', async () => {
    const res = await request(app)
      .post('/api/courses')
      .send({
        title: 'Curso de Teste',
        category: 'Testes',
        description: 'Descrição de teste',
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('Curso de Teste');
  });

  it('deve listar cursos', async () => {
    const res = await request(app).get('/api/courses');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('deve buscar curso por id', async () => {
    const created = await prisma.course.create({
      data: { title: 'Outro Curso', category: 'Cat', description: 'Desc' },
    });

    const res = await request(app).get(`/api/courses/${created.id}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(created.id);
  });

  it('deve atualizar um curso', async () => {
    const created = await prisma.course.create({
      data: { title: 'Antigo', category: 'Cat', description: 'Desc' },
    });

    const res = await request(app)
      .put(`/api/courses/${created.id}`)
      .send({ title: 'Novo Título' });

    expect(res.status).toBe(200);
    expect(res.body.title).toBe('Novo Título');
  });

  it('deve deletar um curso', async () => {
    const created = await prisma.course.create({
      data: { title: 'Para deletar', category: 'Cat', description: 'Desc' },
    });

    const res = await request(app).delete(`/api/courses/${created.id}`);
    expect(res.status).toBe(204);
  });
});

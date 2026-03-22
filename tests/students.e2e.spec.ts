import request from 'supertest';
import { app } from '../src/app';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('Students E2E', () => {
  beforeAll(async () => {
    await prisma.enrollment.deleteMany();
    await prisma.student.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('deve criar um estudante', async () => {
    const res = await request(app)
      .post('/api/students')
      .send({
        name: 'João Teste',
        email: 'joao@example.com',
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

  it('deve listar estudantes', async () => {
    const res = await request(app).get('/api/students');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('deve buscar estudante por id', async () => {
    const student = await prisma.student.create({
      data: { name: 'Maria', email: 'maria@example.com' },
    });

    const res = await request(app).get(`/api/students/${student.id}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(student.id);
  });

  it('deve atualizar um estudante', async () => {
    const student = await prisma.student.create({
      data: { name: 'Antigo', email: 'antigo@example.com' },
    });

    const res = await request(app)
      .put(`/api/students/${student.id}`)
      .send({ name: 'Novo Nome' });

    expect(res.status).toBe(200);
    expect(res.body.name).toBe('Novo Nome');
  });

  it('deve deletar um estudante', async () => {
    const student = await prisma.student.create({
      data: { name: 'Para deletar', email: 'del@example.com' },
    });

    const res = await request(app).delete(`/api/students/${student.id}`);
    expect(res.status).toBe(204);
  });
});
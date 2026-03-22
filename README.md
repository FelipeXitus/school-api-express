📘 School API — Versão A
API REST para gerenciamento de Cursos, Estudantes e Matrículas, construída com Node.js, Express, Prisma ORM, PostgreSQL, TypeScript, Swagger e Testes Automatizados (Unitários + E2E).

📚 Sumário
Sobre o Projeto

Tecnologias Utilizadas

Estrutura do Projeto

Configuração do Ambiente

Banco de Dados

Rodando o Projeto

Testes Automatizados

Documentação Swagger

Coleção Postman

Arquitetura da Aplicação

Rotas Disponíveis

📚 Sobre o Projeto
A School API permite:

Criar, listar, atualizar e remover cursos

Criar, listar, atualizar e remover estudantes

Criar, listar e remover matrículas

A arquitetura segue boas práticas com:

Controllers

Services

DTOs

Validations

Middlewares

Testes unitários e E2E

Documentação Swagger

Coleção Postman

🏗 Tecnologias Utilizadas
Node.js

Express

Prisma ORM (v6.x)

PostgreSQL

TypeScript

Jest + Supertest

Swagger (OpenAPI 3.0)

📁 Estrutura do Projeto
txt
src/
  app.ts
  server.ts
  swagger.ts
  swagger-docs/
    base.ts
  controllers/
    courses.controller.ts
    students.controller.ts
    enrollments.controller.ts
  services/
    courses.service.ts
    students.service.ts
    enrollments.service.ts
  validations/
    course.validation.ts
    student.validation.ts
    enrollment.validation.ts
  dtos/
    course.dto.ts
    student.dto.ts
    enrollment.dto.ts
  routes/
    courses.routes.ts
    students.routes.ts
    enrollments.routes.ts
  middlewares/
    not-found-handler.ts
    error-handler.ts
prisma/
  schema.prisma
  seed.ts
tests/
  unit/
    courses.service.spec.ts
    students.service.spec.ts
    enrollments.service.spec.ts
  e2e/
    courses.e2e.spec.ts
    students.e2e.spec.ts
    enrollments.e2e.spec.ts
⚙️ Configuração do Ambiente
Crie um arquivo .env:

DATABASE_URL="postgresql://postgres:postgres@localhost:5432/school?schema=public"
PORT=3000
🗄 Banco de Dados
Criar as tabelas:
bash
npx prisma migrate dev
Rodar o seed:
bash
npx prisma db seed
▶️ Rodando o Projeto
Instalar dependências:
bash
npm install
Rodar em modo desenvolvimento:
bash
npm run dev
Rodar em produção:
bash
npm run build
npm start
🧪 Testes Automatizados
Testes unitários:
bash
npm run test:unit
Testes E2E:
bash
npm run test:e2e
Testes completos:
bash
npm test
📘 Documentação Swagger
A documentação completa está disponível em:

http://localhost:3000/api/docs
Ela inclui:

Schemas

DTOs

Todas as rotas CRUD

Exemplos de requisição

Parâmetros e respostas

Os schemas e tags estão centralizados em:

src/swagger-docs/base.ts
📬 Coleção Postman
O arquivo JSON da coleção está disponível em:

school-api.postman_collection.json

Todas as rotas

Exemplos de body

Organização por pastas

🧱 Arquitetura da Aplicação
✔ Controllers
Recebem a requisição, validam DTOs e chamam os services.

✔ Services
Contêm toda a lógica de negócio e acesso ao Prisma.

✔ DTOs
Definem o formato esperado de entrada.

✔ Validations
Garantem que os dados recebidos são válidos.

✔ Middlewares
notFoundHandler → 404

errorHandler → 500

✔ Rotas
Organizadas por domínio (courses, students, enrollments).

🔗 Rotas Disponíveis
| Método | Rota | Descrição |
| --- | --- | --- |
| GET | /api/courses | Lista cursos |
| POST | /api/courses | Cria curso |
| GET | /api/courses/:id | Busca curso |
| PUT | /api/courses/:id | Atualiza curso |
| DELETE | /api/courses/:id | Remove curso |

| Método | Rota | Descrição |
| --- | --- | --- |
| GET | /api/students | Lista estudantes |
| POST | /api/students | Cria estudante |
| GET | /api/students/:id | Busca estudante |
| PUT | /api/students/:id | Atualiza estudante |
| DELETE | /api/students/:id | Remove estudante |

| Método | Rota | Descrição |
| --- | --- | --- |
| GET | /api/enrollments | Lista matrículas |
| POST | /api/enrollments | Cria matrícula |
| GET | /api/enrollments/:id | Busca matrícula |
| DELETE | /api/enrollments/:id | Remove matrícula |
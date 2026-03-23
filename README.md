📘 School API — Versão A
API REST para gerenciamento de Cursos, Estudantes e Matrículas, construída com Node.js, Express, Prisma ORM, PostgreSQL, TypeScript, Swagger, Logger estruturado e Testes Automatizados (Unitários + E2E).

📚 Sobre o Projeto
## A School API permite:

Criar, listar, atualizar e remover cursos

Criar, listar, atualizar e remover estudantes

Criar, listar e remover matrículas

## A arquitetura segue boas práticas modernas:

Controllers

Services

DTOs

Validations

Middlewares

Logger estruturado (Pino)

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

Pino (logger estruturado)

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
request-logger.ts
not-found-handler.ts
error-handler.ts
logger.ts
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
## Crie um arquivo .env:

env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/school?schema=public"
## PORT=3000
LOG_LEVEL=info
🗄 Banco de Dados
## Criar as tabelas:
bash
npx prisma migrate dev
## Rodar o seed:
bash
npx prisma db seed
▶️ Rodando o Projeto
## Instalar dependências:
bash
npm install
## Rodar em modo desenvolvimento:
bash
npm run dev
## Rodar em produção:
bash
npm run build
npm start
🧪 Testes Automatizados
## Testes unitários:
bash
npm run test:unit
## Testes E2E:
bash
npm run test:e2e
## Testes completos:
bash
npm test
📘 Documentação Swagger
## A documentação completa está disponível em:

Código
[http://localhost:3000/api/docs](http://localhost:3000/api/docs)
## Ela inclui:

Schemas

DTOs

Todas as rotas CRUD

Exemplos de requisição

Parâmetros e respostas

## Os schemas e tags estão centralizados em:

Código
src/swagger-docs/base.ts
📬 Coleção Postman
## O arquivo JSON da coleção está disponível em:

Código
school-api.postman_collection.json
## Inclui:

Todas as rotas

Exemplos de body

Organização por pastas

📊 Logger Estruturado
A API utiliza Pino para logs estruturados.

## Logs incluem:
método

rota

status

duração

timestamp

stack trace em caso de erro

## Middlewares envolvidos:
Código
src/logger.ts
src/middlewares/request-logger.ts
src/middlewares/error-handler.ts
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
requestLogger → log de requisições

notFoundHandler → 404

errorHandler → erros padronizados

✔ Rotas
Organizadas por domínio (courses, students, enrollments).

🔗 Rotas Disponíveis
📘 Courses
Método	Rota	Descrição
GET	/api/courses	Lista cursos
POST	/api/courses	Cria curso
GET	/api/courses/:id	Busca curso
PUT	/api/courses/:id	Atualiza curso
DELETE	/api/courses/:id	Remove curso

👤 Students
Método	Rota	Descrição
GET	/api/students	Lista estudantes
POST	/api/students	Cria estudante
GET	/api/students/:id	Busca estudante
PUT	/api/students/:id	Atualiza estudante
DELETE	/api/students/:id	Remove estudante

🎓 Enrollments
Método	Rota	Descrição
GET	/api/enrollments	Lista matrículas
POST	/api/enrollments	Cria matrícula
GET	/api/enrollments/:id	Busca matrícula
DELETE	/api/enrollments/:id	Remove matrícula
/**
 * @swagger
 * /students:
 *   get:
 *     tags: [Students]
 *     summary: Lista todos os estudantes
 *     responses:
 *       200:
 *         description: Lista de estudantes
 *
 *   post:
 *     tags: [Students]
 *     summary: Cria um novo estudante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateStudentDto'
 *     responses:
 *       201:
 *         description: Estudante criado
 */

/**
 * @swagger
 * /students/{id}:
 *   get:
 *     tags: [Students]
 *     summary: Busca um estudante pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Estudante encontrado
 *       404:
 *         description: Estudante não encontrado
 *
 *   put:
 *     tags: [Students]
 *     summary: Atualiza um estudante
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateStudentDto'
 *     responses:
 *       200:
 *         description: Estudante atualizado
 *
 *   delete:
 *     tags: [Students]
 *     summary: Remove um estudante
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Estudante removido
 */
import { Router } from 'express';
import { StudentsController } from '../controllers/students.controller';

const router = Router();
const controller = new StudentsController();

router.post('/', (req, res) => controller.create(req, res));
router.get('/', (req, res) => controller.findAll(req, res));
router.get('/:id', (req, res) => controller.findById(req, res));
router.put('/:id', (req, res) => controller.update(req, res));
router.delete('/:id', (req, res) => controller.delete(req, res));

export { router as studentsRouter };

/**
 * @swagger
 * /enrollments:
 *   get:
 *     tags: [Enrollments]
 *     summary: Lista todas as matrículas
 *     responses:
 *       200:
 *         description: Lista de matrículas
 *
 *   post:
 *     tags: [Enrollments]
 *     summary: Cria uma nova matrícula
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateEnrollmentDto'
 *     responses:
 *       201:
 *         description: Matrícula criada
 */

/**
 * @swagger
 * /enrollments/{id}:
 *   get:
 *     tags: [Enrollments]
 *     summary: Busca uma matrícula pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Matrícula encontrada
 *       404:
 *         description: Matrícula não encontrada
 *
 *   delete:
 *     tags: [Enrollments]
 *     summary: Remove uma matrícula
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Matrícula removida
 */
import { Router } from 'express';
import { EnrollmentsController } from '../controllers/enrollments.controller';

const router = Router();
const controller = new EnrollmentsController();

router.post('/', (req, res) => controller.create(req, res));
router.get('/', (req, res) => controller.findAll(req, res));
router.get('/:id', (req, res) => controller.findById(req, res));
router.delete('/:id', (req, res) => controller.delete(req, res));

export { router as enrollmentsRouter };
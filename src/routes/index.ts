import { Router } from 'express';
import { coursesRouter as coursesRoutes } from './courses.routes';
import { studentsRouter as studentsRoutes } from './students.routes';
import { enrollmentsRouter as enrollmentsRoutes } from './enrollments.routes';
import healthRoutes from './health.routes';

const router = Router();

router.use('/health', healthRoutes);
router.use('/courses', coursesRoutes);
router.use('/students', studentsRoutes);
router.use('/enrollments', enrollmentsRoutes);

export { router };
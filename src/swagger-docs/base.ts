/**
 * @swagger
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         category:
 *           type: string
 *         description:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *
 *     CreateCourseDto:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         title:
 *           type: string
 *         category:
 *           type: string
 *         description:
 *           type: string
 *
 *     UpdateCourseDto:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         category:
 *           type: string
 *         description:
 *           type: string
 *
 *     Student:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *
 *     CreateStudentDto:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *
 *     UpdateStudentDto:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *
 *     Enrollment:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         studentId:
 *           type: integer
 *         courseId:
 *           type: integer
 *         createdAt:
 *           type: string
 *           format: date-time
 *
 *     CreateEnrollmentDto:
 *       type: object
 *       required:
 *         - studentId
 *         - courseId
 *       properties:
 *         studentId:
 *           type: integer
 *         courseId:
 *           type: integer
 *
 * tags:
 *   - name: Courses
 *     description: Operações relacionadas a cursos
 *   - name: Students
 *     description: Operações relacionadas a estudantes
 *   - name: Enrollments
 *     description: Operações relacionadas a matrículas
 */

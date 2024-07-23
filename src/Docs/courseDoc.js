/**
 * @swagger
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique identifier of the course.
 *         program_title:
 *           type: string
 *           description: The ID of the program the course belongs to.
 *         courseTitle:
 *           type: string
 *           description: The title of the course.
 *         courseContent:
 *           type: string
 *           description: The content of the course.
 *         videos:
 *           type: array
 *           items:
 *             type: string
 *           description: List of video URLs.
 *         documents:
 *           type: array
 *           items:
 *             type: string
 *           description: List of document URLs.
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           description: List of image URLs.
 *       required:
 *         - program_title
 *         - courseTitle
 *         - courseContent
 */

/**
 * @swagger
 * /course/getCourses:
 *   get:
 *     summary: Get all courses
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: A list of all courses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Course'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /course/getCourseById/{id}:
 *   get:
 *     summary: Get a course by ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The course ID
 *     responses:
 *       200:
 *         description: Course data retrieved
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       404:
 *         description: Course not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /course/createCourse:
 *   post:
 *     summary: Create a new course
 *     tags: [Courses]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               program_title:
 *                 type: string
 *               courseTitle:
 *                 type: string
 *               courseContent:
 *                 type: string
 *               videos:
 *                 type: array
 *                 items:
 *                   type: string
 *                 format: binary
 *               documents:
 *                 type: array
 *                 items:
 *                   type: string
 *                 format: binary
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Successfully created a new course
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       400:
 *         description: At least one file is required or Program not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /course/updateCourse/{id}:
 *   put:
 *     summary: Update a course by ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The course ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               program_title:
 *                 type: string
 *               courseTitle:
 *                 type: string
 *               courseContent:
 *                 type: string
 *               videos:
 *                 type: array
 *                 items:
 *                   type: string
 *                 format: binary
 *               documents:
 *                 type: array
 *                 items:
 *                   type: string
 *                 format: binary
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Course updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       404:
 *         description: Course not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /course/deleteCourse/{id}:
 *   delete:
 *     summary: Delete a course by ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The course ID
 *     responses:
 *       200:
 *         description: Course successfully deleted
 *       404:
 *         description: Course not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Program:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier of the program.
 *         program_title:
 *           type: string
 *           description: The title of the program.
 *       required:
 *         - program_title
 *       example:
 *         id: "60d5ec49f8d9c12c2c9b3f9a"
 *         program_title: "Computer Science"
 */

/**
 * @swagger
 * /program/getPrograms:
 *   get:
 *     summary: Get all programs
 *     tags: [Programs]
 *     responses:
 *       200:
 *         description: A list of all programs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Program'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /program/getProgramById/{id}:
 *   get:
 *     summary: Get a program by ID
 *     tags: [Programs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The program ID
 *     responses:
 *       200:
 *         description: Program data retrieved
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Program'
 *       404:
 *         description: Program not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /program/createProgram:
 *   post:
 *     summary: Create a new program
 *     tags: [Programs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Program'
 *     responses:
 *       201:
 *         description: Successfully created a new program
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Program'
 *       400:
 *         description: Program title already exists
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /program/updateProgram/{id}:
 *   put:
 *     summary: Update a program by ID
 *     tags: [Programs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The program ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Program'
 *     responses:
 *       200:
 *         description: Program updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Program'
 *       404:
 *         description: Program not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /program/deleteProgram/{id}:
 *   delete:
 *     summary: Delete a program by ID
 *     tags: [Programs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The program ID
 *     responses:
 *       200:
 *         description: Program deleted successfully
 *       404:
 *         description: Program not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /program/getProgramWithCourses/{id}:
 *   get:
 *     summary: Get a program with courses by ID
 *     tags: [Programs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The program ID
 *     responses:
 *       200:
 *         description: Program with courses data retrieved
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Program'
 *       404:
 *         description: Program not found
 *       500:
 *         description: Internal server error
 */

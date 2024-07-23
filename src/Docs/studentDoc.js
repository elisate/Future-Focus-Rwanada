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
 *           readOnly: true
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
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the Student.
 *           readOnly: true
 *         regNumber:
 *           type: string
 *           description: The registration number of the Student.
 *           example: "24FFR001"
 *         student_firstname:
 *           type: string
 *           description: The first name of the Student.
 *           example: "John"
 *         student_lastname:
 *           type: string
 *           description: The last name of the Student.
 *           example: "Doe"
 *         student_email:
 *           type: string
 *           description: The email of the Student.
 *           example: "john.doe@example.com"
 *         student_password:
 *           type: string
 *           description: The password of the Student.
 *           example: "Password123"
 *         student_gender:
 *           type: string
 *           description: The gender of the Student.
 *           example: "Male"
 *         student_level_of_education:
 *           type: string
 *           description: The level of education of the Student.
 *           example: "Bachelor's"
 *         student_country:
 *           type: string
 *           description: The country of the Student.
 *           example: "Rwanda"
 *         student_district:
 *           type: string
 *           description: The district of the Student.
 *           example: "Kigali"
 *         program_enrolled_in:
 *           type: string
 *           description: The program the Student is enrolled in.
 *           example: "Computer Science"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the Student was created.
 *           readOnly: true
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the Student was last updated.
 *           readOnly: true
 *         __v:
 *           type: integer
 *           description: The version key.
 *           readOnly: true
 */

/**
 * @swagger
 * /student/loginStudent:
 *   post:
 *     summary: Login a student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_email:
 *                 type: string
 *                 description: The email of the student.
 *                 example: "john.doe@example.com"
 *               student_password:
 *                 type: string
 *                 description: The password of the student.
 *                 example: "Password123"
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Login successful"
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       400:
 *         description: Bad request, missing or incorrect fields
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /student/createStudent:
 *   post:
 *     summary: Create a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       201:
 *         description: Successfully created a new student
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 saveStudent:
 *                   $ref: '#/components/schemas/Student'
 *                 status:
 *                   type: string
 *                   example: "Student created successfully"
 *       400:
 *         description: Bad request, missing required fields
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /student/getAllStudents:
 *   get:
 *     summary: Get all students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: A list of all students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /student/getStudent/{id}:
 *   get:
 *     summary: Get a single student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the student to retrieve
 *     responses:
 *       200:
 *         description: Returns the student object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /student/updateStudent/{id}:
 *   put:
 *     summary: Update a student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the student to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       200:
 *         description: Successfully updated the student
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 updatedStudent:
 *                   $ref: '#/components/schemas/Student'
 *                 status:
 *                   type: string
 *                   example: "Student updated successfully"
 *       400:
 *         description: Bad request, missing required fields
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /student/deleteStudent/{id}:
 *   delete:
 *     summary: Delete a student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the student to delete
 *     responses:
 *       200:
 *         description: Successfully deleted the student
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Student deleted successfully"
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /student/getCoursesForStudent:
 *   get:
 *     summary: Get all courses for the logged-in student
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: A list of courses for the student's enrolled program
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Course'
 *       404:
 *         description: Student or courses not found
 *       500:
 *         description: Internal server error
 */

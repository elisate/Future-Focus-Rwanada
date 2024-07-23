
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const Docrouter = express.Router();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "e-learning",
      version: "1.0.0",
      description: "API documentation of MY BRAND BACKEND",
      contact: {
        name: "Mr Elisa",
        email: "elisadushimtech@gmail.com",
      },
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "apiKey",
          scheme: "bearer",
          name: "Authorization",
          in: "header",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    servers: [
      {
        url: "http://localhost:5000",
        description: "Development server",
      },
    ],
  },
  apis: ["./src/Docs/*.js"],
};

const specs = swaggerJSDoc(options);

Docrouter.use("/", swaggerUi.serve);
Docrouter.get("/", swaggerUi.setup(specs));

export default Docrouter;
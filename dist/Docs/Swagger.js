"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Docrouter = _express["default"].Router();
var options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "e-learning",
      version: "1.0.0",
      description: "API documentation of MY BRAND BACKEND",
      contact: {
        name: "Mr Elisa",
        email: "elisadushimtech@gmail.com"
      }
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "apiKey",
          scheme: "bearer",
          name: "Authorization",
          "in": "header",
          bearerFormat: "JWT"
        }
      }
    },
    security: [{
      bearerAuth: []
    }],
    servers: [{
      url: "http://localhost:5000",
      description: "Development server"
    }]
  },
  apis: ["./src/Docs/*.js"]
};
var specs = (0, _swaggerJsdoc["default"])(options);
Docrouter.use("/", _swaggerUiExpress["default"].serve);
Docrouter.get("/", _swaggerUiExpress["default"].setup(specs));
var _default = exports["default"] = Docrouter;
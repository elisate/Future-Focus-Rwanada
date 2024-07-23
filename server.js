import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import mainRouter from "./src/route/index.js";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import Docrouter from "./src/Docs/Swagger.js";
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use("/", mainRouter);
app.use("/api-docs", Docrouter);

// environment variables
const port = process.env.PORT || 3000;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;

//db connection

const dbUri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.hex2mmr.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.set("strictQuery", false);
mongoose
  .connect(dbUri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(
        `Node API is running on port http://localhost:${port}/api-docs`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });

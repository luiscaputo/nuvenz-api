import "reflect-metadata";
import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv-safe";
import helmet from "helmet";
import logger from "morgan";
import cors from "cors";

// Database import
import "./database";
// Routes
import routes from "./routes";

// Eviroments variables
dotenv.config({
  allowEmptyValues: true,
});

// App
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Path configure
app.use("/functionsPath", express.static("pathConf"));

// Routes
app.use(routes);

export default app;

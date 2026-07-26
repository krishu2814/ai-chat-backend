import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import chatRoutes from "./routes/chat-route.js";
import { errorHandler } from "./middlewares/error-middleware.js";

const app = express();

app.use(helmet()); // adds security headers
app.use(cors()); // who can access the api
app.use(morgan("dev")); // logging
app.use(express.json()); // parser

app.use("/api/v1/chat", chatRoutes);
app.use(errorHandler); // error handling middleware

export default app;

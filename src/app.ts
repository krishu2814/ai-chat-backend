import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
// import apiRoutes from "./routes/apiRoutes";

const app = express();

app.use(cors()); // adds security headers
app.use(helmet()); // who can access the api
app.use(morgan("dev")); // logging
app.use(express.json()); // parser

// app.use("/api/v1", apiRoutes);
app.use("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;

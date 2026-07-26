import express from "express";
const router = express.Router();
import { Chat } from "../controllers/chat-controller.js";

router.post("/", Chat);

export default router;

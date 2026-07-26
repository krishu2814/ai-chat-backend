import express from "express";
const router = express.Router();
import { Chat } from "../controllers/chat-controller.js";
import { streamChat } from "../controllers/stream-controller.js";

router.post("/", Chat);
router.get("/stream", streamChat); // fetching the response in chunks from the llm

export default router;

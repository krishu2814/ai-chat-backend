import { Request, Response, NextFunction } from "express";
import { getChatResponse } from "../services/chat-service.js";
export async function Chat(req: Request, res: Response, next: NextFunction) {
  try {
    const { conversationId, message } = req.body;
    const response = await getChatResponse(conversationId, message);
    res.status(200).json({
      success: true,
      message: response,
    });
  } catch (error) {
    next(error); // Global Error Handler -> errorHandler
  }
}

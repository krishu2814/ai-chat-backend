import { Request, Response, NextFunction } from "express";
import { streamChatResponse } from "../services/stream-service.js";

export async function streamChat(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const message = req.query.message as string;

    for await (const chunk of streamChatResponse(message)) {
      res.write(`data: ${chunk}\n\n`);
    }
    res.end();
  } catch (error) {
    next(error); // Global Error Handler -> errorHandler
  }
}

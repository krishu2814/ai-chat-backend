import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import ApiError from "../utils/ApiError.js";

export const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Handle custom application errors
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // Log unexpected errors
  console.error("Unhandled Error:", err);

  // Handle unknown errors
  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};

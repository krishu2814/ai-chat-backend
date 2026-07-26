import ApiError from "../utils/ApiError.js";

export async function getChatResponse(message: string): Promise<string> {
  if (!message) {
    throw new ApiError(400, "Message is required");
  }
  return `You said: ${message}`;
}

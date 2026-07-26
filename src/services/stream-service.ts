import ApiError from "../utils/ApiError.js";
import { llm } from "../config/ai.js";
import { HumanMessage } from "@langchain/core/messages";

export async function* streamChatResponse(message: string) {
  if (!message) {
    throw new ApiError(400, "Message is required");
  }

  const stream = await llm.stream([new HumanMessage(message)]);

  for await (const chunk of stream) {
    yield chunk.content;
    console.log("Chunk received:", chunk.content);
  }
}

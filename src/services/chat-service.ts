import ApiError from "../utils/ApiError.js";
import { llm } from "../config/ai.js";
import { HumanMessage } from "@langchain/core/messages";
export async function getChatResponse(message: string): Promise<string> {
  if (!message) {
    throw new ApiError(400, "Message is required");
  }
  // store list of messages in a variable and pass it to the llm.invoke method
  const response = await llm.invoke([new HumanMessage(message)]);
  // return type is string
  return response.content.toString();
}

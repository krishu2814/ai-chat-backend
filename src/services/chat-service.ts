import ApiError from "../utils/ApiError.js";
import { llm } from "../config/ai.js";
import { chatPrompt } from "../prompts/chat-prompt.js";
import {
  getMessage,
  saveMessage,
  printConversation,
} from "../store/chat-memory.js";
import { HumanMessage, AIMessage } from "@langchain/core/messages";

export async function getChatResponse(
  conversationId: string,
  message: string,
): Promise<string> {
  if (!message) {
    throw new ApiError(400, "Message is required");
  }
  if (!conversationId) {
    throw new ApiError(400, "Conversation ID is required");
  }
  // 1. Load previous conversation
  const history = getMessage(conversationId);

  // 2. Create a prompt with the conversation history and the new user message
  const prompt = await chatPrompt.invoke({
    history,
    message,
  });

  // 3. Get response from the LLM
  const response = await llm.invoke(prompt);
  const aiMessage = response.content.toString();
  // 4. Save user message and AI response
  history.push(new HumanMessage(message));
  history.push(new AIMessage(aiMessage));

  // 5. Persist updated conversation
  saveMessage(conversationId, history);
  // 6. Print the updated conversation
  //   printConversation(conversationId);
  // 7. Return response
  return aiMessage;
}

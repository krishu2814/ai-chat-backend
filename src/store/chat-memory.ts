import { BaseMessage } from "@langchain/core/messages";
import logger from "../logger/logger.js";

// stores the list of messages for each conversationId
const conversations = new Map<string, BaseMessage[]>(); // map

// returns the list of messages for a given conversationId
export function getMessage(conversationId: string): BaseMessage[] {
  // Implementation for retrieving messages from memory
  return conversations.get(conversationId) ?? [];
}

export function saveMessage(
  conversationId: string,
  message: BaseMessage[],
): void {
  // Implementation for saving messages to memory
  conversations.set(conversationId, message);
}

export function printConversation(conversationId: string) {
  logger.info(
    `Conversation: ${JSON.stringify(conversations.get(conversationId), null, 2)}`,
  );
}

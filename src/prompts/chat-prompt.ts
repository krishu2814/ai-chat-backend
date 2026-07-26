import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { SystemPrompt } from "./system-prompt";

export const chatPrompt = ChatPromptTemplate.fromMessages([
  ["system", SystemPrompt],
  // Class that represents a placeholder for messages in a chat prompt
  // it stores the conversation history and allows for dynamic insertion of messages into the prompt
  new MessagesPlaceholder("history"),
  ["human", "{message}"],
]);
// console.log(chatPrompt);

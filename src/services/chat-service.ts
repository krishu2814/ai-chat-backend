export async function getChatResponse(message: string): Promise<string> {
  return `You said: ${message}`;
}

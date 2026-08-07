# 🤖 AI Chat Backend

A production-inspired AI Chat Backend built using **Express.js**, **TypeScript**, **LangChain**, and **Groq LLM**. This project demonstrates clean backend architecture, prompt engineering, conversation memory, structured logging, and multi-turn AI conversations.

---

## 🚀 Features

### Backend
- ✅ Express.js + TypeScript
- ✅ RESTful API Architecture
- ✅ Modular Project Structure
- ✅ Environment Configuration using dotenv
- ✅ API Versioning (`/api/v1`)
- ✅ Global Error Handling Middleware
- ✅ Winston Logging
- ✅ Morgan HTTP Request Logging
- ✅ Helmet Security Middleware
- ✅ CORS Support

---

### AI Features
- 🤖 LangChain Integration
- 🤖 Groq LLM Integration
- 🤖 Prompt Engineering
- 🤖 System Prompt
- 🤖 ChatPromptTemplate
- 🤖 Dynamic Prompt Generation
- 🤖 Multi-turn Conversations
- 🤖 Conversation Memory
- 🤖 Conversation History Management
- 🤖 HumanMessage & AIMessage Support
- 🤖 BaseMessage Memory Store

---

## 🏗️ Project Architecture

```text
                Client
                   │
                   ▼
            Express Route
                   │
                   ▼
             Controller
                   │
                   ▼
               Service
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
 Conversation Memory     ChatPromptTemplate
        │                     │
        └──────────┬──────────┘
                   ▼
               LangChain
                   │
                   ▼
                Groq LLM
                   │
                   ▼
             AI Response
```

---

## 📂 Project Structure

```text
src
│
├── config
│   ├── ai.ts
│   └── server-config.ts
│
├── controllers
│   └── chat-controller.ts
│
├── logger
│   └── logger.ts
│
├── middlewares
│   └── error-middleware.ts
│
├── prompts
│   ├── chat-prompt.ts
│   └── system-prompt.ts
│
├── routes
│   └── chat-route.ts
│
├── services
│   └── chat-service.ts
│
├── store
│   └── chat-memory.ts
│
├── utils
│   └── ApiError.ts
│
├── app.ts
└── server.ts
```

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- TypeScript

### AI
- LangChain
- Groq LLM

### Logging
- Winston
- Morgan

### Security
- Helmet
- CORS

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/krishu2814/ai-chat-backend.git
```

```bash
cd ai-chat-backend
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file:

```env
PORT=3000

GROQ_API_KEY=your_groq_api_key
```

### Run Development Server

```bash
npm run dev
```

### Build Project

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

---

# 📡 API

## Chat Endpoint

**POST**

```
/api/v1/chat
```

### Request Body

```json
{
  "conversationId": "conversation-1",
  "message": "Explain LangChain."
}
```

### Response

```json
{
  "success": true,
  "message": "LangChain is a framework for building applications powered by Large Language Models..."
}
```

---

# 💬 Conversation Memory

Each conversation is identified using a **conversationId**.

The backend retrieves previous messages before generating a new response.

```text
Conversation

HumanMessage
      │
      ▼
AIMessage
      │
      ▼
HumanMessage
      │
      ▼
AIMessage
```

Conversation history is injected into the prompt using:

- `ChatPromptTemplate`
- `MessagesPlaceholder`

This enables contextual multi-turn conversations.

---

# 🧠 Prompt Engineering

The project uses a dedicated **System Prompt** to control the LLM's behavior.

Responsibilities include:

- Helpful AI Assistant
- Clear Responses
- Concise Answers
- Avoid Hallucinations
- Maintain Conversation Context

---

# 📝 Logging

The application uses **Winston** for structured logging.

Example:

```text
2026-08-07T17:20:10.000Z [INFO] Server is running on port 3000

2026-08-07T17:20:15.000Z [INFO] Conversation: conversation-1

2026-08-07T17:20:16.000Z [INFO] AI response generated
```

---

# 🛡️ Error Handling

A centralized error middleware catches all application errors.

Example:

```json
{
  "success": false,
  "message": "Message is required"
}
```

---

# 📚 Concepts Demonstrated

### Backend
- Express.js
- TypeScript
- REST API Design
- Modular Architecture
- Error Handling
- Logging
- Middleware
- Environment Variables

### GenAI
- LangChain
- ChatGroq
- Prompt Engineering
- ChatPromptTemplate
- MessagesPlaceholder
- HumanMessage
- AIMessage
- BaseMessage
- Conversation Memory

---

# ⚠️ Current Limitations

This project intentionally focuses on AI backend fundamentals.

Current limitations:

- In-memory conversation storage
- No database persistence
- No authentication
- No streaming responses
- No rate limiting
- No Swagger/OpenAPI documentation
- No automated tests

---

# 🚀 Future Improvements

- JWT Authentication
- PostgreSQL + Prisma
- Persistent Chat History
- Redis Cache
- Streaming Responses
- Swagger Documentation
- Docker Support
- Deployment
- Unit & Integration Testing
- Rate Limiting

---

# 🎯 Learning Outcomes

This project demonstrates practical knowledge of:

- Building AI-powered REST APIs
- Integrating LLMs using LangChain
- Prompt Engineering
- Managing Multi-turn Conversations
- Clean Backend Architecture
- Production-style Error Handling
- Structured Logging
- Conversation Memory Management
- TypeScript Backend Development

---

# 👨‍💻 Author

**Krishu Kumar**

Backend Developer | GenAI Enthusiast

- GitHub: https://github.com/krishu2814
- LinkedIn: https://www.linkedin.com/in/krishu-kumar-singh-77a640314/

---

## ⭐ If you found this project useful, consider giving it a star!

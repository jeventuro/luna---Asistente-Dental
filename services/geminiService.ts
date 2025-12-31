
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export class LunaService {
  private chat: Chat;

  constructor() {
    this.chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
        topP: 0.95,
      },
    });
  }

  async sendMessage(message: string): Promise<string> {
    try {
      const response: GenerateContentResponse = await this.chat.sendMessage({ message });
      return response.text || "Lo siento, tuve un pequeño problema técnico. ¿Podrías repetir eso? 🦷";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Lo siento, estoy experimentando dificultades de conexión. Por favor, intenta de nuevo en un momento. ✨";
    }
  }
}

export const lunaService = new LunaService();

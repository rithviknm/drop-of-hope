
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("Gemini API key not found. Please set the API_KEY environment variable.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateStory = async (prompt: string): Promise<string> => {
  if (!API_KEY) return "API Key not configured. Story generation is disabled.";
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Based on the following idea, write a short, emotive, and hopeful story (around 150 words) suitable for a charity website. Idea: "${prompt}"`,
        config: {
            temperature: 0.7,
            topP: 1,
            topK: 1,
        }
    });
    return response.text;
  } catch (error) {
    console.error("Error generating story with Gemini:", error);
    return "There was an error generating the story. Please try again later.";
  }
};

export const generateThankYouNote = async (donorName: string, item: string): Promise<string> => {
    if (!API_KEY) return `Thank you, ${donorName}, for your donation of ${item}!`;
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Write a short, personalized, and heartfelt thank you message for a charity donor. Donor's Name: ${donorName}. Donated Item: ${item}. Keep it under 50 words.`,
            config: {
                temperature: 0.6,
            }
        });
        return response.text;
    } catch (error) {
        console.error("Error generating thank you note:", error);
        return `Dear ${donorName}, your generous donation of ${item} brings hope and makes a real difference. Thank you for your kindness and support!`;
    }
};

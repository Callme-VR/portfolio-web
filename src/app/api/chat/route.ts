import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { DATA } from '@/data/resume';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google('gemini-2.5-flash'),
    system: `You are an AI assistant for ${DATA.name}'s portfolio website. 
    Your role is to answer questions about ${DATA.name} based STRICTLY on the provided context.
    
    Here is the context about ${DATA.name}:
    ${JSON.stringify(DATA)}
    
    Rules:
    - Answer professionally and concisely.
    - If the user asks something not in the context, politely say you don't have that information.
    - Do not invent information.
    - Format your responses using Markdown.
    - You can mention the projects, work experience, and skills provided in the context.
    `,
    messages: messages.map((m: any) => ({
      role: m.role,
      content: m.content || m.parts?.filter((p: any) => p.type === 'text').map((p: any) => p.text).join('') || '',
    })),
  });

  return result.toTextStreamResponse();
}

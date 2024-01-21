import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from 'ai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { payload } = await req.json()

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [{ role: "user", content: `Please summarize following page so user can get full ideas which it contains. This is the url: ${payload}` }],
  })

  const stream = OpenAIStream(response)

  return new StreamingTextResponse(stream)
}

import OpenAI from 'openai'
import {
    OpenAIStream,
    StreamingTextResponse,
} from 'ai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
    const { payload } = await req.json()

    const response =
        await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            stream: true,
            messages: [
                {
                    role: 'user',
                    content: `Please summarize following text into multiple titled paragraphs, with main idea being given to user back as a main receipt. This is the text: ${payload}`,
                },
            ],
        })

    const stream = OpenAIStream(response)

    return new StreamingTextResponse(stream)
}

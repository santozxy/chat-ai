import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openaiApi = new OpenAIApi(openai);

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const response = await openaiApi.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: messages,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}

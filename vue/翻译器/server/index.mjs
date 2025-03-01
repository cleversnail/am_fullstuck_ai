import OpenAI from "openai";
import dotenv from "dotenv";
import http from "http";

dotenv.config();  // 让 node 运行时去读取.env 中的内容
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL
})



// 链接 LLM
const getCompletion = async (prompt) => {
  // 用户说的话
  const messages = [{
    role: 'user',
    content: prompt
  }]
  // chat 
  const response = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: messages,
    temperature: 0.1
  })
  return response.choices[0].message.content
}

// 跟 ai 交互
const main = async (message) => {
  const user_message = message
  const prompt = `请帮我翻译以下的文字到英文，只需要给出英文单词，"${user_message[0]}"`
  const result = await getCompletion(prompt)
  return result
}


const server = http.createServer( async(req, res) => {
  // 允许跨域
  res.writeHead(200, {
    "access-control-allow-origin": '*'
  });

  // 获取到前端的参数
  const query = new URL(req.url, `http://${req.headers.host}`).searchParams;
  const inputText = query.get('inputText')

  const message = [
    inputText
  ]

  const result = await main(message)
  res.end(result)
})

server.listen(3000, () => {
  console.log("Server is running on port 3000");
})
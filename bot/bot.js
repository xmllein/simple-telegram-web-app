const TelegramBot = require('node-telegram-bot-api')
const express = require('express')
// 自行创建机器人，获取token
const TOKEN = '6816335497:AAH460w1oGRKZDi5GWw-LLdvDgeygOPjYwM'
const webappurl = 'https://simple-telegram-web-app.vercel.app/'
const bot = new TelegramBot(TOKEN, { polling: true })

const cors = require('cors')
const multer = require('multer')

const app = express()
app.use(express.json())
app.use(
  cors({
    origin: [],
  })
)
const upload = multer()
app.use(express.json())
bot.onText(/\/start/, async (msg) => {
  console.log('start')
  const chatId = msg.chat.id
  const telegramId = msg.from.id
  try {
    await bot.sendMessage(chatId, 'Welcome to my bot', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Open web app', web_app: { url: webappurl } }],
        ],
      },
    })
  } catch (e) {
    console.log(e)
  }
})

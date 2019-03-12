const TelegramBot = require('node-telegram-bot-api') 

const TOKEN = '696206585:AAF2gp7FHSNLJZ8nbiP3bG2G3kcm1JZNT3g'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.onText(/\/start/, (msg) => {
    
bot.sendMessage(msg.chat.id, `Добро пожаловать ${msg.from.first_name}✌`, {
"reply_markup": {
    "keyboard": [["МОЙКА"],  ["АЗС"], ["СТО-РЕМОНТ"]]
    }
});
    


});

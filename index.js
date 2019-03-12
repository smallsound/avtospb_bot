const TelegramBot = require('node-telegram-bot-api');
const request = require('request');


const TOKEN = '696206585:AAF2gp7FHSNLJZ8nbiP3bG2G3kcm1JZNT3g';


const bot = new TelegramBot(TOKEN, {polling: true};



bot.onText(/\/start/, (msg, match) => {

    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'Выберите какая валюта вас интересует', {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: '€ - EUR',
                        callback_data: 'EUR'
                    }, {
                    text: '$ - USD',
                    callback_data: 'USD'
                }, {
                    text: '₽ - RUR',
                    callback_data: 'RUR'
                }, {
                    text: '₿ - BTC',
                    callback_data: 'BTC'
                }
                ]
            ]
        }
    });
});

bot.on('callback_query', query => {
    const id = query.message.chat.id;

    request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', function (error, response, body) {
        const data = JSON.parse(body);
        const result = data.filter(item => item.ccy === query.data)[0];
        const flag = {
            'EUR': '🇪🇺',
            'USD': '🇺🇸',
            'RUR': '🇷🇺',
            'UAH': '🇺🇦',
            'BTC': '₿'
        }
        let md = `
      *${flag[result.ccy]} ${result.ccy} 💱 ${result.base_ccy} ${flag[result.base_ccy]}*
      Buy: _${result.buy}_
      Sale: _${result.sale}_
    `;
        bot.sendMessage(id, md, {parse_mode: 'Markdown'});
    })
})



const { Telegraf } = require('telegraf');
const TOKEN = '531176860:AAEFkD_bpx6FGvinlBQ08sNJdX5O-M2FZzY';
const bot = new Telegraf(TOKEN);

const web_link = 'https://ds-ivanenko.github.io/woo-web-app/';

bot.start((ctx) =>
    ctx.reply('Welcome Mr. ' + ctx.chat?.first_name, {
        reply_markup: {
            keyboard: [[{text: "web app", web_app: { url : web_link} }]],
        },
    })
);

bot.launch();
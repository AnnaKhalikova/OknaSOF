const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
const TextMessage = require('viber-bot').Message.Text;
const winston = require('winston');
const express = require('express');
const ngrok = require('./getPublicUrl');

var app = express()
var cors = require('cors')

app.use(cors())

const config = require('./config.json');

let logger = winston.createLogger({
    exitOnError: false,
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'app.log'})]
})
const bot = new ViberBot({
    logger: logger,
    authToken: config.token,
    name: config.name,
    avatar: config.avatar
});
// Bind the bot middleware to the app instance
app.use('/viber/webhook', bot.middleware());

app.use(ex.json())

bot.on(BotEvents.SUBSCRIBED, response => {
    response.send(new TextMessage(`Hi ${response.userProfile.name}, my name is ${bot.name}!`));
});
bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
    response.send(new TextMessage(`I have received the following message: ${message.text}`));
});

app.post('/feedback/send', cors(), (request, response) => {
    let botProfileMembers = bot.getBotProfile().then(response => response.members);

    botProfileMembers.forEach(m => {
        const userProfile = { id: m.id };
        const text = JSON.stringify(` Имя: ${request.body.name} \n Телефон: ${request.body.phone} \n Текст обращения: ${request.body.text} `);

        bot.sendMessage(userProfile, text);
    })

    console.log(request.body.name)
})

const http = require('http');
const port = process.env.PORT || 8080;
return ngrok.getPublicUrl().then(publicUrl => {
    console.log('Set the new webhook to"', publicUrl);
    http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(publicUrl));
}).catch(error => {
    console.log('Can not connect to ngrok server. Is it running?');
    console.error(error);
});

// Webhook will be used for receiving callbacks and user messages from Viber
// app.listen(config.port, () => {
//     logger.info(`Application is running! Port: ${config.port}`);
//     logger.info('expose_domain:' + config.expose_domain + ' expose_uri_pass:' + config.expose_uri_path);
//     bot.setWebhook(config.expose_domain + config.expose_uri_path).catch(error => {
//         logger.debug(`Error: The webhook ${config.expose_domain + config.expose_uri_path} cannot be set. ${error}`);
//         process.exit(1);
//     });
// });
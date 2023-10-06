const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
const TextMessage = require('viber-bot').Message.Text;
const winston = require('winston');
const express = require('express');
const app = express();
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

bot.on(BotEvents.SUBSCRIBED, response => {
    response.send(new TextMessage(`Hi ${response.userProfile.name}, my name is ${bot.name}!`));
});
bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
    response.send(new TextMessage(`I have received the following message: ${message}`));
});
// Bind the bot middleware to the app instance
const webhookUrl = "https://webhook.site/0ac43896-99be-4f5b-af31-d7feeccf73b4/viber/webhook";
app.use('/viber/webhook', bot.middleware());

// Webhook will be used for receiving callbacks and user messages from Viber
app.listen(config.port, () => {
    logger.info(`Application is running! Port: ${config.port}`);
    logger.info('expose_domain:' + config.expose_domain + ' expose_uri_pass:' + config.expose_uri_path);
    bot.setWebhook(config.expose_domain + config.expose_uri_path).catch(error => {
        logger.debug(`Error: The webhook ${config.expose_domain + config.expose_uri_path} cannot be set. ${error}`);
        process.exit(1);
    });
});
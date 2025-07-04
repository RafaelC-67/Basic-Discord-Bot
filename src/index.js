const { Client, IntentsBitField } = require('discord.js');
require('dotenv').config();
const { CommandHandler } = require('djs-commander');
const path = require('path');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

new CommandHandler({
    client,
    commandsPath: path.join(__dirname, 'commands'),
    eventsPath: path.join(__dirname, 'events'),
    testServer: '1002844865253625967'
});

client.login(process.env.BOT_TOKEN);
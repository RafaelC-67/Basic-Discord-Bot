const { Client, IntentsBitField } = require("discord.js");
require("dotenv").config();
const { CommandHandler } = require("djs-commander");
const path = require("path");
const mongoose = require("mongoose");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Connctimg to the DB");
  } catch (error) {
    console.log(error);
  }
})();

new CommandHandler({
  client,
  commandsPath: path.join(__dirname, "commands"),
  eventsPath: path.join(__dirname, "events"),
  validationsPath: path.join(__dirname, "validations"),
  testServer: "1002844865253625967",
});

client.login(process.env.BOT_TOKEN);
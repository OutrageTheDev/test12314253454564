const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const prefix = '-';

const queue = new Map();
const fs = require('fs');
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));



for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  bot.commands.set(command.name, command);
}

bot.on('ready', () => {

  console.log(`${bot.user.tag} has been turned on.`);
  bot.user.setActivity("for sales. ", { type: "WATCHING" })
  bot.user.setStatus('dnd')

})


bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
  try {
    command.execute(message, args);
  } catch (error) {
      console.log(error)
  }
})

bot.login("OTAzNTEzNjE5NzU5Nzg4MDUz.GyZ_ZT.vzBi5cYVEERbLXdthWe1yMoORg1LToCt533fvk")
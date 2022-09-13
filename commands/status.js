const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    name: 'status',
    description: 'Hello',
    execute(message, args) {
        if (message.member.hasPermission(`ADMINISTRATOR`)) {
            const e = new Discord.RichEmbed()
                .setTitle(args.join(` `))
                .addField(`Status:`, `\:green_circle: - Undetected 
                \:orange_circle: - Use at own risk
                \:blue_circle: - Updating and not usable
                \:red_circle: - In development
                `, false)
                .setColor(0x0099ff)
                .setFooter('Bot Created By Outrage#0001')
                .setTimestamp()
            message.channel.send(e);
            message.delete()
        }
    }
}
const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    name: 'buy',
    description: 'Hello',
    execute(message, args) {
        if (message.member.hasPermission(`ADMINISTRATOR`)) {
            if(message.attachments.first()){//checks if an attachment is sent
                if(message.attachments.first().filename === `txt`){//Download only png (customize this)
                    download(message.attachments.first().url);//Function I will show later
                }
            }
            const e = new Discord.RichEmbed()
                .setTitle("**Click to purchase**")
                .setURL("https://singularityshop.sellix.io")
                .setColor(0x0099ff)
                .setFooter(`Singularity`)
            message.channel.send(e);
            message.delete()
        }
    }
}
const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'purge',
    aliases: 'Purge',
    description: 'purge!',
    async execute(message, args) {
        if (message.member.hasPermission(`MANAGE_MESSAGES`)) {
            const deleteCount = parseInt(args[0], 10);


                if (!deleteCount || deleteCount < 1 || deleteCount > 100) return message.reply("Input a number between 1 - 100.");

                const fetched = await message.channel.fetchMessages({
                    limit: deleteCount
                });
                console.log(`@${message.author.username} has deleted ${deleteCount} message('s) in #${message.channel.name}`)
                message.channel.bulkDelete(fetched)
                    .catch(err => console.log(`Cannot delete messages because of: ${error}`))
                    .catch(err => {
                        console.log(err);


                    });

            
        
        } else {
            message.reply('you do not have the permission (MANAGE_MESSAGES) to use this command.');
        }
    }
}

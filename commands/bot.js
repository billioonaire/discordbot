const Discord = require("discord.js");

module.exports = {
    config: {
        name: "bot",
        description: "gives information about the bot",
        usage: "!bot",
    },
    run: async (bot, message, args) => {
            
    const embed = new Discord.MessageEmbed()
    .setTitle('Shadow Bot')
    .addField('author' , 'billionaire#7174', false)
    .setImage(bot.user.displayAvatarURL())
    .setColor(0x7E349D);

    message.channel.send(embed);
    message.delete();

        
        
    }
}
const Discord = require("discord.js");

module.exports = {
    config: {
        name: "avatar",
        description: "get a user's avatar",
        usage: "!avatar",
    },
    run: async (bot, message, args) => {
        let member = message.member;
        let user = message.mentions.users.first();
        if(user) {
            
            let url = user.displayAvatarURL();

    
            const embed = new Discord.MessageEmbed()
            .setTitle('Avatar')
            .addField("User", user.username, false)
            .setColor(0x7E349D)
            .setImage(url);


            message.channel.send(embed);
        } else {

            let url = member.user.displayAvatarURL();

    
            const embed = new Discord.MessageEmbed()
            .setTitle('Avatar')
            .addField("User", member.displayName, false)
            .setColor(0x7E349D)
            .setImage(url);


            message.channel.send(embed);
            
        }
    }
}
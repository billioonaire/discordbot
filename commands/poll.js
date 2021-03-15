const Discord = require("discord.js");

module.exports = {
    config: {
        name: "poll",
        description: "creates a poll",
        usage: "!poll (question)",
    },
    run: async (bot, message, args) => {
        
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You do not have Manage Message Permission");

        
        
        let pollschannel = message.member.guild.channels.cache.find(ch => ch.id === '606687505324048384');
        
      
        if(!pollschannel) return message.channel.sendMessage("There is no polls channel")
        
        
        let embed = new Discord.MessageEmbed()
        .setTitle('Discord Poll')
        .setFooter('React to cast your Vote!')
        .setDescription(message.content.substring(6, message.content.length))
        .setColor(0x7E349D)
        
        pollschannel.send(embed).then(msg => {
            msg.react('👍').then(() => {
                                 
            msg.react('👎');
                                 })
        
        })
        
        message.delete();
    }
}
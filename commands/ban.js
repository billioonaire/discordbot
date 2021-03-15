const Discord = require("discord.js");

module.exports = {
    config: {
        name: "ban",
        description: "bans people",
        usage: "!ban (user)",
    },
    run: async (bot, message, args) => {
            
    if (!user.hasPermission('BAN_MEMBERS')) return message.channel.sendMessage("You do not have Ban Members Permission")

    let toBan = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);

    if(!toBan) return message.channel.sendMessage("You did not specify a user mention or ID")
        
    if(toBan.id === message.author.id) return message.channel.sendMessage("You cannot ban yourself");

    if(toBan.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage("You cannot ban someone with a higher role");
    

    toBan.kick();
        
    }
}
const Discord = require("discord.js");

module.exports = {
    config: {
        name: "kick",
        description: "kicks people",
        usage: "!kick (user)",
    },
    run: async (bot, message, args) => {
            
    if (!user.hasPermission('KICK_MEMBERS')) return message.channel.sendMessage("You do not have Kick Members Permission")

    let toKick = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);

    if(!toKick) return message.channel.sendMessage("You did not specify a user mention or ID")
        
    if(toKick.id === message.author.id) return message.channel.sendMessage("You cannot kick yourself");

    if(toKick.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage("You cannot kick someone with a higher role");
    

    toKick.kick(); 
    message.delete();

    }
}
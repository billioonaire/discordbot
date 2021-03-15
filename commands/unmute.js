const Discord = require("discord.js");

module.exports = {
    config: {
        name: "unmute",
        description: "unmute a user",
        usage: "!unmute (user)",
    },
    run: async (bot, message, args) => {
        
        let toUnmute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);

        if(!toUnmute) return message.channel.sendMessage("You did not specify a user mention or ID");
        
        let role = message.guild.roles.find(r => r.name === "Muted");
                
        
        if(!toUnmute.roles.has(role.id)) return message.channel.sendMessage("User isn't currently muted");
        
        toUnmute.removeRole(role.id).then(() => {message.channel.sendMessage(message.mentions.users.first() + ' has been unmuted')});
        
        message.delete();
    }
}
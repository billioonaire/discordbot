const Discord = require("discord.js");

module.exports = {
    config: {
        name: "purge",
        description: "purge messages",
        usage: "!purge (amount)",
    },
    run: async (bot, message, args) => {
        
        if(args[1]>100 || args[1]<=0) return message.channel.send("Please enter a number between 1-100")
        
        if(!args[1]) return message.channel.send("Please enter a number between 1-100")
        
        if (!message.member.hasPermission("MANAGE_MESSAGES")){
            
            message.channel.send("You don't have permission to use this")
        } else {
        message.delete();

        message.channel.bulkDelete(
            args[1]).catch(console.log("Can't purge messages older than 2 weeks")
        
        );
        }
    }
}
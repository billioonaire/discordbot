const Discord = require("discord.js");

module.exports = {
    config: {
        name: "mute",
        description: "get a user's avatar",
        usage: "!mute (user)",
    },
    run: async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You do not have Manage Message Permission");

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);

    if(!toMute) return message.channel.sendMessage("You did not specify a user mention or ID");
   
    if(toMute.id === message.author.id) return message.channel.sendMessage("You cannot mute yourself");

    if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage("You cannot mute someone with a higher role");
    
    let role = message.guild.roles.find(r => r.name === "Muted");
    if(!role) {
        try {
            role = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permission: []
            });

            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch(e) {
            console.log(e.stack);
        }
    }

    if(toMute.roles.has(role.id)) return message.channel.sendMessage("User is already Muted");


    await toMute.addRole(role);

    message.channel.send(message.mentions.users.first() + ' has been muted');
    message.delete();

    }
}
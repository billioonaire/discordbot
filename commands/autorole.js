const Discord = require("discord.js");

module.exports = {
    config: {
        name: "autorole",
        description: "starts autorole",
        usage: "!autorole",
    },
    run: async (bot, message, args) => {
            
    var member = message.member;    
        
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You do not have Manage Message Permission");    
        
    const channel = member.guild.channels.cache.find(ch => ch.name === 'roles');
        
        
    const embed = new Discord.MessageEmbed()
    .setTitle('Auto Role', '', true)
    
    .setDescription('<:fallguys:748744314020167680> **Fall Guys**\n\n<:minecraft:748743012431036507> **Minecraft**\n\n<:amongus:748742987181195305> **Among Us**\n\n<:valorant:748761351140409374> **Valorant**\n\n<:fortnite:748761372602531861> **Fortnite**\n\n<:sneakers:748753496236490882> **Sneakers**')

    .setFooter('React to recieve the following roles!')
    .setImage(member.guild.iconURL)
    
    .setColor(0x7E349D);

    channel.send(embed).then(msg => {
        
        msg.react('748744314020167680').then(() => {
        
        msg.react('748743012431036507').then(() =>{
            
        msg.react('748742987181195305').then(() =>{

        msg.react('748761351140409374').then(() =>{
            
        msg.react('748761372602531861').then(() =>{
            
        msg.react('748753496236490882');
        })    
        })    
        })    
        })   
                                             });


                
        
        });
        
        
    message.delete();

        
        
    }
}
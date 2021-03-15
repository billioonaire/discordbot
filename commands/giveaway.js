const Discord = require("discord.js");

module.exports = {
    config: {
        name: "giveaway",
        description: "starts a giveaway",
        usage: "!giveaway",
    },
    run: async (bot, message, args) => {
        
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You do not have Manage Message Permission");

        
        let giveawaychannel = message.guild.channels.cache.find(ch => ch.id === '606687505324048384');
        var reward = args.splice(2, args.length).join(' ');
        
        let minutes = args[1];
        
        if (!minutes) return message.channel.sendMessage("Specify the amount of minutes");
        if (!giveawaychannel) return message.channel.sendMessage("There is no giveaway channel")
        if(!reward) return message.channel.sendMessage("There is no reward")
       
        
        let embed = new Discord.MessageEmbed()
        .setTitle('Discord Giveaway')
        .setFooter('React to join the Giveaway!')
        .setDescription('Reward: ' + reward)
        .setColor(0x7E349D)
        
        await giveawaychannel.send(embed).then(msg => {
            msg.react('🎉');   
        
        setTimeout(()=> {
                          
            
            var random = 0;
        
            var inList = false;

            
            var peopleReacted = message.reactions.cache.find(v => v.name === '🎉').users.array();
            
            //const peopleReacted = message.reactions.cache.get('🎉').users.array();
            
            //var peopleReacted = msg.reactions.cache("🎉").users.array();
            
            for (var i = 0; i < peopleReacted.length; i++) {
            if (peopleReacted[i].id == bot.user.id) {
                peopleReacted.splice(i, 1);
                continue;
            }
                
            }
            random = Math.floor(Math.random() * peopleReacted.length);
 
            var winner = peopleReacted[random];
            
            
            
            msg.delete();
            
            let embed2 = new Discord.MessageEmbed()
                .setTitle('Discord Giveaway')
                .setFooter('Congratulations to ' + winner.tag + '!')
                .setDescription('Reward: ' + reward)
                .setColor(0x7E349D)
            
            
            if (!winner) return giveawaychannel.send("There is no winner");
            
            giveawaychannel.send(embed2);
                          }, 60000 * minutes);    
            
        }).catch(e => {
            e.error(e);
        });
        
        message.delete();

    }
}
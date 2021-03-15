const Discord = require('discord.js');

const bot = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
})

const botSettings = require("./settings.json");
const PREFIX = "!";

var newMember = "";

const fs = require('fs');
bot.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.config.name, command);
}

bot.on('guildMemberAdd', member => {
    
    
        const welcome = member.guild.channels.cache.find(ch => ch.name === 'welcome');
        
        
        let url = member.user.displayAvatarURL();
    
        const embed = new Discord.MessageEmbed()
            .setTitle('New Member')
            .addField("Welcome", member.displayName, true)
            .setColor(0x58D68D)
            .setImage(url);
        
        welcome.send(embed);
        
        member.roles.add('723635598769913944');    
    
        newMember = member.displayName;
    
});


bot.on('voiceStateUpdate', async(oldState, newState) => {
    
    try{
    
    if (oldState != null){
    
    if (!oldState.channel.parentID == '722250997925412875') return;
    
    if (oldState.channel.members.size == 0 && oldState.channelID != '723359841627799592' && oldState.channel.parentID == '722250997925412875'){
        
        
        oldState.channel.delete().then(() =>{
            console.log("a channel has been deleted");
        }).catch(console.error);
    }
    }
    } catch(e){
        
    }
    
    if (newState.channelID === "723359841627799592"){

        console.log(newState.channel.position);
        
        newState.guild.channels.create(newState.member.user.username+"'s Channel", {
            type: 'voice',
            parent: '722250997925412875',
            userLimit: 5,
            position: newState.channel.position + 2
        }).then((chan) => {
            
            
            newState.setChannel(chan);
            console.log(newState.member.user.username+"'s  channel has been created");

        }).catch(console.error);
    
    }
});

bot.on('ready', () => {
    console.log("The bot is active!");
    
    bot.user.setActivity('Shadow Realm');
    
    refreshChannels();
});
 
bot.on('message', async message => {
    
    if (!message.content.startsWith('!')) return;
    
    let args = message.content.substring(PREFIX.length).split(" ");
         
            
     try {
            let command = bot.commands.get(args[0]); 
            command.run(bot, message, args);
     } catch(e) {
            console.log(args[0] + " is an unknown command");
     }
    
});

bot.on('messageReactionAdd', async (reaction, user) => {
   
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    
    if (user.bot) return;
    
    if (!reaction.message.guild) return;
    
    if (reaction.message.channel.id !== '723383036078587963') return;
    
    
    switch (reaction.emoji.id){
    
        case '748744314020167680':
            //fall guys
            
        
            await reaction.message.guild.members.cache.get(user.id).roles.add('748765765699633193');
        break;
        
        case '748743012431036507':
            //minecraft
            await reaction.message.guild.members.cache.get(user.id).roles.add('748765591577428039');

        break;
            
        case '748742987181195305':
            //Amongus
            await reaction.message.guild.members.cache.get(user.id).roles.add('748765801468657755');
        break;
        case '748761351140409374':
            //valor
            await reaction.message.guild.members.cache.get(user.id).roles.add('748765724696248330');
        break;    
        case '748761372602531861':
            //fn
            await reaction.message.guild.members.cache.get(user.id).roles.add('748765830421938246');
        break;
        
        case '748753496236490882':
            //sneakers
            await reaction.message.guild.members.cache.get(user.id).roles.add('748765832246591498');
        break;    
    }
});

bot.on('messageReactionRemove', async (reaction, user) => {
   
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    
    if (user.bot) return;
    
    if (!reaction.message.guild) return;
    
    if (reaction.message.channel.id !== '723383036078587963') return;
    
    
    switch (reaction.emoji.id){
    
        case '748744314020167680':
            //fall guys
            
        
            await reaction.message.guild.members.cache.get(user.id).roles.remove('748765765699633193');
        break;
        
        case '748743012431036507':
            //minecraft
            await reaction.message.guild.members.cache.get(user.id).roles.remove('748765591577428039');

        break;
            
        case '748742987181195305':
            //Amongus
            await reaction.message.guild.members.cache.get(user.id).roles.remove('748765801468657755');
        break;
        case '748761351140409374':
            //valor
            await reaction.message.guild.members.cache.get(user.id).roles.remove('748765724696248330');
        break;    
        case '748761372602531861':
            //fn
            await reaction.message.guild.members.cache.get(user.id).roles.remove('748765830421938246');
        break;
        
        case '748753496236490882':
            //sneakers
            await reaction.message.guild.members.cache.get(user.id).roles.remove('748765832246591498');
        break;    
    }
});


function refreshChannels() {

    
    const guild = bot.guilds.cache.find(g => g.id === '605586446832762944');
    
    const counter = guild.channels.cache.find(ch => ch.id === '723370919556546610');
        
    const recent = guild.channels.cache.find(ch => ch.id === '723635033969000498');
    
    
    
    counter.setName("Member Count: " + guild.memberCount);
    
    
    if (newMember != ""){
        recent.setName("Recent: " + newMember);    

    }
    
    console.log("Channels Refreshed");
    
    setTimeout(refreshChannels, 60*6*1000);
}



bot.login(botSettings.token);
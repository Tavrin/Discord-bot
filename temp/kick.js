const Discord = require('discord.js');
module.exports = {
    name: 'kick',
    description: 'Kicker des membres',
    guildOnly: true,
    adminOnly: true,
    args:true,
    execute(message, args){
        const member = message.mentions.members.first()
        if(message.member.hasPermission("KICK_MEMBERS")){
            if(args.length > 1){
                member.kick();
                message.delete().then(function(){
                    message.reply('👌')
                    const channelmodlog = message.guild.channels.find('id', '422570388820721665');
                let reason = args.slice(1).reduce(function(acc, next){
                    acc += (' '+ next);
                    return acc;  
                  
                })
                const exampleEmbed = new Discord.RichEmbed()
                .setColor('#ffe500')
                .setTitle('Kick')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL, 'https://tavrin.github.io/')
                .setDescription(`${member} a été kick du serveur`)
                .addField('Raison :', reason)
                .setTimestamp()
                .setFooter('mod-logs', 'https://cdn.discordapp.com/app-icons/420804296544878592/ca37cdc4c71176606fb07292657187dd.png');
                channelmodlog.send(exampleEmbed);
            })
            }
            else{
                message.channel.send("Il faut donner une raison !");
                message.channel.send("Exemple \`\`\`!kick @quelqu'un écrire la raison à la suite\`\`\`");
            }
                
            
        }
        else{
            message.channel.send("Droits manquants");
        }
    }
}

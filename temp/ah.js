
const Discord = require('discord.js');
const client = new Discord.Client({
    owner: '221346624985759745'
});

const path = require('path');
module.exports = {
    name: 'ah',
    description: 'AH',
    guildOnly: true,
    cooldown : 4,
    execute(message, args){
       
        // if(VoiceConnection.speaking == true){
        //     return message.reply("déjà en cours d'utilisation")
        // }
        // console.log(__dirname)
            if (message.channel.type !== 'text') return;
    
            const { voiceChannel } = message.member;
    
            if (!voiceChannel) {
                return message.reply('Il faut rejoindre un chan vocal !');
            }
            voiceChannel.join().then(connection => {
                if(connection.speaking === true){
                    return message.reply("Le bot est déjà en cours d'utilisation")
                }
                const dispatcher = connection.playFile(__dirname+ "/../src/ah.mp3");
    
                dispatcher.on('end', () => voiceChannel.leave());
            });
    }
}

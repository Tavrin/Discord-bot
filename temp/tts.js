const path = require('path');
module.exports = {
    name: 'tts',
    description: 'ça pleure ça pleure',
    guildOnly: true,
    cooldown : 4,
    execute(message, args){
        console.log(__dirname)
            if (message.channel.type !== 'text') return;
    
            const { voiceChannel } = message.member;
    
            if (!voiceChannel) {
                return message.reply('Il faut rejoindre un chan vocal !');
            }
            voiceChannel.join().then(connection => {
               message.channel.send("/tts allo")
    
                
            }).then(function(){voiceChannel.leave()});
    }
}

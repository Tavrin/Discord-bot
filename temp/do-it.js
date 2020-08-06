const path = require('path');
module.exports = {
    name: 'do-it',
    description: 'just do it',
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
                if(connection.speaking === true){
                    return message.reply("Le bot est déjà en cours d'utilisation !");
                }
                const dispatcher = connection.playFile(__dirname+ "/../src/do-it.mp3");
    
                dispatcher.on('end', () => voiceChannel.leave());
            });
    }
}


const { Command } = require('discord.js-commando');
const path = require('path');


module.exports = class ProfilCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ah',
            group: 'fun',
            memberName: 'ah',
            description: 'AH',
            examples: ['ah'],
            guildOnly: true,
            throttling: {
                usages: 2,
                duration: 10
            }
        });    
    }
    

     run(msg) {
        if (msg.channel.type !== 'text') return;
    
        const { voiceChannel } = msg.member;

        if (!voiceChannel) {
            return msg.reply('Il faut rejoindre un chan vocal !');
        }
        voiceChannel.join().then(connection => {
            if(connection.speaking === true){
                return msg.reply("Le bot est déjà en cours d'utilisation")
            }
            const dispatcher = connection.playFile(__dirname+ "/../src/ah.mp3");

            dispatcher.on('end', () => voiceChannel.leave());
        });
    }
};
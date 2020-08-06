const { Command } = require('discord.js-commando');
const ytdl = require('ytdl-core');



module.exports = class ProfilCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'play',
            group: 'fun',
            memberName: 'play',
            description: 'musique',
            examples: ['play lien-youtube'],
            guildOnly: true,
            throttling: {
                usages: 2,
                duration: 10
            },args : [
                {key: "link",
                prompt:'pas de lien donné',
                type: "string"    
            }
            ]
        });    
    }
    

     run(msg, {link}) {
         console.log(link)
        // if (msg.channel.type !== 'text') return;
    
        //     const { voiceChannel } = msg.member;
    
        //     if (!voiceChannel) {
        //         return msg.reply('Il faut rejoindre un chan vocal !');
        //     }
        //     voiceChannel.join().then(connection => {
        //         const stream = ytdl(link, { filter: 'audioonly' });
        //         const dispatcher = connection.playStream(stream);
    
        //         dispatcher.on('end', () => voiceChannel.leave());
        //     });

    }
};

const { Command } = require('discord.js-commando');
const path = require('path');
const bot = require('../../bot.js')

module.exports = class AboutCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'about',
            group: 'admin',
            memberName: 'about',
            description: 'Informations sur ce bot',
            examples: ['!about'],
            guildOnly: true,
            throttling: {
                usages: 2,
                duration: 10
            }
        });    
    }
    

     run(msg) {
        console.log(bot.client.user.client);
    //     const embed = new RichEmbed()
    //   // Set the title of the field
    //   .setTitle('A slick little embed')
    //   // Set the color of the embed
    //   .setColor(0xFF0000)
    //   // Set the main content of the embed
    //   .setDescription('Hello, this is a slick embed!');
    // // Send the embed to the same channel as the message
    // msg.channel.send(embed);
    }
};
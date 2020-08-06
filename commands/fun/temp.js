const { Command } = require('discord.js-commando');
const path = require('path');
const bot = require('../../bot.js')

module.exports = class TempCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'temp',
            group: 'fun',
            memberName: 'temp',
            description: 'température',
            examples: ['temp'],
            guildOnly: true,
            throttling: {
                usages: 2,
                duration: 10
            }
        });    
    }
    

     run(msg) {
        console.log(bot.givenData)
        if(bot.givenData == undefined){
            return msg.say("Le capteur n'est pas branché")
        }
        return msg.say(bot.givenData)

    }
};
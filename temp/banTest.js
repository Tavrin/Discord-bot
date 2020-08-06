const Discord = require('discord.js');
const client = new Discord.Client({
    owner: '221346624985759745'
});
module.exports = {
    name : "bantest",
    description:"test ban-log",
    guildOnly: true,
    devOnly: true,
    execute(message, args){
        console.log("test")
const guild = client.guilds.get('363027612282388482');
const user = client.users.get('420980612904648714');
console.log(guild)
client.emit('guildBanAdd', guild,user);


        
    }
}
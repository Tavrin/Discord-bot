module.exports = {
    name : "ping",
    description : "Pong ;)",
    guildOnly: true,
    cooldown : 5,
    execute(message,args){
        message.channel.send(`PAN. ${message.author} est mort.`);
    },
}
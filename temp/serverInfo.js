module.exports = {
    name : "serveur",
    description:"infos serveur",
    guildOnly: true,
    execute(message, args){
        message.channel.send(`Nom de ce serveur: ${message.guild.name}` )
    }
}
module.exports = {
    name : "random",
    description:"nombre aléatoire",
    guildOnly: true,
    execute(message, args){
        message.channel.send( `votre chiffre est ${Math.round(Math.random()*100)}`)
    }
}

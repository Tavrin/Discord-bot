module.exports = {
    name : "membres",
    description:"info membres",
    guildOnly: true,
    execute(message, args){
        message.guild.members.forEach(function(user){
            message.channel.send(`${user.user.username}`)
    })
    }
}
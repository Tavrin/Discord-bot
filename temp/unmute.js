module.exports = {
    name: 'unmute',
    description: 'Démute quelqu\'un',
    guildOnly: true,
    adminOnly: true,
    execute(message, args){
        const member = message.mentions.members.first()
        message.channel.send(`${member} Peut à nouveau parler`)
        console.log(member)
        member.setMute(false)
        .then(function(){ console.log(member + "a été démuted")})
    }
}

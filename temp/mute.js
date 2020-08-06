module.exports = {
    name: 'mute',
    description: 'Sert à mute un membre.',
    guildOnly: true,
    adminOnly: true,
    execute(message, args){
        
        const member = message.mentions.members.first()
        if(message.member.hasPermission("MUTE_MEMBERS")){
            message.channel.send(`${member} a été rendu silencieux`)
            // console.log(member)
            member.setMute(true, 'It needed to be done')
            .then(function(){ console.log(member + "a été muted")})
        }
        else{
            message.channel.send("Droits manquants");
        }
       
    }
}

module.exports = {
    name : "avatar",
    description:"Renvoie la photo du membre",
    execute(message, args){
        if(!message.mentions.users.size){
            return message.reply(message.author.displayAvatarURL);
            }
            const avatarList = message.mentions.users.map(function(user){
                return `Photo de ${user.username} : ${user.displayAvatarURL}`;
            })
            message.channel.send(avatarList);
    }
}

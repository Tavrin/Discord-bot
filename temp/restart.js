module.exports = {
    name : "restart",
    description:"redémarrer le bot",
    guildOnly: true,
    devOnly: true,
    execute(message, args){
        let count = 0;
        message.react('👌').then(function(){
            process.exit();
        })
        message.author.send('bot qui restart');
        console.log("restarting bot")
        
    }
}
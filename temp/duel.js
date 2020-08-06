module.exports = {
    name : "duel",
    description:"duel à mort, il faut mentionner quelqu'un",
    cooldown : 1,
    guildOnly: true,
    execute(message, args){
        const data = [];
        let authorCount = 0;
        let otherCount = 0;
        if ( !message.mentions.members.first()){
          return  message.channel.send("Il faut mentionner quelqu'un d'autre pour le défier en duel !")
        }
        const member = message.mentions.members.first()
        const result = {
            result1 : Math.floor(Math.random()*100),
            result2 : Math.floor(Math.random()*100),
            result3 : Math.floor(Math.random()*100)
            }
            message.channel.send(`${message.author} défie ${member} en duel !`)
           .then(function(){ 
                data.push("\`\`\`----------------Round 1---------------\n"); 
                if(result.result1 <= 50){
                data.push(`${message.author.username} gagne le premier round !\n`);
                authorCount++;
            }
            else{
                data.push(`${member.displayName} gagne le premier round !\n`)
                otherCount++;
            }
            })
            .then(function(){
                data.push("----------------Round 2---------------\n");
            if(result.result2 <= 50){
                data.push(`${message.author.username} gagne le deuxième round !\n`);
                authorCount++;
            }
            else{
                data.push(`${member.displayName } gagne le deuxième round !\n`);
                otherCount++;
            }
            })
                .then(function(){  data.push("----------------Round 3---------------\n");
            if(result.result3 <= 50){
                data.push(`${message.author.username} gagne le troisième round !\n`);
                authorCount++;
            }
            else{
                data.push(`${member.displayName} gagne le troisième round !\n`);
                otherCount++;
            }
            })
            .then(function(){ data.push("---------------Résultats--------------\n");
            data.push(`${message.author.username} :  ${authorCount} points\n${member.displayName} :  ${otherCount} points\`\`\``);
            message.channel.send(data, { split: true })
            if(authorCount > otherCount){
                message.channel.send(`**${message.author}** gagne le duel !`);
            }
            else{
                message.channel.send(`**${member}** gagne le duel !`);
            }
            
            })
    }
}

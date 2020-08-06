module.exports = {
    name : "casino",
    description:"jeu casino",
    guildOnly: true,
    execute(message, args){
        const moneyArr = ["🤑","💵","💰"]
        const result = {
            result1 : moneyArr[Math.floor(Math.random()*moneyArr.length)],
            result2 : moneyArr[Math.floor(Math.random()*moneyArr.length)],
            result3 : moneyArr[Math.floor(Math.random()*moneyArr.length)]
        }
       message.channel.send( result.result1 + result.result2 + result.result3)
       .then(function(){if(result.result1 === result.result2 && result.result1 === result.result3){
        message.channel.send(`${message.author} a gagné ! 😃`)
       }
       else{
        message.channel.send(`Pas de chance, ${message.author} a perdu 😕`)
       }
    })
    }
}

let devMode = require('./devmode.js')
module.exports = {
    name : "args-info",
    description:"args-info, commande test",
    guildOnly: true,
    devOnly: true,
    args:true,
    usage:`<user> <role>`,
    execute(message, args){
          message.channel.send(`arguments : ${args}`)
          console.log(devMode.dev);
    }
}

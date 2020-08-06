module.exports = {
    name : "devmode",
    description:"commande devmode",
    guildOnly: true,
    devOnly: true,
    dev: false,
    args:true,
    usage:`<on> ou <off>`,
    execute(message, args){
        if(args.length == 1 && (args[0] == "on" || args[0] =="off")){
            if(args[0] =="on"){
                if(this.dev === true){
                    return message.channel.send(`Mode déjà On !`)
                }
                message.channel.send(`Mode on`)
                this.dev = true;
                console.log(this.dev)
                
            }
            if(args[0] =="off"){
                if(this.dev === false){
                    return message.channel.send(`Mode déjà off !`)
                }
                message.channel.send(`Mode off`)
                this.dev = false;
            }
        }
        else{
            return message.channel.send(`il faut seulement mettre on ou off !`);
        }
    }
}

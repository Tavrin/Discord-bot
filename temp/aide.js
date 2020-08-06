const { prefix } = require('../config.json');

module.exports = {
    name : "aide",
    description:"infos bot",
    aliases: ["commands"],
    usage: ["command name"],
    cooldown:5,
    execute(message, args){
        console.log("test")
        const { commands } = message.client;
        const data = [];
        if(!args.length){
            data.push('Voici une liste de mes commandes:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nPour avoir des infos sur une commande spécifique il faut envoyer  \`${prefix}aide [commande]\``);
        }
        else{
            if (!commands.has(args[0])) {
                return message.reply('that\'s not a valid command!');
            }
            
            const command = commands.get(args[0]);
            
            data.push(`**Name:** ${command.name}`);
            
            if (command.description) data.push(`**Description:** ${command.description}`);
            if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
            if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);
            
            data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);
        }
        message.author.send(data, { split: true })
    .then(() => {
        if (message.channel.type !== 'dm') {
            message.channel.send(`Un DM d'aide a été envoyé ${message.author}`);
        }
    })
    .catch(() => message.reply('Impossible de DM'));
    }
}

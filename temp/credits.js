const Discord = require('discord.js');
const Sequelize = require('sequelize');
const snekfetch = require('snekfetch');
const { Users, CurrencyShop } = require('../dbObjects');
const bot = require("../bot")

 
 


   




module.exports = {
    name : "credits",
    description:"commandes pour les crédits",
    guildOnly: true,
    args:true,
    usage:`\`<solde>, <inventaire>, <transfert>, <acheter>, <shop>, <leaderboard>\``,
    async  execute (message, args){
   

          Reflect.defineProperty(bot.currency, 'add', {
            value: async function add(id, amount) {
                const user = bot.currency.get(id);
                if (user) {
                    user.balance += Number(amount);
                    return user.save();
                }
                const newUser = await Users.create({ user_id: id, balance: amount });
                bot.currency.set(id, newUser);
                return newUser;
            },
        });
        
        Reflect.defineProperty(bot.currency, 'getBalance', {
            value: function getBalance(id) {
                console.log(bot.currency)
                const user = bot.currency.get(id);
                console.log("user :" +user)
                // return user ? user.balance : 0;
            },
        })
        
        bot.currency.add(message.author.id, 1);
        if(args.length <= 3 && (args[0] == "solde" || args[0] =="inventaire" || args[0] == "transfert" || args[0] =="acheter" || args[0] == "shop" || args[0] =="leaderboard")){
            if(args[0] =="solde"){
                const target = message.mentions.users.first() || message.author;
                // console.log("id : " + target.id)
                // console.log(currency)
                return message.channel.send(`${target} à ${bot.currency.getBalance(target.id)}💰`);
            }
            else if (args[0] == 'inventaire') {
                const target = message.mentions.users.first() || message.author;
                const user = await Users.findByPrimary(target.id);
                const items = await user.getItems();
                
                if (!items.length) return message.channel.send(`${target} ne possède rien !`);
                return message.channel.send(`${target} possède ${items.map(i => `${i.amount} ${i.item.name}`).join(', ')}`);
            }
            else if (args[0] === 'shop') {
                const items = await CurrencyShop.findAll();
                return message.channel.send(items.map(item => `${item.name}: ${item.cost}💰`).join('\n'), { code: true });
            }
            else if (args[0] === 'leaderboard') {
                return message.channel.send(
                    bot.currency.sort((a, b) => b.balance - a.balance)
                        .filter(user => bot.client.users.has(user.user_id))
                        .first(10)
                        .map((user, position) => `(${position + 1}) ${(bot.client.users.get(user.user_id).tag)}: ${user.balance}💰`)
                        .join('\n'),
                    { code: true }
                );
            }
            else if(args[0] === "transfert"){
                const currentAmount = bot.currency.getBalance(message.author.id);
                const transferAmount = args[1]
// const transferAmount = args.split(/ +/g).find(arg => !/<@!?\d+>/g.test(arg));
const transferTarget = message.mentions.users.first();

if (!transferAmount || isNaN(transferAmount)) return message.channel.send(`Sorry ${message.author}, that's an invalid amount.`);
if (transferAmount > currentAmount) return message.channel.send(`Sorry ${message.author}, you only have ${currentAmount}.`);
if (transferAmount <= 0) return message.channel.send(`Please enter an amount greater than zero, ${message.author}.`);

bot.currency.add(message.author.id, -transferAmount);
bot.currency.add(transferTarget.id, transferAmount);

return message.channel.send(` ${transferAmount}💰 transféré à ${transferTarget.tag} avec succès. Solde actuel : ${bot.currency.getBalance(message.author.id)}💰`);
            }
            
        }
        else{
            return message.channel.send(`il faut donner un argument! ${this.usage}`);
        }
    }
}

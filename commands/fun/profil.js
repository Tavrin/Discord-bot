const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const Discord = require('discord.js');
const path = require('path');
const db = require('../../models')

module.exports = class ProfilCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'profil',
            group: 'fun',
            memberName: 'profil',
            description: 'profil',
            examples: ['profil'],
            guildOnly: true,
            throttling: {
                usages: 2,
                duration: 10
            }
        });    
    }

    run(msg) {
        db.User.findOne({userId: msg.author.id}, function(err, user){
            console.log(user)
            if(!user || user == null ){
            
             db.User.create({userId:msg.author.id, username: msg.author.username, avatar: msg.author.avatarURL},function(err,user){
                if(err){
                    console.log(err);
                }
                console.log(user)
                return   msg.say("Ajout de l'utilisateur en base de donnée")
            })
             
            }

            else if(user || user != null){
                console.log(user)
                return msg.say(user.username)
            }
            
            if(err){
                console.log(err)
            }
        })
        .catch(function(err){
            console.log(err)
        })
    }
}
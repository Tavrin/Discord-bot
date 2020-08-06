

// Import the discord.js module différents modules
require('dotenv').config()
const fs = require("fs");
const path = require('path');
const Commando = require('discord.js-commando');


const client = new Commando.Client({
    commandPrefix: '!m',
    unknownCommandResponse: false,
    owner: '221346624985759745',
    disableEveryone: true
});

var opus = require('node-opus');
const ytdl = require('ytdl-core');
const mongoose = require('mongoose');
const { ownerID, prefix } = require('./config.json');
// const devMode = require("./temp/devmode.js/index.js")

const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort("COM3", { baudRate: 9600 })

const parser = new Readline()

var givenData = ''
port.pipe(parser)
parser.on('data', function(data){
  givenData = data
  module.exports.givenData = givenData;
})


module.exports.client = client;
  var options = { useNewUrlParser: true, keepAlive: 1, connectTimeoutMS: 30000, reconnectTries: 30, reconnectInterval: 5000 } ;
  let uri = process.env.DATABASEURL;
  mongoose.set('useCreateIndex', true);
  mongoose.connect(uri, options);
  mongoose.connection.on('connected', function(){
    dbConnexion = true;
    console.log("db connectée")
  })
  mongoose.connection.on('disconnected', function(){
    dbConnexion = false;
    console.log("db non connectée")
  })





// Create an instance of a Discord client
// const client =new Discord.Client({
//     owner: '221346624985759745'
// });
console.log(process.env.YOUTUBE)


client.music = require("discord.js-musicbot-addon");

client.music.start(client, {
  // Set the api key used for YouTube.
  // This is required to run the bot.
  youtubeKey: process.env.YOUTUBE,
  prefix: "!",
  maxQueueSize: "50",
  disableLoop: false,
  leave:{
    name:"stop",
    alt:["lve","leave"],
    help: "Stopper la musique"
  },
  help: {
  name: 'mhelp',
  help: "Utiliser !mhelp pour obtenir de l'aide." 
  },
  helpHelp: "Affiche l'aide sur les commandes musicales",
  playHelp: "Mettre une musique/playlist en liste de lecture par URL ou en cherchant un titre.",
  clearInvoker: true,
  loopCmd: "loop",
  requesterName: true,
  messageHelp: true,
  anyoneCanAdjust: false,
  anyoneCanSkip: true, 
  enableQueueStat: true,
  ownerOverMember: true,
  botOwner: '221346624985759745'
});



// const cooldowns = new Discord.Collection();

var rate = 48000;
var encoder = new opus.OpusEncoder( rate );


  //GESTION DES ERREURS
  process.on('unhandledRejection', error => console.error(`Uncaught Promise Rejection:\n${error}`));




// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted

client.on('ready',  () => {
console.log(`Logged in as ${client.user.tag}!`);
client.guilds.forEach((guild) => {
    console.log(" - " + guild.name + " - " + guild.id)
    if(guild.id === "420824931312467979"){
      const channel = guild.channels.find('id', '422954735595814912');
      channel.send(`Maurice initialisé`)
    }
  })
    client.user.setActivity(`!maurice help pour obtenir de laide`);

    
});

  
// Create an event listener for messages
client.on('message',async  msg => {

  // if (msg.content === '!maurice temp') {
  //   msg.reply(givenData);
  // }
});


  client.registry
    // Registers your custom command groups
    .registerGroups([
        ['admin', 'Commandes de Stats'],
        ['fun', 'Commandes fun'],
        ['test', 'Commandes de test']
 
    ])

    // Registers all built-in groups, commands, and argument types
    .registerDefaultTypes()
    .registerDefaultGroups()
    .registerDefaultCommands({unknownCommand: false})
    // .registerDefaults({unknownCommand: false})

    // Registers all of your commands in the ./commands/ directory
    .registerCommandsIn(path.join(__dirname, 'commands'));


  client.on('error', console.error);
// Log our bot in
client.login(process.env.BOT_TOKEN);




// client.login(token);
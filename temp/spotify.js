// var SpotifyWebApi = require('spotify-web-api-node');

const Discord = require('discord.js');
const bot = require("../bot")
const GoogleUrl = require( 'google-url' );
 const googleUrl = new GoogleUrl({ key: 'AIzaSyBB27YlfNyIMtqAzhC5CpkQGt8D0yifsGo' });
module.exports = {
    name : "spotify",
    description:"spotify",
    execute(message, args){
        
        if(args[0] =="p"){
            bot.spotifyApi.getUserPlaylists(args[1])
    .then(function(data) {
        console.log('Some information about this playlist', data.body);
        let playlistArr = []
        data.body.items.forEach(function(playlist){
            playlistArr.push({"playlist" : playlist.name, "id" : playlist.id})
        }) 
        const exampleEmbed = new Discord.RichEmbed()
    .setColor('#1DB954')
    .setTitle(`Playlists Spotify de ${args[1]}`)
    .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`, 'https://tavrin.github.io/')
    for( i = 0; i < playlistArr.length; i++){
        exampleEmbed.addField( playlistArr[i].id,playlistArr[i].playlist)
    }
    
    exampleEmbed.setTimestamp()
    .setFooter('Spotify', 'https://cdn.discordapp.com/app-icons/420804296544878592/ca37cdc4c71176606fb07292657187dd.png');
    message.channel.send(exampleEmbed);
      }, function(err) {
        console.log('Something went wrong!', err);
      });
        }
        if(args[0] =="playlist"){
            // const { voiceChannel } = message.member;
            // voiceChannel.join()
            bot.spotifyApi.getPlaylist(args[1], args[2])
            .then(function(data) {
            // console.log('Some information about this playlist', data.body.tracks.items);
            let converterArr = "http://www.playlist-converter.net/#/freetext="
            data.body.tracks.items.forEach(function(track){

                track.track.name.split(" ").forEach(function(word){
                    converterArr += (word + " ");
                })
                converterArr +='-'
                track.track.artists.forEach(function(artist){
                    artist.name.split(" ").forEach(function(artWord){
                        converterArr += (" "+artWord)
                    })
                    
                })
                converterArr +="%0A"
            })

            googleUrl.shorten( converterArr, function( err, shortUrl ) {
  message.channel.send(shortUrl)
} );
            // message.channel.send(converterArr)
            }, function(err) {
            console.log('Something went wrong!', err);
        });
    }
        
    }
}

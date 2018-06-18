const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  'Merhaba'
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
	client.user.setGame("m!yardım | 🔥v0.3🔥  ✨NirvA✨ ", "https://www.twitch.tv/turkish_coffee");
})
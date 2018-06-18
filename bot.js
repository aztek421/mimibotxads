const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam, Hoşgeldin :innocent: :heartpulse: ');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamun aleyküm') {
    msg.reply('Aleyküm selam, Hoşgeldin :innocent: :heartpulse: ');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hayırsız bot') {
    msg.reply('**Öyle Olsun :sob: :sob:** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'naber') {
    msg.reply('**iyidir sen ^^** ');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kötü') {
    msg.reply('**Niye kötü yaa :/** ');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'haklısın knk') {
    msg.reply('**tabiki haklıyım :d** ');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'haklısın') {
    msg.reply('**tabiki haklıyım :d** ');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hoşbuldum') {
    msg.reply('**Nasılsın ?^^** ');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'iyiyim') {
    msg.reply('**İyi olmana çok sevindim , hep böyle kal:grin: ** ');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'iyi') {
    msg.reply('**İyi olmana çok sevindim hep böyle kal :grin: ** ');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kötüyüm') {
    msg.reply('**Kötü olmana çok üzüldüm :disappointed_relieved:  ** ');
  }
});

client.on("message", message => {
  if (message.content === prefix + "kalp") {
    message.channel.sendMessage(`Benim kalbim yok madem senin olsun ❤ <@${message.author.id}>`)
    message.react("❤")
}
if (message.content === prefix + "sigarayak") {
  message.channel.sendMessage(`Sigara içmek sağlığa zararlıdır! 🚭 <@${message.author.id}>`)
  message.react("🚭")
}
/*
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'lol') {
    message.channel.sendMessage(`**@here :sparkles:  <@${message.author.id}> League Of Legends oynamak için arkadaş arıyor. <@${message.author.id}> İle Oynamak İster misin?:sparkles: Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girebilirsin :sparkles: **`);
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'tos') {
    message.channel.sendMessage(`**@here :sparkles:  <@${message.author.id}> Town of Salem oynamak için arkadaş arıyor. <@${message.author.id}> İle Oynamak İster misin?:sparkles: Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girebilirsin :sparkles: **`);
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'cs') {
    message.channel.sendMessage(`**@here :sparkles:  <@${message.author.id}> Counter Strike oynamak için arkadaş arıyor. <@${message.author.id}> İle Oynamak İster misin?:sparkles: Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girebilirsin :sparkles: **`);
  }
});
*/
if (message.content === prefix + "yapımcım") {
  message.channel.sendMessage(`<@361100685863026688>`)
}

if (message.content === prefix + "lol") {
  message.channel.sendMessage(`**@here :sparkles:  <@${message.author.id}> League Of Legends oynamak için arkadaş arıyor. <@${message.author.id}> İle Oynamak İster misin?:sparkles: Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girebilirsin :sparkles: **`)
}

if (message.content === prefix + "tos") {
  message.channel.sendMessage(`**@here :sparkles:  <@${message.author.id}> Town of Salem oynamak için arkadaş arıyor. <@${message.author.id}> İle Oynamak İster misin?:sparkles: Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girebilirsin :sparkles:**`)
}

if (message.content === prefix + "cs") {
  message.channel.sendMessage(`**@here :sparkles:  <@${message.author.id}> Counter Strike oynamak için arkadaş arıyor. <@${message.author.id}> İle Oynamak İster misin?:sparkles: Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girebilirsin :sparkles:**`)
}

});
client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});
client.on("message", message => {

});


client.login(ayarlar.token);

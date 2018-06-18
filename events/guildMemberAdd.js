module.exports = member => {
    let username = member.user.username;
    member.sendMessage("Sunucuma Hoşgeldin :hugging: ");
    member.guild.channels.get('456788747766333462').send('Hoşgeldin :hugging: '); 
};

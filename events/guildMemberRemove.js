module.exports = member => {
  let guild = member.guild;
  member.send();  
  member.guild.channels.get('456788747766333462').send('**' + member.user.username + '** , aramızdan ayrıldı :sob::sob::sob: .');
};

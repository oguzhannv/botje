module.exports = (client) => {
   const channelId = '793196329157263372' // welcome channel
   const targetChannelId = '798627676490694707' // rules and info 


    client.on('guildMemberAdd', (member) => {
       console.log(member)

       const message = `Please welcome <@${
           member.id
        }> to the server! Please check out ${member.guild.channels.cache
        .get(targetChannelId)
        .toString()}`

       const channel = member.guild.channels.cache.get(channelId)
       channel.send(message)
   
    }) 
}
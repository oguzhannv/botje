const command = require('./command')
const ownerId = '425215766762356737' // my discord user ID
const channelId = '798627676490694707' // private channel ID

module.exports = client => {
    command(client, 'eval', message => {
     const { member, channel } = message
     //eval

     if (member.id === ownerId && channel.d === channelId) {
      const result = eval(content.replace('!eval ', ''))
      console.send(result)  
     }
    })
}
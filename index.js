const path = require('path')
const fs = require('fs')
const Discord = require("discord.js");
const proton = require("proton-io")
const db = require("wio.db") 
const ayarlar = require("./config.json")
const botconfig = require("./colours.json"); 
const { Client, MessageEmbed } = require('discord.js');
const command = require('./command')
const config = require('./config.json')
const welcome = require('./welcome')
const poll = require('./poll')
const eval = require('./eval')
const ms = require('ms')



const { Player } = require("discord-music-player")
const player = new Player(client);
client.player = player;

let komutDosya = "./komutlar"
let event = "./eventlar"
let gelistiriciler = ["425215766762356737"]
let owner = true;
let defaultCommands = ["ping"]

const komutYukle = new proton(client,komutDosya,event,gelistiriciler,{owner,defaultCommands})

let botlaraCevapVer = false;
let etiketlePrefixOgren = true; 
let etiketiPrefixOlarakKullan = true;

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
});







  // eval 

  eval(client)


  
client.on('message', async (msg) => {
    
    if(!await db.has("prefix_" + msg.guild.id)) {
        var prefix = "/"
     } else {
        var prefix = await db.fetch("prefix_" + msg.guild.id)
     }
    
    
    komutYukle.message(msg,prefix,{botlaraCevapVer,etiketiPrefixOlarakKullan,etiketlePrefixOgren})
    })
    
client.on("message", (message) => {
    if(message.content.toLowerCase() === "selam") {
        message.channel.send("Aleyküm Selam,")
    }
    if(message.content.toLowerCase() === "mete") {
        message.channel.send("20 cm alan")
        }
    if(message.content.toLowerCase() === "mete") {
        message.channel.send("Götünden yiyen amsalak")
            }
    if(message.content.toLowerCase() === "furkan") {
        message.channel.send("kafa topu")
            }
    if(message.content.toLowerCase() === "oguz") {
    message.channel.send("Köyümüzün Muhtarı")
        }
    if(message.content.toLowerCase() === "berkant") {
    message.channel.send("KÖYÜN SLAJCISI")
        }
        if(message.content.toLowerCase() === "sefa") {
            message.channel.send("SEFA köyümüzün İmamıdır")
                }
        if(message.content.toLowerCase() === "kek") {
            message.channel.send("METEYİ SİHİRLER DİYARINDA GÖTÜNDEN SİKEYİM")
                      }                  
})

// poll 
poll(client)

 


/// SERVER INFO

      command(client, 'serverinfo', message => {
          const { guild } = message 
          // console.log(guild)

          const { name, region, memberCount, owner, afkTimeout } = guild
          const icon = guild.iconURL()
          
          const embed = new Discord.MessageEmbed()
          .setTitle(`Server info for "${name}"`)
          .setThumbnail(icon)
          .setColor('#ff0000')
          .addFields({
            name: 'Region',
            value: region,
         },
         {

            name: 'Members',
            value: memberCount,
         },
         {
            name: 'Owner',
            value: owner,
         },
         {
            name: 'AFK Timeout',
            value: afkTimeout / 60, 
         }
         )

          message.channel.send(embed)
      })

/// GİVEAWAY
 
    


      
/// EMBED
         command(client, 'embed', (message) => {
             const logo =
             'https://www.facebook.com/photo?fbid=3723211211073209&set=a.101518543242512'
 

              const embed = new Discord.MessageEmbed()
              .setTitle('Example text embed')
              .setURL('https://www.facebook.com/oguzhan.han.55/')
              .setAuthor(message.author.username)
              .setImage(logo)
              .setThumbnail(logo)
              .setFooter('TriBal sOUnd')
              .setColor('#00AAFF')
              .addFields(
                  {
                      name: 'Field 1',
                      value: 'TriBal sOUnd',
                      inline: true,
                    },
                  {
                    name: 'Field 1',
                    value: 'TriBal sOUnd',
                    inline: true,
                  },
                  {
                    name: 'Field 1',
                    value: 'TriBal sOUnd',
                    inline: true,
                },
                  {
                    name: 'Field 1',
                    value: 'TriBal sOUnd',
                  }
              )

            
                message.channel.send(embed)
         })
            



/// HELP COMMAND 

command(client, 'help', message => {
    message.channel.send(`
    These are my supported commands:
    
    **!help** - Displays the help menu
    **!add <num1> <num2>** - Adds two numbers
    **!sub <num1> <num2>**- Subtracts two numbers
    `)
})


/// welcome message 

welcome(client)


/// ban command 

command(client, 'ban', (message) => {
    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
        member.hasPermission('ADMINISTRATOR') ||
        member.hasPermission('BAN_MEMBERS')
      ) {
        const target = mentions.users.first()
        if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.ban()
        message.channel.send(`${tag} That user has been banned.`)
        }  else {
             message.channel.send(`${tag} Please specify someone to ban.`)
        }  
    } else {
            message.channel.send(
                `${tag} You do not have permission to use this command.`
            ) 
        }
    })

    /// kick command 

    command(client, 'kick', (message) => {
        const { member, mentions } = message
    
        const tag = `<@${member.id}>`
    
        if (
            member.hasPermission('ADMINISTRATOR') ||
            member.hasPermission('KICK_MEMBERS')
          ) {
            const target = mentions.users.first()
            if (target) {
            const targetMember = message.guild.members.cache.get(target.id)
            targetMember.kick()
            message.channel.send(`${tag} That user has been kicked.`)
            }  else {
                 message.channel.send(`${tag} Please specify someone to kick`)
            }  
        } else {
                message.channel.send(
                    `${tag} You do not have permission to use this command.`
                ) 
            }
        })
    

    


  /////embed 


  client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === 'hooo') {
      // We can create embeds using the MessageEmbed constructor
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
      const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('METEYİ :thumbsup: ')
        // Set the color of the embed
        .setColor(0xff0000)
        // Set the main content of the embed
        .setDescription('SİHİRLER DİYARINDA GÖTÜNDEN SİKEYİM');
      // Send the embed to the same channel as the message
      message.channel.send(embed);
    }
 });




client.login(ayarlar.token)
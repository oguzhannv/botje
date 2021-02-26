module.exports = {
    name: "leave",
    aliases: ["leave","leave"],
    description: "wewewew",
    usage: "leave",
    ownerOnly: false,
    
    run: async (message,args,client) => {
   
  
        if(client.player.isPlaying(message.guild.id) == true) { 
       
            if(!message.guild.members.cache.get(message.author.id).voice.channel) {
                return message.channel.send(" Lütfen şarkı açmak için bir kanala giriş yapınız.")
            }
            
            client.player.stop(message.guild.id)
     
            return message.channel.send("```Şarkı başarı ile kapatıldı, çıkış yaptım.```")
            
        } else {
            return message.channel.send("```Şuanda bir şarkı çalmıyor```.")
        }
         
    
        }}
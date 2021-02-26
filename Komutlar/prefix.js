const db = require('wio.db')

module.exports = {
    name: "prefix",
    aliases: ["prefix"],
    description: "ewewwew",
    usage: "prefix",
    ownerOnly: false,
    run: async (message,args,client) => {
    
        if(!message.guild.members.cache.get(message.author.id).hasPermission("ADMINISTRATOR")) 
            return message.channel.send("Bu işlem için gerekli yetkiniz bulunmamaktadır.")


    var args = args[0]   


    if(!args) {
        return message.channel.send("Please specify a prefix.")
    }


    db.set("prefix_" + message.guild.id, args)
    
    message.channel.send("Successfully your prefix has been set to." + args + ".")

    }
}
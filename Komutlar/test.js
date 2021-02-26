module.exports = {
    name: "test",
    aliases: ["test1","test2"],
    description: "ewewwew",
    usage: "test",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
   message.channel.send("this is a test message")
    }
}
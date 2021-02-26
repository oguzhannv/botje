module.exports = (client) => {

var oynuyorkısımları = [
"/help",
"TribalSound",
""
]
        
        
setInterval(function() {
        
         var random = Math.floor(Math.random()*(oynuyorkısımları.length-0+1)+0);
        client.user.setActivity(oynuyorkısımları[random], { type: 'WATCHING' });
         }, 2 * 3000);
        



    console.log("Bot giriş yaptı")
}
    
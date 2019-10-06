const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("630472272204922902")
setInterval(function() {
channel.send(`haroonylove`);
}, 30)
})


client.login(process.env.BOT_TOKEN);

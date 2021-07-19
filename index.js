const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ".";

client.on("ready", () => {
  console.log(`Log in successful! Welcome back, ${client.user.tag}`);
});

client.on("message", msg => {
  if(msg.content==="test"){
    msg.channel.send("TEST DEEZ NUTS22");
  }    
});

client.login(mySecret);
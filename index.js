const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ".";

client.on("ready", () => {
  console.log(`Log in successful! Welcome back, ${client.user.tag}`);
});

client.on("message", msg => {
  if(msg.content==="test"){
    msg.channel.send("TEST DEEZ NUTS");
  }    
});

client.login('ODY2NTc1OTQ2OTk1NzI4Mzk1.YPUjvQ.mWzZo2iy8-Y0o4JBuw7rUkfWgWQ')
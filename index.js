const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Bot is alive!'))

app.listen(port, () =>
console.log(`Your app is listening at http://localhost:${port}`)
);

/////////////////

const Discord = require('discord.js');
const client = new Discord.Client();
const mySecret = process.env['TOKEN']
const fs = require('fs')
const prefix = ".";

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
  require(`./handlers/${handlers}`)(client, Discord)
})

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on("ready", () => {
  console.log(`Log in successful! Welcome back, ${client.user.tag}`);
});

const triggersCurse = [
  "fuck",
  "fucks",
  "fucking",
  "motherfucker",
  "fucker",
  "shit",
  "bitch",
  "dick",
  "gago",
  "tangina",
  "putangina",
  "puta",
  "pota",
  "bobo",
  "amputa",
  "ampota",
  "ulol",
  "pakyu",
  "urat",
  "yawa"
];

const responseCurse = [
  "you should control your swearing. Think of happy thoughts! <:lily_chonk:839905712473243688>",
  "try not to curse too much. Get yourself a cookie! :cookie:",
  "if you curse all the time, you'll get old quicker!",
  "is there really a need for bad words? <:lily_pout2:864965340990668801>",
  "keep calm and don't swear too much.",
  "please spoiler tag your swearing. <:lily_grrrr:864559494830882826>",
  "I know it's hard to control your cursing, but I know you can do it! <:lily_ok:859048734281302048>",
  "you don't need to swear. Here, I give you hugsssss~",
  "you shouldn't curse all the time. Try and be more positive!"
];

const triggersNSFW = [
  "tite",
  "titi",
  "puke",
  "puki",
  "puday",
  "pekpek",
  "kantot",
  "blowjob",
  "faggot",
  "fag"  
]

const responseNSFW = [
  "is there really a need for bad words? <:lily_bonk:864735578842464298>",
  "please keep everything SFW. Thanks! <:lily_smile:859049051117977611>",
  "we like to keep the server vibe clean for everybody. Please mind the language.",
  "surely there's no need for dirty words, right?",
  "try not to use such vulgar words next time. I know you can do it! <:lily_smile:859049051117977611>"
]

const LilyAnswers = [
  "It's a yes for me.",
  "Uhuh, without a doubt.",
  "Yes, definitely.",
  "Yeah, for sure.",
  "Affirmative, sir!",
  "Yep.",
  "Uhhh, maybe?",
  "Oh, are you asking me?",
  "Better not tell you now, trust me.",
  "Probably.",
  "I'm kinda sus about that. Ask me again later.",
  "Nope.",
  "It's a no for me, sorry.",
  "My sources say no.",
  "lol no.",
  "Very doubtful.",
  "<:lily_ok:859048734281302048>",
];  

const askLily = "Lily,"  

client.on("message", msg => {
  if(msg.content==="test"){
    msg.channel.send("TEST DEEZ NUTS");
  }
  if(msg.content.startsWith(askLily)){
    msg.channel.send(LilyAnswers[Math.floor(Math.random() * LilyAnswers.length)])
  }
  if(triggersCurse.some(word => msg.content.toLowerCase().includes(word))){
    msg.reply(responseCurse[Math.floor(Math.random() * responseCurse.length)]);
  }
  if(triggersNSFW.some(word => msg.content.toLowerCase().includes(word))){
    msg.reply(responseNSFW[Math.floor(Math.random() * responseNSFW.length)]);
  }
  if(msg.content.startsWith(prefix)){
    const args = msg.content.slice(prefix.length).split(/ +/);
    console.log("Yes");
    const command = args.shift().toLowerCase();
    console.log(command);
    if(command == 'ping'){
      client.commands.get('ping').execute(msg, args);
    }
    else if (command == 'somethingelse'){
      //for new commands
    }
  }    
});

client.login(mySecret);
module.exports = (Discord, client, message) =>{
  const prefix = ".";
  
  if(message.content.startsWith(prefix)){
    const args = message.content.slice(prefix.length).split(/ +/);
    console.log("Yes");
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd);
    console.log(command);
    if(command) command.execute(client, message, args, Discord);
  }
}

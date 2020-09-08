const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")

client.on("ready", () => {
    console.log(`Bot foi iniciado, com ${client.users.cache.size} usuários, em ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servidores.`); 
    client.user.setActivity(`Sou o Assistente pessoal do BielSwift!`)
  });

client.on("guildMemberAdd", async member => {
    member.guild.channels.cache.get('751650504462958724').send('Bem-vindo ' + member.user.username + ', já usou o código BOLA hoje?');
})

client.login(config.token);
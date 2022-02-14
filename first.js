const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.js');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { prefix } = require('./config.js');
const readdir = promisify(fs.readdir);

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

readdir(path.join(__dirname, 'commands')).then(files => {
    files.forEach(file => {
        const command = require(path.join(__dirname, 'commands', file));
        client.commands.set(command.name, command);
        command.aliases.forEach(alias => {
            client.aliases.set(alias, command.name);
        }
        );
        console.log(command.name + " loaded!") 
    });
});

client.on('ready', () => {
    console.log("Bot iniciando correctamente " + client.user.tag);
    client.user.setActivity(prefix+"help");
});

client.on("message", message => {
    client.commands.forEach(command => {
        if(command.name === message.content.toLowerCase().split(" ")[0].slice(config.prefix.length)) {
            command.run(client, message);
        }
        for(let i = 0, len = command.aliases.length; i < len; i++){
            if(command.aliases[i] === message.content.toLowerCase().split(" ")[0].slice(config.prefix.length)){
                command.run(client, message);
            }
        }
});
});

client.login(config.token);
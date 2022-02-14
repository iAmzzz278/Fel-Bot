module.exports = {
    name: 'help',
    aliases: ['embedsay'],
    run: (client, message) => {
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
            /*<--*/.setTitle('[AmsDev GitHub]') .setURL('https://github.com/Amsdevice')/*-->*/
            .setColor("RANDOM")
            .setDescription('**Basics Commands:**\n\n``Fel/say (whatever you want me to say)\nFel/dogs (images of puppies)\nFel/cats (images of kittens)\nFel/ping (test command)\nFel/author (creator of the bot)\nFel/nsfw (images h or +18)\nFel/random-number (pick random number)``\n\n**Moderation:**\n\n``Coming soon``')
            .setTimestamp()
            .setFooter(client.user.tag, 'https://cdn.discordapp.com/attachments/942189261229264920/942591023295660103/GJ_moveBtn-uhd.png')
            
        message.channel.send(embed)
    }
}
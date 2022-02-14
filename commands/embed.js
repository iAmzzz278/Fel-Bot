module.exports = {
    name: 'author',
    aliases: ['embedsay'],
    run: (client, message) => {
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
     /*<--*/.setTitle('[AmsDev GitHub]') .setURL('https://github.com/Amsdevice')/*-->*/
            .setColor("BLUE")
            .setDescription('**AmsDev is a small developer\nand he was the one who created me\nhere I leave his git:**\nhttps://github.com/Amsdevice')
            .setThumbnail('https://cdn.discordapp.com/avatars/752188498253054055/01b4f556a6342b2b6f80148c5ab85211')
            .setTimestamp()
            .setFooter(client.user.tag, 'https://cdn.discordapp.com/attachments/942189261229264920/942591023295660103/GJ_moveBtn-uhd.png')

        message.channel.send(embed)
    }
}
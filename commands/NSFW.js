module.exports = {
    name: 'nsfw',
    aliases: ['link'],
    run: (client, message) => {
    if (!message.channel.nsfw) return message.channel.send('**Please use in a NSFW channel**');
    const imagenes = 
["https://us.rule34.xxx//images/3842/b5558194dc97fcbc1e8ab1070939aa55.gif?4350227", 
"https://us.rule34.xxx//images/3842/1a25117c43cd4c8949f2f3399bbc0131.gif?4350225",
"https://us.rule34.xxx//images/3270/c173195f18bc47a7313c106f5ae03e11.jpeg?3680079",
"https://uswebm.rule34.xxx//images/3270/80198032b83d9d447f5b4084ded3231a.mp4?3680033",
"https://cali.rule34.xxx//samples/3213/sample_08834ad569fcafa156f1d6bc4ba43373.jpg?3611755",
"https://cali.rule34.xxx//samples/3232/sample_5907ccec4bb4da6bcdb7d166cbfe781d.jpg?3633656",
"https://uswebm.rule34.xxx//images/4519/4558b407545f885d6c431300916c4893.mp4?5147345",
"https://cali.rule34.xxx//samples/3221/sample_4c18c217b7ec22a4d2e0e463263823bc.jpg?3620287",
"https://uswebm.rule34.xxx//images/3177/9f14e34498e6153e1c0c1b114c39be6f.mp4?3569395",
"https://uswebm.rule34.xxx//images/3177/e22a455cf7b1c120c9dc5daa1a5d729b.mp4?3569393",
"https://uswebm.rule34.xxx//images/3177/a9ea927a29b9440cd91840bf0cd14de2.mp4?3569401",
//aqui termina el r34 de kotone
"https://us.rule34.xxx/thumbnails/4519/thumbnail_6cbb3d7753ca4b84c80f428e24593494.jpg?5147414", 
"https://latinohentai.com/wp-content/uploads/2020/02/Overflow-05.mp4_snapshot_04.41.828-300x170.jpg",
"https://tb.sb-cd.com/t/9132955/9/1/w:500/t6-enh/overflow-cap-3-sub-espa-ol.jpg",
"https://latinohentai.com/wp-content/uploads/2020/02/Overflow-Sub-Espa%C3%B1ol-212x300.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjbKvuNiQUxLBFfhRrxZsdpKxH7MQVLzkzYchfcyOaPv8x81vjJltiOzRTOnkcNsGn9VQ&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp90MHlUmtkjd76e8eNzmz3EtvLRrsVkNFWQDgjAb5DPoP6TwqroXmxpfjUPn1yAuRr4g&usqp=CAU",
"https://el.phncdn.com/pics/gifs/036/196/751/(m=bKW1KNV)(mh=HQ6TDMOGCwMzcWF3)36196751a.jpg",
"https://hentaiff.com/wp-content/uploads/2021/01/Overflow-03-02.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9cpMGlOiq9nC2uW16XVQGgu5RPBSY8uetmw&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGryjtq9ToTCwljLjdiX6lVmJQUaA3fNh4Fw&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIODntpag4qqxxmcbnZtIBXNW8EY9unPn7Xg&usqp=CAU",
//aqui termina el r34 de ayane
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0lNZXGBpI2VNvNRoB2rPGUsmMsLezvUcQg&usqp=CAU",
/*"",
"",
"",
"",
"",
"",
"",
"",
"",
""*/
//aqui termina el r34 de hinata
]
    const imagen_aleatoria = imagenes[Math.floor(Math.random() * imagenes.length)];
    message.channel.send(imagen_aleatoria)
    console.log('imagen nsfw enviada')
    }
}
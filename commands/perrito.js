module.exports = {
    name: 'dogs',
    aliases: ['link'],
    run: (client, message) => {
        message.channel.send('puppy photo sent')
    const imagenes = 
    ["https://i.pinimg.com/550x/9a/3d/7f/9a3d7ff16437f45bf4f12c04245261e0.jpg", 
    "https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2021/06/09/2592367.jpg",
    "http://kimata-ah.com/media/speciality-transfusion-001.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-917825492-1540924908.jpg?crop=0.668xw:1.00xh;0.146xw,0&resize=480:*",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQczjmickY8fapsVu_nJuONIiVdSGOep_n9mKemZDQZCfNA1axrowJBje870SFfrjlGoTw&usqp=CAU",
    "https://pbs.twimg.com/profile_images/1146072983787724800/SElmsSlI_400x400.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSaXSteQM9k1h04D1YgMO8k59M4M30DdUFhA&usqp=CAU"]
    const imagen_aleatoria = imagenes[Math.floor(Math.random() * imagenes.length)];
    message.channel.send(imagen_aleatoria)
    }
}
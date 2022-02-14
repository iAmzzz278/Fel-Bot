module.exports = {
    name: 'cats',
    aliases: ['link'],
    run: (client, message) => {
        message.channel.send('kitten photo sent')
    const imagenes = 
    ["https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg", 
    "https://www.hola.com/imagenes/estar-bien/20210217184541/gatos-gestos-lenguaje-significado/0-922-380/gatos-gestos-m.jpg?filter=w500",
    "https://s.france24.com/media/display/8c13820c-5b0e-11e9-bf90-005056a964fe/w:1280/p:4x3/gato.jpg",
    "https://s1.eestatic.com/2021/11/24/curiosidades/mascotas/629697961_216041764_1706x960.jpg",
    "https://static.elcomercio.es/www/multimedia/202106/09/media/cortadas/gato-relaciones-kSOC-U140648920784qaG-624x385@El%20Comercio.jpg",
    "https://www.hola.com/imagenes/estar-bien/20201027177994/cosas-asustan-gatos-gt/0-882-234/gato-t.jpg",
    "https://static2.abc.es/media/ciencia/2022/02/04/gato-mismis-kDoF--620x349@abc.jpg"]
    const imagen_aleatoria = imagenes[Math.floor(Math.random() * imagenes.length)];
    message.channel.send(imagen_aleatoria)
    }
}
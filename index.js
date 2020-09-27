const {Client, MessageEmbed } = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log(`Bot is ready as ${client.user.tag}`);
    client.user.setStatus('dnd');

    console.log(client.user.presence.status);

    /* 
    try {
     
    const testChannel = client.channels.find(channel => channel.name === 'test');

    console.log(testChannel);
   
    } catch (err) {
        
    }*/
});

client.on('message', message => {
    //Contenido del msj tipeado
    console.log(message.content);
    if (message.content === 'ping') {
        message.reply('pong')
    }

    if (message.content === 'Hello') {
        message.channel.send(`Hello  ${message.author}`)
    }

    if (message.content.includes('!test')) {
        message.channel.send('Feliz de q estes texteando (Glad you are testing)')
    }

    if (message.content === '!fast') {
        message.channel.send('http://www.youtube.com/fazttech');
        message.channel.send('http://www.youtube.com/faztcode');
    }

    if (message.content === '!pretty') {
        const embed = new MessageEmbed()
            .setTitle('A pretty Message')
            .setColor('RED')
            .setAuthor('Eddie','https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/10500290_685576168158541_7022010889782324477_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_oc=AQkzw3ah7o55tbwSZVe_-fe8mQ4-hLwyEY9RWlenSwj3PKZeX3OFMZxXzNaHkQ_3qyo&_nc_ht=scontent.flim9-1.fna&oh=faae62eea274196d1d831a35c6b74b26&oe=5EA99699')    
             .addField('Something One', 'Lorem Ipsum')
             .addField('Something One', 'Lorem Ipsum')
             .addField('Something One', 'Lorem Ipsum')
            // .addField('Something One', 'Lorem Ipsum');
        message.channel.send(embed);
    }
    

    //Verificar bien el contenido debido a que no sale la funcion borrar en este caso
    if (message.content.startsWith('!clear')) {
        async function clear() {
            try {
                //await msg.delete()
                const fetched = await message.channel.fetchMessages({limit: 99});
                message.channel.bulkDelete(fetched);
                console.log('Messages deleted');
            } catch (e) {
                console.log(e)
            }
        }
    }

})


client.login('Njk0MzI1Mjc3MDE0MzYwMTM1.XoJ-7A.YdyIbyiWDme6v8tQGkUk4Yl5OHU');
const {MESSAGES} = require('../../util/constants')
const {loadCommands} = require('../../util/loader')
module.exports.run = (client, message, args, settings) => {
    if(message.author.id != '363636421803769867') return message.reply('Bas non ducoup tu n\'es pas un de mes devs x)')
    loadCommands(client, `${process.cwd()}/commands`)  
    message.channel.send(`Mes ${client.commands.size} commandes ont redémarré`)
}


module.exports.help = MESSAGES.COMMANDS.Dev.CMD
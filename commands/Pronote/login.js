const { MESSAGES } = require('../../util/constants');


module.exports.run = async (client, message, args) => {
    if (args[0]) {
        client.updateUser(message.author, { url: args[0] })
    } else {
        message.reply("Tu n'as pas spécifier l'url pronote")
    }
    if (args[1]) {
        client.updateUser(message.author, { identifiant: args[1] })
    } else {
        message.reply("Tu n'as pas spécifier ton identifiant")
    }
    if (args[2]) {
        client.updateUser(message.author, { mdp: args[2] })
    } else {
        message.reply("Tu n'as pas spécifier ton mot de passe")
    }
    client.updateUser(message.author, { cas: args[3] })
    message.reply(`L'académie que tu as entré est **${args[3]}** pour la modifier tape la commande p!academie`)

}

module.exports.help = MESSAGES.COMMANDS.Pronote.LOGIN;
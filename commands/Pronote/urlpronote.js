const { MESSAGES } = require('../../util/constants');


module.exports.run = async (client, message, args) => {
    if (args[0]) {
        client.updateUser(message.author, { url: args[0] })
    } else {
        message.reply("Tu n'as pas spécifier l'url pronote")
    }
};

module.exports.help = MESSAGES.COMMANDS.Pronote.URLPRONOTE;
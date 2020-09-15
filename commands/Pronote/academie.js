const { MESSAGES } = require('../../util/constants');


module.exports.run = async (client, message, args) => {
    if (args[0]) {
        client.updateUser(message.author, { cas: args[0] })
    } else {
        message.reply("Tu n'as pas spécifier ton académie (toute les academie prise en charge sont noté ici: https://github.com/Litarvan/pronote-api")
    }
};
module.exports.help = MESSAGES.COMMANDS.Pronote.ACADEMIE;
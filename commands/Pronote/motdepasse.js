const { MESSAGES } = require('../../util/constants');


module.exports.run = async (client, message, args) => {
    if (args[0]) {
        client.updateUser(message.author, { mdp: args[0] })
    } else {
        message.reply("Tu n'as pas spécifier ton mot de passe")
    }
};

module.exports.help = MESSAGES.COMMANDS.Pronote.MOTDEPASSE;
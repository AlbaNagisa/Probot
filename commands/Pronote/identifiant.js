const { Message } = require('discord.js');
const { MESSAGES } = require('../../util/constants');


module.exports.run = async (client, message, args) => {
    if (args[0]) {
        client.updateUser(message.author, { identifiant: args[0] })
    } else {
        message.reply("Tu n'as pas spécifier ton identifiant pronote")
    }
};

module.exports.help = MESSAGES.COMMANDS.Pronote.IDENTIFIANT;
const { MESSAGES } = require('../../util/constants');

module.exports.run = (client, message, args) => {



    console.log()
    client.generateInvite(['ADMINISTRATOR']).then(l => {
        message.channel.send({
            embed: {
                color: '0234FA',
                description: "J'espère pouvoir être l'un des futurs bot que tu utiliseras pour ton serveur ! :wink:",
                title: "Invites moi en cliquant ici !",
                url: l
        },
        })
    });
}

module.exports.help = MESSAGES.COMMANDS.Misc.INVITE;
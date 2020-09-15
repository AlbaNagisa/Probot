const { MESSAGES } = require('../../util/constants');
const { MessageEmbed } = require('discord.js')
const pronote = require('pronote-api');
const moment = require("moment")

module.exports.run = async (client, message, args, dbUser) => {


    const url = dbUser.url;
    const cas = dbUser.cas;
    const username = dbUser.identifiant;
    const password = dbUser.mdp;

    const session = await pronote.login(url, username, password, cas ? cas : null).catch(err => {
        if (err.code === pronote.errors.WRONG_CREDENTIALS.code) {
            message.channel.send('Mauvais identifiants');
        } else {
            console.error(err);
        }
    });
    if (!args[0] && !args[5]) return message.channel.send("Tu dois ecrire le laps de temps que tu veux comme ceci exemple: `16 9 2020 18 9 2020`")
    const date = new Date(args[5], (args[4] - 1), (args[3]))
    const homew = await session.homeworks(new Date(args[2], (args[1]-1), args[0]), moment(date).add(1, 'd'));
    const dateh = homew.for
    const embed = new MessageEmbed()
    .setTitle(`Devoir de ${session.user.name} en ${session.user.studentClass.name} pour le ${moment(dateh).add(1, "d").locale("fr").format("dddd Do MMMM")}`)
    for (const devoir of homew) {
        embed.setColor('#0234FA')
        embed.addField(`${devoir.subject} donné le ${moment(devoir.givenAt).locale("fr").format("dddd Do MMMM")}:`, `${devoir.description}
Fait: ${devoir.done ? "Oui" : "Non"}`)
       
    }
    message.channel.send(embed, homew.files ? homew.files : null)

}

module.exports.help = MESSAGES.COMMANDS.Pronote.DEVOIR;
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
            message.reply('Mauvais identifiants');
        } else {
            console.error(err);
        }
    });
    if (!args[0] && !args[5]) return message.channel.send("Tu dois ecrire le laps de temps que tu veux comme ceci exemple: `16 9 2020 18 9 2020`")
    const date = new Date(args[5], (args[4] - 1), (args[3]))
    const timetable = await session.timetable(new Date(args[2], (args[1]-1), args[0]), moment(date).add(1, 'd'));

    const embed = new MessageEmbed()
        .setTitle(`Emploi du temps de ${session.user.name} en ${session.user.studentClass.name}`)
        .setColor('#0234FA')
    for (const matiere of timetable) {
        embed.addField(`\u200b${matiere.subject} avec ${matiere.teacher}`, `
En salle: ${matiere.room} le ${moment(matiere.to).locale("fr").format("dddd Do MMMM")} de ${moment(matiere.from).locale("fr").format("HH:mm:ss")} à ${moment(matiere.to).locale("fr").format("HH:mm:ss")}`);
    }
    message.channel.send(embed)


}

module.exports.help = MESSAGES.COMMANDS.Pronote.EMPLOIDUTEMPS;
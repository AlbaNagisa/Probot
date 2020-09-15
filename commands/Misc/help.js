const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const categoryList = readdirSync('./commands');
const { MESSAGES } = require('../../util/constants');

module.exports.run = (client, message, args) => {
  if (!args.length) {
    const embed = new MessageEmbed()
      .setColor('#0234FA')
      .addField("Liste des commandes", `Une liste de toutes les sous-catégories disponibles et des commandes qui les composent.\nPour plus d'informations sur une commande, tapez \`${client.config.PREFIX}help <nom de la commande>\`.`)

    for (const category of categoryList) {
      console.log(category)
      embed.addField(
        `${category}`,
        `\`${client.commands.filter(cat => cat.help.category.toLowerCase() === category.toLowerCase()).map(cmd => cmd.help.name).join('\`, \`')}\``
      );
    };
    
    return message.channel.send(embed);
  } else {
    const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));
    
    console.log(command);
    if (!command) return message.reply("Cette commande n'existe pas!");

    const embed = new MessageEmbed()
      .setColor('#0234FA')
      .setTitle(`\`${command.help.name}\``)
      .addField("Option:", `<> = argument obligatoire, [] = argument falcultatif`)
      .addField("Description:", `${command.help.description}`)
      .addField("Alias:", command.help.aliases ? `${command.help.aliases}` : `${command.help.name}`)
      .addField("Utilisation:", command.help.usage ? `${client.config.PREFIX}${command.help.name} ${command.help.usage}` : `${client.config.PREFIX}${command.help.name}`)
      .addField("Exemple:", command.help.exemple ? `${client.config.PREFIX}${command.help.name} ${command.help.exemple}` : `${client.config.PREFIX}${command.help.name}`)
    if (command.help.aliases.length > 1) embed.addField("Alias", `\`${command.help.aliases.join('\`, \`')}\``, true);
    return message.channel.send(embed);
  }
};

module.exports.help = MESSAGES.COMMANDS.Misc.HELP;
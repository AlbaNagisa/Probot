const { Client, Collection } = require('discord.js');
const { loadCommands, loadEvents } = require("./util/loader");
const config = require('./config');
const client = new Client();
require ('./util/function')(client);

client.mongoose = require("./util/mongoose");
["commands", "cooldowns"].forEach(x => client[x] = new Collection());

loadCommands(client);
loadEvents(client);
client.mongoose.init();
client.config = config;



client.login(config.TOKEN);
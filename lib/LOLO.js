const Eris = require("eris");
const token = require("../config").token;
const fs = require("fs");
const Handlers = require("./Handlers");

class LOLO extends Eris{
	constructor() {
		super(token);
		this.lolo = new Eris("Bot "+token, {
		intents: ["guidMessages", "guildMembers"],
        maxShards: "auto"
        });
        this.commands = new Eris.Collection();
        this.events = new Eris.Collection();
        new Handlers(this.lolo).loadCommands();
        new Handlers(this.lolo).loadEvents();
		}
}

module.exports = LOLO;
const Eris = require("eris");
const token = require("../config").token;
const fs = require("fs");
class LOLO extends Eris{
	constructor() {
		super(token);
		this.lolo = new Eris("Bot "+token, {
		intents: ["guidMessages", "guildMembers"],
        maxShards: "auto"
        });
        this.commands = [];
        this.events = new Eris.Collection();
        // Event handling
        for(let file of fs.readdirSync("./events/").filter(_file => _file.endsWith('.js'))) {
        	this.event = require("../events/"+file);
        	this.lolo.on(this.event.name, (...args) => this.event.run(...args))
        }
        return this;
		}
}

module.exports = LOLO;
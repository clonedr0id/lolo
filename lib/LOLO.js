const Eris = require("eris");
const token = require("../config").token;
class LOLO extends Eris{
	constructor() {
		super(token);
		this.lolo = new Eris("Bot "+token, {
		intents: ["guidMessages", "guildMembers"],
        maxShards: "auto"
        });
        this.commands = [];
        this.events = new Eris.Collection();

        return this;
		}
	     run() {
		  return this.lolo.connect();
		}
}

module.exports = LOLO;
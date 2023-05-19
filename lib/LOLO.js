const Eris = require("Eris");
class LOLO extends Eris{
	constructor() {
		super();
		this.lolo = new Eris("Bot "+process.env.token, {
        intents: [],
        maxShards: "auto"
		})
	}
}
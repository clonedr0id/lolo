const fs = require("fs");
const Eris = require("eris");

class Handlers{
      constructor(lolo) {
      	this.lolo = lolo;
            this.lolo.commands = new Eris.Collection();
            this.lolo.events = new Eris.Collection();
      }
      async loadCommands() {
      	for(let cmdFile of fs.readdirSync("./commands/").filter(q => q.endsWith(".js"))) {
      		const File = require("../commands/"+cmdFile);
            this.lolo.commands.set(File.name, File);
      	}
      }
      async loadEvents() {
      	for(let eventFile of fs.readdirSync("./events/").filter(q => q.endsWith(".js"))) {
      		const File = require("../events/"+eventFile);
            this.lolo.events.set(eventFile.replace(".js", ""), File);
            this.lolo.on(File.name, File.bind(null, this.lolo));
      	}
      }
}

module.exports = Handlers;
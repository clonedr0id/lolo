const fs = require("fs");

class Handlers{
      constructor(client) {
      	this.lolo = client;
      }
      async loadCommands() {
      	for(let cmdFile of fs.readdirSync("./commands/").filter(q => q.endsWith(".js"))) {
      		const File = require("../commands/"+cmdFile);
            this.lolo.commands.add(File.name, File);
      	}
      }
      async loadEvents() {
      	for(let eventFile of fs.readdirSync("../events/").filter(q => q.endsWith(".js"))) {
      		const File = require("./events/"+eventFile);
            this.lolo.events.add(File.name, File)
            this.lolo.on(File.name, (...args) => File.run(...args));
      	}
      }
}

module.exports = Handlers;
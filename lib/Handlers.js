const bot = require("./LOLO");
const fs = require("fs");

class Handlers{
      constructor(client) {
      	this.client = client;
      }
      async loadCommands() {
      	for(let cmdFile of fs.readdirSync("../events/").filter(q => q.endsWith(".js"))) {
      		const File = require("./events/"+cmdFile);
            this.client.commands.set(File.name, File)
            
      	}
      }
      async loadEvents() {
      	for(let eventFile of fs.readdirSync("../events/").filter(q => q.endsWith(".js"))) {
      		const File = require("./events/"+eventFile);
            this.client.events.set(File.name, File)
            this.client.on(File.name, (...args) => File.run(...args));
      	}
      }
}
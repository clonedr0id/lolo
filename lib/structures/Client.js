const Eris = require("eris");
const token = require("../../config").token;
const fs = require("fs");
const path = require("path");

class LOLO extends Eris{
	constructor() {
		super(token);
		this.lolo = new Eris("Bot "+token, {
		intents: ["guidMessages", "guildMembers"],
        maxShards: "auto"
        });
        this.lolo.commands = new Eris.Collection();
        // Put all commands in collection
       for(let cmdFile of fs.readdirSync("./commands/").filter(q => q.endsWith(".js"))) {
          const File = require("../../commands/"+cmdFile);
            this.lolo.commands.set(File.name, File);
             this.lolo.registerCommands(File.name, File.run, File.options)
            }
        // Events
    this.lolo.on('ready', () => {
       console.log("tum adre")
      registerCommands();
   });


        }
	}

module.exports = LOLO;
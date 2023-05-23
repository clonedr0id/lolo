const Eris = require("eris");
const fs = require("fs");
const token = require("./config").token;
const lolo = new Eris("Bot "+token, {
		intents: ["guidMessages", "guildMembers"],
        maxShards: "auto"
});
        lolo.commands = new Eris.Collection();

        // Events
lolo.on("ready", () => {
    	for(let cmdFile of fs.readdirSync("./commands/").filter(q => q.endsWith(".js"))) {
          const File = require("./commands/"+cmdFile);
            lolo.commands.set(File.options.name, File);
             lolo.createCommand(File.options);
            }
     console.log("logged")
});
    lolo.on("interactionCreate", i =>{
    console.log(i);
});

lolo.connect();
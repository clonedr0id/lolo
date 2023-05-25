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
             lolo.createCommand(File.options)
         }
         console.log("logged");
     });

    lolo.on("interactionCreate", async i =>{
       if(i.data.name) {
        const Command = require("./commands/"+i.data.name)
        await Command.run(lolo, i)
       } else if(i.data.options[0]?.name) {
        const Subcommand = require("./subcommands/"+i.data.options[0]);
        await Subcommand.run(lolo, i, i.data.options[0]?.options);
       }
});

lolo.connect();
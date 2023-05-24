const Eris = require("eris");
const fs = require("fs");
const token = require("./config").token;
const lolo = new Eris("Bot "+token, {
		intents: ["guidMessages", "guildMembers"],
        maxShards: "auto"
});
        lolo.commands = new Eris.Collection();
        lolo.components = new Eris.Collection();

        // Events
lolo.on("ready", () => {
    	for(let cmdFile of fs.readdirSync("./commands/").filter(q => q.endsWith(".js"))) {
          const File = require("./commands/"+cmdFile);
          const Component = require("./components/"+File.options.name+"/component")
            lolo.commands.set(File.options.name, File);
             lolo.createCommand(File.options)
            if(File.options.component) return lolo.components.set(File.options.name, Component);
         }
         console.log("logged");
     });

    lolo.on("interactionCreate", async i =>{
       if(i.data.name) {
        if(i.type == 3 && i.data.custom_id == lolo.components.get(File.options.name).custom_id) {
            console.log(i.data.values[0]);
        }
        const Command = require("./commands/"+i.data.name)
        await Command.run(lolo, i)
       } else if(i.data.options[0]?.name) {
        const Subcommand = require("./subcommands/"+i.data.options[0]);
        await Subcommand.run(lolo, i, i.data.options[0]?.options);
       }
});

lolo.connect();
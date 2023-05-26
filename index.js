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
            lolo.commands.set(File.options.name, File);
            lolo.components.set(File.options.name, File.components)
             lolo.createCommand(File.options)
         }
         console.log("logged");
     });

    lolo.on("interactionCreate", async i =>{
        try {
       if(i.member.user.bot) return;
       console.log(i)
       if(i.data.name) {
        const Command = require("./commands/"+i.data.name);
        await Command.run(lolo, i, i.data.options);
        if(i.data.component_type == 2 && i.data.custom_id == "lolo") {
        return i.createMessage({ content: "hola" })
    }
       }
       if(i.data.options[0]?.name) {
        const Subcommand = require("./subcommands/"+i.data.options[0].name);
        await Subcommand.run(lolo, i, i.data.options[0]?.options);
       }
   } catch(err) {
    return console.error(err);
   }
});

lolo.connect();
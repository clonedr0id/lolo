const Eris = require("eris");
const fs = require("fs");
const token = require("./config").token;
const lolo = new Eris("Bot "+token, {
		intents: ["guildMessages", "guildMembers"],
        maxShards: "auto"
});
        lolo.commands = new Eris.Collection();
        lolo.components = new Eris.Collection();

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
        try {
       if(i.member.user.bot) return;
       if(i.data.name) {
        const Command = require("./commands/"+i.data.name);
        await Command.run(lolo, i, i.data);
        if(i.data.component_type == 2 && i.data.custom_id) {
        const Component = require("./components/"+i.data.name+"/"+i.data.custom_id)
        await Component.run(lolo, i, i.data)
    }
       }
       if(i.data.options && i.data.options[0]?.name) {
        const Subcommand = require("./subcommands/"+i.data.options[0].name);
        await Subcommand.run(lolo, i, i.data);
       }
   } catch(err) {
    return console.error(err);
   }
});

lolo.connect();
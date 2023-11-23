const Eris = require("eris");
const fs = require("fs");
const token = require("./config").token;
const lolo = new Eris("Bot "+token, {
		intents: ["guildMessages", "guildMembers"],
        maxShards: "auto"
});
        lolo.color = 0x00ff00
        lolo.commands = new Eris.Collection();
        lolo.components = new Eris.Collection();

        // Events
lolo.on("ready", () => {
    	for(let cmdFile of fs.readdirSync("./commands/").filter(q => q.endsWith(".js"))) {
          const File = require("./commands/"+cmdFile+"index.js");
            lolo.commands.set(File.options.name, File);
             lolo.createCommand(File.options)
            }
         console.log("logged");
     });

    lolo.on("interactionCreate", async i =>{
        try {
       if(i.member.user.bot) return;
       if(i.data.name) {
        if(!i.data.options) {
        const Command = require("./commands/"+i.data.name+"/index.js");
        await Command.run(lolo, i, i.data);
    }
        if(i.data.options && i.data.options[0].value) {
	const Args = require("./commands/"+i.data.name+"/args/"+i.data.options[0].name);
        await Args.run(lolo, i, i.data.options[0])
    }
      if(i.data.options && i.data.component_type === 2 && i.data.custom_id) {
        const Button = require("./commands/buttons/"+i.data.name+"/"+i.data.custom_id);
        await Button.run(lolo, i, i.m)
      }
       }
       if(i.data.options && i.data.options[0].type === 1 && i.data.options[0].name) {
        const Subcommand = require("./subcommands/"+i.data.name+"/"+i.data.options[0].name);
        await Subcommand.run(lolo, i, i.data.options[0]);
       }
       if(i.data.options && i.data.options[0].type === 2 && i.data.options[0].options[0].name) {
        const SubcommandGroup = require("./subcommandsgroups/"+i.data.name+"/"+i.data.options[0].options[0].name);
        await SubcommandGroup.run(lolo, i, i.data.options[0].options[0]);
       }
   } catch(err) {
    return console.error(err);
   }
});

lolo.connect();

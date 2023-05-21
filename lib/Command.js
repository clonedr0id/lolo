class Command{
	constructor(options) {
     this.name = options.name;
     this.aliases = options.aliases;
     this.desc = options.desc;
     this.permissions = options.permissions;
	}
	async run(lolo) {
       this.lolo = lolo;
       this.lolo
	}
}
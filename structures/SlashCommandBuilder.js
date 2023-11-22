class CommandBuilder {
	constructor() {
    this.command = {}
	this.command.name = null
	this.command.description = null
	this.command.type = 1
    this.command.category = "unknown"
	this.command.options = []
}
	name(name) {
    this.command.name = name;
    return this;
	}
	desc(desc) {
    this.command.description = desc;
    return this;
	}
    category(category) {
    this.command.category = category;
    return this;
    }
	userOption(name, desc, required) {
    this.command.options = [{
    name: name,
    description: desc,
    type: 6,
    required: required
    }]
    return this;
	}
	roleOption(name, desc, required) {
    this.command.options = [{
    name: name,
    description: desc,
    type: 8,
    required: required
    }]
    return this;
	}
	integerOption(name, desc, required) {
    this.command.options = [{
    name: name,
    description: desc,
    type: 4,
    required: required
    }]
    return this;
	}
	booleanOption(name, desc, required) {
    this.command.options = [{
    name: name,
    description: desc,
    type: 5,
    required: required
    }]
    return this;
	}
	stringOption(name, desc, required) {
    this.command.options = [{
    name: name,
    description: desc,
    type: 3,
    required: required
    }]
    return this;
	}
	numberOption(name, desc, required) {
    this.command.options = [{
    name: name,
    description: desc,
    type: 10,
    required: required
    }]
    return this;
	}
	channelOption(name, desc, required) {
    this.command.options = [{
    name: name,
    description: desc,
    type: 7,
    required: required
    }]
    return this;
	}
    group(option) {
    this.command.options = [option];
    return this;
    }
    subCommand(option) {
    this.command.options = [option];
    return this;
    }
	choices(name, value) {
	this.command.options[0].choices = []
	this.command.options[0].choices.push({ name: name, value: value });
	return this;
	}
    get() {
    return this.command;
    }
}

class SubCommandGroupBuilder {
	constructor() {
    this.command = {}
	this.command.name = null
	this.command.description = null
    this.command.type = 2
	this.command.options = []
}
	name(name) {
    this.command.name = name;
    return this;
	}
	desc(desc) {
    this.command.description = desc;
    return this;
	}
	subCommand(name, desc) {
	this.command.options.push({
	name: name,
	description: desc,
	type: 1
	})
    return this;
	}
    get() {
    return this.command;
    }
}

class SubCommandBuilder {
	constructor() {
    this.command = {}
	this.command.name = null
	this.command.description = null
	this.command.type = 1
    this.command.category = "unknown"
	this.command.options = []
}
	name(name) {
    this.command.name = name;
    return this;
	}
	desc(desc) {
    this.command.description = desc;
    return this;
	}
    category(category) {
    this.command.category = category;
    return this;
    }
	userOption(name, desc, required) {
    this.command.options = [{
    name: name,
    description: desc,
    type: 6,
    required: required
    }]
    return this;
	}
	roleOption(name, desc, required) {
    this.command.options = [{
    name: name,
    description: desc,
    type: 8,
    required: required
    }]
    return this;
	}
	integerOption(name, desc, required) {
    this.command.options = [{
    name: name,
    description: desc,
    type: 4,
    required: required
    }]
    return this;
	}
	booleanOption(name, desc, required) {
    this.command.options = [{
    name: name,
    description: desc,
    type: 5,
    required: required
    }]
    return this;
	}
	stringOption(name, desc, required) {
    this.command.options = [{
    name: name,
    description: desc,
    type: 3,
    required: required
    }]
    return this;
	}
	numberOption(name, desc, required) {
    this.command.options = [{
    name: name,
    description: desc,
    type: 10,
    required: required
    }]
    return this;
	}
	channelOption(name, desc, required) {
    this.command.options = [{
    name: name,
    description: desc,
    type: 7,
    required: required
    }]
    return this;
	}
	choices(name, value) {
	this.command.options[0].choices = []
	this.command.options[0].choices.push({ name: name, value: value });
	return this;
	}
    get() {
    return this.command;
    }
}


module.exports = {
 CommandBuilder,
 SubCommandBuilder,
 SubCommandGroupBuilder
};

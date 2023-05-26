class SelectMenu {
	constructor() {
		this.components = [{
		type: 1,
		components: [{
			type: 3,
			custom_id: null,
			options: []
		}]
		}]
		this;
	}
	select(select) {
    if(select == "user") {
    this.components[0].type = 5
    return this;
    } else if(select == "role") {
    this.components[0].type = 6
    return this;
    } else if(select == "channel") {
    this.components[0].type = 8
    return this;
    }
	}
	item(label, value, desc, emoji) {
	if(emoji) {
    this.components[0].components[0].options.push({
    label: label,
    value: value,
    description: desc,
    emoji: {
    name: emoji.name,
    id: emoji.id
    }
    })
    return this;
    } else {
    this.components[0].components[0].options.push({
    label: label,
    value: value,
    description: desc
    })
    return this;
    }
	}
	placeholder(placeholder) {
    this.components[0].placeholder = placeholder;
    return this;
	}
	minValues(value) {
    this.components[0].min_values = value;
    return this;
	}
	maxValues(value) {
    this.components[0].max_values = value;
    return this;
	}
	disabled(boolean) {
    this.components[0].disabled = boolean;
    return this;
	}
	custom_id(custom_id) {
    this.components[0].components[0].custom_id = custom_id;
    return this;
	}
	get() {
    return this.components;
	}
}

module.exports = SelectMenu;
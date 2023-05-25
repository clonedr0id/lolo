class Button {
	constructor() {
		this.button = [];
		this.object = [];
		this.button.components = {}
		this.button.components.type = 2;
		this.button.type = 1;
	}
	label(label) {
    this.button.components.label = label;
    return this;
	}
	style(style) {
    this.button.components.style = style;
    return this;
	}
	url(url) {
    if(!url) return this;
    this.button.components.url = url;
    return this;
	}
	custom_id(custom_id) {
    this.button.components.custom_id = custom_id;
    return this;
	}
	get() {
	this.button = [{
    type: 1,
    components: [this.button.components]
	}]
	return this.button;
	}
}

module.exports = Button;
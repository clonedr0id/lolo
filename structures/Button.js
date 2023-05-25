class Button {
	constructor() {
		this.components = {
		type: 1,
		components: [{
	type: 2,
    label: null,
    style: null,
    custom_id: null
		}]
	}
	}
	label(label) {
    this.components.components[0].label = label;
    return this;
	}
	style(style) {
	this._style;
	if(style == "primary") {
    this._style = 1
	} else if(style == "secondary") {
    this._style = 2
	} else if(style == "success") {
    this._style = 3
	} else if(style == "danger") {
    this._style = 4
	} else if(style == "link") {
    this._style = 5
	}
    this.components.components[0].style = this._style;
    return this;
	}
	url(url) {
    if(!this.components.components[0].style == 5) return this;
    this.components.components[0].url = url;
    return this;
	}
	custom_id(custom_id) {
    if(this.components.components[0].style == 5) return this;
    this.components.components[0].custom_id = custom_id;
    return this;
	}
	disabled(boolean) {
	this.components.components[0].disabled = boolean;
	return this;
	}
	get() {
	return this;
	}
}

module.exports = Button;
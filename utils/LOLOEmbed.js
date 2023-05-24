class LOLOEmbed {
  constructor() {
  	this.embed = {};
  	this.embed.fields = [];
  }

  title(title) {
    this.embed.title = title;
    return this;
  }

  desc(description) {
    this.embed.description = description;
    return this;
  }

  color(color) {
    this.embed.color = color;
    return this;
  }

  field(name, value, inline = false) {
  	this.embed.fields.push({ name: name, value: value, inline })
    return this;
  }

  footer(text, icon_url) {
    this.embed.footer = {
    	text: text,
    	icon_url: icon_url
    }
    return this;
  }

  timestamp(timestamp) {
    this.embed.timestamp = timestamp;
    return this;
  }

  get() {
    return this.embed;
  }
}

module.exports = LOLOEmbed
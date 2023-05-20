module.exports = {
	name: "messageCreate",
	run: (message) =>{
	message.channel.createMessage("hi")
  }
}
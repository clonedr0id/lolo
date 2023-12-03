const Embed = require("../../structures/Embed");

module.exports.run = async(bot, i, data) =>{
  const command = bot.commands.get(data.value);
  if(!command) return i.createMessage({ content: "That command doesn't exists." })
  const embed = new Embed()
  .title(`${command.options.name} information.`)
  .field("Description:", command.options.description)
  .field("Category:", command.options.category)
  .color(bot.color)
  .get();
  return i.createMessage({ embeds: [embed] });
}

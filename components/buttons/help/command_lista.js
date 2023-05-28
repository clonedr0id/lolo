const Embed = require("../../../structures/Embed");

module.exports.run = async(bot, i, data) =>{
  const micola = [];
  micola.push(bot.commands.filter(q => q.options.category === "mi cola").name)
  const embed = new Embed()
  .title("LOLO's Command List")
  .field("Mi cola", micola)
  .color(bot.color)
  .get();
  return i.createMessage({ embeds: [embed] })
}
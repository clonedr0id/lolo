const Embed = require("../../../structures/Embed");

module.exports.run = async(bot, i, data) =>{
  const micola = [];
  bot.commands.forEach((command) => {
    if (command.options.category === "mi cola") {
      micola.push(command.options.name);
    }
  });
  const embed = new Embed()
  .title("LOLO's Command List")
  .field("Mi cola", micola.join(", "))
  .color(bot.color)
  .get();
  return i.createMessage({ embeds: [embed] })
}
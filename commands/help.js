const Embed = require("../structures/Embed");
const Button = require("../structures/Button");
const Eris = require("eris");

module.exports.run = async(bot, i, data) => {
  const github_b = new Button()
  .label("LOLO's Source Code")
  .style("link")
  .url("https://github.com/elclonazepam/lolo")
  .disabled(false)
  .custom_id("github")
  .get();
  console.log(i);

    const embed = new Embed()
    .title("Título del Embed")
    .desc("Descripción del Embed")
    .field("Campo 1", "Valor 1")
    .field("Campo 2", "Valor 2")
    .field("hola", "adios")
    .color(0x00ff00)
    .footer("Pie de página")
    .timestamp(new Date())
    .get();
   i.createMessage({ embeds: [embed] , components: [github_b] })
  }

module.exports.options = {
  name: "help",
  description: "Shows the list of commands.",
  type: 1
}
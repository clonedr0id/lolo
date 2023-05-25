const Embed = require("../structures/Embed");
const SelectMenu = require("../structures/SelectMenu");

module.exports.run = async(bot, i) => {
  const menu = new SelectMenu()
  .placeholder("clickea aca puto")
  .item("porque clickeaste", "why_click", "puto el que clickea")
  .custom_id("lolo")
  .get();

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
    i.createMessage({ embeds: [embed] , components: menu })
  }

module.exports.options = {
  name: "help",
  description: "aña",
  type: 1
}
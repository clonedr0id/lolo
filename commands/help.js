const Embed = require("../structures/Embed");
const Button = require("../structures/Button");

module.exports.run = async(bot, i) => {
  const components = new Button()
  .label("Hola")
  .style(1)
  .custom_id("boton")
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
    i.createMessage({ embeds: [embed] , components: components })
  }

module.exports.options = {
  name: "help",
  description: "aña",
  type: 1
}
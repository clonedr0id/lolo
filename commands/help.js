const Embed = require("../structures/Embed");
const Button = require("../structures/Button");

module.exports.run = async(bot, i, data) => {
  const boton = new Button()
  .label("hola")
  .style("primary")
  .disabled(false)
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
    i.createMessage({ embeds: [embed] , components: boton })
  }

module.exports.options = {
  name: "help",
  description: "aña",
  type: 1,
  options: [{
      name: "cmd",
      type: 1,
      description: "cmd"
 }]
}
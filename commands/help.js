const LOLOEmbed = require("../utils/LOLOEmbed");

module.exports.run = async(bot, i) => {
  const component = bot.components.get("help");
    const embed = new LOLOEmbed()
    .title("Título del Embed")
    .desc("Descripción del Embed")
    .field("Campo 1", "Valor 1")
    .field("Campo 2", "Valor 2")
    .field("hola", "adios")
    .color(0x00ff00)
    .footer("Pie de página")
    .timestamp(new Date())
    .get();
    i.createMessage({ embeds: [embed] , component: [component] })
  }

module.exports.options = {
  name: "help",
  type: 3
}
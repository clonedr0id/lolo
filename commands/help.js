const LOLOEmbed = require("../utils/LOLOEmbed");

module.exports.run = async(bot, i) => {
  const components = [{
    components: [{
      type: 1,
      components: [{
        type: 3,
        custom_id: "menu",
        options: [{
          label: "NYA",
          value: "nya"
        },{
          label: "KYA",
          value: "kya"
        }]
      }],
      placeholder: "yomama is so fat",
      min_values: 1
    }]
  }]
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
    i.createMessage({ embeds: [embed] , components: components })
  }

module.exports.options = {
  name: "help",
  description: "aña",
  type: 1
}
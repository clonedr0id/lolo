const Embed = require("../structures/Embed");
const Button = require("../structures/Button");
const {
  CommandBuilder
} = require("../structures/SlashCommandBuilder");

module.exports.run = async(bot, i, data) => {
  const github_b = new Button()
  .label("LOLO's Source Code")
  .style("link")
  .url("https://github.com/elclonazepam/lolo")
  .disabled(false)
  .custom_id("github")
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
   i.createMessage({ embeds: [embed] , components: [github_b] })
  }

module.exports.options = new CommandBuilder()
.name("help")
.desc("Shows the list of commands.")
.category("mi cola")
.stringOption("command", "Shows a command info.", false)
.get();
module.exports.run = async(bot, i) => {
        const embed = {
      title: 'Título del Embed',
      description: 'Descripción del Embed',
      fields: [
        { name: 'Campo 1', value: 'Valor 1' },
        { name: 'Campo 2', value: 'Valor 2' },
      ],
      color: 0x00ff00, // Color en formato hexadecimal
      footer: {
        text: 'Pie de página',
      },
      timestamp: new Date(),
    };
    i.createMessage({ embed: [embed] })
  }

module.exports.options = {
  name: "help",
  description: "esto despues lo configuro porque va a ser multilenguaje",
  type: 1
}
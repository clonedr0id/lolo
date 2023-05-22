module.exports = {
  name: "lolo",
  options: {
    description: "hola"
  },
  run: async(i) => {
    i.createMessage({ content: "tu madre" });
  },
};
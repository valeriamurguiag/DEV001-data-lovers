//Filtrar ASESINOS
const filtrarAsesinos = (arr) => {
  return arr.filter(function (champion){ return champion.tags.includes('Assassin')})
};







//Exportar data
export default filtrarAsesinos;
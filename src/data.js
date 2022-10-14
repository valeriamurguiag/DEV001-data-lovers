//Filtrar ASESINOS
const filtrarAsesinos = (arr) => {
  return arr.filter(function (champion){ return champion.tags.includes('Assassin')})
};

//Filtrar LUCHADORES
const filtrarLuchadores = (arr) => {
  return arr.filter(function (champion){ return champion.tags.includes('Fighter')})
};

export {filtrarAsesinos, filtrarLuchadores}
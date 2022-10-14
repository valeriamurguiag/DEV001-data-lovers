//Filtrar ASESINOS
const filtrarAsesinos = (arr) => {
  return arr.filter(function (champion){ return champion.tags.includes('Assassin')})
};

//Filtrar LUCHADORES
const filtrarLuchadores = (arr) => {
  return arr.filter(function (champion){ return champion.tags.includes('Fighter')})
};

//Filtrar MAGOS
const filtrarMagos = (arr) => {
  return arr.filter(function (champion){ return champion.tags.includes('Mage')})
}

//Filtrar TIRADORES
const filtrarTiradores = (arr) => {
  return arr.filter(function (champion){ return champion.tags.includes('Marksman')})
}

//Filtrar APOYOS
const filtrarApoyos = (arr) => {
  return arr.filter(function (champion){ return champion.tags.includes('Support') })
}

//Filtrar tanques
const filtrarTanques = (arr) => {
  return arr.filter(function (champion){return champion.tags.includes('Tank')})
}


export {filtrarAsesinos, filtrarLuchadores, filtrarMagos, filtrarTiradores, filtrarApoyos, filtrarTanques}
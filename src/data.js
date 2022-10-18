import data from './data/lol/lol.js';

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

//Acomodar TODOS A-Z
const allChampion = data.data;
const arrObject2 = Object.values(allChampion);

function acomodarTodosAz () {
arrObject2.sort( (a, b) => {
  if(a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
  })
}

//Acomodar TODOS Z-A
function acomodarTodosZa () {
  arrObject2.sort( (a, b) => {
    if(a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
    })
  }


export {filtrarAsesinos, filtrarLuchadores, filtrarMagos, filtrarTiradores, filtrarApoyos, filtrarTanques, acomodarTodosAz, acomodarTodosZa}
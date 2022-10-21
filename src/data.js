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

function acomodarTodosAz (champions) {
  let sortedAz = champions.sort( (a, b) => {
    if(a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
    })
 return sortedAz;
}

//Acomodar TODOS Z-A
function acomodarTodosZa (champions) {
  let sortedZa = champions.sort( (a, b) => {
    if(a.name > b.name) {
      return -1;
    } else if (a.name < b.name) {
      return 1;
    } else {
      return 0;
    }
  });
  return sortedZa;
}

//Ordenar ASESINOS ATAQUE mayor a menor
function nivelAtaqueAsesinos (champions) {
  let nivelAtaqueAsesinosMayoraMenor = champions.sort( (a, b) => {
    if(a.info.attack > b.info.attack) {
      return -1;
    } else if (a.info.attack < b.info.attack) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelAtaqueAsesinosMayoraMenor;
}

//Ordenar ASESINOS DEFENSA mayor a menor
function nivelDefensaAsesinos (champions) {
  let nivelDefensaAsesinosMayoraMenor = champions.sort( (a, b) => {
    if(a.info.defense > b.info.defense) {
      return -1;
    } else if (a.info.defense < b.info.defense) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelDefensaAsesinosMayoraMenor;
}

//Ordenar ASESINOS MAGIA mayor a menor
function nivelMagiaAsesinos (champions) {
  let nivelMagiaAsesinosMayoraMenor = champions.sort( (a, b) => {
    if(a.info.magic > b.info.magic) {
      return -1;
    } else if (a.info.magic < b.info.magic) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelMagiaAsesinosMayoraMenor;
}

//Ordenar ASESINOS DIFICULTAD mayor a menor
function nivelDificultadAsesinos (champions) {
  let nivelDificultadAsesinosMayoraMenor = champions.sort( (a, b) => {
    if(a.info.difficulty > b.info.difficulty) {
      return -1;
    } else if (a.info.difficulty < b.info.difficulty) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelDificultadAsesinosMayoraMenor;
}


//Ordenar LUCHADORES ATAQUE mayor a menor
function nivelAtaqueLuchadores (champions) {
  let nivelAtaqueLuchadoresMayoraMenor = champions.sort( (a, b) => {
    if(a.info.attack > b.info.attack) {
      return -1;
    } else if (a.info.attack < b.info.attack) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelAtaqueLuchadoresMayoraMenor;
}

//Ordenar LUCHADORES DEFENSA mayor a menor
function nivelDefensaLuchadores (champions) {
  let nivelDefensaLuchadoresMayoraMenor = champions.sort( (a, b) => {
    if(a.info.defense > b.info.defense) {
      return -1;
    } else if (a.info.defense < b.info.defense) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelDefensaLuchadoresMayoraMenor;
}

//Ordenar LUCHADORES MAGIA mayor a menor
function nivelMagiaLuchadores (champions) {
  let nivelMagiaLuchadoresMayoraMenor = champions.sort( (a, b) => {
    if(a.info.magic > b.info.magic) {
      return -1;
    } else if (a.info.magic < b.info.magic) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelMagiaLuchadoresMayoraMenor;
}

//Ordenar LUCHADORES DIFICULTAD mayor a menor
function nivelDificultadLuchadores (champions) {
  let nivelDificultadLuchadoresMayoraMenor = champions.sort( (a, b) => {
    if(a.info.difficulty > b.info.difficulty) {
      return -1;
    } else if (a.info.difficulty < b.info.difficulty) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelDificultadLuchadoresMayoraMenor;
}

//Ordenar MAGOS ATAQUE mayor a menor
function nivelAtaqueMagos (champions) {
  let nivelAtaqueMagosMayoraMenor = champions.sort( (a, b) => {
    if(a.info.attack > b.info.attack) {
      return -1;
    } else if (a.info.attack < b.info.attack) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelAtaqueMagosMayoraMenor;
}

//Ordenar MAGOS DEFENSA mayor a menor
function nivelDefensaMagos (champions) {
  let nivelDefensaMagosMayoraMenor = champions.sort( (a, b) => {
    if(a.info.defense > b.info.defense) {
      return -1;
    } else if (a.info.defense < b.info.defense) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelDefensaMagosMayoraMenor;
}

//Ordenar MAGOS MAGIA mayor a menor
function nivelMagiaMagos (champions) {
  let nivelMagiaMagosMayoraMenor = champions.sort( (a, b) => {
    if(a.info.magic > b.info.magic) {
      return -1;
    } else if (a.info.magic < b.info.magic) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelMagiaMagosMayoraMenor;
}

//Ordenar MAGOS DIFICULTAD mayor a menor
function nivelDificultadMagos (champions) {
  let nivelDificultadMagosMayoraMenor = champions.sort( (a, b) => {
    if(a.info.difficulty > b.info.difficulty) {
      return -1;
    } else if (a.info.difficulty < b.info.difficulty) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelDificultadMagosMayoraMenor;
}

//Ordenar TIRADORES ATAQUE mayor a menor
function nivelAtaqueTiradores (champions) {
  let nivelAtaqueTiradoresMayoraMenor = champions.sort( (a, b) => {
    if(a.info.attack > b.info.attack) {
      return -1;
    } else if (a.info.attack < b.info.attack) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelAtaqueTiradoresMayoraMenor;
}

//Ordenar TIRADORES DEFENSA mayor a menor
function nivelDefensaTiradores (champions) {
  let nivelDefensaTiradoresMayoraMenor = champions.sort( (a, b) => {
    if(a.info.defense > b.info.defense) {
      return -1;
    } else if (a.info.defense < b.info.defense) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelDefensaTiradoresMayoraMenor;
}

//Ordenar TIRADORES MAGIA mayor a menor
function nivelMagiaTiradores (champions) {
  let nivelMagiaTiradoresMayoraMenor = champions.sort( (a, b) => {
    if(a.info.magic > b.info.magic) {
      return -1;
    } else if (a.info.magic < b.info.magic) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelMagiaTiradoresMayoraMenor;
}

//Ordenar Tiradores DIFICULTAD mayor a menor
function nivelDificultadTiradores (champions) {
  let nivelDificultadTiradoresMayoraMenor = champions.sort( (a, b) => {
    if(a.info.difficulty > b.info.difficulty) {
      return -1;
    } else if (a.info.difficulty < b.info.difficulty) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelDificultadTiradoresMayoraMenor;
}

//Ordenar APOYOS ATAQUE mayor a menor
function nivelAtaqueApoyos (champions) {
  let nivelAtaqueApoyosMayoraMenor = champions.sort( (a, b) => {
    if(a.info.attack > b.info.attack) {
      return -1;
    } else if (a.info.attack < b.info.attack) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelAtaqueApoyosMayoraMenor;
}

//Ordenar APOYOS DEFENSA mayor a menor
function nivelDefensaApoyos (champions) {
  let nivelDefensaApoyosMayoraMenor = champions.sort( (a, b) => {
    if(a.info.defense > b.info.defense) {
      return -1;
    } else if (a.info.defense < b.info.defense) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelDefensaApoyosMayoraMenor;
}

//Ordenar APOYOS MAGIA mayor a menor
function nivelMagiaApoyos (champions) {
  let nivelMagiaApoyosMayoraMenor = champions.sort( (a, b) => {
    if(a.info.magic > b.info.magic) {
      return -1;
    } else if (a.info.magic < b.info.magic) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelMagiaApoyosMayoraMenor;
}

//Ordenar APOYOS DIFICULTAD mayor a menor
function nivelDificultadApoyos (champions) {
  let nivelDificultadApoyosMayoraMenor = champions.sort( (a, b) => {
    if(a.info.difficulty > b.info.difficulty) {
      return -1;
    } else if (a.info.difficulty < b.info.difficulty) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelDificultadApoyosMayoraMenor;
}

//Ordenar TANQUES ATAQUE mayor a menor
function nivelAtaqueTanques (champions) {
  let nivelAtaqueTanquesMayoraMenor = champions.sort( (a, b) => {
    if(a.info.attack > b.info.attack) {
      return -1;
    } else if (a.info.attack < b.info.attack) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelAtaqueTanquesMayoraMenor;
}

//Ordenar TANQUES DEFENSA mayor a menor
function nivelDefensaTanques (champions) {
  let nivelDefensaTanquesMayoraMenor = champions.sort( (a, b) => {
    if(a.info.defense > b.info.defense) {
      return -1;
    } else if (a.info.defense < b.info.defense) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelDefensaTanquesMayoraMenor;
}

//Ordenar TANQUES MAGIA mayor a menor
function nivelMagiaTanques (champions) {
  let nivelMagiaTanquesMayoraMenor = champions.sort( (a, b) => {
    if(a.info.magic > b.info.magic) {
      return -1;
    } else if (a.info.magic < b.info.magic) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelMagiaTanquesMayoraMenor;
}

//Ordenar TANQUES DIFICULTAD mayor a menor
function nivelDificultadTanques (champions) {
  let nivelDificultadTanquesMayoraMenor = champions.sort( (a, b) => {
    if(a.info.difficulty > b.info.difficulty) {
      return -1;
    } else if (a.info.difficulty < b.info.difficulty) {
      return 1;
    } else {
      return 0;
    }
  });
  return nivelDificultadTanquesMayoraMenor;
}

export { filtrarAsesinos, filtrarLuchadores, filtrarMagos, filtrarTiradores, filtrarApoyos, filtrarTanques, 
  acomodarTodosAz, acomodarTodosZa, 
  nivelAtaqueAsesinos, nivelDefensaAsesinos, nivelMagiaAsesinos, nivelDificultadAsesinos,
  nivelAtaqueLuchadores, nivelDefensaLuchadores, nivelMagiaLuchadores, nivelDificultadLuchadores,
  nivelAtaqueMagos, nivelDefensaMagos, nivelMagiaMagos, nivelDificultadMagos, 
  nivelAtaqueTiradores, nivelDefensaTiradores, nivelMagiaTiradores, nivelDificultadTiradores,
  nivelAtaqueApoyos, nivelDefensaApoyos, nivelMagiaApoyos, nivelDificultadApoyos,
  nivelAtaqueTanques, nivelDefensaTanques, nivelMagiaTanques, nivelDificultadTanques }
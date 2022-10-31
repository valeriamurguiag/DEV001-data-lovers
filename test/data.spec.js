import {
  filtrarAsesinos, filtrarLuchadores, filtrarMagos, filtrarTiradores, filtrarApoyos, filtrarTanques,
  acomodarTodosAz, acomodarTodosZa,
  nivelAtaqueAsesinos, nivelDefensaAsesinos, nivelMagiaAsesinos, nivelDificultadAsesinos,
  nivelAtaqueLuchadores, nivelDefensaLuchadores, nivelMagiaLuchadores, nivelDificultadLuchadores,
  nivelAtaqueMagos, nivelDefensaMagos, nivelMagiaMagos, nivelDificultadMagos,
  nivelAtaqueTiradores, nivelDefensaTiradores, nivelMagiaTiradores, nivelDificultadTiradores,
  nivelAtaqueApoyos, nivelDefensaApoyos, nivelMagiaApoyos, nivelDificultadApoyos,
  nivelAtaqueTanques, nivelDefensaTanques, nivelMagiaTanques, nivelDificultadTanques
} from '../src/data.js';

const data = [
  {
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4
    },
  },
  {
    name: 'Ahri',
    tags: ["Mage", "Assassin"],
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5
    },
  },
  {
    name: 'Ashe',
    tags: ["Marksman", "Support"],
    info: {
      attack: 7,
      defense: 3,
      magic: 2,
      difficulty: 4
    },
  },
  {
    name: 'Ekko',
    tags: ["Assassin", "Fighter"],
    info: {
      attack: 5,
      defense: 3,
      magic: 7,
      difficulty: 8
    },
  },
  {
    name: 'Zyra',
    tags: ['Mage', 'Support'],
    info: {
      attack: 4,
      defense: 3,
      magic: 8,
      difficulty: 7
    },
  },
  {
    name: 'Galio',
    tags: ["Tank", "Mage"],
    info: {
      attack: 3,
      defense: 7,
      magic: 6,
      difficulty: 3
    },
  },

];

const ordenAz = [
  {
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4
    },
  },
  {
    name: 'Ahri',
    tags: ["Mage", "Assassin"],
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5
    },
  },
  {
    name: 'Ashe',
    tags: ["Marksman", "Support"],
    info: {
      attack: 7,
      defense: 3,
      magic: 2,
      difficulty: 4
    },
  },
  {
    name: 'Ekko',
    tags: ["Assassin", "Fighter"],
    info: {
      attack: 5,
      defense: 3,
      magic: 7,
      difficulty: 8
    },
  },
  {
    name: 'Galio',
    tags: ["Tank", "Mage"],
    info: {
      attack: 3,
      defense: 7,
      magic: 6,
      difficulty: 3
    },
  },
  {
    name: 'Zyra',
    tags: ['Mage', 'Support'],
    info: {
      attack: 4,
      defense: 3,
      magic: 8,
      difficulty: 7
    },
  },
];

const ordenZa = [
  {
    name: 'Zyra',
    tags: ['Mage', 'Support'],
    info: {
      attack: 4,
      defense: 3,
      magic: 8,
      difficulty: 7
    },
  },
  {
    name: 'Galio',
    tags: ["Tank", "Mage"],
    info: {
      attack: 3,
      defense: 7,
      magic: 6,
      difficulty: 3
    },
  },
  {
    name: 'Ekko',
    tags: ["Assassin", "Fighter"],
    info: {
      attack: 5,
      defense: 3,
      magic: 7,
      difficulty: 8
    },
  },
  {
    name: 'Ashe',
    tags: ["Marksman", "Support"],
    info: {
      attack: 7,
      defense: 3,
      magic: 2,
      difficulty: 4
    },
  },
  {
    name: 'Ahri',
    tags: ["Mage", "Assassin"],
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5
    },
  },
  {
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4
    },
  },
];

const traerAsesinos = [
  {

    name: 'Ahri',
    tags: ["Mage", "Assassin"],
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5
    },
  },
  {
    name: 'Ekko',
    tags: ["Assassin", "Fighter"],
    info: {
      attack: 5,
      defense: 3,
      magic: 7,
      difficulty: 8
    },
  },

];

const traerluchadores = [
  {
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4
    },
  },
  {
    name: 'Ekko',
    tags: ["Assassin", "Fighter"],
    info: {
      attack: 5,
      defense: 3,
      magic: 7,
      difficulty: 8
    },
  },
];

const traerMagos = [
  {
    name: 'Ahri',
    tags: ["Mage", "Assassin"],
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5
    },
  },
  {
    name: 'Zyra',
    tags: ['Mage', 'Support'],
    info: {
      attack: 4,
      defense: 3,
      magic: 8,
      difficulty: 7
    },
  },
  {
    name: 'Galio',
    tags: ["Tank", "Mage"],
    info: {
      attack: 3,
      defense: 7,
      magic: 6,
      difficulty: 3
    },
  },

];

const traerTiradores = [
  {
    name: 'Ashe',
    tags: ["Marksman", "Support"],
    info: {
      attack: 7,
      defense: 3,
      magic: 2,
      difficulty: 4
    },
  },
];

const traerApoyos = [
  {
    name: 'Ashe',
    tags: ["Marksman", "Support"],
    info: {
      attack: 7,
      defense: 3,
      magic: 2,
      difficulty: 4
    },
  },
  {
    name: 'Zyra',
    tags: ['Mage', 'Support'],
    info: {
      attack: 4,
      defense: 3,
      magic: 8,
      difficulty: 7
    },
  },
];

const traerTanques = [

  {
    name: 'Aatrox',
    tags: ["Fighter", "Tank"],
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4
    },
  },

  {
    name: 'Galio',
    tags: ["Tank", "Mage"],
    info: {
      attack: 3,
      defense: 7,
      magic: 6,
      difficulty: 3
    },
  },
];

// Test de filter (Es una funcion)

describe('filtrarAsesinos', () => {
  it('is a function', () => {
    expect(typeof filtrarAsesinos).toBe('function');
  });
});

describe('filtrarLuchadores', () => {
  it('is a function', () => {
    expect(typeof filtrarLuchadores).toBe('function');
  });
});

describe('filtrarMagos', () => {
  it('is a function', () => {
    expect(typeof filtrarMagos).toBe('function');
  });
});

describe('filtrarTiradores', () => {
  it('is a function', () => {
    expect(typeof filtrarTiradores).toBe('function');
  });

  describe('filtrarApoyos', () => {
    it('is a function', () => {
      expect(typeof filtrarApoyos).toBe('function');
    });

  });

  describe('filtrarTanques', () => {
    it('is a function', () => {
      expect(typeof filtrarTanques).toBe('function');
    });

  });


  // Test de filter (toEqual)

  it('retorna todos los asesinos', () => {
    expect(filtrarAsesinos(data)).toEqual(traerAsesinos);
  });

  it('retorna todos los luchadores', () => {
    expect(filtrarLuchadores(data)).toEqual(traerluchadores);
  });

  it('retorna todos los magos', () => {
    expect(filtrarMagos(data)).toEqual(traerMagos);
  });

  it('retorna todos los tiradores', () => {
    expect(filtrarTiradores(data)).toEqual(traerTiradores);
  });

  it('retorna todos los apoyos', () => {
    expect(filtrarApoyos(data)).toEqual(traerApoyos);
  });

  it('retorna todos los tanques', () => {
    expect(filtrarTanques(data)).toEqual(traerTanques);
  });

});

// Test de Sort (Es una funcion)

describe('acomodarTodosAz', () => {
  it('is a function', () => {
    expect(typeof acomodarTodosAz).toBe('function');
  });

  // Test de Sort (toEqual)

  it('retorna campeones ordenados AZ', () => {
    expect(acomodarTodosAz(data)).toEqual(ordenAz);
  });

  it('retorna campeones ordenados ZA', () => {
    expect(acomodarTodosZa(data)).toEqual(ordenZa);
  });
});


// Test de Niveles de ataque, defensa, magia y dificultad (Es una funcion)

describe('nivelAtaqueAsesinos', () => {
  it('is a function', () => {
    expect(typeof nivelAtaqueAsesinos).toBe('function');
  });
});

describe('nivelDefensaAsesinos', () => {
  it('is a function', () => {
    expect(typeof nivelDefensaAsesinos).toBe('function');
  });
});

describe('nivelMagiaAsesinos', () => {
  it('is a function', () => {
    expect(typeof nivelMagiaAsesinos).toBe('function');
  });
});

describe('nivelDificultadAsesinos', () => {
  it('is a function', () => {
    expect(typeof nivelDificultadAsesinos).toBe('function');
  });
});

describe('nivelAtaqueLuchadores', () => {
  it('is a function', () => {
    expect(typeof nivelAtaqueLuchadores).toBe('function');
  });
});

describe('nivelDefensaLuchadores', () => {
  it('is a function', () => {
    expect(typeof nivelDefensaLuchadores).toBe('function');
  });
});

describe('nivelMagiaLuchadores', () => {
  it('is a function', () => {
    expect(typeof nivelMagiaLuchadores).toBe('function');
  });
});

describe('nivelDificultadLuchadores', () => {
  it('is a function', () => {
    expect(typeof nivelDificultadLuchadores).toBe('function');
  });
});

describe('nivelAtaqueMagos', () => {
  it('is a function', () => {
    expect(typeof nivelAtaqueMagos).toBe('function');
  });
});

describe('nivelDefensaMagos', () => {
  it('is a function', () => {
    expect(typeof nivelDefensaMagos).toBe('function');
  });
});

describe('nivelMagiaMagos', () => {
  it('is a function', () => {
    expect(typeof nivelMagiaMagos).toBe('function');
  });
});

describe('nivelDificultadMagos', () => {
  it('is a function', () => {
    expect(typeof nivelDificultadMagos).toBe('function');
  });
});

describe('nivelAtaqueTiradores', () => {
  it('is a function', () => {
    expect(typeof nivelAtaqueTiradores).toBe('function');
  });
});

describe('nivelDefensaTiradores', () => {
  it('is a function', () => {
    expect(typeof nivelDefensaTiradores).toBe('function');
  });
});

describe('nivelMagiaTiradores', () => {
  it('is a function', () => {
    expect(typeof nivelMagiaTiradores).toBe('function');
  });
});

describe('nivelDificultadTiradores', () => {
  it('is a function', () => {
    expect(typeof nivelDificultadTiradores).toBe('function');
  });
});

describe('nivelAtaqueApoyos', () => {
  it('is a function', () => {
    expect(typeof nivelAtaqueApoyos).toBe('function');
  });

});

describe('nivelDefensaApoyos', () => {
  it('is a function', () => {
    expect(typeof nivelDefensaApoyos).toBe('function');
  });

});

describe('nivelMagiaApoyos', () => {
  it('is a function', () => {
    expect(typeof nivelMagiaApoyos).toBe('function');
  });

});

describe('nivelDificultadApoyos', () => {
  it('is a function', () => {
    expect(typeof nivelDificultadApoyos).toBe('function');
  });

});

describe('nivelAtaqueTanques', () => {
  it('is a function', () => {
    expect(typeof nivelAtaqueTanques).toBe('function');
  });

});

describe('nivelDefensaTanques', () => {
  it('is a function', () => {
    expect(typeof nivelDefensaTanques).toBe('function');
  });

});

describe('nivelMagiaTanques', () => {
  it('is a function', () => {
    expect(typeof nivelMagiaTanques).toBe('function');
  });

});

describe('nivelDificultadTanques', () => {
  it('is a function', () => {
    expect(typeof nivelDificultadTanques).toBe('function');
  });

});

// Test de Niveles de ataque, defensa, magia y dificultad  (toEqual)

it('retorna nivel de ataque de asesinos', () => { 
  
  const asesinosAscendente = [
  
    {
      name: 'Ahri',
      tags: ["Mage", "Assassin"],
      info: {
        attack: 3,
        defense: 4,
        magic: 8,
        difficulty: 5
      },
    },
    {
      name: 'Ekko',
      tags: ["Assassin", "Fighter"],
      info: {
        attack: 5,
        defense: 3,
        magic: 7,
        difficulty: 8
      },
    },
  ];
  
  const ataqueAsesinos = [
    {
      name: 'Ekko',
      tags: ["Assassin", "Fighter"],
      info: {
        attack: 5,
        defense: 3,
        magic: 7,
        difficulty: 8
      },
    },
    {
      name: 'Ahri',
      tags: ["Mage", "Assassin"],
      info: {
        attack: 3,
        defense: 4,
        magic: 8,
        difficulty: 5
      },
    },
  ];
  expect(nivelAtaqueAsesinos(asesinosAscendente)).toEqual(ataqueAsesinos)
  });
  


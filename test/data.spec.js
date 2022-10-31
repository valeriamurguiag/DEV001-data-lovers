import {
  filtrarAsesinos, filtrarLuchadores, filtrarMagos, filtrarTiradores, filtrarApoyos, filtrarTanques,
  acomodarTodosAz, acomodarTodosZa,
  nivelAtaqueAsesinos, nivelDefensaAsesinos, nivelMagiaAsesinos, nivelDificultadAsesinos
  // nivelAtaqueLuchadores, nivelDefensaLuchadores, nivelMagiaLuchadores, nivelDificultadLuchadores,
  // nivelAtaqueMagos, nivelDefensaMagos, nivelMagiaMagos, nivelDificultadMagos,
  // nivelAtaqueTiradores, nivelDefensaTiradores, nivelMagiaTiradores, nivelDificultadTiradores,
  // nivelAtaqueApoyos, nivelDefensaApoyos, nivelMagiaApoyos, nivelDificultadApoyos,
  // nivelAtaqueTanques, nivelDefensaTanques, nivelMagiaTanques, nivelDificultadTanques
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

  it('retorna nivel de defensa de asesinos', () => { 
  
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
    expect(nivelDefensaAsesinos(asesinosAscendente)).toEqual(ataqueAsesinos)
    });

    it('retorna nivel de magia de asesinos', () => { 
  
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
      expect(nivelMagiaAsesinos(asesinosAscendente)).toEqual(ataqueAsesinos)
      });

      it('retorna nivel de dificultad de asesinos', () => { 
  
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
        expect(nivelDificultadAsesinos(asesinosAscendente)).toEqual(ataqueAsesinos)
        });



  
  });
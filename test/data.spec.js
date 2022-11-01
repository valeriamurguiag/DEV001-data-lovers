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

// Test de Niveles de ataque, defensa, magia y dificultad - ASESINOS (toEqual)

it('retorna nivel de ataque de asesinos', () => { 
  
  const asesinosAtaqueAscendente = [
  
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
  expect(nivelAtaqueAsesinos(asesinosAtaqueAscendente)).toEqual(ataqueAsesinos)
  });

  it('retorna nivel de defensa de asesinos', () => { 
  
    const asesinosDefensaAscendente = [
    
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
    
    const defensaAsesinos = [

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
    expect(nivelDefensaAsesinos(asesinosDefensaAscendente)).toEqual(defensaAsesinos)
    });

    it('retorna nivel de magia de asesinos', () => { 
  
      const asesinosMagiaAscendente = [

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
      
      const magiaAsesinos = [
  
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
      expect(nivelMagiaAsesinos(asesinosMagiaAscendente)).toEqual(magiaAsesinos)
      });

      it('retorna nivel de dificultad de asesinos', () => { 
  
        const asesinosDificultadAscendente = [
        
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
        
        const dificultadAsesinos = [

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
        expect(nivelDificultadAsesinos(asesinosDificultadAscendente)).toEqual(dificultadAsesinos)
        });

        // Test de Niveles de ataque, defensa, magia y dificultad - LUCHADORES (toEqual)

        it('retorna nivel de ataque de luchadores', () => { 
  
          const luchadoresAtaqueAscendente = [
          
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
          
          const ataqueLuchadores = [
      
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
          expect(nivelAtaqueLuchadores(luchadoresAtaqueAscendente)).toEqual(ataqueLuchadores)
          });

          it('retorna nivel de defensa de luchadores', () => { 
  
            const luchadoresDefensaAscendente = [
            
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
            
            const defensaLuchadores = [
        
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
            expect(nivelDefensaLuchadores(luchadoresDefensaAscendente)).toEqual(defensaLuchadores)
            });

            //
            it('retorna nivel de magia de luchadores', () => { 
  
              const luchadoresMagiaAscendente = [
              
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
              
              const magiaLuchadores = [
          
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
              expect(nivelMagiaLuchadores(luchadoresMagiaAscendente)).toEqual(magiaLuchadores)
              });

              it('retorna nivel de dificultad de luchadores', () => { 
  
                const luchadoresDificultadAscendente = [
                
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
                
                const dificultadLuchadores = [
            
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
                expect(nivelDificultadLuchadores(luchadoresDificultadAscendente)).toEqual(dificultadLuchadores)
                });

        // Test de Niveles de ataque, defensa, magia y dificultad - MAGOS (toEqual)

        it('retorna nivel de ataque de magos', () => { 
  
          const magosAtaqueAscendente = [
          
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
          
          const ataqueMagos = [
      
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
          expect(nivelAtaqueMagos(magosAtaqueAscendente)).toEqual(ataqueMagos)
          });

          it('retorna nivel de defensa de magos', () => { 
  
            const magosDefensaAscendente = [
            
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
            
            const defensaMagos = [
        
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
            expect(nivelDefensaMagos(magosDefensaAscendente)).toEqual(defensaMagos)
            });

            //
            it('retorna nivel de magia de magos', () => { 
  
              const magosMagiaAscendente = [
              
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
              
              const magiaMagos = [
          
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
              expect(nivelMagiaMagos(magosMagiaAscendente)).toEqual(magiaMagos)
              });

              it('retorna nivel de dificultad de magos', () => { 
  
                const magosDificultadAscendente = [
                
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
                
                const dificultadMagos = [
            
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
                expect(nivelDificultadMagos(magosDificultadAscendente)).toEqual(dificultadMagos)
                });

        // Test de Niveles de ataque, defensa, magia y dificultad - TIRADORES (toEqual)

        it('retorna nivel de ataque de tiradores', () => { 
  
          const tiradoresAtaqueAscendente = [
          
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
          
          const ataqueTiradores = [
      
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
          expect(nivelAtaqueTiradores(tiradoresAtaqueAscendente)).toEqual(ataqueTiradores)
          });

          it('retorna nivel de defensa de tiradores', () => { 
  
            const tiradoresDefensaAscendente = [
            
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
            
            const defensaTiradores = [
        
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
            expect(nivelDefensaTiradores(tiradoresDefensaAscendente)).toEqual(defensaTiradores)
            });

            //
            it('retorna nivel de magia de tiradores', () => { 
  
              const tiradoresMagiaAscendente = [
              
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
              
              const magiaTiradores = [
          
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
              expect(nivelMagiaTiradores(tiradoresMagiaAscendente)).toEqual(magiaTiradores)
              });

              it('retorna nivel de dificultad de tiradores', () => { 
  
                const tiradoresDificultadAscendente = [
                
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
                
                const dificultadTiradores = [
            
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
                expect(nivelDificultadTiradores(tiradoresDificultadAscendente)).toEqual(dificultadTiradores)
                });

        // Test de Niveles de ataque, defensa, magia y dificultad - APOYOS (toEqual)

        it('retorna nivel de ataque de apoyos', () => { 
  
          const apoyosAtaqueAscendente = [
          
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
          
          const ataqueApoyos = [
      
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
          expect(nivelAtaqueApoyos(apoyosAtaqueAscendente)).toEqual(ataqueApoyos)
          });

          it('retorna nivel de defensa de apoyos', () => { 
  
            const apoyosDefensaAscendente = [
            
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
            
            const defensaApoyos = [
        
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
            expect(nivelDefensaApoyos(apoyosDefensaAscendente)).toEqual(defensaApoyos)
            });

            //
            it('retorna nivel de magia de apoyos', () => { 
  
              const apoyosMagiaAscendente = [
              
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
              
              const magiaApoyos = [
          
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
              expect(nivelMagiaApoyos(apoyosMagiaAscendente)).toEqual(magiaApoyos)
              });

              it('retorna nivel de dificultad de apoyos', () => { 
  
                const apoyosDificultadAscendente = [
                
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
                
                const dificultadApoyos = [
            
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
                expect(nivelDificultadApoyos(apoyosDificultadAscendente)).toEqual(dificultadApoyos)
                });

        // Test de Niveles de ataque, defensa, magia y dificultad - TANQUES (toEqual)

        it('retorna nivel de ataque de tanques', () => { 
  
          const tanquesAtaqueAscendente = [
          
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
          
          const ataqueTanques = [
      
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
          expect(nivelAtaqueTanques(tanquesAtaqueAscendente)).toEqual(ataqueTanques)
          });

          it('retorna nivel de defensa de tanques', () => { 
  
            const tanquesDefensaAscendente = [
            
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
            
            const defensaTanques = [
        
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
            expect(nivelDefensaTanques(tanquesDefensaAscendente)).toEqual(defensaTanques)
            });

            //
            it('retorna nivel de magia de tanques', () => { 
  
              const tanquesMagiaAscendente = [
              
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
              
              const magiaTanques = [
          
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
              expect(nivelMagiaTanques(tanquesMagiaAscendente)).toEqual(magiaTanques)
              });

              it('retorna nivel de dificultad de tanques', () => { 
  
                const tanquesDificultadAscendente = [
                
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
                
                const dificultadTanques = [
            
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
                expect(nivelDificultadTanques(tanquesDificultadAscendente)).toEqual(dificultadTanques)
                });

  });
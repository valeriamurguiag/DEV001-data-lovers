import { acomodarTodosAz, acomodarTodosZa, filtrarAsesinos, filtrarTanques, nivelAtaqueAsesinos, nivelDificultadTanques} from '../src/data.js';

//Test Historia de usuario N° 1

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

];

const traerTanques = [
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
    name: 'Aatrox',
    tags: ["Fighter", "Tank"],
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4
    },
  },
];

const asesinosNivelAtaque = [
  {

    name: 'Ahri',
    tags: ["Mage", "Assassin"],
    info: {
      attack: 3,
    },
  },
];


const tanquesNivelDificultad = [
  {
    name: 'Aatrox',
    tags: ["Fighter", "Tank"],
    info: {
      difficulty: 4
    },
  },
    {
      name: 'Galio',
      tags: ["Tank", "Mage"],
      info: {
        difficulty: 3
      },
    },
];


describe('acomodarTodosAz', () => {
  it('is a function', () => {
    expect(typeof acomodarTodosAz).toBe('function');
  });

  it('retorna campeones ordenados AZ', () => {
    expect(acomodarTodosAz(data)).toEqual(ordenAz);
  });

  it('retorna campeones ordenados ZA', () => {
    expect(acomodarTodosZa(data)).toEqual(ordenZa);
  });
});

//Test Historia de usuario N° 2

describe('filtrarAsesinos', () => {
  it('is a function', () => {
    expect(typeof filtrarAsesinos).toBe('function');
  });

  it('retorna todos los asesinos', () => {
    expect(filtrarAsesinos(data)).toEqual(traerAsesinos);
  });

  it('is a function', () => {
    expect(typeof nivelAtaqueAsesinos).toBe('function');
  });

  it('retorna nivel de ataque de asesinos', () => {
    expect(nivelAtaqueAsesinos(data.info)).toEqual(asesinosNivelAtaque);
  });

});

//Test Historia de usuario N° 3

describe('filtrarTanques', () => {
  it('is a function', () => {
    expect(typeof filtrarTanques).toBe('function');
  });

  it('retorna todos los tanques', () => {
    expect(filtrarTanques(data)).toEqual(traerTanques);
  });

  it('is a function', () => {
    expect(typeof nivelDificultadTanques).toBe('function');
  });

  it('retorna niveles de dificultad de tanques', () => {
    expect(nivelDificultadTanques(data.info)).toEqual(tanquesNivelDificultad);
  });

});
// import { example, anotherExample } from '../src/data.js';
// import mostrarTodos from '../src/main.js';

// describe('mostrarTodos', () => {
//   it('deberia ser una funcion', () => {
//     expect(typeof mostrarTodos).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });

//NUEVO INTENTO

// import data from '../src/data/lol/lol.js';

// const allChampion = data.data;
// const allData = Object.values(allChampion);

// import {acomodarTodosAz, acomodarTodosZa, todosAzMostrados, todosZaMostrados} from '../src/data.js';
  
//   const ordenAz = todosAzMostrados
  
//   const ordenZa = todosZaMostrados

// describe('acomodarTodosAz', () => {
//     it('is a function', () => {
//       expect(typeof acomodarTodosAz).toBe('function');
//     });
  
//     it('retorna campeones ordenados AZ', () => {
//       expect(acomodarTodosAz(allData)).toEqual(ordenAz);
//     });
  
//     it('retorna campeones ordenados ZA', () => {
//       expect(acomodarTodosZa(allData)).toEqual(ordenZa);
//     });
//   });

import {acomodarTodosAz, acomodarTodosZa} from '../src/data.js';

const data = [
    {
      name: 'Aatrox',
      tags: ['Fighter', 'Tank'],
    },
    {
      name: 'Ahri',
      tags: ["Mage", "Assassin"],
    },
    {
      name: 'Zyra',
      tags: ['Mage', 'Support'],
    },
    {
      name: 'Galio',
      tags: ["Tank", "Mage"],
    },
  ];
  
  const ordenAz = [
    {
      name: 'Aatrox',
      tags: ['Fighter', 'Tank'],
    },
    {
      name: 'Ahri',
      tags: ["Mage", "Assassin"],
    },
    {
      name: 'Galio',
      tags: ["Tank", "Mage"],
    },
    {
      name: 'Zyra',
      tags: ['Mage', 'Support'],
    },
  ];
  
  const ordenZa = [
    {
      name: 'Zyra',
      tags: ['Mage', 'Support'],
    },
    {
      name: 'Galio',
      tags: ["Tank", "Mage"],
    },
    {
      name: 'Ahri',
      tags: ["Mage", "Assassin"],
    },
    {
      name: 'Aatrox',
      tags: ['Fighter', 'Tank'],
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
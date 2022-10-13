//Importar la data
import data from './data/lol/lol.js';

const allChampion = data.data;
const arrObject = Object.values(allChampion);
// console.log(allChampion);
// console.log(arrObject);

// MOSTRAR DATA
const container = document.getElementById('container');

const traerData = (arr) => {
  arr.forEach((champion) => {
    const newElement = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    newElement.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    img.src = `${champion.splash}`;
    p.innerHTML = `${champion.name}`;
    newElement.appendChild(img);
    newElement.appendChild(p);
    container.appendChild(newElement);
  });
};
traerData(arrObject);


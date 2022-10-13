//Importar la data
import data from './data/lol/lol.js';
import filtrarAsesinos from './data.js';

const allChampion = data.data;
const arrObject = Object.values(allChampion);

//Mostrar TODOS
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

//Mostrar ASESINOS
const x = document.getElementById('asesinos');

const containerAsesinos = document.getElementById('containerAsesinos');

function mostrarAsesinos(arr) {
  arr.forEach((assassin) => {
              const newElement2 = document.createElement('div');
              const img = document.createElement('img');
              const p = document.createElement('p');
              newElement2.classList.add('class-divData');
              img.classList.add('class-img');
              p.classList.add('class-name');
              img.src = `${assassin.splash}`;
              p.innerHTML = `${assassin.name}`;
              newElement2.appendChild(img);
              newElement2.appendChild(p);
              containerAsesinos.appendChild(newElement2);
})
}

const asesinosMostrados = filtrarAsesinos(arrObject);

mostrarAsesinos(asesinosMostrados)
//Añadir evento
x.addEventListener("click", mostrarAsesinos(asesinosMostrados))




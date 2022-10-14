//Importar la data
import data from './data/lol/lol.js';
import {filtrarAsesinos, filtrarLuchadores} from './data.js';

const allChampion = data.data;
const arrObject = Object.values(allChampion);

//Mostrar TODOS
const container = document.getElementById('container');
const todos = document.getElementById('todos');

const mostrarTodos = (arr) => {
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

mostrarTodos(arrObject);

todos.addEventListener("click", mostrarTodos2);

function mostrarTodos2(){

  document.getElementById('containerAsesinos').style.display = "none";
  document.getElementById('containerLuchadores').style.display = "none";
  document.getElementById('containerMagos').style.display = "none";
  document.getElementById('containerTiradores').style.display = "none";
  document.getElementById('containerApoyos').style.display = "none";
  document.getElementById('containerTanques').style.display = "none";
  document.getElementById('container').style.display = "block";
    
  }

//Mostrar ASESINOS
const asesinos = document.getElementById('asesinos');

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
asesinos.addEventListener("click", mostrarAsesinos2);

function mostrarAsesinos2(){

  document.getElementById('container').style.display = "none";
  document.getElementById('containerLuchadores').style.display = "none";
  document.getElementById('containerMagos').style.display = "none";
  document.getElementById('containerTiradores').style.display = "none";
  document.getElementById('containerApoyos').style.display = "none";
  document.getElementById('containerTanques').style.display = "none";
  document.getElementById('containerAsesinos').style.display = "block";
    
  }

  //Mostrar LUCHADORES
const luchadores = document.getElementById('luchadores');

const containerLuchadores = document.getElementById('containerLuchadores');

function mostrarLuchadores(arr) {
  arr.forEach((fighter) => {
              const newElement3 = document.createElement('div');
              const img = document.createElement('img');
              const p = document.createElement('p');
              newElement3.classList.add('class-divData');
              img.classList.add('class-img');
              p.classList.add('class-name');
              img.src = `${fighter.splash}`;
              p.innerHTML = `${fighter.name}`;
              newElement3.appendChild(img);
              newElement3.appendChild(p);
              containerLuchadores.appendChild(newElement3);
})
}

const luchadoresMostrados = filtrarLuchadores(arrObject);

mostrarLuchadores(luchadoresMostrados)
//Añadir evento
luchadores.addEventListener("click", mostrarLuchadores2);

function mostrarLuchadores2(){

  document.getElementById('container').style.display = "none";
  document.getElementById('containerAsesinos').style.display = "none";
  document.getElementById('containerMagos').style.display = "none";
  document.getElementById('containerTiradores').style.display = "none";
  document.getElementById('containerApoyos').style.display = "none";
  document.getElementById('containerTanques').style.display = "none";
  document.getElementById('containerLuchadores').style.display = "block";
    
  }


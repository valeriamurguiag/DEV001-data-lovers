//Importar la data
import data from './data/lol/lol.js';
import {
  filtrarAsesinos, filtrarLuchadores, filtrarMagos, filtrarTiradores, filtrarApoyos, filtrarTanques,
  acomodarTodosAz, acomodarTodosZa,
  nivelAtaqueAsesinos, nivelDefensaAsesinos, nivelMagiaAsesinos, nivelDificultadAsesinos,
  nivelAtaqueLuchadores, nivelDefensaLuchadores, nivelMagiaLuchadores, nivelDificultadLuchadores,
  nivelAtaqueMagos, nivelDefensaMagos, nivelMagiaMagos, nivelDificultadMagos,
  nivelAtaqueTiradores, nivelDefensaTiradores, nivelMagiaTiradores, nivelDificultadTiradores,
  nivelAtaqueApoyos, nivelDefensaApoyos, nivelMagiaApoyos, nivelDificultadApoyos,
  nivelAtaqueTanques, nivelDefensaTanques, nivelMagiaTanques, nivelDificultadTanques
} from './data.js';

const allChampion = data.data;
export const arrObject = Object.values(allChampion);

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

//Añadir evento al click de TODOS
todos.addEventListener("click", mostrarTodos2);

function mostrarTodos2() {

  document.getElementById('containerAsesinos').style.display = "none";
  document.getElementById('containerLuchadores').style.display = "none";
  document.getElementById('containerMagos').style.display = "none";
  document.getElementById('containerTiradores').style.display = "none";
  document.getElementById('containerApoyos').style.display = "none";
  document.getElementById('containerTanques').style.display = "none";
  document.getElementById('containerTodosAz').style.display = "none";
  document.getElementById('containerTodosZa').style.display = "none";
  document.getElementById('ordenarNivelesAsesinos').style.display = "none";
  document.getElementById('ordenarNivelesLuchadores').style.display = "none";
  document.getElementById('ordenarNivelesMagos').style.display = "none";
  document.getElementById('ordenarNivelesTiradores').style.display = "none";
  document.getElementById('ordenarNivelesApoyos').style.display = "none";
  document.getElementById('ordenarNivelesTanques').style.display = "none";
  document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
  document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
  document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
  document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
  document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
  document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
  document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
  document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
  document.getElementById('containerNivelAtaqueMagos').style.display = "none";
  document.getElementById('containerNivelDefensaMagos').style.display = "none";
  document.getElementById('containerNivelMagiaMagos').style.display = "none";
  document.getElementById('containerNivelDificultadMagos').style.display = "none";
  document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
  document.getElementById('containerNivelDefensaTiradores').style.display = "none";
  document.getElementById('containerNivelMagiaTiradores').style.display = "none";
  document.getElementById('containerNivelDificultadTiradores').style.display = "none";
  document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
  document.getElementById('containerNivelDefensaApoyos').style.display = "none";
  document.getElementById('containerNivelMagiaApoyos').style.display = "none";
  document.getElementById('containerNivelDificultadApoyos').style.display = "none";
  document.getElementById('containerNivelAtaqueTanques').style.display = "none";
  document.getElementById('containerNivelDefensaTanques').style.display = "none";
  document.getElementById('containerNivelMagiaTanques').style.display = "none";
  document.getElementById('containerNivelDificultadTanques').style.display = "none";
  document.getElementById('estadisticasDiv').style.display = "none";
  document.getElementById('container').style.display = "block";
  document.getElementById('ordenarTodos').style.display = "block";

}

//Mostrar ASESINOS
const containerAsesinos = document.getElementById('containerAsesinos');
const asesinos = document.getElementById('asesinos');


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

//Añadir evento al click de ASESINOS
asesinos.addEventListener("click", mostrarAsesinos2);

function mostrarAsesinos2() {

  document.getElementById('container').style.display = "none";
  document.getElementById('containerLuchadores').style.display = "none";
  document.getElementById('containerMagos').style.display = "none";
  document.getElementById('containerTiradores').style.display = "none";
  document.getElementById('containerApoyos').style.display = "none";
  document.getElementById('containerTanques').style.display = "none";
  document.getElementById('containerTodosAz').style.display = "none";
  document.getElementById('containerTodosZa').style.display = "none";
  document.getElementById('ordenarTodos').style.display = "none";
  document.getElementById('ordenarNivelesLuchadores').style.display = "none";
  document.getElementById('ordenarNivelesMagos').style.display = "none";
  document.getElementById('ordenarNivelesTiradores').style.display = "none";
  document.getElementById('ordenarNivelesApoyos').style.display = "none";
  document.getElementById('ordenarNivelesTanques').style.display = "none";
  document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
  document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
  document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
  document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
  document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
  document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
  document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
  document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
  document.getElementById('containerNivelAtaqueMagos').style.display = "none";
  document.getElementById('containerNivelDefensaMagos').style.display = "none";
  document.getElementById('containerNivelMagiaMagos').style.display = "none";
  document.getElementById('containerNivelDificultadMagos').style.display = "none";
  document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
  document.getElementById('containerNivelDefensaTiradores').style.display = "none";
  document.getElementById('containerNivelMagiaTiradores').style.display = "none";
  document.getElementById('containerNivelDificultadTiradores').style.display = "none";
  document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
  document.getElementById('containerNivelDefensaApoyos').style.display = "none";
  document.getElementById('containerNivelMagiaApoyos').style.display = "none";
  document.getElementById('containerNivelDificultadApoyos').style.display = "none";
  document.getElementById('containerNivelAtaqueTanques').style.display = "none";
  document.getElementById('containerNivelDefensaTanques').style.display = "none";
  document.getElementById('containerNivelMagiaTanques').style.display = "none";
  document.getElementById('containerNivelDificultadTanques').style.display = "none";
  document.getElementById('containerAsesinos').style.display = "block";
  document.getElementById('ordenarNivelesAsesinos').style.display = "block";

}

//Mostrar LUCHADORES
const containerLuchadores = document.getElementById('containerLuchadores');
const luchadores = document.getElementById('luchadores');

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

//Añadir evento al click de LUCHADORES
luchadores.addEventListener("click", mostrarLuchadores2);

function mostrarLuchadores2() {

  document.getElementById('container').style.display = "none";
  document.getElementById('containerAsesinos').style.display = "none";
  document.getElementById('containerMagos').style.display = "none";
  document.getElementById('containerTiradores').style.display = "none";
  document.getElementById('containerApoyos').style.display = "none";
  document.getElementById('containerTanques').style.display = "none";
  document.getElementById('containerTodosAz').style.display = "none";
  document.getElementById('containerTodosZa').style.display = "none";
  document.getElementById('ordenarNivelesAsesinos').style.display = "none";
  document.getElementById('ordenarTodos').style.display = "none";
  document.getElementById('ordenarNivelesMagos').style.display = "none";
  document.getElementById('ordenarNivelesTiradores').style.display = "none";
  document.getElementById('ordenarNivelesApoyos').style.display = "none";
  document.getElementById('ordenarNivelesTanques').style.display = "none";
  document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
  document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
  document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
  document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
  document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
  document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
  document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
  document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
  document.getElementById('containerNivelAtaqueMagos').style.display = "none";
  document.getElementById('containerNivelDefensaMagos').style.display = "none";
  document.getElementById('containerNivelMagiaMagos').style.display = "none";
  document.getElementById('containerNivelDificultadMagos').style.display = "none";
  document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
  document.getElementById('containerNivelDefensaTiradores').style.display = "none";
  document.getElementById('containerNivelMagiaTiradores').style.display = "none";
  document.getElementById('containerNivelDificultadTiradores').style.display = "none";
  document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
  document.getElementById('containerNivelDefensaApoyos').style.display = "none";
  document.getElementById('containerNivelMagiaApoyos').style.display = "none";
  document.getElementById('containerNivelDificultadApoyos').style.display = "none";
  document.getElementById('containerNivelAtaqueTanques').style.display = "none";
  document.getElementById('containerNivelDefensaTanques').style.display = "none";
  document.getElementById('containerNivelMagiaTanques').style.display = "none";
  document.getElementById('containerNivelDificultadTanques').style.display = "none";
  document.getElementById('containerLuchadores').style.display = "block";
  document.getElementById('ordenarNivelesLuchadores').style.display = "block";

}

//Mostrar MAGOS
const containerMagos = document.getElementById('containerMagos');
const magos = document.getElementById('magos');

function mostrarMagos(arr) {
  arr.forEach((mage) => {
    const newElement4 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    newElement4.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    img.src = `${mage.splash}`;
    p.innerHTML = `${mage.name}`;
    newElement4.appendChild(img);
    newElement4.appendChild(p);
    containerMagos.appendChild(newElement4);
  })
}

const magosMostrados = filtrarMagos(arrObject);
mostrarMagos(magosMostrados)

//Añadir evento al click de MAGOS
magos.addEventListener("click", mostrarMagos2);

function mostrarMagos2() {

  document.getElementById('container').style.display = "none";
  document.getElementById('containerAsesinos').style.display = "none";
  document.getElementById('containerTiradores').style.display = "none";
  document.getElementById('containerApoyos').style.display = "none";
  document.getElementById('containerTanques').style.display = "none";
  document.getElementById('containerLuchadores').style.display = "none";
  document.getElementById('containerTodosAz').style.display = "none";
  document.getElementById('containerTodosZa').style.display = "none";
  document.getElementById('ordenarTodos').style.display = "none";
  document.getElementById('ordenarNivelesAsesinos').style.display = "none";
  document.getElementById('ordenarNivelesLuchadores').style.display = "none";
  document.getElementById('ordenarNivelesTiradores').style.display = "none";
  document.getElementById('ordenarNivelesApoyos').style.display = "none";
  document.getElementById('ordenarNivelesTanques').style.display = "none";
  document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
  document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
  document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
  document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
  document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
  document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
  document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
  document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
  document.getElementById('containerNivelAtaqueMagos').style.display = "none";
  document.getElementById('containerNivelDefensaMagos').style.display = "none";
  document.getElementById('containerNivelMagiaMagos').style.display = "none";
  document.getElementById('containerNivelDificultadMagos').style.display = "none";
  document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
  document.getElementById('containerNivelDefensaTiradores').style.display = "none";
  document.getElementById('containerNivelMagiaTiradores').style.display = "none";
  document.getElementById('containerNivelDificultadTiradores').style.display = "none";
  document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
  document.getElementById('containerNivelDefensaApoyos').style.display = "none";
  document.getElementById('containerNivelMagiaApoyos').style.display = "none";
  document.getElementById('containerNivelDificultadApoyos').style.display = "none";
  document.getElementById('containerNivelAtaqueTanques').style.display = "none";
  document.getElementById('containerNivelDefensaTanques').style.display = "none";
  document.getElementById('containerNivelMagiaTanques').style.display = "none";
  document.getElementById('containerNivelDificultadTanques').style.display = "none";
  document.getElementById('containerMagos').style.display = "block";
  document.getElementById('ordenarNivelesMagos').style.display = "block";

}

//Mostrar TIRADORES
const containerTiradores = document.getElementById('containerTiradores');
const tiradores = document.getElementById('tiradores');

function mostrarTiradores(arr) {
  arr.forEach((marksman) => {
    const newElement5 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    newElement5.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    img.src = `${marksman.splash}`;
    p.innerHTML = `${marksman.name}`;
    newElement5.appendChild(img);
    newElement5.appendChild(p);
    containerTiradores.appendChild(newElement5);
  })
}

const tiradoresMostrados = filtrarTiradores(arrObject);
mostrarTiradores(tiradoresMostrados)

//Añadir evento al click TIRADORES
tiradores.addEventListener("click", mostrarTiradores2);

function mostrarTiradores2() {
  document.getElementById('container').style.display = "none";
  document.getElementById('containerAsesinos').style.display = "none";
  document.getElementById('containerApoyos').style.display = "none";
  document.getElementById('containerTanques').style.display = "none";
  document.getElementById('containerLuchadores').style.display = "none";
  document.getElementById('containerMagos').style.display = "none";
  document.getElementById('containerTodosAz').style.display = "none";
  document.getElementById('containerTodosZa').style.display = "none";
  document.getElementById('ordenarTodos').style.display = "none";
  document.getElementById('ordenarNivelesAsesinos').style.display = "none";
  document.getElementById('ordenarNivelesLuchadores').style.display = "none";
  document.getElementById('ordenarNivelesApoyos').style.display = "none";
  document.getElementById('ordenarNivelesTanques').style.display = "none";
  document.getElementById('ordenarNivelesMagos').style.display = "none";
  document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
  document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
  document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
  document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
  document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
  document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
  document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
  document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
  document.getElementById('containerNivelAtaqueMagos').style.display = "none";
  document.getElementById('containerNivelDefensaMagos').style.display = "none";
  document.getElementById('containerNivelMagiaMagos').style.display = "none";
  document.getElementById('containerNivelDificultadMagos').style.display = "none";
  document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
  document.getElementById('containerNivelDefensaTiradores').style.display = "none";
  document.getElementById('containerNivelMagiaTiradores').style.display = "none";
  document.getElementById('containerNivelDificultadTiradores').style.display = "none";
  document.getElementById('containerNivelAtaqueTanques').style.display = "none";
  document.getElementById('containerNivelDefensaTanques').style.display = "none";
  document.getElementById('containerNivelMagiaTanques').style.display = "none";
  document.getElementById('containerNivelDificultadTanques').style.display = "none";
  document.getElementById('ordenarNivelesTiradores').style.display = "block";
  document.getElementById('containerTiradores').style.display = "block";
}

//Filtrar APOYOS
const apoyos = document.getElementById('apoyos');
const containerApoyos = document.getElementById('containerApoyos');

function mostrarApoyos(arr) {
  arr.forEach((support) => {
    const newElement6 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    newElement6.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    img.src = `${support.splash}`;
    p.innerHTML = `${support.name}`;
    newElement6.appendChild(img);
    newElement6.appendChild(p);
    containerApoyos.appendChild(newElement6);
  })
}

const apoyosMostrados = filtrarApoyos(arrObject);
mostrarApoyos(apoyosMostrados);

//Añadir evento al click APOYOS
apoyos.addEventListener("click", mostrarApoyos2);

function mostrarApoyos2() {
  document.getElementById('container').style.display = "none";
  document.getElementById('containerAsesinos').style.display = "none";
  document.getElementById('containerTanques').style.display = "none";
  document.getElementById('containerLuchadores').style.display = "none";
  document.getElementById('containerMagos').style.display = "none";
  document.getElementById('containerTiradores').style.display = "none";
  document.getElementById('containerTodosAz').style.display = "none";
  document.getElementById('containerTodosZa').style.display = "none";
  document.getElementById('ordenarTodos').style.display = "none";
  document.getElementById('ordenarNivelesAsesinos').style.display = "none";
  document.getElementById('ordenarNivelesLuchadores').style.display = "none";
  document.getElementById('ordenarNivelesTanques').style.display = "none";
  document.getElementById('ordenarNivelesMagos').style.display = "none";
  document.getElementById('ordenarNivelesTiradores').style.display = "none";
  document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
  document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
  document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
  document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
  document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
  document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
  document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
  document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
  document.getElementById('containerNivelAtaqueMagos').style.display = "none";
  document.getElementById('containerNivelDefensaMagos').style.display = "none";
  document.getElementById('containerNivelMagiaMagos').style.display = "none";
  document.getElementById('containerNivelDificultadMagos').style.display = "none";
  document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
  document.getElementById('containerNivelDefensaTiradores').style.display = "none";
  document.getElementById('containerNivelMagiaTiradores').style.display = "none";
  document.getElementById('containerNivelDificultadTiradores').style.display = "none";
  document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
  document.getElementById('containerNivelDefensaApoyos').style.display = "none";
  document.getElementById('containerNivelMagiaApoyos').style.display = "none";
  document.getElementById('containerNivelDificultadApoyos').style.display = "none";
  document.getElementById('containerNivelAtaqueTanques').style.display = "none";
  document.getElementById('containerNivelDefensaTanques').style.display = "none";
  document.getElementById('containerNivelMagiaTanques').style.display = "none";
  document.getElementById('containerNivelDificultadTanques').style.display = "none";
  document.getElementById('ordenarNivelesApoyos').style.display = "block";
  document.getElementById('containerApoyos').style.display = "block";



}

//Mostrar TANQUES
const containerTanques = document.getElementById('containerTanques');
const tanques = document.getElementById('tanques');

function mostrarTanques(arr) {
  arr.forEach((tank) => {
    const newElement7 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    newElement7.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    img.src = `${tank.splash}`;
    p.innerHTML = `${tank.name}`
    newElement7.appendChild(img);
    newElement7.appendChild(p);
    containerTanques.appendChild(newElement7);
  })
}

const tanquesMostrados = filtrarTanques(arrObject);
mostrarTanques(tanquesMostrados);

//Añadir evento al click TANQUES
tanques.addEventListener("click", mostrarTanques2)

function mostrarTanques2() {
  document.getElementById('container').style.display = "none";
  document.getElementById('containerAsesinos').style.display = "none";
  document.getElementById('containerLuchadores').style.display = "none";
  document.getElementById('containerMagos').style.display = "none";
  document.getElementById('containerTiradores').style.display = "none";
  document.getElementById('containerApoyos').style.display = "none";
  document.getElementById('containerTodosAz').style.display = "none";
  document.getElementById('containerTodosZa').style.display = "none";
  document.getElementById('ordenarTodos').style.display = "none";
  document.getElementById('ordenarNivelesAsesinos').style.display = "none";
  document.getElementById('ordenarNivelesLuchadores').style.display = "none";
  document.getElementById('ordenarNivelesMagos').style.display = "none";
  document.getElementById('ordenarNivelesTiradores').style.display = "none";
  document.getElementById('ordenarNivelesApoyos').style.display = "none";
  document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
  document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
  document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
  document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
  document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
  document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
  document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
  document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
  document.getElementById('containerNivelAtaqueMagos').style.display = "none";
  document.getElementById('containerNivelDefensaMagos').style.display = "none";
  document.getElementById('containerNivelMagiaMagos').style.display = "none";
  document.getElementById('containerNivelDificultadMagos').style.display = "none";
  document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
  document.getElementById('containerNivelDefensaApoyos').style.display = "none";
  document.getElementById('containerNivelMagiaApoyos').style.display = "none";
  document.getElementById('containerNivelDificultadApoyos').style.display = "none";
  document.getElementById('containerNivelAtaqueTanques').style.display = "none";
  document.getElementById('containerNivelDefensaTanques').style.display = "none";
  document.getElementById('containerNivelMagiaTanques').style.display = "none";
  document.getElementById('containerNivelDificultadTanques').style.display = "none";
  document.getElementById('ordenarNivelesTanques').style.display = "block";
  document.getElementById('containerTanques').style.display = "block";

}

//Mostrar SOBRE EL JUEGO
const sobreJuego = document.getElementById('sobreJuego');
sobreJuego.addEventListener("click", mostrarSobreElJuego);

function mostrarSobreElJuego() {
  document.getElementById('container').style.display = "none";
  document.getElementById('tituloPrincipal').style.display = "none";
  document.getElementById('menuCentral').style.display = "none";
  document.getElementById('ordenar').style.display = "none";
  document.getElementById('containerAsesinos').style.display = "none";
  document.getElementById('containerLuchadores').style.display = "none";
  document.getElementById('containerMagos').style.display = "none";
  document.getElementById('containerTiradores').style.display = "none";
  document.getElementById('containerApoyos').style.display = "none";
  document.getElementById('containerTanques').style.display = "none";
  document.getElementById('sobreNosotrasDiv').style.display = "none";
  document.getElementById('nuevosJugadoresDiv').style.display = "none";
  document.getElementById('containerTodosAz').style.display = "none";
  document.getElementById('containerTodosZa').style.display = "none";
  document.getElementById('ordenarTodos').style.display = "none";
  document.getElementById('ordenarNivelesAsesinos').style.display = "none";
  document.getElementById('ordenarNivelesLuchadores').style.display = "none";
  document.getElementById('ordenarNivelesMagos').style.display = "none";
  document.getElementById('ordenarNivelesTiradores').style.display = "none";
  document.getElementById('ordenarNivelesApoyos').style.display = "none";
  document.getElementById('ordenarNivelesTanques').style.display = "none";
  document.getElementById('estadisticasDiv').style.display = "none";
  document.getElementById('sobreJuegoDiv').style.display = "block";
}

//Mostrar CAMPEONES
const campeones = document.getElementById('campeones');
campeones.addEventListener("click", mostrarCampeones);

function mostrarCampeones() {
  document.getElementById('containerAsesinos').style.display = "none";
  document.getElementById('containerLuchadores').style.display = "none";
  document.getElementById('containerMagos').style.display = "none";
  document.getElementById('containerTiradores').style.display = "none";
  document.getElementById('containerApoyos').style.display = "none";
  document.getElementById('containerTanques').style.display = "none";
  document.getElementById('sobreNosotrasDiv').style.display = "none";
  document.getElementById('sobreJuegoDiv').style.display = "none";
  document.getElementById('nuevosJugadoresDiv').style.display = "none";
  document.getElementById('estadisticasDiv').style.display = "none";
  document.getElementById('containerTodosAz').style.display = "none";
  document.getElementById('containerTodosZa').style.display = "none";
  document.getElementById('ordenarNivelesAsesinos').style.display = "none";
  document.getElementById('ordenarNivelesLuchadores').style.display = "none";
  document.getElementById('ordenarNivelesMagos').style.display = "none";
  document.getElementById('ordenarNivelesTiradores').style.display = "none";
  document.getElementById('ordenarNivelesApoyos').style.display = "none";
  document.getElementById('ordenarNivelesTanques').style.display = "none";
  document.getElementById('container').style.display = "block";
  document.getElementById('tituloPrincipal').style.display = "block";
  document.getElementById('menuCentral').style.display = "block";
  document.getElementById('ordenar').style.display = "block";
  document.getElementById('ordenarTodos').style.display = "block";

}

//Mostrar NUEVOS JUGADORES
const nuevosJugadores = document.getElementById('nuevosJugadores');
nuevosJugadores.addEventListener("click", mostrarNuevosJugadores);

function mostrarNuevosJugadores() {
  document.getElementById('containerAsesinos').style.display = "none";
  document.getElementById('containerLuchadores').style.display = "none";
  document.getElementById('containerMagos').style.display = "none";
  document.getElementById('containerTiradores').style.display = "none";
  document.getElementById('containerApoyos').style.display = "none";
  document.getElementById('containerTanques').style.display = "none";
  document.getElementById('sobreJuegoDiv').style.display = "none";
  document.getElementById('container').style.display = "none";
  document.getElementById('tituloPrincipal').style.display = "none";
  document.getElementById('menuCentral').style.display = "none";
  document.getElementById('ordenar').style.display = "none";
  document.getElementById('sobreNosotrasDiv').style.display = "none";
  document.getElementById('estadisticasDiv').style.display = "none";
  document.getElementById('containerTodosAz').style.display = "none";
  document.getElementById('containerTodosZa').style.display = "none";
  document.getElementById('ordenarTodos').style.display = "none";
  document.getElementById('ordenarNivelesAsesinos').style.display = "none";
  document.getElementById('ordenarNivelesLuchadores').style.display = "none";
  document.getElementById('ordenarNivelesMagos').style.display = "none";
  document.getElementById('ordenarNivelesTiradores').style.display = "none";
  document.getElementById('ordenarNivelesApoyos').style.display = "none";
  document.getElementById('ordenarNivelesTanques').style.display = "none";
  document.getElementById('nuevosJugadoresDiv').style.display = "block";

}

//Mostrar ESTADISTICAS
const estadisticas = document.getElementById('estadisticas');
estadisticas.addEventListener("click", botonEstadisticas);

function botonEstadisticas() {
  document.getElementById('containerAsesinos').style.display = "none";
  document.getElementById('containerLuchadores').style.display = "none";
  document.getElementById('containerMagos').style.display = "none";
  document.getElementById('containerTiradores').style.display = "none";
  document.getElementById('containerApoyos').style.display = "none";
  document.getElementById('containerTanques').style.display = "none";
  document.getElementById('sobreJuegoDiv').style.display = "none";
  document.getElementById('container').style.display = "none";
  document.getElementById('tituloPrincipal').style.display = "none";
  document.getElementById('menuCentral').style.display = "none";
  document.getElementById('ordenar').style.display = "none";
  document.getElementById('nuevosJugadoresDiv').style.display = "none";
  document.getElementById('containerTodosAz').style.display = "none";
  document.getElementById('containerTodosZa').style.display = "none";
  document.getElementById('ordenarTodos').style.display = "none";
  document.getElementById('ordenarNivelesAsesinos').style.display = "none";
  document.getElementById('ordenarNivelesLuchadores').style.display = "none";
  document.getElementById('ordenarNivelesMagos').style.display = "none";
  document.getElementById('ordenarNivelesTiradores').style.display = "none";
  document.getElementById('ordenarNivelesApoyos').style.display = "none";
  document.getElementById('ordenarNivelesTanques').style.display = "none";
  document.getElementById('sobreNosotrasDiv').style.display = "none";
  document.getElementById('estadisticasDiv').style.display = "block";
}

//Mostrar SOBRE NOSOTRAS
const sobreNosotras = document.getElementById('sobreNosotras');
sobreNosotras.addEventListener("click", mostrarSobreNosotras);

function mostrarSobreNosotras() {
  document.getElementById('containerAsesinos').style.display = "none";
  document.getElementById('containerLuchadores').style.display = "none";
  document.getElementById('containerMagos').style.display = "none";
  document.getElementById('containerTiradores').style.display = "none";
  document.getElementById('containerApoyos').style.display = "none";
  document.getElementById('containerTanques').style.display = "none";
  document.getElementById('sobreJuegoDiv').style.display = "none";
  document.getElementById('container').style.display = "none";
  document.getElementById('tituloPrincipal').style.display = "none";
  document.getElementById('menuCentral').style.display = "none";
  document.getElementById('ordenar').style.display = "none";
  document.getElementById('nuevosJugadoresDiv').style.display = "none";
  document.getElementById('containerTodosAz').style.display = "none";
  document.getElementById('containerTodosZa').style.display = "none";
  document.getElementById('ordenarTodos').style.display = "none";
  document.getElementById('ordenarNivelesAsesinos').style.display = "none";
  document.getElementById('ordenarNivelesLuchadores').style.display = "none";
  document.getElementById('ordenarNivelesMagos').style.display = "none";
  document.getElementById('ordenarNivelesTiradores').style.display = "none";
  document.getElementById('ordenarNivelesApoyos').style.display = "none";
  document.getElementById('ordenarNivelesTanques').style.display = "none";
  document.getElementById('estadisticasDiv').style.display = "none";
  document.getElementById('sobreNosotrasDiv').style.display = "block";
}


//Funciones TODOS orden alfabético
const containerTodosAz = document.getElementById('containerTodosAz');
const containerTodosZa = document.getElementById('containerTodosZa');
const ordenar = document.querySelector('#ordenar');

function mostrarTodosAz(todosAz) {
  for (let i = 0; i < todosAz.length; i++) {
    const newElement8 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    newElement8.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    img.src = `${todosAz[i].splash}`;
    p.innerHTML = `${todosAz[i].name}`
    newElement8.appendChild(img);
    newElement8.appendChild(p);
    containerTodosAz.appendChild(newElement8);
  }
}

export const todosAzMostrados = acomodarTodosAz(arrObject);
mostrarTodosAz(todosAzMostrados);

function mostrarTodosZa(todosZa) {
  for (let i = 0; i < todosZa.length; i++) {
    const newElement9 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    newElement9.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    img.src = `${todosZa[i].splash}`;
    p.innerHTML = `${todosZa[i].name}`
    newElement9.appendChild(img);
    newElement9.appendChild(p);
    containerTodosZa.appendChild(newElement9);
  }
}

export const todosZaMostrados = acomodarTodosZa(arrObject);
mostrarTodosZa(todosZaMostrados);

ordenar.addEventListener('change', () => {
  const filtro = ordenar.value;
  if (filtro === "1") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "block";
  } else if (filtro === "2") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "block";
  }
});

// Mostrar niveles ASESINOS
const containerNivelAtaqueAsesinos = document.getElementById('containerNivelAtaqueAsesinos');
const containerNivelDefensaAsesinos = document.getElementById('containerNivelDefensaAsesinos');
const containerNivelMagiaAsesinos = document.getElementById('containerNivelMagiaAsesinos');
const containerNivelDificultadAsesinos = document.getElementById('containerNivelDificultadAsesinos');
const nivelAsesinosSelect = document.querySelector('#nivelAsesinosSelect');

function mostrarNivelAtaqueAsesinos(asesinos) {
  for (let i = 0; i < asesinos.length; i++) {
    const newElement10 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement10.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level');
    img.src = `${asesinos[i].splash}`;
    p.innerHTML = `${asesinos[i].name}`
    p1.innerHTML = `NIVEL DE ATAQUE: ${asesinos[i].info.attack}`;
    newElement10.appendChild(img);
    newElement10.appendChild(p);
    newElement10.appendChild(p1);
    containerNivelAtaqueAsesinos.appendChild(newElement10);
  }
}

function mostrarNivelDefensaAsesinos(asesinos) {
  for (let i = 0; i < asesinos.length; i++) {
    const newElement11 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement11.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level');
    img.src = `${asesinos[i].splash}`;
    p.innerHTML = `${asesinos[i].name}`
    p1.innerHTML = `NIVEL DE DEFENSA: ${asesinos[i].info.defense}`
    newElement11.appendChild(img);
    newElement11.appendChild(p);
    newElement11.appendChild(p1);
    containerNivelDefensaAsesinos.appendChild(newElement11);
  }
}

function mostrarNivelMagiaAsesinos(asesinos) {
  for (let i = 0; i < asesinos.length; i++) {
    const newElement12 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement12.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level');
    img.src = `${asesinos[i].splash}`;
    p.innerHTML = `${asesinos[i].name}`
    p1.innerHTML = `NIVEL DE MAGIA: ${asesinos[i].info.magic}`;
    newElement12.appendChild(img);
    newElement12.appendChild(p);
    newElement12.appendChild(p1);
    containerNivelMagiaAsesinos.appendChild(newElement12);
  }
}

function mostrarNivelDificultadAsesinos(asesinos) {
  for (let i = 0; i < asesinos.length; i++) {
    const newElement13 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement13.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level');
    img.src = `${asesinos[i].splash}`;
    p.innerHTML = `${asesinos[i].name}`
    p1.innerHTML = `NIVEL DE DIFICULTAD: ${asesinos[i].info.difficulty}`;
    newElement13.appendChild(img);
    newElement13.appendChild(p);
    newElement13.appendChild(p1);
    containerNivelDificultadAsesinos.appendChild(newElement13);
  }
}

const nivelAtaqueAsesinosMostrados = nivelAtaqueAsesinos(filtrarAsesinos(arrObject));
mostrarNivelAtaqueAsesinos(nivelAtaqueAsesinosMostrados);

const nivelDefensaAsesinosMostrados = nivelDefensaAsesinos(filtrarAsesinos(arrObject));
mostrarNivelDefensaAsesinos(nivelDefensaAsesinosMostrados);

const nivelMagiaAsesinosMostrados = nivelMagiaAsesinos(filtrarAsesinos(arrObject));
mostrarNivelMagiaAsesinos(nivelMagiaAsesinosMostrados);

const nivelDificultadAsesinosMostrados = nivelDificultadAsesinos(filtrarAsesinos(arrObject));
mostrarNivelDificultadAsesinos(nivelDificultadAsesinosMostrados);

nivelAsesinosSelect.addEventListener("change", () => {
  const filtroAsesinos = nivelAsesinosSelect.value;
  if (filtroAsesinos === "1") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "block";
    document.getElementById('ordenarNivelesAsesinos').style.display = "block";
  }
  else if (filtroAsesinos === "2") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "block";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "block";

  }
  else if (filtroAsesinos === "3") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "block";
    document.getElementById('ordenarNivelesAsesinos').style.display = "block";

  }

  else if (filtroAsesinos === "4") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "block";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "block";
  }
});

// Mostrar niveles LUCHADORES
const containerNivelAtaqueLuchadores = document.getElementById('containerNivelAtaqueLuchadores');
const containerNivelDefensaLuchadores = document.getElementById('containerNivelDefensaLuchadores');
const containerNivelMagiaLuchadores = document.getElementById('containerNivelMagiaLuchadores');
const containerNivelDificultadLuchadores = document.getElementById('containerNivelDificultadLuchadores');
const nivelLuchadoresSelect = document.querySelector('#nivelLuchadoresSelect');

function mostrarNivelAtaqueLuchadores(luchadores) {
  for (let i = 0; i < luchadores.length; i++) {
    const newElement14 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement14.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level')
    img.src = `${luchadores[i].splash}`;
    p.innerHTML = `${luchadores[i].name}`;
    p1.innerHTML = `NIVEL DE ATAQUE: ${luchadores[i].info.attack}`;
    newElement14.appendChild(img);
    newElement14.appendChild(p);
    newElement14.appendChild(p1);
    containerNivelAtaqueLuchadores.appendChild(newElement14);
  }
}

function mostrarNivelDefensaLuchadores(luchadores) {
  for (let i = 0; i < luchadores.length; i++) {
    const newElement15 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement15.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level');
    img.src = `${luchadores[i].splash}`;
    p.innerHTML = `${luchadores[i].name}`;
    p1.innerHTML = `NIVEL DE DEFENSA: ${luchadores[i].info.defense}`;
    newElement15.appendChild(img);
    newElement15.appendChild(p);
    newElement15.appendChild(p1);
    containerNivelDefensaLuchadores.appendChild(newElement15);
  }
}

function mostrarNivelMagiaLuchadores(luchadores) {
  for (let i = 0; i < luchadores.length; i++) {
    const newElement16 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement16.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level');
    img.src = `${luchadores[i].splash}`;
    p.innerHTML = `${luchadores[i].name}`;
    p1.innerHTML = `NIVEL DE MAGIA: ${luchadores[i].info.magic}`;
    newElement16.appendChild(img);
    newElement16.appendChild(p);
    newElement16.appendChild(p1);
    containerNivelMagiaLuchadores.appendChild(newElement16);
  }
}

function mostrarNivelDificultadLuchadores(luchadores) {
  for (let i = 0; i < luchadores.length; i++) {
    const newElement17 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement17.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level');
    img.src = `${luchadores[i].splash}`;
    p.innerHTML = `${luchadores[i].name}`;
    p1.innerHTML = `NIVEL DE DIFICULTAD: ${luchadores[i].info.difficulty}`;
    newElement17.appendChild(img);
    newElement17.appendChild(p);
    newElement17.appendChild(p1);
    containerNivelDificultadLuchadores.appendChild(newElement17);
  }
}

const nivelAtaqueLuchadoresMostrados = nivelAtaqueLuchadores(filtrarLuchadores(arrObject));
mostrarNivelAtaqueLuchadores(nivelAtaqueLuchadoresMostrados);

const nivelDefensaLuchadoresMostrados = nivelDefensaLuchadores(filtrarLuchadores(arrObject));
mostrarNivelDefensaLuchadores(nivelDefensaLuchadoresMostrados);

const nivelMagiaLuchadoresMostrados = nivelMagiaLuchadores(filtrarLuchadores(arrObject));
mostrarNivelMagiaLuchadores(nivelMagiaLuchadoresMostrados);

const nivelDificultadLuchadoresMostrados = nivelDificultadLuchadores(filtrarLuchadores(arrObject));
mostrarNivelDificultadLuchadores(nivelDificultadLuchadoresMostrados);

nivelLuchadoresSelect.addEventListener("change", () => {
  const filtroLuchadores = nivelLuchadoresSelect.value;
  if (filtroLuchadores === "1") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
    document.getElementById('containerNivelDefensaTiradores').style.display = "none";
    document.getElementById('containerNivelMagiaTiradores').style.display = "none";
    document.getElementById('containerNivelDificultadTiradores').style.display = "none";
    document.getElementById('containerNivelAtaqueMagos').style.display = "none";
    document.getElementById('containerNivelDefensaMagos').style.display = "none";
    document.getElementById('containerNivelMagiaMagos').style.display = "none";
    document.getElementById('containerNivelDificultadMagos').style.display = "none";
    document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
    document.getElementById('containerNivelDefensaApoyos').style.display = "none";
    document.getElementById('containerNivelMagiaApoyos').style.display = "none";
    document.getElementById('containerNivelDificultadApoyos').style.display = "none";
    document.getElementById('containerNivelAtaqueTanques').style.display = "none";
    document.getElementById('containerNivelDefensaTanques').style.display = "none";
    document.getElementById('containerNivelMagiaTanques').style.display = "none";
    document.getElementById('containerNivelDificultadTanques').style.display = "none";
    document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
    document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
    document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
    document.getElementById('ordenarNivelesLuchadores').style.display = "block";
    document.getElementById('containerNivelAtaqueLuchadores').style.display = "block";
  }
  else if (filtroLuchadores === "2") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "none";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
    document.getElementById('containerNivelDefensaTiradores').style.display = "none";
    document.getElementById('containerNivelMagiaTiradores').style.display = "none";
    document.getElementById('containerNivelDificultadTiradores').style.display = "none";
    document.getElementById('containerNivelAtaqueMagos').style.display = "none";
    document.getElementById('containerNivelDefensaMagos').style.display = "none";
    document.getElementById('containerNivelMagiaMagos').style.display = "none";
    document.getElementById('containerNivelDificultadMagos').style.display = "none";
    document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
    document.getElementById('containerNivelDefensaApoyos').style.display = "none";
    document.getElementById('containerNivelMagiaApoyos').style.display = "none";
    document.getElementById('containerNivelDificultadApoyos').style.display = "none";
    document.getElementById('containerNivelAtaqueTanques').style.display = "none";
    document.getElementById('containerNivelDefensaTanques').style.display = "none";
    document.getElementById('containerNivelMagiaTanques').style.display = "none";
    document.getElementById('containerNivelDificultadTanques').style.display = "none";
    document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
    document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
    document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
    document.getElementById('ordenarNivelesLuchadores').style.display = "block";
    document.getElementById('containerNivelDefensaLuchadores').style.display = "block";

  }
  else if (filtroLuchadores === "3") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
    document.getElementById('containerNivelDefensaTiradores').style.display = "none";
    document.getElementById('containerNivelMagiaTiradores').style.display = "none";
    document.getElementById('containerNivelDificultadTiradores').style.display = "none";
    document.getElementById('containerNivelAtaqueMagos').style.display = "none";
    document.getElementById('containerNivelDefensaMagos').style.display = "none";
    document.getElementById('containerNivelMagiaMagos').style.display = "none";
    document.getElementById('containerNivelDificultadMagos').style.display = "none";
    document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
    document.getElementById('containerNivelDefensaApoyos').style.display = "none";
    document.getElementById('containerNivelMagiaApoyos').style.display = "none";
    document.getElementById('containerNivelDificultadApoyos').style.display = "none";
    document.getElementById('containerNivelAtaqueTanques').style.display = "none";
    document.getElementById('containerNivelDefensaTanques').style.display = "none";
    document.getElementById('containerNivelMagiaTanques').style.display = "none";
    document.getElementById('containerNivelDificultadTanques').style.display = "none";
    document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
    document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
    document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
    document.getElementById('ordenarNivelesLuchadores').style.display = "block";
    document.getElementById('containerNivelMagiaLuchadores').style.display = "block";

  }

  else if (filtroLuchadores === "4") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
    document.getElementById('containerNivelDefensaTiradores').style.display = "none";
    document.getElementById('containerNivelMagiaTiradores').style.display = "none";
    document.getElementById('containerNivelDificultadTiradores').style.display = "none";
    document.getElementById('containerNivelAtaqueMagos').style.display = "none";
    document.getElementById('containerNivelDefensaMagos').style.display = "none";
    document.getElementById('containerNivelMagiaMagos').style.display = "none";
    document.getElementById('containerNivelDificultadMagos').style.display = "none";
    document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
    document.getElementById('containerNivelDefensaApoyos').style.display = "none";
    document.getElementById('containerNivelMagiaApoyos').style.display = "none";
    document.getElementById('containerNivelDificultadApoyos').style.display = "none";
    document.getElementById('containerNivelAtaqueTanques').style.display = "none";
    document.getElementById('containerNivelDefensaTanques').style.display = "none";
    document.getElementById('containerNivelMagiaTanques').style.display = "none";
    document.getElementById('containerNivelDificultadTanques').style.display = "none";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
    document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
    document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
    document.getElementById('containerNivelDificultadLuchadores').style.display = "block";
    document.getElementById('ordenarNivelesLuchadores').style.display = "block";
  }
});

// Mostrar niveles MAGOS
const containerNivelAtaqueMagos = document.getElementById('containerNivelAtaqueMagos');
const containerNivelDefensaMagos = document.getElementById('containerNivelDefensaMagos');
const containerNivelMagiaMagos = document.getElementById('containerNivelMagiaMagos');
const containerNivelDificultadMagos = document.getElementById('containerNivelDificultadMagos');
const nivelMagosSelect = document.querySelector('#nivelMagosSelect');

function mostrarNivelAtaqueMagos(magos) {
  for (let i = 0; i < magos.length; i++) {
    const newElement18 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement18.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level')
    img.src = `${magos[i].splash}`;
    p.innerHTML = `${magos[i].name}`;
    p1.innerHTML = `NIVEL DE ATAQUE: ${magos[i].info.attack}`;
    newElement18.appendChild(img);
    newElement18.appendChild(p);
    newElement18.appendChild(p1);
    containerNivelAtaqueMagos.appendChild(newElement18);
  }
}

function mostrarNivelDefensaMagos(magos) {
  for (let i = 0; i < magos.length; i++) {
    const newElement19 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement19.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level');
    img.src = `${magos[i].splash}`;
    p.innerHTML = `${magos[i].name}`;
    p1.innerHTML = `NIVEL DE DEFENSA: ${magos[i].info.defense}`;
    newElement19.appendChild(img);
    newElement19.appendChild(p);
    newElement19.appendChild(p1);
    containerNivelDefensaMagos.appendChild(newElement19);
  }
}

function mostrarNivelMagiaMagos(magos) {
  for (let i = 0; i < magos.length; i++) {
    const newElement20 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement20.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level');
    img.src = `${magos[i].splash}`;
    p.innerHTML = `${magos[i].name}`;
    p1.innerHTML = `NIVEL DE MAGIA: ${magos[i].info.magic}`;
    newElement20.appendChild(img);
    newElement20.appendChild(p);
    newElement20.appendChild(p1);
    containerNivelMagiaMagos.appendChild(newElement20);
  }
}

function mostrarNivelDificultadMagos(magos) {
  for (let i = 0; i < magos.length; i++) {
    const newElement21 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement21.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level');
    img.src = `${magos[i].splash}`;
    p.innerHTML = `${magos[i].name}`;
    p1.innerHTML = `NIVEL DE DIFICULTAD: ${magos[i].info.difficulty}`;
    newElement21.appendChild(img);
    newElement21.appendChild(p);
    newElement21.appendChild(p1);
    containerNivelDificultadMagos.appendChild(newElement21);
  }
}

const nivelAtaqueMagosMostrados = nivelAtaqueMagos(filtrarMagos(arrObject));
mostrarNivelAtaqueMagos(nivelAtaqueMagosMostrados);

const nivelDefensaMagosMostrados = nivelDefensaMagos(filtrarMagos(arrObject));
mostrarNivelDefensaMagos(nivelDefensaMagosMostrados);

const nivelMagiaMagosMostrados = nivelMagiaMagos(filtrarMagos(arrObject));
mostrarNivelMagiaMagos(nivelMagiaMagosMostrados);

const nivelDificultadMagosMostrados = nivelDificultadMagos(filtrarMagos(arrObject));
mostrarNivelDificultadMagos(nivelDificultadMagosMostrados);

nivelMagosSelect.addEventListener("change", () => {
  const filtroMagos = nivelMagosSelect.value;
  if (filtroMagos === "1") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "none";
    document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
    document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
    document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
    document.getElementById('ordenarNivelesLuchadores').style.display = "none";
    document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
    document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
    document.getElementById('containerNivelDefensaTiradores').style.display = "none";
    document.getElementById('containerNivelMagiaTiradores').style.display = "none";
    document.getElementById('containerNivelDificultadTiradores').style.display = "none";
    document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
    document.getElementById('containerNivelDefensaApoyos').style.display = "none";
    document.getElementById('containerNivelMagiaApoyos').style.display = "none";
    document.getElementById('containerNivelDificultadApoyos').style.display = "none";
    document.getElementById('containerNivelAtaqueTanques').style.display = "none";
    document.getElementById('containerNivelDefensaTanques').style.display = "none";
    document.getElementById('containerNivelMagiaTanques').style.display = "none";
    document.getElementById('containerNivelDificultadTanques').style.display = "none";
    document.getElementById('containerNivelDefensaMagos').style.display = "none";
    document.getElementById('containerNivelMagiaMagos').style.display = "none";
    document.getElementById('containerNivelDificultadMagos').style.display = "none";
    document.getElementById('ordenarNivelesMagos').style.display = "block";
    document.getElementById('containerNivelAtaqueMagos').style.display = "block";

  }
  else if (filtroMagos === "2") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "none";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
    document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
    document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
    document.getElementById('ordenarNivelesLuchadores').style.display = "none";
    document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
    document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
    document.getElementById('containerNivelDefensaTiradores').style.display = "none";
    document.getElementById('containerNivelMagiaTiradores').style.display = "none";
    document.getElementById('containerNivelDificultadTiradores').style.display = "none";
    document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
    document.getElementById('containerNivelDefensaApoyos').style.display = "none";
    document.getElementById('containerNivelMagiaApoyos').style.display = "none";
    document.getElementById('containerNivelDificultadApoyos').style.display = "none";
    document.getElementById('containerNivelAtaqueTanques').style.display = "none";
    document.getElementById('containerNivelDefensaTanques').style.display = "none";
    document.getElementById('containerNivelMagiaTanques').style.display = "none";
    document.getElementById('containerNivelDificultadTanques').style.display = "none";
    document.getElementById('containerNivelAtaqueMagos').style.display = "none";
    document.getElementById('containerNivelMagiaMagos').style.display = "none";
    document.getElementById('containerNivelDificultadMagos').style.display = "none";
    document.getElementById('ordenarNivelesMagos').style.display = "block";
    document.getElementById('containerNivelDefensaMagos').style.display = "block";

  }
  else if (filtroMagos === "3") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
    document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
    document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
    document.getElementById('ordenarNivelesLuchadores').style.display = "none";
    document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
    document.getElementById('containerNivelDefensaTiradores').style.display = "none";
    document.getElementById('containerNivelMagiaTiradores').style.display = "none";
    document.getElementById('containerNivelDificultadTiradores').style.display = "none";
    document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
    document.getElementById('containerNivelDefensaApoyos').style.display = "none";
    document.getElementById('containerNivelMagiaApoyos').style.display = "none";
    document.getElementById('containerNivelDificultadApoyos').style.display = "none";
    document.getElementById('containerNivelAtaqueTanques').style.display = "none";
    document.getElementById('containerNivelDefensaTanques').style.display = "none";
    document.getElementById('containerNivelMagiaTanques').style.display = "none";
    document.getElementById('containerNivelDificultadTanques').style.display = "none";
    document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
    document.getElementById('containerNivelAtaqueMagos').style.display = "none";
    document.getElementById('containerNivelDefensaMagos').style.display = "none";
    document.getElementById('containerNivelDificultadMagos').style.display = "none";
    document.getElementById('ordenarNivelesMagos').style.display = "block";
    document.getElementById('containerNivelMagiaMagos').style.display = "block";
  }

  else if (filtroMagos === "4") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "none";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
    document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
    document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
    document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
    document.getElementById('ordenarNivelesLuchadores').style.display = "none";
    document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
    document.getElementById('containerNivelDefensaTiradores').style.display = "none";
    document.getElementById('containerNivelMagiaTiradores').style.display = "none";
    document.getElementById('containerNivelDificultadTiradores').style.display = "none";
    document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
    document.getElementById('containerNivelDefensaApoyos').style.display = "none";
    document.getElementById('containerNivelMagiaApoyos').style.display = "none";
    document.getElementById('containerNivelDificultadApoyos').style.display = "none";
    document.getElementById('containerNivelAtaqueTanques').style.display = "none";
    document.getElementById('containerNivelDefensaTanques').style.display = "none";
    document.getElementById('containerNivelMagiaTanques').style.display = "none";
    document.getElementById('containerNivelDificultadTanques').style.display = "none";
    document.getElementById('containerNivelAtaqueMagos').style.display = "none";
    document.getElementById('containerNivelDefensaMagos').style.display = "none";
    document.getElementById('containerNivelMagiaMagos').style.display = "none";
    document.getElementById('ordenarNivelesMagos').style.display = "block";
    document.getElementById('containerNivelDificultadMagos').style.display = "block";
  }
});



/////////////////////////////////



// Mostrar niveles TIRADORES
const containerNivelAtaqueTiradores = document.getElementById('containerNivelAtaqueTiradores');
const containerNivelDefensaTiradores = document.getElementById('containerNivelDefensaTiradores');
const containerNivelMagiaTiradores = document.getElementById('containerNivelMagiaTiradores');
const containerNivelDificultadTiradores = document.getElementById('containerNivelDificultadTiradores');
const nivelTiradoresSelect = document.querySelector('#nivelTiradoresSelect');

function mostrarNivelAtaqueTiradores(tiradores) {
  for (let i = 0; i < tiradores.length; i++) {
    const newElement22 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement22.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level');
    img.src = `${tiradores[i].splash}`;
    p.innerHTML = `${tiradores[i].name}`
    p1.innerHTML = `NIVEL DE ATAQUE: ${tiradores[i].info.attack}`;
    newElement22.appendChild(img);
    newElement22.appendChild(p);
    newElement22.appendChild(p1);
    containerNivelAtaqueTiradores.appendChild(newElement22);
  }
}

function mostrarNivelDefensaTiradores(tiradores) {
  for (let i = 0; i < tiradores.length; i++) {
    const newElement23 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement23.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level');
    img.src = `${tiradores[i].splash}`;
    p.innerHTML = `${tiradores[i].name}`
    p1.innerHTML = `NIVEL DE DEFENSA: ${tiradores[i].info.defense}`
    newElement23.appendChild(img);
    newElement23.appendChild(p);
    newElement23.appendChild(p1);
    containerNivelDefensaTiradores.appendChild(newElement23);
  }
}

function mostrarNivelMagiaTiradores(tiradores) {
  for (let i = 0; i < tiradores.length; i++) {
    const newElement24 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement24.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level');
    img.src = `${tiradores[i].splash}`;
    p.innerHTML = `${tiradores[i].name}`
    p1.innerHTML = `NIVEL DE MAGIA: ${tiradores[i].info.magic}`;
    newElement24.appendChild(img);
    newElement24.appendChild(p);
    newElement24.appendChild(p1);
    containerNivelMagiaTiradores.appendChild(newElement24);
  }
}

function mostrarNivelDificultadTiradores(tiradores) {
  for (let i = 0; i < tiradores.length; i++) {
    const newElement25 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement25.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level');
    img.src = `${tiradores[i].splash}`;
    p.innerHTML = `${tiradores[i].name}`
    p1.innerHTML = `NIVEL DE DIFICULTAD: ${tiradores[i].info.difficulty}`;
    newElement25.appendChild(img);
    newElement25.appendChild(p);
    newElement25.appendChild(p1);
    containerNivelDificultadTiradores.appendChild(newElement25);
  }
}

const nivelAtaqueTiradoresMostrados = nivelAtaqueTiradores(filtrarTiradores(arrObject));
mostrarNivelAtaqueTiradores(nivelAtaqueTiradoresMostrados);

const nivelDefensaTiradoresMostrados = nivelDefensaTiradores(filtrarTiradores(arrObject));
mostrarNivelDefensaTiradores(nivelDefensaTiradoresMostrados);

const nivelMagiaTiradoresMostrados = nivelMagiaTiradores(filtrarTiradores(arrObject));
mostrarNivelMagiaTiradores(nivelMagiaTiradoresMostrados);

const nivelDificultadTiradoresMostrados = nivelDificultadTiradores(filtrarTiradores(arrObject));
mostrarNivelDificultadTiradores(nivelDificultadTiradoresMostrados);

nivelTiradoresSelect.addEventListener("change", () => {
  const filtroTiradores = nivelTiradoresSelect.value;
  if (filtroTiradores === "1") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
    document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
    document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
    document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
    document.getElementById('containerNivelAtaqueMagos').style.display = "none";
    document.getElementById('containerNivelDefensaMagos').style.display = "none";
    document.getElementById('containerNivelMagiaMagos').style.display = "none";
    document.getElementById('containerNivelDificultadMagos').style.display = "none";
    document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
    document.getElementById('containerNivelDefensaApoyos').style.display = "none";
    document.getElementById('containerNivelMagiaApoyos').style.display = "none";
    document.getElementById('containerNivelDificultadApoyos').style.display = "none";
    document.getElementById('containerNivelAtaqueTanques').style.display = "none";
    document.getElementById('containerNivelDefensaTanques').style.display = "none";
    document.getElementById('containerNivelMagiaTanques').style.display = "none";
    document.getElementById('containerNivelDificultadTanques').style.display = "none";
    document.getElementById('containerNivelDificultadTiradores').style.display = "none";
    document.getElementById('containerNivelDefensaTiradores').style.display = "none";
    document.getElementById('containerNivelMagiaTiradores').style.display = "none";
    document.getElementById('containerNivelAtaqueTiradores').style.display = "block";
    document.getElementById('ordenarNivelesTiradores').style.display = "block";
  }
  else if (filtroTiradores === "2") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "none";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
    document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
    document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
    document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
    document.getElementById('containerNivelAtaqueMagos').style.display = "none";
    document.getElementById('containerNivelDefensaMagos').style.display = "none";
    document.getElementById('containerNivelMagiaMagos').style.display = "none";
    document.getElementById('containerNivelDificultadMagos').style.display = "none";
    document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
    document.getElementById('containerNivelDefensaApoyos').style.display = "none";
    document.getElementById('containerNivelMagiaApoyos').style.display = "none";
    document.getElementById('containerNivelDificultadApoyos').style.display = "none";
    document.getElementById('containerNivelAtaqueTanques').style.display = "none";
    document.getElementById('containerNivelDefensaTanques').style.display = "none";
    document.getElementById('containerNivelMagiaTanques').style.display = "none";
    document.getElementById('containerNivelDificultadTanques').style.display = "none";
    document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
    document.getElementById('containerNivelDificultadTiradores').style.display = "none";
    document.getElementById('containerNivelMagiaTiradores').style.display = "none";
    document.getElementById('containerNivelDefensaTiradores').style.display = "block";
    document.getElementById('ordenarNivelesTiradores').style.display = "block";
  }
  else if (filtroTiradores === "3") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
    document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
    document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
    document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
    document.getElementById('containerNivelAtaqueMagos').style.display = "none";
    document.getElementById('containerNivelDefensaMagos').style.display = "none";
    document.getElementById('containerNivelMagiaMagos').style.display = "none";
    document.getElementById('containerNivelDificultadMagos').style.display = "none";
    document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
    document.getElementById('containerNivelDefensaApoyos').style.display = "none";
    document.getElementById('containerNivelMagiaApoyos').style.display = "none";
    document.getElementById('containerNivelDificultadApoyos').style.display = "none";
    document.getElementById('containerNivelAtaqueTanques').style.display = "none";
    document.getElementById('containerNivelDefensaTanques').style.display = "none";
    document.getElementById('containerNivelMagiaTanques').style.display = "none";
    document.getElementById('containerNivelDificultadTanques').style.display = "none";
    document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
    document.getElementById('containerNivelDefensaTiradores').style.display = "none";
    document.getElementById('containerNivelDificultadTiradores').style.display = "none";
    document.getElementById('containerNivelMagiaTiradores').style.display = "block";
    document.getElementById('ordenarNivelesTiradores').style.display = "block";
  }

  else if (filtroTiradores === "4") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
    document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
    document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
    document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
    document.getElementById('containerNivelAtaqueMagos').style.display = "none";
    document.getElementById('containerNivelDefensaMagos').style.display = "none";
    document.getElementById('containerNivelMagiaMagos').style.display = "none";
    document.getElementById('containerNivelDificultadMagos').style.display = "none";
    document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
    document.getElementById('containerNivelDefensaApoyos').style.display = "none";
    document.getElementById('containerNivelMagiaApoyos').style.display = "none";
    document.getElementById('containerNivelDificultadApoyos').style.display = "none";
    document.getElementById('containerNivelAtaqueTanques').style.display = "none";
    document.getElementById('containerNivelDefensaTanques').style.display = "none";
    document.getElementById('containerNivelMagiaTanques').style.display = "none";
    document.getElementById('containerNivelDificultadTanques').style.display = "none";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
    document.getElementById('containerNivelDefensaTiradores').style.display = "none";
    document.getElementById('containerNivelMagiaTiradores').style.display = "none";
    document.getElementById('containerNivelDificultadTiradores').style.display = "block";
    document.getElementById('ordenarNivelesTiradores').style.display = "block";

  }
});

// Mostrar niveles APOYOS
const containerNivelAtaqueApoyos = document.getElementById('containerNivelAtaqueApoyos');
const containerNivelDefensaApoyos = document.getElementById('containerNivelDefensaApoyos');
const containerNivelMagiaApoyos = document.getElementById('containerNivelMagiaApoyos');
const containerNivelDificultadApoyos = document.getElementById('containerNivelDificultadApoyos');
const nivelApoyosSelect = document.querySelector('#nivelApoyosSelect');

function mostrarNivelAtaqueApoyos(apoyos) {
  for (let i = 0; i < apoyos.length; i++) {
    const newElement26 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement26.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level');
    img.src = `${apoyos[i].splash}`;
    p.innerHTML = `${apoyos[i].name}`
    p1.innerHTML = `NIVEL DE ATAQUE: ${apoyos[i].info.attack}`;
    newElement26.appendChild(img);
    newElement26.appendChild(p);
    newElement26.appendChild(p1);
    containerNivelAtaqueApoyos.appendChild(newElement26);
  }
}

function mostrarNivelDefensaApoyos(apoyos) {
  for (let i = 0; i < apoyos.length; i++) {
    const newElement27 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement27.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level');
    img.src = `${apoyos[i].splash}`;
    p.innerHTML = `${apoyos[i].name}`
    p1.innerHTML = `NIVEL DE DEFENSA: ${apoyos[i].info.defense}`
    newElement27.appendChild(img);
    newElement27.appendChild(p);
    newElement27.appendChild(p1);
    containerNivelDefensaApoyos.appendChild(newElement27);
  }
}

function mostrarNivelMagiaApoyos(apoyos) {
  for (let i = 0; i < apoyos.length; i++) {
    const newElement28 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement28.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level');
    img.src = `${apoyos[i].splash}`;
    p.innerHTML = `${apoyos[i].name}`
    p1.innerHTML = `NIVEL DE MAGIA: ${apoyos[i].info.magic}`;
    newElement28.appendChild(img);
    newElement28.appendChild(p);
    newElement28.appendChild(p1);
    containerNivelMagiaApoyos.appendChild(newElement28);
  }
}

function mostrarNivelDificultadApoyos(apoyos) {
  for (let i = 0; i < apoyos.length; i++) {
    const newElement29 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement29.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level');
    img.src = `${apoyos[i].splash}`;
    p.innerHTML = `${apoyos[i].name}`
    p1.innerHTML = `NIVEL DE DIFICULTAD: ${apoyos[i].info.difficulty}`;
    newElement29.appendChild(img);
    newElement29.appendChild(p);
    newElement29.appendChild(p1);
    containerNivelDificultadApoyos.appendChild(newElement29);
  }
}

const nivelAtaqueApoyosMostrados = nivelAtaqueApoyos(filtrarApoyos(arrObject));
mostrarNivelAtaqueApoyos(nivelAtaqueApoyosMostrados);

const nivelDefensaApoyosMostrados = nivelDefensaApoyos(filtrarApoyos(arrObject));
mostrarNivelDefensaApoyos(nivelDefensaApoyosMostrados);

const nivelMagiaApoyosMostrados = nivelMagiaApoyos(filtrarApoyos(arrObject));
mostrarNivelMagiaApoyos(nivelMagiaApoyosMostrados);

const nivelDificultadApoyosMostrados = nivelDificultadApoyos(filtrarApoyos(arrObject));
mostrarNivelDificultadApoyos(nivelDificultadApoyosMostrados);

nivelApoyosSelect.addEventListener("change", () => {
  const filtroApoyos = nivelApoyosSelect.value;
  if (filtroApoyos === "1") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "none";
    document.getElementById('ordenarNivelesLuchadores').style.display = "none";
    document.getElementById('ordenarNivelesTiradores').style.display = "none";
    document.getElementById('ordenarNivelesMagos').style.display = "none";
    document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
    document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
    document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
    document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
    document.getElementById('containerNivelAtaqueMagos').style.display = "none";
    document.getElementById('containerNivelDefensaMagos').style.display = "none";
    document.getElementById('containerNivelMagiaMagos').style.display = "none";
    document.getElementById('containerNivelDificultadMagos').style.display = "none";
    document.getElementById('containerNivelAtaqueTanques').style.display = "none";
    document.getElementById('containerNivelDefensaTanques').style.display = "none";
    document.getElementById('containerNivelMagiaTanques').style.display = "none";
    document.getElementById('containerNivelDificultadTanques').style.display = "none";
    document.getElementById('containerNivelDificultadTiradores').style.display = "none";
    document.getElementById('containerNivelDefensaTiradores').style.display = "none";
    document.getElementById('containerNivelMagiaTiradores').style.display = "none";
    document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
    document.getElementById('containerNivelDificultadApoyos').style.display = "none";
    document.getElementById('containerNivelDefensaApoyos').style.display = "none";
    document.getElementById('containerNivelMagiaApoyos').style.display = "none";
    document.getElementById('containerNivelAtaqueApoyos').style.display = "block";
    document.getElementById('ordenarNivelesApoyos').style.display = "block";
  }
  else if (filtroApoyos === "2") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
    document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
    document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
    document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
    document.getElementById('containerNivelAtaqueMagos').style.display = "none";
    document.getElementById('containerNivelDefensaMagos').style.display = "none";
    document.getElementById('containerNivelMagiaMagos').style.display = "none";
    document.getElementById('containerNivelDificultadMagos').style.display = "none";
    document.getElementById('containerNivelAtaqueTanques').style.display = "none";
    document.getElementById('containerNivelDefensaTanques').style.display = "none";
    document.getElementById('containerNivelMagiaTanques').style.display = "none";
    document.getElementById('containerNivelDificultadTanques').style.display = "none";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
    document.getElementById('containerNivelDificultadTiradores').style.display = "none";
    document.getElementById('containerNivelMagiaTiradores').style.display = "none";
    document.getElementById('containerNivelDefensaTiradores').style.display = "none";
    document.getElementById('ordenarNivelesLuchadores').style.display = "none";
    document.getElementById('ordenarNivelesTiradores').style.display = "none";
    document.getElementById('ordenarNivelesMagos').style.display = "none";
    document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
    document.getElementById('containerNivelMagiaApoyos').style.display = "none";
    document.getElementById('containerNivelDificultadApoyos').style.display = "none";
    document.getElementById('ordenarNivelesApoyos').style.display = "block";
    document.getElementById('containerNivelDefensaApoyos').style.display = "block";
  }
  else if (filtroApoyos === "3") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
    document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
    document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
    document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
    document.getElementById('containerNivelAtaqueMagos').style.display = "none";
    document.getElementById('containerNivelDefensaMagos').style.display = "none";
    document.getElementById('containerNivelMagiaMagos').style.display = "none";
    document.getElementById('containerNivelDificultadMagos').style.display = "none";
    document.getElementById('containerNivelAtaqueTanques').style.display = "none";
    document.getElementById('containerNivelDefensaTanques').style.display = "none";
    document.getElementById('containerNivelMagiaTanques').style.display = "none";
    document.getElementById('containerNivelDificultadTanques').style.display = "none";
    document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
    document.getElementById('containerNivelDefensaTiradores').style.display = "none";
    document.getElementById('containerNivelDificultadTiradores').style.display = "none";
    document.getElementById('containerNivelMagiaTiradores').style.display = "none";
    document.getElementById('ordenarNivelesLuchadores').style.display = "none";
    document.getElementById('ordenarNivelesTiradores').style.display = "none";
    document.getElementById('ordenarNivelesMagos').style.display = "none";
    document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
    document.getElementById('containerNivelDefensaApoyos').style.display = "none";
    document.getElementById('containerNivelDificultadApoyos').style.display = "none";
    document.getElementById('ordenarNivelesApoyos').style.display = "block";
    document.getElementById('containerNivelMagiaApoyos').style.display = "block";
  }

  else if (filtroApoyos === "4") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "none";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
    document.getElementById('containerNivelDefensaTiradores').style.display = "none";
    document.getElementById('containerNivelMagiaTiradores').style.display = "none";
    document.getElementById('containerNivelDificultadTiradores').style.display = "none";
    document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
    document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
    document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
    document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
    document.getElementById('containerNivelAtaqueMagos').style.display = "none";
    document.getElementById('containerNivelDefensaMagos').style.display = "none";
    document.getElementById('containerNivelMagiaMagos').style.display = "none";
    document.getElementById('containerNivelDificultadMagos').style.display = "none";
    document.getElementById('containerNivelAtaqueTanques').style.display = "none";
    document.getElementById('containerNivelDefensaTanques').style.display = "none";
    document.getElementById('containerNivelMagiaTanques').style.display = "none";
    document.getElementById('containerNivelDificultadTanques').style.display = "none";
    document.getElementById('ordenarNivelesLuchadores').style.display = "none";
    document.getElementById('ordenarNivelesTiradores').style.display = "none";
    document.getElementById('ordenarNivelesMagos').style.display = "none";
    document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
    document.getElementById('containerNivelDefensaApoyos').style.display = "none";
    document.getElementById('containerNivelMagiaApoyos').style.display = "none";
    document.getElementById('ordenarNivelesApoyos').style.display = "block";
    document.getElementById('containerNivelDificultadApoyos').style.display = "block";
  }
});

// Mostrar niveles TANQUES
const containerNivelAtaqueTanques = document.getElementById('containerNivelAtaqueTanques');
const containerNivelDefensaTanques = document.getElementById('containerNivelDefensaTanques');
const containerNivelMagiaTanques = document.getElementById('containerNivelMagiaTanques');
const containerNivelDificultadTanques = document.getElementById('containerNivelDificultadTanques');
const nivelTanquesSelect = document.querySelector('#nivelTanquesSelect');

function mostrarNivelAtaqueTanques(tanques) {
  for (let i = 0; i < tanques.length; i++) {
    const newElement30 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement30.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level');
    img.src = `${tanques[i].splash}`;
    p.innerHTML = `${tanques[i].name}`
    p1.innerHTML = `NIVEL DE ATAQUE: ${tanques[i].info.attack}`;
    newElement30.appendChild(img);
    newElement30.appendChild(p);
    newElement30.appendChild(p1);
    containerNivelAtaqueTanques.appendChild(newElement30);
  }
}

function mostrarNivelDefensaTanques(tanques) {
  for (let i = 0; i < tanques.length; i++) {
    const newElement31 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement31.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level');
    img.src = `${tanques[i].splash}`;
    p.innerHTML = `${tanques[i].name}`
    p1.innerHTML = `NIVEL DE DEFENSA: ${tanques[i].info.defense}`
    newElement31.appendChild(img);
    newElement31.appendChild(p);
    newElement31.appendChild(p1);
    containerNivelDefensaTanques.appendChild(newElement31);
  }
}

function mostrarNivelMagiaTanques(tanques) {
  for (let i = 0; i < tanques.length; i++) {
    const newElement32 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement32.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level');
    img.src = `${tanques[i].splash}`;
    p.innerHTML = `${tanques[i].name}`
    p1.innerHTML = `NIVEL DE MAGIA: ${tanques[i].info.magic}`;
    newElement32.appendChild(img);
    newElement32.appendChild(p);
    newElement32.appendChild(p1);
    containerNivelMagiaTanques.appendChild(newElement32);
  }
}

function mostrarNivelDificultadTanques(tanques) {
  for (let i = 0; i < tanques.length; i++) {
    const newElement33 = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p1');
    newElement33.classList.add('class-divData');
    img.classList.add('class-img');
    p.classList.add('class-name');
    p1.classList.add('class-level');
    img.src = `${tanques[i].splash}`;
    p.innerHTML = `${tanques[i].name}`
    p1.innerHTML = `NIVEL DE DIFICULTAD: ${tanques[i].info.difficulty}`;
    newElement33.appendChild(img);
    newElement33.appendChild(p);
    newElement33.appendChild(p1);
    containerNivelDificultadTanques.appendChild(newElement33);
  }
}

const nivelAtaqueTanquesMostrados = nivelAtaqueTanques(filtrarTanques(arrObject));
mostrarNivelAtaqueTanques(nivelAtaqueTanquesMostrados);

const nivelDefensaTanquesMostrados = nivelDefensaTanques(filtrarTanques(arrObject));
mostrarNivelDefensaTanques(nivelDefensaTanquesMostrados);

const nivelMagiaTanquesMostrados = nivelMagiaTanques(filtrarTanques(arrObject));
mostrarNivelMagiaTanques(nivelMagiaTanquesMostrados);

const nivelDificultadTanquesMostrados = nivelDificultadTanques(filtrarTanques(arrObject));
mostrarNivelDificultadTanques(nivelDificultadTanquesMostrados);

nivelTanquesSelect.addEventListener("change", () => {
  const filtroTanques = nivelTanquesSelect.value;
  if (filtroTanques === "1") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
    document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
    document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
    document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
    document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
    document.getElementById('containerNivelDificultadMagos').style.display = "none";
    document.getElementById('containerNivelDefensaMagos').style.display = "none";
    document.getElementById('containerNivelMagiaMagos').style.display = "none";
    document.getElementById('containerNivelAtaqueMagos').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "none";
    document.getElementById('ordenarNivelesLuchadores').style.display = "none";
    document.getElementById('ordenarNivelesTiradores').style.display = "none";
    document.getElementById('ordenarNivelesMagos').style.display = "none";
    document.getElementById('containerNivelDificultadTiradores').style.display = "none";
    document.getElementById('containerNivelDefensaTiradores').style.display = "none";
    document.getElementById('containerNivelMagiaTiradores').style.display = "none";
    document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
    document.getElementById('containerNivelDificultadApoyos').style.display = "none";
    document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
    document.getElementById('containerNivelDefensaApoyos').style.display = "none";
    document.getElementById('containerNivelMagiaApoyos').style.display = "none";
    document.getElementById('ordenarNivelesApoyos').style.display = "none";
    document.getElementById('containerNivelDificultadTanques').style.display = "none";
    document.getElementById('containerNivelDefensaTanques').style.display = "none";
    document.getElementById('containerNivelMagiaTanques').style.display = "none";
    document.getElementById('containerNivelAtaqueTanques').style.display = "block";
    document.getElementById('ordenarNivelesTanques').style.display = "block";
  }
  else if (filtroTanques === "2") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "none";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
    document.getElementById('containerNivelDificultadTiradores').style.display = "none";
    document.getElementById('containerNivelMagiaTiradores').style.display = "none";
    document.getElementById('containerNivelDefensaTiradores').style.display = "none";
    document.getElementById('containerNivelDificultadMagos').style.display = "none";
    document.getElementById('containerNivelDefensaMagos').style.display = "none";
    document.getElementById('containerNivelMagiaMagos').style.display = "none";
    document.getElementById('containerNivelAtaqueMagos').style.display = "none";
    document.getElementById('ordenarNivelesLuchadores').style.display = "none";
    document.getElementById('ordenarNivelesTiradores').style.display = "none";
    document.getElementById('ordenarNivelesMagos').style.display = "none";
    document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
    document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
    document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
    document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
    document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
    document.getElementById('containerNivelDefensaApoyos').style.display = "none";
    document.getElementById('containerNivelMagiaApoyos').style.display = "none";
    document.getElementById('containerNivelDificultadApoyos').style.display = "none";
    document.getElementById('ordenarNivelesApoyos').style.display = "none";
    document.getElementById('containerNivelAtaqueTanques').style.display = "none";
    document.getElementById('containerNivelMagiaTanques').style.display = "none";
    document.getElementById('containerNivelDificultadTanques').style.display = "none";
    document.getElementById('ordenarNivelesTanques').style.display = "block";
    document.getElementById('containerNivelDefensaTanques').style.display = "block";

  }
  else if (filtroTanques === "3") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
    document.getElementById('containerNivelDefensaTiradores').style.display = "none";
    document.getElementById('containerNivelDificultadTiradores').style.display = "none";
    document.getElementById('containerNivelMagiaTiradores').style.display = "none";
    document.getElementById('containerNivelDificultadMagos').style.display = "none";
    document.getElementById('containerNivelDefensaMagos').style.display = "none";
    document.getElementById('containerNivelMagiaMagos').style.display = "none";
    document.getElementById('containerNivelAtaqueMagos').style.display = "none";
    document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
    document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
    document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
    document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
    document.getElementById('ordenarNivelesLuchadores').style.display = "none";
    document.getElementById('ordenarNivelesTiradores').style.display = "none";
    document.getElementById('ordenarNivelesMagos').style.display = "none";
    document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
    document.getElementById('containerNivelDefensaApoyos').style.display = "none";
    document.getElementById('containerNivelMagiaApoyos').style.display = "none";
    document.getElementById('containerNivelDificultadApoyos').style.display = "none";
    document.getElementById('ordenarNivelesApoyos').style.display = "none";
    document.getElementById('containerNivelAtaqueTanques').style.display = "none";
    document.getElementById('containerNivelDefensaTanques').style.display = "none";
    document.getElementById('containerNivelDificultadTanques').style.display = "none";
    document.getElementById('ordenarNivelesTanques').style.display = "block";
    document.getElementById('containerNivelMagiaTanques').style.display = "block";
  }

  else if (filtroTanques === "4") {
    document.getElementById('container').style.display = "none";
    document.getElementById('containerAsesinos').style.display = "none";
    document.getElementById('containerLuchadores').style.display = "none";
    document.getElementById('containerMagos').style.display = "none";
    document.getElementById('containerTiradores').style.display = "none";
    document.getElementById('containerApoyos').style.display = "none";
    document.getElementById('containerTanques').style.display = "none";
    document.getElementById('containerTodosAz').style.display = "none";
    document.getElementById('containerTodosZa').style.display = "none";
    document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
    document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
    document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
    document.getElementById('ordenarNivelesAsesinos').style.display = "none";
    document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
    document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
    document.getElementById('containerNivelDefensaTiradores').style.display = "none";
    document.getElementById('containerNivelMagiaTiradores').style.display = "none";
    document.getElementById('containerNivelDificultadTiradores').style.display = "none";
    document.getElementById('containerNivelDificultadMagos').style.display = "none";
    document.getElementById('containerNivelDefensaMagos').style.display = "none";
    document.getElementById('containerNivelMagiaMagos').style.display = "none";
    document.getElementById('containerNivelAtaqueMagos').style.display = "none";
    document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
    document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
    document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
    document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
    document.getElementById('ordenarNivelesLuchadores').style.display = "none";
    document.getElementById('ordenarNivelesTiradores').style.display = "none";
    document.getElementById('ordenarNivelesMagos').style.display = "none";
    document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
    document.getElementById('containerNivelDefensaApoyos').style.display = "none";
    document.getElementById('containerNivelMagiaApoyos').style.display = "none";
    document.getElementById('containerNivelDificultadApoyos').style.display = "none";
    document.getElementById('ordenarNivelesApoyos').style.display = "none";
    document.getElementById('containerNivelAtaqueTanques').style.display = "none";
    document.getElementById('containerNivelDefensaTanques').style.display = "none";
    document.getElementById('containerNivelMagiaTanques').style.display = "none";
    document.getElementById('ordenarNivelesTanques').style.display = "block";
    document.getElementById('containerNivelDificultadTanques').style.display = "block";

  }
});

//Mostrar NOSOTRAS
const containerNosotras = document.getElementById('containerNosotras');
const nosotras = document.getElementById('sobreNosotras');


function mostrarSilvia() {
  const newElement34 = document.createElement('div');
  const img = document.createElement('img');
  const p = document.createElement('p');
  newElement34.classList.add('class-divNosotras');
  img.classList.add('class-img');
  p.classList.add('class-name');
  img.src = "https://i.postimg.cc/Wz8LXfgp/foto-silvia.jpg"
  p.innerHTML = `Silvia Falcon`;
  newElement34.appendChild(img);
  newElement34.appendChild(p);
  containerNosotras.appendChild(newElement34);
}
mostrarSilvia();

function mostrarValeria() {
  const newElement35 = document.createElement('div');
  const img = document.createElement('img');
  const p = document.createElement('p');
  newElement35.classList.add('class-divNosotras');
  img.classList.add('class-img');
  p.classList.add('class-name');
  img.src = "https://i.postimg.cc/GhMnDVbq/foto-valeria.jpg"
  p.innerHTML = `Valeria Murguia`;
  newElement35.appendChild(img);
  newElement35.appendChild(p);
  containerNosotras.appendChild(newElement35);
}
mostrarValeria();

nosotras.addEventListener("click", () => {
  document.getElementById('container').style.display = "none";
  document.getElementById('containerAsesinos').style.display = "none";
  document.getElementById('containerLuchadores').style.display = "none";
  document.getElementById('containerMagos').style.display = "none";
  document.getElementById('containerTiradores').style.display = "none";
  document.getElementById('containerApoyos').style.display = "none";
  document.getElementById('containerTanques').style.display = "none";
  document.getElementById('containerTodosAz').style.display = "none";
  document.getElementById('containerTodosZa').style.display = "none";
  document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
  document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
  document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
  document.getElementById('ordenarNivelesAsesinos').style.display = "none";
  document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
  document.getElementById('containerNivelAtaqueTiradores').style.display = "none";
  document.getElementById('containerNivelDefensaTiradores').style.display = "none";
  document.getElementById('containerNivelMagiaTiradores').style.display = "none";
  document.getElementById('containerNivelDificultadTiradores').style.display = "none";
  document.getElementById('containerNivelDificultadMagos').style.display = "none";
  document.getElementById('containerNivelDefensaMagos').style.display = "none";
  document.getElementById('containerNivelMagiaMagos').style.display = "none";
  document.getElementById('containerNivelAtaqueMagos').style.display = "none";
  document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
  document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
  document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
  document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
  document.getElementById('ordenarNivelesLuchadores').style.display = "none";
  document.getElementById('ordenarNivelesTiradores').style.display = "none";
  document.getElementById('ordenarNivelesMagos').style.display = "none";
  document.getElementById('containerNivelAtaqueApoyos').style.display = "none";
  document.getElementById('containerNivelDefensaApoyos').style.display = "none";
  document.getElementById('containerNivelMagiaApoyos').style.display = "none";
  document.getElementById('containerNivelDificultadApoyos').style.display = "none";
  document.getElementById('ordenarNivelesApoyos').style.display = "none";
  document.getElementById('containerNivelAtaqueTanques').style.display = "none";
  document.getElementById('containerNivelDefensaTanques').style.display = "none";
  document.getElementById('containerNivelMagiaTanques').style.display = "none";
  document.getElementById('ordenarNivelesTanques').style.display = "none";
  document.getElementById('containerNivelDificultadTanques').style.display = "none";
  document.getElementById('containerNosotras').style.display = "block";
})












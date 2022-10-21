//Importar la data
import data from './data/lol/lol.js';
import { filtrarAsesinos, filtrarLuchadores, filtrarMagos, filtrarTiradores, filtrarApoyos, filtrarTanques, 
  acomodarTodosAz, acomodarTodosZa, 
  nivelAtaqueAsesinos, nivelDefensaAsesinos, nivelMagiaAsesinos, nivelDificultadAsesinos,
  nivelAtaqueLuchadores, nivelDefensaLuchadores, nivelMagiaLuchadores, nivelDificultadLuchadores } from './data.js';

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
  document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
  document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
  document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
  document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
  document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
  document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
  document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
  document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
  document.getElementById('ordenarNivelesTanques').style.display = "none";
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
  document.getElementById('containerNivelAtaqueLuchadores').style.display = "none";
  document.getElementById('containerNivelDefensaLuchadores').style.display = "none";
  document.getElementById('containerNivelMagiaLuchadores').style.display = "none";
  document.getElementById('containerNivelDificultadLuchadores').style.display = "none";
  document.getElementById('containerNivelAtaqueAsesinos').style.display = "none";
  document.getElementById('containerNivelDefensaAsesinos').style.display = "none";
  document.getElementById('containerNivelMagiaAsesinos').style.display = "none";
  document.getElementById('containerNivelDificultadAsesinos').style.display = "none";
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
  document.getElementById('containerTodosAz').style.display = "none";
  document.getElementById('containerTodosZa').style.display = "none";
  document.getElementById('ordenarNivelesAsesinos').style.display = "none";
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
  document.getElementById('containerTodosAz').style.display = "none";
  document.getElementById('containerTodosZa').style.display = "none";
  document.getElementById('ordenarTodos').style.display = "none";
  document.getElementById('ordenarNivelesAsesinos').style.display = "none";
  document.getElementById('ordenarNivelesLuchadores').style.display = "none";
  document.getElementById('ordenarNivelesMagos').style.display = "none";
  document.getElementById('ordenarNivelesTiradores').style.display = "none";
  document.getElementById('ordenarNivelesApoyos').style.display = "none";
  document.getElementById('nuevosJugadoresDiv').style.display = "block";

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
  const filtroAtaqueAsesinos = nivelAsesinosSelect.value;
  if (filtroAtaqueAsesinos === "1") {
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
  else if (filtroAtaqueAsesinos === "2") {
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
  else if (filtroAtaqueAsesinos === "3") {
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
  
  else if (filtroAtaqueAsesinos === "4") {
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
  const filtroAtaqueLuchadores = nivelLuchadoresSelect.value;
  if (filtroAtaqueLuchadores === "1") {
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
    document.getElementById('ordenarNivelesLuchadores').style.display = "block";
    document.getElementById('containerNivelAtaqueLuchadores').style.display = "block";
  } 
  else if (filtroAtaqueLuchadores === "2") {
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
    document.getElementById('ordenarNivelesLuchadores').style.display = "block";
    document.getElementById('containerNivelDefensaLuchadores').style.display = "block";
   
  }
  else if (filtroAtaqueLuchadores === "3") {
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
    document.getElementById('ordenarNivelesLuchadores').style.display = "block";
    document.getElementById('containerNivelMagiaLuchadores').style.display = "block";
    
  }
  
  else if (filtroAtaqueLuchadores === "4") {
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
    document.getElementById('containerNivelDificultadLuchadores').style.display = "block";
    document.getElementById('ordenarNivelesLuchadores').style.display = "block";
  }
});


    









//Importar la data
import lol from './data/lol/lol.js';

//Crear un objeto que almacene la información de data
const obj = lol;

//Crear un objeto con una función que almacene en un arreglo los nombres de data
const dataLol = {
    allNames: function(){
    const names = obj.names
    let namesArr = [...names]
    
    console.log(namesArr)
  }
}

//Exportar data
export default dataLol
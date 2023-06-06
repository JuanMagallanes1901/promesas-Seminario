//Funciones Tradicionales

function saludar (nombre){
  return `Bienvenido ${nombre}`
}
function mostrarAmigos(){
  return ['Juan','Luis','Pedro']
}


/*
let resultado1 = saludar('Jhon')
console.log(resultado1)     //Forma 1
console.log(mostrarAmigos())  //Forma 2
*/


//Funcion flecha / parametro
const perfil = {
  'apellidos'   : 'Magallanes Saravia',
  'nombres'     :  'Juan Gabriel',
  'edad'        : 22,
  'estaCasado'  : false,
  'amigos'      : ['Amigo 1', 'Amigo 2','Amigo 3'],
  'contacto'    : {
    'telefonos' : ['949950124'],
    'ciudad'    : 'Chincha',
    'casaPropia': true
  },
  'skill'       : function(){
    // console.log("Yo se programar!!")
    return "Yo se Programar"
  }
}

console.log(perfil.skill())

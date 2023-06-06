
//Encadenar promesas
function primeraPromesa(){
  return new Promise((resolve, reject)=>{
    setTimeout(resolve,1000,"Promesa 1")
    
  })
}
function segundaPromesa(valorEntrada){
  console.log(valorEntrada)
  return new Promise((resolve, reject)=>{
    setTimeout(resolve,500,"Promesa 2")
  })
}


//¿Como la promesa 1 pasa un valor a la promesa 2?
//1. La promesa 2 debe recibir parametros de entrada
primeraPromesa()
  .then(segundaPromesa)
  .then((respuesta)=>{
    console.log(respuesta)
  })



  // Version Inicial
  /*
    primeraPromesa()
  .then(segundaPromesa)
  .then((respuesta)=>{
    console.log(respuesta)
  })
  */
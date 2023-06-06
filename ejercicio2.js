let request = require('request-promise')

//Las promesas retornan objetos
let promesa = request('https://www.google.com')


//Se administran utilizando...
//fullfiled = completada con exito
promesa.then(function(){
  console.log("URL cargada")
})

//reject = rechazado
promesa.catch(function (error){
  console.log("Fallo la consulta")
  console.log(error)
})

//Se ejecuta luego de then/catch
//Settled = finalizado
promesa.finally(function(){
  console.log("Promesa Finalizada")
})
//Funcion basa en promesas
// const { error } = require('console');
// const { resolve } = require('path');
// let request = require('request')
let request = require('request') //Acceder URL remotas

//Esta funcion retorna una promesa ... then() catch() finally()
//La clase Promise requiere de un executor (resolver, rechazado)
//callback => funcion que retorna un valor
function loadPage(url){
  return new Promise(function(resolve, reject){
    request(url, function(error,response){
      if (error) return reject(error)
      resolve(response)
    })
  })
}

let promesa = loadPage('https://www.google.com');
//Nos devuelve ==> Promise { <pending> }
//console.log(promesa)

promesa.then(function(){
  console.log("URL cargada con éxito...")
}).catch(function(){
  console.log("Problemas al Cargar URL")
})
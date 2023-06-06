//Operador await (esperar) funciona UNICAMENTE en funciones asincronas
//Await is only valid in async functions 

/*let promesa = new Promise ((resolve, reject)=> {
  setTimeout(resolve, 1000, 20)
})

promesa
  .then((res) => {console.log(res)})
*/

//Async = asincrono
//await = esperar
//Then = entonces (resolve)
//Catch error (reject)
//Finalliy =  fin
async function testPromesas(){
  let promesa1= await new Promise((resolve, reject) =>{
    setTimeout(resolve, 1000, 20)
  });
  let promesa2= await new Promise((resolve, reject) =>{
    setTimeout(resolve, 1000, 210)
  });
  console.log(promesa1+promesa2)

}
testPromesas()
// setTimeout() nos permitira dilatar/extender los tiempos de carga
let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Primer saludo")
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Segundo saludo")
});

//Prueba 3
//Ejecutar ambas promesas
Promise.all([p1,p2]).then((respuestas) => {
  console.log(respuestas);
  console.log("Terminaste Mano")
});


//Prueba 2
//Ejecutar la p2 despues de p1

// p1.then((res1)=>{
//   console.log(res1)
//   p2.then((res2)=>{
//     console.log(res2)
//     console.log("Proceso Concluido")
//   })
// });


//PRUEBA 1
//Ejecutando promesas en paralelo
//La que tiene menor tiempo en milisegundos (ms) se ejecutara primero

// p1.then((res)=>{
//   console.log(res)
// });

// p2.then((res)=>{
//   console.log(res)
// });
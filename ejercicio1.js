let request = require ("request")

request('https://www.google.com.pe', function(){
  console.log('URL cargada correctamente')
})

//Este metodo log se ejecuta antes, ya que todo el codigo se interpreta en paralelo
console.log ('Esto debe suceder despues')
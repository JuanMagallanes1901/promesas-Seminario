async function showGitHubPersonal(){
  let respone = await fetch('https://api.github.com/users/JuanMagallanes1901/repos')
  //Json () retorna una promesa
  let listaRepos = await respone.json();
  console.log(listaRepos)
}

//showGitHubPersonal();


function getRepos(){
  fetch('https://api.github.com/users/JuanMagallanes1901/repos')
    .then(respuesta => respuesta.json())
    .then(datos => {
      console.log(datos)
    })
}

getRepos();
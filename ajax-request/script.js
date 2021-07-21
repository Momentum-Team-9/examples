const root = document.getElementById('root')

fetch('https://ghibliapi.herokuapp.com/films/')
  .then(response => response.json())
  .then(films => {
    for (film of films) {
      const title = document.createElement('h3')
      title.innerText = film.title
      root.appendChild(title)

      const desc = document.createElement('p')
      desc.innerText = film.description
      root.appendChild(desc)
    }
  })

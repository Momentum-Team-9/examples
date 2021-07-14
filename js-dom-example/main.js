
// Here I am using querySelector to get the image by id
// const image = document.querySelectorAll('#kitten-image-1')

// Here I am using querySelector to get the image by class
const image = document.querySelector('.kitten')
// document.querySelector('.kitten').src = 'dog.jpg'
image.src = 'dog.jpg'
image.style.border = '4px dashed red'

const kittenImage = document.getElementById('kitten-image-2')
kittenImage.classList.add('dog')
kittenImage.classList.remove('kitten')

const hideButton = document.getElementById('hide-button')
console.log(hideButton)

// Here I am adding an event listener to the hide button
// that will add a special class to our kittenImage element

hideButton.addEventListener('click', function () {
//   kittenImage.classList.remove('dog')
  kittenImage.classList.add('hide')
})

const showButton = document.getElementById('show-button')

showButton.addEventListener('click', function () {
  kittenImage.classList.remove('hide')
  // kittenImage.classList.add('dog')
})

// Here I am creating a new div element and inserting
// it into a div called 'root'
const rootDiv = document.getElementById('root')
const newElement = document.createElement('div')
rootDiv.appendChild(newElement)

newElement.innerHTML = '<h2>This is a heading<h2>'
newElement.innerText = 'Hello World!'

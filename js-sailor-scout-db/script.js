console.log(scouts)

const outputDiv = document.getElementById('root')

const sailorCard = document.createElement('div')
sailorCard.classList.add('sailorScout')

const firstName = document.createElement('h1')
firstName.innerText = scouts[0].name.first

const lastName = scouts[0].name.last
firstName.innerText += ' ' + lastName
sailorCard.appendChild(firstName)
outputDiv.appendChild(sailorCard)

const sailorPic = document.createElement('img')
sailorPic.src = scouts[0].picture

outputDiv.appendChild(sailorPic)

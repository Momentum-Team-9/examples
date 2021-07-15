const form = document.querySelector('#login-form')
const emailInput = document.querySelector('#email-input')
const passwordInput = document.querySelector('#password-input')

let formIsValid

form.addEventListener('input', function (event) {
  console.log('input captured')
})

form.addEventListener('submit', function (event) {
  event.preventDefault()
  console.log('form submitted')
  validateEmailInput()
  validatePasswordInput()

  if (formIsValid) {
    console.log('Form submitted!')
    emailInput.classList.add('input-valid')
    passwordInput.classList.add('input-valid')
  }
})

function validateEmailInput () {
  if (emailInput.value === '') {
    const error = document.createElement('div')
    emailInput.classList.add('input-invalid')
    document.querySelector('.email-input').appendChild(error).innerText = 'This field is required.'
  } else {
    formIsValid = true
  }
}

function validatePasswordInput () {
  const error = document.createElement('div')
  if (passwordInput.value === '') {
    passwordInput.classList.add('input-invalid')
    document.querySelector('.password-input').appendChild(error).innerText = 'This field is required.'
  } else {
    formIsValid = true
  }
}

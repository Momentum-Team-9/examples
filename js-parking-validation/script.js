let newVariable = ''

const form = document.querySelector('#parking-form')
let formIsValid

/* https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation#validity
  "...the custom validity has to be cancelled, by invoking setCustomValidity() with an empty string value.
  We therefore do this every time the input event is raised.
  If you don't do this, and a custom validity was previously set,
  the input will register as invalid, even if it current contains a valid value on submission.""
*/
form.addEventListener('input', (event) => {
  event.target.setCustomValidity('')
})

form.addEventListener('submit', (event) => {
  event.preventDefault()
  formIsValid = true
  validateStartDate()
  validateCreditCard()
  if (formIsValid) {
    displayTotal()
  }
})

const displayTotal = () => {
  // if I have a total price, I want to show it on the page
  let total = calculateCost()
  const totalDiv = document.querySelector('#total')
  totalDiv.classList.add('cost')
  totalDiv.innerHTML = `<p>Total cost: $${total}.00</p>`
}

const validateCreditCard = () => {
  console.log('validateCreditCard called')
  const cardNum = document.querySelector('#credit-card')
  console.log(cardNum.value)
  if (validateCardNumber(cardNum.value)) {
    cardNum.setCustomValidity('')
  } else {
    formIsValid = false
    cardNum.setCustomValidity('Card number is invalid')
  }
}

const validateStartDate = () => {
  console.log('validateStartDate called')
  const dateInputField = document.querySelector('#start-date')
  validateFutureDate(dateInputField)
}

const validateExpirationDate = () => {
  console.log('validateStartDate called')
  const expInputField = document.querySelector('#expiration')
  // TODO: reformat the input value so that the Date object can handle it
  // (Currently this code isn't doing all it needs to do!)
  validateFutureDate(expInputField)
}

/* helper functions */

function validateCardNumber(number) {
  console.log('validateCardNumber called')
  var regex = new RegExp('^[0-9]{16}$')
  if (!regex.test(number)) return false

  return luhnCheck(number)
}

function luhnCheck(val) {
  var sum = 0
  for (var i = 0; i < val.length; i++) {
    var intVal = parseInt(val.substr(i, 1))
    if (i % 2 === 0) {
      intVal *= 2
      if (intVal > 9) {
        intVal = 1 + (intVal % 10)
      }
    }
    sum += intVal
  }
  return sum % 10 === 0
}

function validateFutureDate(input) {
  console.log("input to validateFutureDate fn: ", input)
  console.log("input value: ", input.value)

  const startDate = new Date(input.value)
  console.log("start date: ", startDate)
  const today = new Date()
  console.log("today: ", today)
  if (startDate >= today) {
    input.setCustomValidity('')
  } else {
    formIsValid = false
    input.setCustomValidity('Date must be in the future.')
  }
}

const calculateCost = () => {
  let numDays = parseInt(document.querySelector('#days').value, 10)
  console.log(numDays)
  let days = []
  let day = new Date(document.querySelector("#start-date").value)

  for (let i = 1; i <= numDays; i++) {
    console.log("The start date is ", day)
    weekday = new Date(day.setDate(day.getDate() + 1))
    days.push(day.getDay())
  }
  console.log("DAYS: :", days)

  return days
    .map((day) => (day > 0 && day < 6 ? 5 : 7))
    .reduce((total, price) => {
      return (total += price)
    }, 0)
}

// documentation for the getDay() method for dates that returns 0-6 for days Sunday-Saturday:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay

// what is happening in that map and reduce business could be rewritten like this:

function convertWeekdayToCostPerDay(arrayOfDaysByNumber){
  // weekdays cost $5/day, weekends cost $7/day

  // instead of using .map() we could do it like this:
  let costByDay = []
  for (let day of arrayOfDaysByNumber){
    if (day > 0 && day < 6) {
      costByDay.push(5)
    } else {
      costByDay.push(7)
    }
  }

  // instead of using reduce we could do it like this:
  let sum = 0
  for (cost of costByDay){
    sum += cost
  }

  return sum
}

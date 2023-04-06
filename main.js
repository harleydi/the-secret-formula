let alertMessage = document.querySelector('#alert-message')
let alertForm = document.querySelector('#alert-form')
let pizzaForm = document.querySelector('#pizza-form')
let haircutForm = document.querySelector('#haircut-form')
let accountForm = document.querySelector('#account-creator')




/* -------------------------------------------------------------------------- */
/*                                    ALERT                                   */
/* -------------------------------------------------------------------------- */

alertForm.addEventListener('submit', function(event){
    event.preventDefault()
    alert(alertMessage.value)
})


/* -------------------------------------------------------------------------- */
/*                                 PIZZA FORM                                 */
/* -------------------------------------------------------------------------- */

// console.log(breads)

// for (let i = 0; i < breads.length; i++) {
//     console.log(breads[i])
// }

pizzaForm.addEventListener('submit', function(event){
    event.preventDefault()
    let toppings = document.querySelectorAll('#topping input')

    // console.log(toppings)
    let selected = []

    // selections.forEach((option) => {
    //     if (option.checked) {
    //         selected.push(option.name) 
    //     }
    // })

    toppings.forEach(topping => {
        if (topping.checked) {
            // selected.push(topping.labels[0].textContent)
            console.log(topping.name)
            selected.push(topping.name)
        }
        // console.log(topping.checked)
    });
    
    // console.log(selected)
    let myPizza = `You have a pizza contains: ${selected.map(select => select)}`
    alert(myPizza)
})
// console.log(breadChoice)


/* -------------------------------------------------------------------------- */
/*                                HAIRCUT FORM                                */
/* -------------------------------------------------------------------------- */

haircutForm.addEventListener('submit', function(event){
    event.preventDefault()

    let date = document.querySelector('#date-selection')
    let barber = document.querySelector('#barber-pref')
    let short = document.querySelector('#short-hair')
    let long = document.querySelector('#long-hair')

    let hairLength = ''

    if (short.checked) {
        hairLength = 'Short'
    } else if (long.checked) {
        hairLength = 'Long'
    }
    
    console.log(short.checked)

    alert(`Haircut scheduled for ${date.value} with ${barber.value} for ${hairLength} hair.`)


})



/* -------------------------------------------------------------------------- */
/*                                ACCOUNT FORM                                */
/* -------------------------------------------------------------------------- */


accountForm.addEventListener('submit', function(event) {
    event.preventDefault()

    let username = document.querySelector('#username')
    let email = document.querySelector('#email')
    let p1 = document.querySelector('#p1')
    let p2 = document.querySelector('#p2')

    if (p1.value !== p2.value) {
        alert('Passwords do not match!')
    } else {
        alert(`Congragulations, ${username.value}! You have created an account using ${email.value}`)
    }
    console.log(p1.value)
    console.log(p2.value)

})
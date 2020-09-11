// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// shorthand syntax for a single statement only
// const square = (x) => x * x

// console.log(square(2))

// ==================================================
// const event = {
//     name: 'Birthday Party',
//     printGuestList: function () {
//         console.log('Guest list for ' + this.name)
//     }
// }

//  Arrow functions do not have access to `this`
// const event = {
//     name: 'Birthday Party',
//     printGuestList: () => {
//         console.log('Guest list for ' + this.name)
//     }
// }

// es6 shorthand alternative for setting methods on objects - with access to `this`
const event = {
    name: 'Birthday Party',
    guestList: ['Ivan', 'Sara', 'Novella'],
    // alternative to arrow function
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}
event.printGuestList()

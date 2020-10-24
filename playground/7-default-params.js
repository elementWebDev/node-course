// add a default value to name
const greeter = (name = 'User', age) => {
    console.log('Hello ' + name)
}

greeter('Ivan')

greeter()

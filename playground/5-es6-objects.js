// 39. ES6 Aside: Object Property Shorthand and Destructuring

// Object property shorthand

const name = 'Ivan'
const userAge = 40

const user = {
    name,   // shorthand - was name: name, if property has same name as variable
    age: userAge,
    location: 'La Pine'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

// rename label, provide a default value for rating
// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel) // renamed label
// console.log(stock)
// console.log(rating) // undefined - does not crash but stores 'undefined'

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)

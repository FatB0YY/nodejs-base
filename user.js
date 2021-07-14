const user = {
    name: 'Elena',
    age: 25,
}

// данная переменная не экспортируется, она остается только в рамках данного файла
const user2 = {
    name: 'Igor',
}

module.exports = {
    user: user,
    sayHello() {
        console.log('hello')
    },
}
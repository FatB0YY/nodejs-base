const os = require('os')

console.log(os.platform()) // какая ОС
console.log(os.arch()) // архитектура (x64 и т.д)
console.log(os.cpus()) // информация процессора типа
console.log(os.freemem()) // сколько есть свободной памяти
console.log(os.totalmem()) // сколько всего памяти
console.log(os.homedir()) // какая корневая директория на компе
console.log(os.uptime()) // сколько система работает
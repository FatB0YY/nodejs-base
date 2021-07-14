const path = require('path')
console.log(path.basename(__filename)) // просто название файла, без путя
console.log(path.dirname(__filename)) // в какой папке находится файл
console.log(path.extname(__filename)) // расширение файла

console.log(path.parse(__filename)) // можно работать с путями и называпниями файлов как с объектами
console.log(path.parse(__filename).ext) // можно пользоваться
    // то, что получим просто parse:
    // {
    //     root: 'C:\\',
    //     dir: 'C:\\Users\\APP-PC-R\\Desktop\\NODEJS-COURSE\\refs',
    //     base: 'path_ref.js',
    //     ext: '.js',
    //     name: 'path_ref'
    // }

console.log(path.join(__dirname, 'test', 'test.txt')) // позволяет соединить строки в один путь
    // первый параметр - папка
    // второй - название папки
    // третий - название файла
    // получим: C:\Users\APP-PC-R\Desktop\NODEJS-COURSE\refs\test\test.txt

console.log(path.resolve(__dirname, './test2', '/test2.txt'))

// https://nodejs.org/dist/latest-v16.x/docs/api/path.html
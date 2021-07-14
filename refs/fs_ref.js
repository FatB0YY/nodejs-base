const fs = require('fs')
const path = require('path')

// File System
// есть асинхронные и синхронные
// рекомендуется всегда вызывать асинхронные методы (без Sync)

fs.mkdir(path.join(__dirname, 'nodes'), (error) => {
        if (error) throw new Error(error)
        console.log('Папка была создана')
    }) // создание папки
    // первый параметр - путь.
    // второй - колбек ф-ция (всегда первое это ошибка!!!)
    // ошибка если папка УЖЕ есть.

fs.writeFile(path.join(__dirname, 'nodes', 'myNotes.txt'), 'Hello world', (error) => {
        if (error) throw new Error(error)
        console.log('Файл был создан')

        // добавить новый контент
        fs.appendFile(
            path.join(__dirname, 'nodes', 'myNotes.txt'),
            '\n Новый контент, который мы добавили',
            (error) => {
                if (error) throw new Error(error)
                console.log('Файл был изменен')

                // считывание файлов
                // data - то, что мы получим при чтении файла
                fs.readFile(
                        path.join(__dirname, 'nodes', 'myNotes.txt'),
                        'utf-8',
                        (error, data) => {
                            if (error) throw new Error(error)
                                // приводим к строке Buffer
                                // console.log(Buffer.from(data).toString())
                            console.log(data)
                        }
                    )
                    // сначала <файл будет создан>
                    // <Bufer ...>
                    // <Файл был изменен>
                    // т.е метод appendFile выполнился после того, как мы прочитали файл.
                    // потому что, все асинхронно, нужно readFile вызвать в колбеке appendFile. (уже поместили)
                    // Buffer.from(data).toString() Теперь получим Hello world или кодировка
            }
        )
    }) // создание файла
    // первый параметр - путь
    // второй - контент
    // третий - колбек ф-ция

// переименование файлов
fs.rename(path.join(__dirname, 'nodes', 'myNotes.txt'), 'new notes', (error) => {
    if (error) throw new Error(error)
    console.log('Файл переименован')
})

// https://nodejs.org/dist/latest-v16.x/docs/api/fs.html
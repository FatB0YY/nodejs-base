// console.log('__dirname', __dirname) // в какой папке мы ведем разработку, абсолютный путь.
// console.log('__filename', __filename) // включающий название файла.

// // module.exports (require)
// const obj = require('./user')
// console.log('obj', obj)
// console.log('user', obj.user)
// console.log('sayHello', obj.sayHello)

// // так в обычном js создаются модули.
// // любой модуль файл в nodejs за кулисами оборачивается в
// // такие функции
// ;
// (function(require, module, exports, __filename, __dirname) {
//     // и здесь находится весь тот коды, который сверху.
//     // соотвественно мы можем пользоваться этими переменными (глобальные)
// })()

// HTTP модуль

const http = require('http')
const path = require('path')
const fs = require('fs')
    // req - отвечает за запрос на сервер
    // res - ответ сервера
const server = http.createServer((req, res) => {
    // // мы можем обрабатывать тот url на который заходим
    // console.log(req.url)

    // res.write('<h1>Hello from NodeJS</h1>')

    // // обязатльно закрываем данный ответ
    // res.end(`
    //     <div style="background: red; width: 200px; height: 200px;">
    //         <h2>Test</h2>
    //     </div>
    // `)

    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
        })
        switch (req.url) {
            case '/':
                fs.readFile(
                    path.join(__dirname, 'views', 'index.html'),
                    'utf-8',
                    (err, content) => {
                        if (err) throw err
                        res.end(content)
                    }
                )
                break
            case '/about':
                fs.readFile(
                    path.join(__dirname, 'views', 'about.html'),
                    'utf-8',
                    (err, content) => {
                        if (err) throw err
                        res.end(content)
                    }
                )
                break
            case '/api/users':
                res.writeHead(200, {
                    'Content-Type': 'text/json',
                })
                const users = [{
                        name: 'Rodion',
                        age: 19,
                    },
                    {
                        name: 'Putin',
                        age: 953,
                    },
                ]
                res.end(JSON.stringify(users))
                break
        }
    } else if (req.method === 'POST') {
        const body = []
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
        })

        req.on('data', (data) => {
            body.push(Buffer.from(data))
        })

        req.on('end', () => {
            const message = body.toString().split('=')[1]
            res.end(`
                    <h1>Ваше сообщение: ${message}</h1>
                `)
        })
    }
})

// запускаем сервер
server.listen(4000, () => {
    console.log('Server is running...')
})
const EventEmitter = require('events')

// мы можем наследоваться от класса EventEmitter,
// который нам добавляет функционал эмитеть или прослушивать события в асинхронном режиме

class Logger extends EventEmitter {
    log(message) {
        this.emit('message', `${message} ${Date.now()}`)
    }
}

const logger = new Logger()
logger.on('message', (data) => {
    console.log(data)
})
logger.log('Hello')
logger.log('Hello')
logger.log('Hello')

//Его идея проста: emitter-объекты генерируют именованные события, которые приводят к вызову ранее зарегистрированных прослушивателей. Так что у эмиттера есть две основные функции:
// Генерирование именованных событий.
// Регистрация и дерегистрация функций-прослушивателей.

// Генерирование события — это сигнал того, что соблюдено какое-то условие. Обычно речь идёт об изменении состояния генерирующего объекта. С помощью метода on можно добавить функции-прослушиватели, которые будут исполняться каждый раз, когда эмиттеры генерируют свои ассоциированные именованные события.

const EventEmitter = require('events')

class WithLog extends EventEmitter {
    execute(taskFunc) {
        console.log('Before executing')
        this.emit('begin')
        taskFunc()
        this.emit('end')
        console.log('After executing')
    }
}

const withLog = new WithLog()

withLog.on('begin', () => console.log('About to execute'))
withLog.on('end', () => console.log('Done with execute'))

withLog.execute(() => console.log('*** Executing task ***'))

// Результат:
// Before executing
// About to execute
// *** Executing task ***
// Done with execute
// After executing
const fs = require('fs')

function read(path, callback) {
    fs.readFile(path, (error, data) => {
        callback(data.toString())
    })
}

function write(path, content, callback) {
    fs.writeFile(path, content, (error) => {
        if (error) {
            callback('No he podido escribirlo')
        } else {
            callback('Se ha escrito correctamente')
        }
    })
}

function unlink(path, callback) {
    fs.unlink(path, callback)
}

write(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log)
read(__dirname + '/archivo1.txt', console.log)
unlink(__dirname + '/archivo1.txt', console.log)
function greet(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hola, ${name}`)
            resolve(name)
        }, 1500)
    });
}

function speak(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla bla...')
            // resolve(name)
            reject('Lanzando un error porque me da la gana MUAJAJAJA')
        }, 1000)
    })
}

function bye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adiós, ${name}`)
            resolve()
        }, 1000)
    });
}

// EJEMPLO
console.log('Iniciando el proceso...')
greet('Bruno')
    .then(speak)
    .then(speak)
    .then(speak)
    .then(speak)
    .then(speak)
    .then(speak)
    .then(speak)
    .then(bye)
    .then(name => {
        console.log('Terminado el proceso')
    })
    .catch(error => {
        console.error('Ha habido un error:')
        console.error(error)
    })
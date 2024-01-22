function greet(nombre, miCallback) {
    setTimeout(() => {
        console.log(`Hola, ${nombre}`)
        miCallback(nombre)
    }, 1500)
}

function speak(callbackHablar) {
    setTimeout(() => {
        console.log('Bla bla bla bla...')
        callbackHablar()
    }, 1000)
}

function bye(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adiós, ${nombre}`)
        otroCallback()
    }, 1000)
}

function conversation(name, time, callback) {
    if (time > 0) {
        speak(() => {
            conversation(name, --time, callback)
        })
    } else {
        bye(name, callback)
    }

}

console.log('Iniciando proceso...')
// EJEMPLO 1

// greet('Bruno', (nombre) => {
//     bye(nombre, () => {
//         console.log('Terminando proceso...')
//     })
// })

// EJEMPLO 2

// greet('Bruno', () => {})
// bye('Bruno', () => {})

// EJEMPLO 3
greet('Bruno', (name) => {
    conversation(name, 10, () => {
        console.log('Terminando proceso...')
    })
})
function greet(nombre, miCallback) {
    setTimeout(() => {
        console.log(`Hola, ${nombre}`)
        miCallback(nombre)
    }, 1500)
}

function bye(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adiós, ${nombre}`)
        otroCallback()
    }, 1000)
}

console.log('Iniciando proceso...')

// EJEMPLO 1

greet('Bruno', (nombre) => {
    bye(nombre, () => {
        console.log('Terminando proceso...')
    })
})

// EJEMPLO 2

// greet('Bruno', () => {})
// bye('Bruno', () => {})
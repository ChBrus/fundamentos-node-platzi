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
            resolve(name)
            // reject('Lanzando un error porque me da la gana MUAJAJAJA')
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

async function main() {
    let nombre = await greet('Bruno')
    await speak(nombre)
    await speak(nombre)
    await speak(nombre)
    await bye(nombre)
    console.log('Finishing...')
}

console.log('Starting...')
main()
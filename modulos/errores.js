function init() {
    itBreaks()
}

function itBreaks() {
    return 3 + z
}

function asyncItBreaks(callback) {
    setImmediate(() => {
        try {
            return 3 + z
        } catch (error) {
            console.group('Opa opa, tenemos un error')
            callback(error)
        }
    })
}

try {
    // init()
    asyncItBreaks(error => {
        console.error('NOOOO, TÍOOOO')
        console.error(error.message)
        console.groupEnd()
    })
} catch(error) {
    console.group('Vaya lío, chaval')
    console.error(error)
    console.info('No preocupeís, lo hemos capturado')
    console.groupEnd()
}

console.log('Salimos del error jijiji')
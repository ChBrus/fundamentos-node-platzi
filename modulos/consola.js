// Log
console.log('Algo')

// Info
console.info('Algo')

// Error
console.error('I\'m a fucking error dude!!!')

// Potencial error
console.warn('What have you done?!?!')

// Mostrar datos en forma de módulos / tablas
let users = [
    {
        name: 'Elon Musk',
        age: 52,
        owns: [
            'Tesla',
            'Twitter',
            'SpaceX',
            'Neuralink',
            'xAI',
            'The boring company'
        ]
    },
    {
        name: 'Mark Zuckerberg',
        age: 39,
        owns: [
            'Facebook',
            'Instagram',
            'WhatsApp',
            'Oculus VR',
            'Onavo',
            'Beluga'
        ]
    }
]

// console.table(users)
console.group('Tabla usuarios:')
    console.table(users)
console.groupEnd('Tabla usuarios:')

// Agrupa una cantidad de logs para diferenciar cual es cual
console.group('Conversación:')
    console.log('Hi, how are you doing?')
    console.log('Hi, I\'m doing well. I loved what I did yesterday')
    console.log('Nice')
console.groupEnd('Conversación:')

// Contadores
console.count('Tengo hambre')
console.count('Tengo hambre')
console.count('Tengo hambre')
console.countReset('Tengo hambre')
console.count('Tengo hambre')
console.count('Tengo hambre')
console.count('Tengo hambre')
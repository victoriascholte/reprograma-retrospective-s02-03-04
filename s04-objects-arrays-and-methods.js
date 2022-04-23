// array de objetos
const turma = [
    {
        name: 'Victoria',
        age: 34,
    },
    {
        name: 'Gaia',
        age: 23,
    },
    {
        name: 'Jane',
        age: 34,
    },
    {
        name: 'Lays',
        age: 34,
    },
    {
        name: 'Agnes',
        age: 28,
    },
    {
        name: 'Andreza',
        age: 33,
    },
    {
        name: 'Rosiene',
        age: 34,
    },
    {
        name: 'Aline',
        age: 34,
    }
]

console.log(turma)
console.log(turma[4])

// Filter
const turmaFiltrada = turma.filter (item => item.age === 34)
console.log(turmaFiltrada)

// Reduce (operações mat) ex: a média simples das idades
const somaIdades = turma.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual.age
},0)

const media = (somaIdades / turma.length).toFixed(0)
console.log(`A média de idade da turma é ${media} anos`)

// Find 
// Map
// Sort 
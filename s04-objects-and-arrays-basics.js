// objetos: create, access, include, delete
const person = {
    name: 'Victoria',
    age: 34
}

// acessar as propriedades com desestruturação (spread)
const { name, age } = person
console.log(person.name)
console.log(name)

// incluir uma propriedade
person.role = 'designer'
console.log(person)

// criar uma nova pessoa (copiar, editar e incluir infos)
const newPerson = {...person, name: 'Simara', age: 33, role: 'teacher'}
console.log(newPerson)

//array
let alunas = ['Gaia', 'Jane', 'Lay', 'Agnes', 'Andreza']
alunas.push('Rosiene', 'Victoria', 'Loui')
console.log(alunas)

// spread operator
alunas = [...alunas, 'Luana', 'Naiane']
console.log(alunas)
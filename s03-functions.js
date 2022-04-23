// Funções

function multiply(a, b) {
    return a * b
}

console.log(multiply(3,4))

// Função anônima

const multiplica = function (num1, num2) {
    return num1 * num2
}

console.log(multiplica(3,4))

// Arrow Function
const multiplyNumbers = (number1, number2) => {
    return number1 * number2
}

console.log(multiplyNumbers(3,4))

// If Else Function
let idade = 18
const maior = idade >= 18
const menor = idade < 18 

if (maior){
    console.log(`${idade}: maior de idade`)
} else if (menor){
    console.log(`${idade}: menor de idade`)
} else {
    console.log(`${idade}: idade inválida`)
}

// Switch case
switch (idade >=18) {
    case true:
        console.log(`${idade}: maior de idade`)
        break
    case false:
        console.log(`${idade}: menor de idade`)
        break
}

// Operador ternário

maior ? console.log(`${idade}: maior de idade`) : console.log(`${idade}: menor de idade`)
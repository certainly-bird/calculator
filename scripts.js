const button = document.querySelector('.buttons')
button.addEventListener('click', (e) => e.target.textContent === '=' ? operate(firstNum,secondNum,oper) : nums(e.target.textContent))
let firstNum = ''
let secondNum = ''
let oper = ''
const FUNCTIONS = '+-/x'

function nums(input){
    if(FUNCTIONS.includes(input) && oper === ''){
        oper = input
        console.log('operator')
    }else if(oper === ''){
        if(firstNum.includes('.') && input === '.'){
            firstNum = firstNum
        }else{
            firstNum = firstNum.concat(input)
            console.log(firstNum)
        }
    }else{
        if(FUNCTIONS.includes(input)){
            secondNum = secondNum
        }else if(secondNum.includes('.') && input === '.'){
            secondNum = secondNum
        }else{
            secondNum = secondNum.concat(input)
            console.log(secondNum)
        }
    }
}

function operate(numA, numB, sign){
    if(sign === '+'){
        sum(numA, numB)
    }else if(sign === '-'){
        remainder(numA, numB)
    }else if(sign === 'x'){
        product(numA, numB)
    }else if(sign === '/'){
        quotient(numA, numB)
    }
}

function sum(numA, numB){
    console.log(parseFloat(numA) + parseFloat(numB))
}

function remainder(numA, numB){
    console.log(parseFloat(numA) - parseFloat(numB))
}

function product(numA, numB){
    console.log(parseFloat(numA) * parseFloat(numB))
}

function quotient(numA, numB){
    if(parseFloat(numB) === 0){
        console.log('not so fast')
    }else{
        console.log(parseFloat(numA) / parseFloat(numB))
    }
}
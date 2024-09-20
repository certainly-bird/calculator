const screenNum = document.querySelector('.screen')
const button = document.querySelector('.buttons')

// This is where the monster started
button.addEventListener('click', (e) => e.target.textContent === '=' ? operate(firstNum,secondNum,oper) : nums(e.target.textContent))

let firstNum = ''
let secondNum = ''
let calcNum = ''
let storeNum = ''
let oper = ''
let previousOper = ''
const FUNCTIONS = '+/-xUCS'
const SCREEN_LEN = 12

// I'm sorry for creating this monster
function nums(input){
    if(screenNum.textContent === 'not so fast'){
        clearScreen()
    }
    if(input.length > 3){
        return
    }else if(FUNCTIONS.includes(input) && firstNum.length === 0 && previousOper === ''){
        return
    }else if(input === '<-' && previousOper !== ''){
        undoCalculation(previousOper)
    }else if(input === 'C'){
        clearScreen()
    }else if(input === '+/-'){
        flipSign()
    }else if(calcNum !== '' && !FUNCTIONS.includes(input) && firstNum.length !== 1 && oper === ''){
        return
    }else if(FUNCTIONS.includes(input) && oper === ''){
        oper = input
        screenNum.textContent = input
    }else if(oper === ''){
        if(firstNum.includes('.') && input === '.'){
            return
        }else if(firstNum.length < SCREEN_LEN){
            firstNum = firstNum.concat(input)
            screenNum.textContent = firstNum
        }
    }else{
        if(FUNCTIONS.includes(input)){
            return
        }else if(secondNum.includes('.') && input === '.'){
            return
        }else if(secondNum.length < SCREEN_LEN){
            secondNum = secondNum.concat(input)
            screenNum.textContent = secondNum
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
    screenLength()
}

function sum(numA, numB){
    if(calcNum !== ''){
        calcNum = parseFloat(calcNum) + parseFloat(numB)
        screenNum.textContent = `${parseFloat(calcNum)}`
    }else{
        calcNum = parseFloat(numA) + parseFloat(numB)
        screenNum.textContent = `${parseFloat(numA) + parseFloat(numB)}`
    }
    firstNum = ''
    secondNum = ''
    oper = ''
    previousOper = '+'
    storeNum = numB
}

function remainder(numA, numB){
    if(calcNum !== ''){
        calcNum = parseFloat(calcNum) - parseFloat(numB)
        screenNum.textContent = `${parseFloat(calcNum)}`
    }else{
        calcNum = parseFloat(numA) - parseFloat(numB)
        screenNum.textContent = `${parseFloat(numA) - parseFloat(numB)}`
    }
    firstNum = ''
    secondNum = ''
    oper = ''
    previousOper = '-'
    storeNum = numB
}

function product(numA, numB){
    if(calcNum !== ''){
        calcNum = parseFloat(calcNum) * parseFloat(numB)
        screenNum.textContent = `${parseFloat(calcNum)}`
    }else{
        calcNum = parseFloat(numA) * parseFloat(numB)
        screenNum.textContent = `${parseFloat(numA) * parseFloat(numB)}`
    }
    firstNum = ''
    secondNum = ''
    oper = ''
    previousOper = 'x'
    storeNum = numB
}

function quotient(numA, numB){
    if(parseFloat(numB) === 0 || secondNum === 0){
        screenNum.textContent = `${'not so fast'}`
    }else{
        if(calcNum !== ''){
            calcNum = parseFloat(calcNum) / parseFloat(numB)
            screenNum.textContent = `${parseFloat(calcNum)}`
        }else{
            calcNum = parseFloat(numA) / parseFloat(numB)
            screenNum.textContent = `${parseFloat(numA) / parseFloat(numB)}`
        }
    }
    firstNum = ''
    secondNum = ''
    oper = ''
    previousOper = '/'
    storeNum = numB
}

function undoCalculation(sign){
    if(previousOper === ''){
        return
    }else{
        if(sign === '+'){
            remainder(calcNum, storeNum)
        }else if(sign === '-'){
            sum(calcNum, storeNum)
        }else if(sign === 'x'){
            quotient(calcNum, storeNum)
        }else if(sign === '/'){
            product(calcNum, storeNum)
        }
    }
}

function clearScreen(){
    screenNum.textContent = ''
    firstNum = ''
    secondNum = ''
    calcNum = ''
    storeNum = ''
    oper = ''
    previousOper = ''
}

function flipSign(){
    if(oper === '' && previousOper === ''){
        firstNum = parseFloat(firstNum) * -1
        screenNum.textContent = '' + firstNum
        screenLength()
    }else if(calcNum !== '' && oper === ''){
        calcNum = calcNum * -1
        screenNum.textContent = '' + calcNum
        screenLength()
    }else{
        secondNum = parseFloat(secondNum) * -1
        screenNum.textContent = '' + secondNum
        screenLength()
    }
}

function screenLength(){
    if(screenNum.textContent.length > SCREEN_LEN){
        screenNum.textContent = `~${('' + calcNum.toPrecision(6))}`
    }
    if(screenNum.textContent.length > SCREEN_LEN){
        screenNum.textContent = `~${('' + calcNum.toExponential(5))}`
    }
}
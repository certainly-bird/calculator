const button = document.querySelector('.buttons')
button.addEventListener('click', (e) => console.log(e.target.textContent))
let values = [10,'+',3]

function equate(array){
}

function operate(numA, numB, sign){
    numA = values[0]
    numB = values[2]
    sign = values[1]
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

operate()

function sum(numA, numB){
    // return numA + numB
    console.log(numA + numB)
}

function remainder(numA, numB){
    return numA - numB
}

function product(numA, numB){
    return numA * numB
}

function quotient(numA, numB){
    if(numB === 0) return 'not so fast'
    return numA / numB
}
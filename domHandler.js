const LuhnChecker = require('./luhnChecker.js')

const number = document.getElementById('numberInput').value

const getResult = () =>{
    LuhnChecker.cardNumber = number;
    const result = LuhnChecker.check();
    document.getElementById('resultBox').innerHTML = result;
    
}

// const testButton = document.getElementById('testButton');




const LuhnChecker = { //object with all properties and methods to perform the Luhn Algorithm test
    _cardNumber: [], //array of numbers to be checked

    set cardNumber(array){
        return this._cardNumber = array;
    }, //setter
    

    ckeckDigit () {
        return this._cardNumber[this._cardNumber.length -1] // get last digit from original array
    },

    newValid () {
        return this._cardNumber.map((number, index) => {
            // if length is even than every even index number must be multiplied by two otherwise the odd index numbers must be multiplied 
            if(this._cardNumber.length % 2 === 0){
                if(index % 2 === 0){
                    return number * 2;
        
                } else{
                    return number;
                };
            } else {
                if(index % 2 !== 0){
                    return number * 2;
        
                } else{
                    return number;
                };
    
            }
            
    
        });

    },

    adjValid () {  //check if any number after .newValid() is bigger than 9, if it is subtract 9 from it
        const array = this.newValid();
        const adjArray = array.map(number => {
            if(number > 9){
                return number - 9;
            } else{
                return number;
            }
        })
        return adjArray.slice(0, -1); // delete the last number from the resulting array
    },

    sumUp () {  //sum all numbers of the array resulted from .adjValid()
        const array = this.adjValid();
        const arraySum = array.reduce((a, b) => a + b);
        const digit = this.ckeckDigit() //last digit from original array
        return arraySum + digit; // add the check digit to the resulting sum
        
    },

    check () { // if the final number % 0 iquals 0 return true, otherwise return false
        const result = this.sumUp();
        if(result % 10 === 0){
            return true;
        } else {
            return false;
        }
        
        
    }

}



// DOM EVENTS HANDLERS


const makeArray = string =>{ //transform a string into a number array
    const array = [];
    for(number of string){
        array.push(Number(number));
    }
    return array;
}

const inputNumber = document.getElementById('numberInput'); // variable storing the input where the number is provided by user
const textArea = document.getElementById('resultBox'); // variable storing the textarea where the result will be printed

const getResult = () =>{ // sets LuhnChecker.cardnumber to be value of input and calls LuhnChecker.check() on it
    const stringNumber = inputNumber.value;
    
    LuhnChecker.cardNumber = makeArray(stringNumber);
    const result = LuhnChecker.check();
    ;

    if(result === true){ // test passed
        textArea.value = 'Your number PASSED a Lohn Algorithm test!'
        textArea.style.backgroundColor = 'green';
        textArea.style.color = 'white';
        
    } else{ // test failed
        textArea.value = 'Your number FAILED a Lohn Algorithm test!'
        textArea.style.backgroundColor = 'red';
        textArea.style.color = 'white';
    }
    
}

const resultButton = document.getElementById('testButton');
resultButton.addEventListener('click', getResult); // set button call getResult() function





const randomIndex = Math.floor(Math.random() * 4); //random number from 1 to 3

const pushValid = () =>{ // sets the inputNumber.value to be one element of a passing test array
    inputNumber.value = null;
    const validArray = ['4539677908016808', '5535766768751439', '371612019985236', '6011144340682905' ]
    inputNumber.value = validArray[randomIndex]; 
    
}

const validButton = document.getElementById('valid');
validButton.addEventListener('click', pushValid);

const pushInvalid = () =>{ // sets the inputNumber.value to be one element of a failing array
    inputNumber.value = null;
    const invalidArray = ['453277877109179', '55795593392134643', '556794593392134648', '4815162342' ]
    inputNumber.value = invalidArray[randomIndex]; 

}

const invalidButton = document.getElementById('invalid');
invalidButton.addEventListener('click', pushInvalid);

const erase = () =>{ // erase data from input fields
    inputNumber.value = null;
    textArea.value = '';
    textArea.style.backgroundColor = 'white';
    location.reload();
}

const clearButton = document.getElementById('erase');
clearButton.addEventListener('click', erase);

module.exports = LuhnChecker;






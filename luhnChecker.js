const LuhnChecker = {
    _cardNumber: [],

    set cardNumber(array){
        return this._cardNumber = array;
    },
    

    ckeckDigit () {
        return this._cardNumber[this._cardNumber.length -1]
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

    adjValid () {
        const array = this.newValid();
        const adjArray = array.map(number => {
            if(number > 9){
                return number - 9;
            } else{
                return number;
            }
        })
        return adjArray.slice(0, -1);
    },

    sumUp () {
        const array = this.adjValid();
        const arraySum = array.reduce((a, b) => a + b);
        const digit = this.ckeckDigit()
        return arraySum + digit;
        
    },

    check () {
        const result = this.sumUp();
        if(result % 10 === 0){
            return true;
        } else {
            return false;
        }
        
        
    }

}


//DOM EVENTS HANDLERS


const makeArray = string =>{
    const array = [];
    for(number of string){
        array.push(Number(number));
    }
    return array;
}

const inputNumber = document.getElementById('numberInput');
const textArea = document.getElementById('resultBox');

const getResult = () =>{
    const stringNumber = inputNumber.value;
    
    LuhnChecker.cardNumber = makeArray(stringNumber);
    const result = LuhnChecker.check();
    ;

    if(result === true){
        textArea.value = 'Your number PASSED a Lohn Algorithm test!'
        textArea.style.backgroundColor = 'green';
        textArea.style.color = 'white';
        
    } else{
        textArea.value = 'Your number FAILED a Lohn Algorithm test!'
        textArea.style.backgroundColor = 'red';
        textArea.style.color = 'white';
    }
    
}

const resultButton = document.getElementById('testButton');
resultButton.addEventListener('click', getResult);





const randomIndex = Math.floor(Math.random() * 4);

const pushValid = () =>{
    inputNumber.value = null;
    const validArray = ['4539677908016808', '5535766768751439', '371612019985236', '6011144340682905' ]
    inputNumber.value = validArray[randomIndex];
    
}

const validButton = document.getElementById('valid');
validButton.addEventListener('click', pushValid);

const pushInvalid = () =>{
    const invalidArray = ['453277877109179', '55795593392134643', '556794593392134648', '4815162342' ]
    inputNumber.value = invalidArray[randomIndex];

}

const invalidButton = document.getElementById('invalid');
invalidButton.addEventListener('click', pushInvalid);

const erase = () =>{
    inputNumber.value = null;
    textArea.value = '';
    textArea.style.backgroundColor = 'white';
    location.reload();
}

const clearButton = document.getElementById('erase');
clearButton.addEventListener('click', erase);

module.exports = LuhnChecker;






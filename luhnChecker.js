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

const makeArray = string =>{
    const array = [];
    for(number of string){
        array.push(Number(number));
    }
    return array;
}

const getResult = () =>{

    const stringNumber = document.getElementById('numberInput').value;
    
    LuhnChecker.cardNumber = makeArray(stringNumber);
    const result = LuhnChecker.check();
    document.getElementById('resultBox').value = result;
    
}

const resultButton = document.getElementById('testButton');
resultButton.addEventListener('click', getResult);

module.exports = LuhnChecker;






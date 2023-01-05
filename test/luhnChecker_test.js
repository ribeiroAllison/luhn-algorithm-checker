const LuhnChecker = require('../luhnChecker.js');

const assert = require('assert');

describe('LuhnChecker', () =>{
    describe('.newValid', () =>{
        it('receives an array, if the array length is even it multiplies the elements with even index by two', ()=>{
            //setup
            const inputArray = [1,2,3,4];
            const expectedResults = [2,2,6,4];
    
            //exercise
            LuhnChecker.cardNumber = inputArray;
            const result = LuhnChecker.newValid();
    
            //verify
            assert.deepStrictEqual(result, expectedResults);
        });

        it('receives an array, if the array length is odd it multiplies the elements with odd index by two', ()=>{
            //setup
            const inputArray = [1,2,3,4,5];
            const expectedResults = [1,4,3,8,5];
            LuhnChecker.cardNumber = inputArray;
    
            //exercise
            const result = LuhnChecker.newValid();
    
            //verify
            assert.deepStrictEqual(result, expectedResults);
        })
        
    });

    describe('.adjValid', () =>{
        it('checks if there are any numbers greater than 9 at the a new array resulted from calling .newvalid(), if there are subtract 9 from them', () =>{

            //setup
            const inputArray = [6,2,5,1];
            LuhnChecker.cardNumber = inputArray;
            LuhnChecker.newValid();
            const expectedResult = [3,2,1,1]

            //exercise
            const result = LuhnChecker.adjValid();

            //verify
            assert.deepStrictEqual(result, expectedResult);

        })
    });

    describe('.extractLastDigit', () =>{
        it('extracts last digit from array resulted from calling .adjValid()', () =>{
            //setup
            const inputArray = [6,2,5,1];
            LuhnChecker.cardNumber = inputArray;
            LuhnChecker.newValid();
            LuhnChecker.adjValid();
            const expectedResult = [1]

            //exercise
            const result = LuhnChecker.extractLastDigit();

            //verify
            assert.deepStrictEqual(result, expectedResult);
            
        })
    })

    
})
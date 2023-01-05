const LuhnChecker = require('../luhnChecker.js');

const assert = require('assert');

describe('LuhnChecker', () =>{
    describe('.checkDigit', () =>{
        it('extracts the last number of the input array', () =>{
            //setup
            const inputArray = [1,2,3,4,5];
            const expectedResult = 5;

            //exercise
            LuhnChecker.cardNumber = inputArray;
            const result = LuhnChecker.ckeckDigit();

            //verify
            assert.strictEqual(result, expectedResult);
            
        })
    })

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
            const inputArray = [0, 5, 2, 6, 4];
            const expectedResults = [0, 10, 2, 12, 4];
            LuhnChecker.cardNumber = inputArray;
    
            //exercise
            const result = LuhnChecker.newValid();
    
            //verify
            assert.deepStrictEqual(result, expectedResults);
        })
        
    });

    describe('.adjValid', () =>{
        it('checks if there are any numbers greater than 9 at the a new array resulted from calling .newvalid(), if there are subtract 9 from them. Removes last number from the resulting array', () =>{
            
                //setup
            const inputArray = [0, 5, 2, 6, 4];
            LuhnChecker.cardNumber = inputArray;
            const expectedResult = [0, 1, 2, 3]

            //exercise
            const result = LuhnChecker.adjValid();

            //verify
            assert.deepStrictEqual(result, expectedResult);

            

        })
    });

    describe('.sumUp', () =>{
        it('sums all the numbers of the resulting array from .adjValid() calling and adds the result of .checkDigit() to this total', () =>{

            //setup
            const inputArray = [0, 5, 2, 6, 4];
            LuhnChecker.cardNumber = inputArray;
            const expectedResult = 10;

            //exercise
            const result = LuhnChecker.sumUp();

            //verify
            assert.strictEqual(result, expectedResult);
        })

        
    })

    describe('.check', () =>{
        it('checks if the resulting number from .sumUp() % 10 iquals 0, if so return TRUE', () =>{

            //setup
            const inputArray = [0, 5, 2, 6, 4];
            LuhnChecker.cardNumber = inputArray;
            const expectedResult = true;

            //exercise
            const result = LuhnChecker.check();

            //verify
            assert.strictEqual(result, expectedResult);

        });

        it('checks if the resulting number from .sumUp() % 10 iquals 0, if NOT return FALSE', () =>{

            //setup
            const inputArray = [0, 5, 2, 6, 5];
            LuhnChecker.cardNumber = inputArray;
            const expectedResult = false;

            //exercise
            const result = LuhnChecker.check();

            //verify
            assert.strictEqual(result, expectedResult);

        });
    })


    
})
const { describe, expect } = require('@jest/globals');
const {reverseArray, reverseArrayInPlace} = require('../reverse');


describe("basic functionality",()=>{

    it('should reverse an array and not mutate the actual parameter sent', () => {

        let a = [1,2,3,4,5];

        expect(reverseArray(a)).toEqual([5,4,3,2,1])
        expect(a).toEqual([1,2,3,4,5]);
    });


    it('should mutate the sent value', () => {

        let a = [1,2,3,4,5];
        
        expect(reverseArrayInPlace(a)).toEqual([5,4,3,2,1])
        expect(a).toEqual([5,4,3,2,1])
    });



});


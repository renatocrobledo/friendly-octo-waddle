const { listToArrays, arrayToList, getNthListNonRecursive, nthListRecursive, prepend } = require('../array_list')


describe('arrayToList', ()=>{

    test('should work as expected', () => {
        
        const result = {
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        };

        expect(arrayToList([1,2,3])).toEqual(result)
    });


});


describe('listToArray', ()=>{

    test('should work as expected', () => {
        
        const list = {
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        };

        expect(listToArrays(list)).toEqual([1,2,3])
    });

});



describe('getNthList -> NON Recursive!', () => {
    
    test('should retreive the element of the deepest equal to the index 1', () => {
        
        const list = {
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        };

        expect(getNthListNonRecursive(list, 1)).toEqual(2)

    });



    test('should retreive the element of the deepest equal to the index 2', () => {
        
        const list = {
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        };

        expect(getNthListNonRecursive(list, 2)).toEqual(3)

    });

    test('should retreive the element of the deepest equal to the index 0', () => {
        
        const list = {
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        };

        expect(getNthListNonRecursive(list, 0)).toEqual(1)

    });

    test('should return null in case the index is bigger than the total of 3 elements', () => {
        
        const list = {
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        };

        expect(getNthListNonRecursive(list, 8)).toEqual(undefined)

    });

    test('should return null in case the index is bigger than the total of 1 element', () => {
        
        const list = {
            value: 1,
            rest: null
        };

        expect(getNthListNonRecursive(list, 8)).toEqual(undefined)

    });
});





describe('getNthList -> Recursive!', () => {
    
    test('should retreive the element of the deepest equal to the index 1', () => {
        
        const list = {
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        };

        expect(nthListRecursive(list, 1)).toEqual(2)

    });



    test('should retreive the element of the deepest equal to the index 2', () => {
        
        const list = {
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        };

        expect(nthListRecursive(list, 2)).toEqual(3)

    });

    test('should retreive the element of the deepest equal to the index 0', () => {
        
        const list = {
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        };

        expect(nthListRecursive(list, 0)).toEqual(1)

    });

    test('should return null in case the index is bigger than the total of 3 elements', () => {
        
        const list = {
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        };

        expect(nthListRecursive(list, 8)).toEqual(undefined)

    });

    test('should return null in case the index is bigger than the total of 1 element', () => {
        
        const list = {
            value: 1,
            rest: null
        };

        expect(nthListRecursive(list, 8)).toEqual(undefined)

    });
});


describe('prepend',()=> {


    it('should prepend the value to a list', () => {
        
        const list = {
            value: 1,
            rest: null
        };

        const expectedResult = {
            value: 0,
            rest: {
                value: 1,
                rest: null
            }
        }
        expect(prepend(list, 0)).toEqual(expectedResult);
    });

});

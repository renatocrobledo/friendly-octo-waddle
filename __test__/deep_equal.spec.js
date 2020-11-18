const { expect } = require('@jest/globals');
const deepEqual = require('../deep_equal')


describe('deepEqual', () => {
    it('should returns true only if they are the same value or are objects with the same properties', () => {
        
        const value_1 = 1;
        const object_1 = {a:1};
        const array = [1,2,3,4]

        expect(deepEqual(value_1, value_1)).toEqual(true);
        expect(deepEqual(object_1, Object.assign({},object_1))).toEqual(true);
        expect(deepEqual(array, Object.assign([],array))).toEqual(true);
    });



    it('should returns true only if they are the same value or are objects with the same properties', () => {
        
        const object_1 = {a:1, b: {c: 2}};
        const object_2 = {a:1, b: {c: 2}};
        
        expect(deepEqual(object_1, object_2)).toEqual(true);
    });

    it('should returns false if they are diferent values or are objects with different properties', () => {
        
        const value_1 = 1;
        const value_2 = 2;
        const value_3 = null;
        const object_1 = {a:1};
        const object_2 = {b:1};

        expect(deepEqual(value_1, value_2)).toEqual(false);
        expect(deepEqual(object_1, object_2)).toEqual(false);
        expect(deepEqual(value_1, object_2)).toEqual(false);
        expect(deepEqual(value_1, value_3)).toEqual(false);
        expect(deepEqual(object_1, value_3)).toEqual(false);
    });


});
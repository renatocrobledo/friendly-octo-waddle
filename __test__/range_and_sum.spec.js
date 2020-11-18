
const { range, sum} = require('../range_and_sum')

describe('Basic funcitonality', () =>{

    it('should work backwards', () => {
        expect(range(5,2,-1)).toEqual([5, 4, 3, 2])
    });

    it('should work forward', () => {
        expect(range(1,5)).toEqual([1,2,3,4,5])
    });

    it('should sum the elements of an array', () => {
        expect(sum(range(1,10))).toEqual(55)
    });

})
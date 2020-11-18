const { Matrix, MatrixIterator} = require('../iterable_datastructure');


describe('MAtrix class behavior', () => {


    it('should work as expected', () => {
        
        let m = new Matrix(2,2) // 2 * 2
        
        m.set(0,0,'a');

        expect(m.get(0,0)).toEqual('a');
    
        
        let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
        

        const expected_results = [
            '0 0 value 0,0',
            '1 0 value 1,0',
            '0 1 value 0,1',
            '1 1 value 1,1'
        ];
        let i = 0;
        for (let {x, y, value} of matrix) {
            result = `${x} ${y} ${value}`
            expect(result).toEqual(expected_results[i++])
        }
    
    
    });
    
});
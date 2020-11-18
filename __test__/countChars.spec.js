const countChar = require('../countChar');



describe('countChar', () => {
    it('should work a expected', () => {
        
        const string_1 = 'asggasBasfafsaBasfasfasfsaB';
        const string_2 = 'asggasasfafsaasfasfasfsa';

        const countBs = countChar('B');

        expect(countBs(string_1)).toEqual(3)
        expect(countBs(string_2)).toEqual(0)

    });
});
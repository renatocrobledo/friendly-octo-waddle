const { expect } = require('@jest/globals');
const replaceCharString = require('../replace_chars');




describe('replaceChars', () => {
    it('should interchange a by b and vice versa when the string only contains a & b', () => {
        
        const s = '001';
        const a = '0';
        const b = '1';

       expect(replaceCharString(s,a,b)).toEqual('110')

    });
    
    it('should interchange a by b and vice versa on a strng containing more words', () => {
        
        const s = 'aaaaabbbb001ccccccddddddd';
        const a = '0';
        const b = '1';

       expect(replaceCharString(s,a,b)).toEqual('aaaaabbbb110ccccccddddddd')     
    });

    it('should not interchange anything on a strng when  a nor b are present', () => {
        
        const s = 'aaaaabbbbccccccddddddd';
        const a = '0';
        const b = '1';

       expect(replaceCharString(s,a,b)).toEqual('aaaaabbbbccccccddddddd')     
    });
});
/**
 * @param {string} s 
 * @param {char to be replaces by b} a 
 * @param {char to be replaces by a} b 
 */


function replaceCharString(s,a,b){

    return s.split('').reduce((acc,n)=>{
        if (n === a) acc += b;
        else if (n === b) acc += a;
        else acc += n;
        return acc;
    },'')
}


module.exports = replaceCharString;
/*

    Write a function
    min that takes two arguments and returns their minimum.
*/

function min(...params){
    return params.reduce((acc,n)=> {
        if (n < acc) acc = n;
        return acc
    }, Infinity);
}


console.log(min(9,39,19,5,3,1)) // 1

/*
    Takes an array as argument and produces a new array that has the same elements in the inverse order
*/
function reverseArray(array){
    const reversed = []

    for(n = array.length - 1; n>=0; n--){
        reversed.push(array[n]);
    }
    return reversed;
}

/*
 does what the reverse method does: it modifies the array given as argument by reversing its elements
*/
function reverseArrayInPlace(array){

    let end = array.length - 1;
    let start = 0;
    while(end > start){
        
        let tmp = array[start]

        array[start] = array[end]
        array[end] = tmp

        end--;
        start++;
    }
    return array;
}

module.exports = {
    reverseArray,
    reverseArrayInPlace
}

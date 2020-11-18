

function listToArrays(list){

    function recursive({value, rest}, array){
        array.push(value)
        if (rest === null) return array
        return recursive(rest, array)
    }
    return recursive(list,[])
}


function getNthListNonRecursive(list, index){

    let value = list['value'];
    let rest = list['rest']
    

    for (let counter = 0; counter < index; counter++){

        if (rest === null && counter !== index) return;
        if (counter === index) return value;
        
        value = rest['value'] 
        rest = rest['rest']
               
    }

    return value

}


/*
    recursiveley retreive the elment in the position(deepness) equal to index
*/
function nthListRecursive(list, index){

    function recurse(element, count){

        if (count === index) return element.value;
        if (element === null || count > index) return;
        
        return recurse(element.rest, count + 1)

    }

    return recurse(list, 0)

}


/*
    A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.
*/
function arrayToList(array){
    function recursive(i){

        if (i == array.length) return null;

        return ({
            value: array[i],
            rest: recursive(i + 1)
        });  
    }

    return recursive(0)
}


/*
    adds element to the front to the list
*/
function prepend(list, value){
    return { value, rest: Object.assign({},list) }
}


module.exports = {
    listToArrays,
    arrayToList,
    getNthListNonRecursive,
    nthListRecursive,
    prepend
}
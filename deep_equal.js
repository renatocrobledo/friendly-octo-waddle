
function deepEqual(a,b){

    const type_a = typeof(a)
    const type_b = typeof(b)

    const paramsAreNotObjects = type_a !== 'object' && type_b !== 'object';

    if (paramsAreNotObjects || a === null || b === null) {
        return a === b;
    }

    if (type_a !== type_b) return false
    
    return JSON.stringify(a) === JSON.stringify(b)

}

module.exports = deepEqual;
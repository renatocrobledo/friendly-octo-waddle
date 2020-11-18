
/*
We want to write a program that prints two numbers: the numbers of cows
and chickens on a farm, with the words Cows and Chickens after them and zeros
padded before both numbers so that they are always three digits long.

007 Cows
011 Chickens

*/
function zeroPad(dictionary){
    let values = {};
    Object.assign(values, dictionary);

    const addZeroes = (value) => {
        let _value = String(value);
        while (_value.length < 3){
            _value = `0${_value}`;
        }
        return _value;
    }
    
    Object.keys(values).forEach((value)=>{
        values[value] = addZeroes(values[value])
    });

    return values;
}


const result = fillValuesWithLeftZeroes({
    'Chicken': 7,
    'Cows': 19
});


console.log(result);
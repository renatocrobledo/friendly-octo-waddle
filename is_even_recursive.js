function isEven(n){
    if (n == 1 || n < 0) return false;
    else if (n == 2) return true;
    return isEven(n-2)
}

console.log(isEven(50)) // ture
console.log(isEven(75)) // false 
console.log(isEven(-1)) // false
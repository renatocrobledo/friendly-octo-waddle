function repeat(n, func){
    for (let c = 0; c < n; c++){
        func(c);
    }
}

function unless(test, then){
    if (!test) then();
}


repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
});
// → 0 is even
// → 2 is even
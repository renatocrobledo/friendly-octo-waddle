
// will receive n and return control 
function* powers(n){
    let current = n;
    while(true){
      yield current
      current *= n;
    }
}


for (const power of powers(2)){ // continues extracting powers of two infinitely
    if(power>39) break; // breaks the loop
    console.log(power)
}


let p = powers()
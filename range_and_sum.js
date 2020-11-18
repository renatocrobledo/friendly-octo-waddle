function range(start, end, step=1){
    const result = []
    
    if (step>0) {
        for (let n=start; n<=end; n+=step){
            result.push(n)
        }
    } else {
        for (let n=start; n>=end; n+=step){
            result.push(n)
        }
    }
    return result
}

function sum(numbers){
    return numbers.reduce((acc,n)=>{
        return acc + n 
    },0)
}


module.exports = {
    sum,
    range
}
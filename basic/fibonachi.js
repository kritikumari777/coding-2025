// 0 1 1 2 3 5 7 
// Time complicity - 
// Time Complexity - o(n) - recursion stack + memo object

// effective way to use meno so that no need to calculate repated value
const fibonacchi = (n, memo={}) => {
    if(n in memo) return memo[n]
   if(n === 0) return 0
   if(n === 1) return 1
   else{
       memo[n] =  fibonacchi(n-1, memo) + fibonacchi(n-2, memo)
   }
   return memo[n]
}


let n =10
for(let i=0; i<n; i++){
    console.log(fibonacchi(i))
}

// effect version  
// Time Complicity o(n) , 
// Time Complexity - only 2 variables (a and b) are kept
console.log("----------------------------------------------------")

const fibo = (n) =>{
    if(n===0) return 0
    if(n===1) return 1
    let a=0
    let b=1
    for(let i=2; i<=n; i++){
        let c = a+b
        a=b
        b=c
    }
    return b
}

let num = 10
for(let i=0; i<num; i++){
    console.log(fibo(i))
}
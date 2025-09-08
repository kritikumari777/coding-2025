// 2, 3, 5, 7
// Time Complicity - o(n squrt(n))
const prime = (n) => {
    if(n <2) return 
    for(let i=2 ; i<= Math.sqrt(n); i++){
        if(n%i ===0){
           return false
        }  
    }
    return  true
}
let n=10
for(let i=2; i<=n ; i++){
 if(prime(i)){
    console.log(i)
 }
}
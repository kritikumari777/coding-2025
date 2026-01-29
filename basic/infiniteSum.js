
function sum(a){ 
    return function sum(b){
        return function sum(c){
            return a+b+c
        }
    }
}

console.log(sum(30)(20)(60))
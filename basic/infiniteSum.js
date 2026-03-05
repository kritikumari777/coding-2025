function sum (a){
   return (b) =>{
    return (c) =>{
      return a+b+c
    }
   }
}

console.log(sum(30)(20)(60))
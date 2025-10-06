const arr = [2, 4, 5, 5, 5, 3 ,7 ,4, 6, 7,1]

const find2Large = (arr) => {
    let FLarge = - Infinity
    let SLarge = - Infinity

    for(let num of arr){
        if(num > FLarge){
            SLarge = FLarge
            FLarge = num
        }else if(num > SLarge && num < FLarge){
            SLarge = num
        }
    }
    return SLarge
}

console.log(find2Large(arr))
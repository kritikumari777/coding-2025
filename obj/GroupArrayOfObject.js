const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" }
];

// {
//   admin: [
//     { name: "Alice", role: "admin" },
//     { name: "Charlie", role: "admin" }
//   ],
//   user: [
//     { name: "Bob", role: "user" }
//   ]
// }

const groupArrOfObj = (obj1) => {
    let res = {}

    for(let key of obj1){
        if(!res[key.role]){
            res[key.role] = []
        }
        res[key.role].push(key)
        
    }

    return res

}

console.log(groupArrOfObj(users))

const ans = users.reduce((ac, cv) =>{
   let key = cv.role
    if(!ac[key]){
        ac[key] = []
    }
    ac[key].push(cv)
   return ac
}, {})

console.log(ans)
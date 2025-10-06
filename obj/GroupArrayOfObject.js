const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" }
];

const groupArrOfObj = (obj1) => {
    let res = {}

    for(let key of obj1){
        if(!res[key.role]){
            res[key.role] = []
        }
        res[key.role].push(key.name)
        
    }

    return res

}

console.log(groupArrOfObj(users))

//or
 const groupAsKey = users.reduce((ac, cv) => {
      ac[cv.role] = ac[cv.role] || []
      ac[cv.role].push(cv.name)
      return ac
 },{})

 console.log(groupAsKey)
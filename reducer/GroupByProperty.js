const items = [
  { name: "Apple", type: "fruit" },
  { name: "Carrot", type: "vegetable" },
  { name: "Banana", type: "fruit" },
  { name: "Spinach", type: "vegetable" },
  { name: "Orange", type: "fruit" }
];

// {
//   fruit: [
//     { name: "Apple", type: "fruit" },
//     { name: "Banana", type: "fruit" },
//     { name: "Orange", type: "fruit" }
//   ],
//   vegetable: [
//     { name: "Carrot", type: "vegetable" },
//     { name: "Spinach", type: "vegetable" }
//   ]
// }


const ans = items.reduce((acc, cv) => {
  var key = cv.type

  if(!acc[key]){
    acc[key] = []
  }
  acc[key].push(cv)  
  return acc
  
}, {})

console.log(ans)
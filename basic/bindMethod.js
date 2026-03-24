const obj = {
    a: 1,
    b: 2,

    sum() {
     return this.a + this.b
    }
}

const res = obj.sum
console.log(res())

//solution bu call
const resCall = obj.sum.call(obj)
console.log(resCall)

//solution we need to bind
const bindFun = obj.sum.bind(obj)
console.log(bindFun())
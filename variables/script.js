var a = 5; // global scope
var b = 6;

{
    let a = 7 // block scope
    console.log("the val of a is: " + a)
}
console.log("(Outside )the val of a is: " + a)

const c = 7
// c = c + 1 not allowed 
console.log(c)


console.log(a + b)
console.log(typeof(a))
console.log(typeof (b))
{
    // Seven primitive types
    let x = "Aaditya"
    let y = 45
    let z = 3.14
    let b = true
    let f = undefined
    let r = null

    console.log(typeof (x), typeof (y), typeof (z), typeof (b), typeof (f), typeof (r)) //type of null is  " object "
}

{
    let obj = {
        'name': "aaditya",
        'age': 19
    }
    console.log(obj) // like a dictionary in python
    obj.salary = 90 //appending in javascript
    console.log(obj) 
}

{
    console.log("Aaditya" + " Shah")
    console.log("Aaditya","Shah")

}
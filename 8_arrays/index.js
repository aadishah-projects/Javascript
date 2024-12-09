let arr = [1, 2, 3, 4]

console.log(arr[0])
arr[0] = "Aditya"
console.log(arr)
console.log(arr, typeof arr)
console.log(arr.length)

console.log(arr.toString())
console.log(arr.join(" and "))

arr.push("Reyna")
console.log(arr)

arr.pop()
console.log(arr)

arr.shift()
console.log(arr)

arr.unshift("Aditya")
console.log(arr)
delete arr[2]
console.log(arr)

let arr1 = [1, 2, 3]
let arr2 = [4,5 ,6 ]
let arr3 = [7,8 ,9 ]

arr1.concat(arr2, arr3)
console.log(arr1)

let arr4 = [3, 1, 5, 6, 23, 6, 3, 23]
// arr4.sort()
// console.log(arr4.sort())

arr4.splice(0,4)
console.log(arr4)

let numbers = [ 1,2,3,4,5,6,7,8,9,10]

for (let index = 0; index < numbers.length; index++)
{
    console.log(index, numbers[index])
}

// For each loop

numbers.forEach((value, index , arr)=>
{
    console.log(value,index, arr)
})



const random = [2, 4, 345, 12]

const  new_array = random.map((value,index,random) => 
{
    return value * 2
})
console.log(new_array)
// const random = [2, 4, 345, 12];

// const doubled = random.map((value, index, random) => {
//     return value * 2;
// });

// console.log(doubled); // Output: [4, 8, 690, 24]
// console.log(random);  // Output: [2, 4, 345, 12]

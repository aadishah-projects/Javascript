console.log(" I am on loops")
// for loops
{
    let a = 1
    for (let i = 10; i >= 1; i--)
    {
        console.log(i)
    }
}
//for in and forof loops 
{
    let obj = {
        'name': "Aditya",
        "age": 21,
        "gender": 'male'
    }
    for (const key in obj) {
        const element = obj[key]
        console.log(key,element)
    }
    //for of loops
    for (const element of "Aadi") {
        console.log(element)
    }
}

//while loops
{
    let i = 1
    while (i <= 6)
    {
        console.log(i)
        i++
    }
     i = 1
    do {
        console.log(i)
        i++
    }while(i<=6)
}
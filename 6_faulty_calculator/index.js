/* 

+ --> -
- --> *
* --> +
/ --> **

only 10% of the time

*/

first_num = prompt("Enter first number: ")
second_num = prompt("Enter second number: ")
action = prompt("Enter the operation to perform: ")


a = Math.random()

function sum(first_num, second_num)
{
    return first_num + second_num
}

function substract(first_num, second_num)
{
    return first_num - second_num
}

function multiply(first_num, second_num)
{
    return first_num * second_num
}

function divide(first_num, second_num)
{
    return first_num / second_num
}

if (a < 0.1)
{
    if (action == "+")
    {
       console.log(first_num , action , second_num , "= ",sum(first_num, second_num) )  
    }
    else if (action == "-")
    {
        console.log(first_num , action , second_num , "= ",substract(first_num, second_num) )  
    }
    else if (action == "*")
    {
       console.log(first_num , action , second_num , "= ",multiply(first_num, second_num) )  
    }
    else if (action == "/")
    {
        console.log(first_num , action , second_num , "= ",divide(first_num, second_num))  
    }
    else
    {
        console.log("error")
        }
}
else
{
    if (action == "+")
    {
        console.log(first_num , action , second_num , "= ",substract(first_num, second_num) ) 
            
        }
        else if (action == "-")
        {
            console.log(first_num , action , second_num , "= ",multiply(first_num, second_num) )   
        }
        else if (action == "*")
        {
            console.log(first_num , action , second_num , "= ",sum(first_num, second_num) )
        }
        else if (action == "/")
        {
            console.log(first_num , action , second_num , "= ", first_num**second_num)
    }
    else
    {
        console.log("error")
        }
}

console.log("Nothing")

{
    let temp = document.getElementsByClassName("box")
    temp[2].style.backgroundColor = "black"
}
{
    let temp = document.getElementById("redbox")
    console.log(temp)
    temp.style.backgroundColor = "red"
}

document.querySelector(".box").style.backgroundColor = "green"

document.querySelectorAll(".box")[2].style.backgroundColor = "orange" // its a array

// document.querySelectorAll(".box").forEach(e => {
//     e.style.backgroundColor = "orange"
// })
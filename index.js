let buttons = document.querySelectorAll(".button")
let span = document.getElementById("span")

let string = "0"
Array.from(buttons).forEach((each) => {
    each.addEventListener('click', (e) => {
        if (e.target.innerHTML === "=") {
            string = eval(string)
            document.querySelector("input").value = string
        }
        else if (e.target.innerHTML === "c") {
            string = ''
            document.querySelector("input").value = string
        }
        else if (e.target.innerHTML === "X"){
            string = string.substring(0,string.length-1)
            document.querySelector("input").value = string
        }
        else {


            console.log(e.target.innerHTML)
            string += e.target.innerHTML
            document.querySelector("input").value = string
        }
    })
})
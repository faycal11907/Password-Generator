let btn1 = document.getElementById("btn-1")
let p = document.getElementById("password")
let inp = document.getElementById("number")
let btn2 = document.getElementById("btn-2")
let code = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

btn1.addEventListener("click", () => {
    let password = ""
    for (let index = 0; index < inp.value; index++) {
        let i = Math.floor(Math.random() * code.length)
        password += code[i]
    }
    inp.value = ""
    p.innerHTML = password
    if (typeof inp.value === "string") {
        inp.value = "" 
    }
})

btn2.addEventListener("click", ()=>{
    p.innerHTML = ""
    inp.value = ""
})
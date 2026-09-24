let arr = ["hieee", 'hellloo', 'idjib', 'yesssssssssss', 'ysubeuvsunv', 'suivnnisbaff']
let colors = ['lightseagreen ', 'lightcoral' , 'white']
let b = document.querySelector("body")
count =  0
b.addEventListener("click", () => {
    let h1 = document.createElement("h1")
    h1.textContent = arr[Math.floor(Math.random() * arr.length)];
    let x = Math.floor(Math.random()* 80)
    let y = Math.floor(Math.random() * 80)
    h1.style.position = "absolute"
    h1.style.left = `${x}%`
    h1.style.top = `${y}%`
    let r = Math.floor(Math.random() * 361)
    let sc = Math.random() * 3
    h1.style.setProperty("--rotation", `${r}deg`)
    h1.style.setProperty("--scale", sc)
    count++
    if (count % 2 === 1) {
        h1.style.fontFamily = 'Aref Ruqaa Ink'
    } else {
        h1.style.fontFamily = 'Festive'

    }
    let clr = colors[Math.floor(Math.random() * colors.length)]
    h1.style.color = `${clr}`
    b.appendChild(h1)
})

const socket = io("http://localhost:7777")
const form = document.getElementById("form")
const input = document.getElementById("input_token")
const submit = document.getElementById("submit")
const database = document.getElementById("database")
const data = document.getElementById("data")
const dataBlock = document.getElementById("dataBlock")
const ul = document.getElementById("ul")
const text = document.getElementById("text")

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const inputValue = input.value

    if (inputValue === "") {
        text.style = "color:red;"
        return 
    }

    socket.emit("token", inputValue)
    data.style = "width:100%; height:100vh; background-color: white; position:fixed; z-index:5; display:flex; align-items:center;  justify-content: center;"
    
    
    socket.on("tokenData", (data)=>{
        dataBlock.style = "background-color: black; color:white; font-size:15px;"
        const li = document.createElement("li")
        li.innerHTML = JSON.stringify({
            token : data.token,
            time : data.yasalganVaqt
        })
        ul.appendChild(li)
    })
})


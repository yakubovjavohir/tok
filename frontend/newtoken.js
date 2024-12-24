const socket = io("http://localhost:7777")
const form = document.getElementById("form")
const input = document.getElementById("key_input")
const submit = document.getElementById("submit")
const tokenId = document.getElementById("tokenId")


form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const inputValue = input.value
    socket.emit("key", inputValue)
    input.value = ""
})

socket.on("token_id", (data)=>{
    tokenId.style = "color:black; font-size:20px;"
    tokenId.innerHTML = data
})

socket.on("key_not", (data)=>{
    tokenId.style = "color:red; font-size:35px;"
    tokenId.innerHTML = data.message
})
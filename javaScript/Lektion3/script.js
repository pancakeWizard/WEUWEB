document.addEventListener("DOMContentLoaded", function(){
    let toRed = document.getElementById("toRed")
    toRed.addEventListener("mousedown", myFunction)
    console.log(toRed)
    let message = document.getElementById("varning")
    message.addEventListener("mouseover", varMess)
    
})

function myFunction(){
    toRed.style.color = "red"
}

function varMess(){
    alert("VARNING!")
}


document.addEventListener("DOMContentLoaded", function(){
    let toRed = document.getElementById("toRed")
    toRed.addEventListener("mousedown", myFunction)
    console.log(toRed)
    let message = document.getElementById("varning")
    message.addEventListener("mouseover", varMess)

    let textBtn = document.getElementById("textChanger")
    textBtn.addEventListener("mousedown", changeText)

    let redBlock = document.getElementById("red")
    let greenBlock = document.getElementById("green")
    let blueBlock = document.getElementById("blue")
    redBlock.addEventListener("mousedown", paintRed)
    greenBlock.addEventListener("mousedown", paintGreen)
    blueBlock.addEventListener("mousedown", paintBlue)

    let lamp = document.getElementById("isLamp")
    lamp.addEventListener("mousedown",lampController)

    let plus = document.getElementById("plus")
    let minus = document.getElementById("minus")
    a = 0
    plus.addEventListener("mousedown", addition)
    minus.addEventListener("mousedown", substraction)

    function addition(){
        a ++
        alert(a)
    }
    function substraction(){
        a--
        alert(a)
    }
})

function myFunction(){
    toRed.style.color = "red"
}

function varMess(){
    alert("VARNING!")
}

function changeText(){
    let textToChange = document.getElementById("content")
    let contentBefore = "Text in the paragraph tag."
    let contentAfter = "You changed text in the paragraph."

    if (textToChange.innerHTML == contentBefore){
        textToChange.innerHTML = contentAfter
        
    }else{
           textToChange.innerHTML = contentBefore 
        }
}

function paintRed(){
    document.getElementById("myColor").style.color = "red"
}
function paintGreen(){
    document.getElementById("myColor").style.color = "green"
}
function paintBlue(){
    document.getElementById("myColor").style.color = "blue"
}


function lampController(){
    let myLamp = document.getElementById("lamp")
    let sourceZero = "lampaZero.jpg"
    if(myLamp.getAttribute('src') == sourceZero){
        myLamp.src = "lampaOne.jpg"
    } 
    else{
        myLamp.src = "lampaZero.jpg"
    }


}


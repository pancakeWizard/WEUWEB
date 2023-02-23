// för att koden ska köras när själva websidan är redan loaded använder jag eventlistener DOMContentLoaded och kör koden inuti funktionen som körs då
document.addEventListener("DOMContentLoaded", function(){
    //här skapar jag variabler där jag sätter alla element från html dokument som ska ha eventlisteners vilket behövs för att kontrollera 
    //mus klick.
    let changeBgBtn = document.getElementById("changeBg")
    let changeBgBtnNew = document.getElementById("changeBgNew")
    let boxes = document.getElementsByClassName("block")

    //och här adderar jag själva eventlisteners till tidigare hämtat element. Den andra argument är namn på funktionen som ska köras
    changeBgBtn.addEventListener("mousedown", toBlue)
    changeBgBtnNew.addEventListener("mousedown", toBlueNew)
    for(i = 0; i < boxes.length; i++){
        boxes[i].addEventListener("mouseover", blockFocus)
    }
})


//funktionen som ändrar sidans backgrundfärg till blå genom att ändra style för body element
function toBlue(){
        document.getElementsByTagName("body")[0].style.backgroundColor = "#bde0fe"
}

//funktionen som kontrollerar om backgrundsfärg är blå eller inte. Om den är blå då ändras den till vit och tvärtom. 
//färgen kontrolleras med hjälp av if sats. 
function toBlueNew(){
    if(document.getElementsByTagName("body")[0].style.backgroundColor == "rgb(189, 224, 254)"){
        document.getElementsByTagName("body")[0].style.backgroundColor = "white"
    } else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(189, 224, 254)"
    }
    
}

// function blockFocus()){
//     for(i = 0; i < boxes.length; i++){
//     //     if()
//     // }
// }
// för att koden ska köras när själva websidan är redan loaded använder jag eventlistener DOMContentLoaded och kör koden inuti funktionen som körs då
document.addEventListener("DOMContentLoaded", function(){
    //här skapar jag variabler där jag sätter alla element från html dokument som ska ha eventlisteners vilket behövs för att kontrollera 
    //mus klick.
    let changeBgBtn = document.getElementById("changeBg")
    let changeBgBtnNew = document.getElementById("changeBgNew")
    let box1 = document.getElementById("block1")
    let box2 = document.getElementById("block2")
    let box3 = document.getElementById("block3")
    //och här adderar jag själva eventlisteners till tidigare hämtat element. Den andra argument är namn på funktionen som ska köras
    changeBgBtn.addEventListener("mousedown", toBlue)
    changeBgBtnNew.addEventListener("mousedown", toBlueNew)

    //här skarpar jag eventlistener för mina divs för att kunna ändra deras storlek. Jag försökte också att välja
    //divs med hjälp av deras className och lägga till eventListener till de genom for loop, men problemet
    //är att det går inte att skicka elementet där trigger upptäcks till funktionen för att ändra css på just den elementet.
    //Det är möjlight att det finns andra metoder att lösa problemet, men... det var min lösnig.
    box1.addEventListener("mouseover",focus1)
    box1.addEventListener("mouseout",focus1Back)
    box2.addEventListener("mouseover",focus2)
    box2.addEventListener("mouseout", focus2Back)
    box3.addEventListener("mouseover",focus3)
    box3.addEventListener("mouseout", focus3Back)

    box1.addEventListener("mousedown",changeDiv1)
    box2.addEventListener("mousedown",changeDiv2)
    box3.addEventListener("mousedown",changeDiv3)
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


//och här är själva funktioner för att ändra storlek och återställa den när musen är inte längre i elementet. Det görs inte automatiskt och
//därför tidigare skapat eventListeners mouseout
function focus1(){
    document.getElementById("block1").style.transform = "scale(1.2)"
}
function focus1Back(){
    document.getElementById("block1").style.transform = "scale(1)"
    document.getElementById("block1").style.backgroundColor = "#cdb4db"
}
function focus2(){
    document.getElementById("block2").style.transform = "scale(1.2)"
}
function focus2Back(){
    document.getElementById("block2").style.transform = "scale(1)"
    document.getElementById("block2").style.backgroundColor = "#cdb4db"
}
function focus3(){
    document.getElementById("block3").style.transform = "scale(1.2)"
}
function focus3Back(){
    document.getElementById("block3").style.transform = "scale(1)"
    document.getElementById("block3").style.backgroundColor = "#cdb4db"
}


function changeDiv1(){
    document.getElementById("block1").style.backgroundColor = "#fff"
}
function changeDiv2(){
    document.getElementById("block2").style.backgroundColor = "#fff"
}
function changeDiv3(){
    document.getElementById("block3").style.backgroundColor = "#fff"
}

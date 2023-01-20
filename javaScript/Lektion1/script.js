let headerOne = document.getElementsByTagName("h1");
let headerTwo = document.getElementsByTagName("h2");
let block = document.getElementById("myId");
let barn = document.getElementById("barn");

let newElement = document.createElement("p");

for(i=0; i < headerOne.length; i++){
    headerOne[i].innerHTML = "New text in h1";
}

block.appendChild(newElement);
newElement.innerHTML =  "New element";

headerTwo[0].remove();
block.removeChild(barn);

console.log("Done!");
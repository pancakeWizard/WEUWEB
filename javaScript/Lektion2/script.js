let el = document.getElementsByTagName("p")
let img = document.getElementById("img")
for(i = 0; i < el.length; i++){
    el[i].innerHTML = "New blue 24px text in paragraph"
    el[i].style.fontSize = "24px"
    el[i].style.color = "blue"
}

img.src = "https://media.discordapp.net/attachments/1025309462698921984/1025309513621983242/Zombie_to_left.png?width=398&height=592"


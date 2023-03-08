document.addEventListener("DOMContentLoaded", function(){
    //--- DELEN MED VARIABLER ---

    // här skapas det variabel för knappen. Dettta görs med hjälp av querySelector eftersom denna metod ger möjlighet
    // att enklare jobba vidare i kod med classer.
    let blue = document.querySelector('.blue')
    console.log(blue)
    //variabbel som tar alla bilder på hemsidan
    let images = document.querySelectorAll('img')
    //variabel som tar text elementer för att lägga till eventlistener och ändra css i uppgift 6
    let seeMore = document.querySelector('#seeMore')

    //knappar som ska ha eventListeners eller ändras enligt uppgift 7:
    //jag skapar en lista för att senare i funktionen enklare komma åt element som jag 
    //vill ändra beroende på deras index, eftersom alla länkar i array
    // links kommer att ha samma index
    let tabs = [document.querySelector('#home'), 
    document.querySelector('#profile'),
    document.querySelector('#messages'),
    document.querySelector('#settings')
    ]
    let links = document.querySelectorAll('a')



    //--- EVENT LISTENERS OCH FUNKTIONER ÄR HÄR ---
    // koden nere skapar en eventListener för knappen och tar två argument: den första är 
    // vilken typ av händelse ska programmet titta på och den andra är funktion som ska köras.
    // Jag skriver den som öppen funktion, eftersom det kommer inte att behovas senare i koden alltså 
    // det finns ingen anledning att skapa en ny separat funktion och sedan anropa den. 
    //If satsen kontrollerar vilken backgrundsförg har body. Om den är blå då kommer klick att ändra
    //till standard och om det inte är blå då kommer det att ändras till blå.
    blue.addEventListener('click', function(){
        if (document.querySelector('body').style.backgroundColor != 'blue'){
            document.querySelector('body').style.backgroundColor = "blue"
        } else {
            document.querySelector('body').style.backgroundColor = ''
        }
    })

    //för att skapa eventlistener för alla img element kan man välja värje element med hjälp av images[index], men
    // för att göra koden bättre använder jag foreach vilket förenklar processen. I forEach ger jag ett namn till
    //värje element (img) och gör det som beskrivs i klammerparanteser efter =>. Det kommer att ge mig också
    // en möjlighet att enklare skapa fler eventListeners. Jag adderar två listeners för fråga 4. En för att
    //göra bilden större och en annan för att återställa storlek när muspekare lämnar bilden. Och en listener till
    //till fråga 5
    images.forEach(img => {
        img.addEventListener('mouseover', function(){
            img.style.transform = "scale(1.3)"
        })
        img.addEventListener('mouseout', function(){
            img.style.transform = "scale(1)"
        })
        img.addEventListener('click', function(){
            img.src = "img/fourth.jpg"
        })
    })

    //för uppgift 6 behöver jag bara lägga till eventlistener till "see more" och sedan ändra display property
    //för andra delen av texten
    seeMore.addEventListener('click', function(){
        document.querySelector('#more').style.display = "inline"
    })

    //på samma sätt som förut använder jag foreach för att lägga till 
    //eventlistener till alla element i en array. Men nu kommer jag
    //att anv'nda funktionen som jag skriver senare för att kunna skicka
    //en element som jag tryckt på i form av argument och sedan bearbeta den infromationen
    links.forEach(link => {
        link.addEventListener('click', () => changeTab(link,links,tabs))
    })

    //funktionen med logiken för uppgift 7
    //jag behöver 3 argument för att funka:
    //vilken element hade man tryckt på, en lista med alla element,
    //och vad är det som ska ändras.
    //Först så loopar jag igenom alla tabs och tar bort class active för
    //att de se ut som inaktiva. Jag jamförar också värje element med den
    //som anropade funktionen och om det är just denna element så börjar jag
    //loopa igenom content i alla tabs för att dölja den. Efter det visar jag
    //content med samma index som tab som anropade funktionen och enfter det
    //ändrar också knappens utseende genom att lägga till class active.

    function changeTab(tab, original, content){
        for(i = 0; i < original.length; i++){
            original[i].classList.remove('active')
            if(original[i] == tab){
                for(c = 0; c < content.length; c++){
                    content[c].style.display = 'none'
                }
                content[i].style.display = "block"
            }
            tab.classList.add('active')
        }
    }
})

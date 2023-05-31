document.addEventListener("DOMContentLoaded",function(){
    let navBtn = document.querySelector('.navBtn')
    let miniMenu = document.querySelector('.miniBtns')
    let menuCard = document.querySelectorAll('.menuCard')
    let reviewLike = document.querySelectorAll('.reviewLike')
    let timeCard = document.querySelectorAll('.timeCard')
    menuCard.forEach(card => {
        card.addEventListener('click', () =>{
            card.childNodes[1].classList.toggle('cardHide')
            card.childNodes[7].classList.toggle('cardShow')
            card.childNodes[3].classList.toggle('cardPriceFix')
            // console.log(card.childNodes)
        })
    });
    reviewLike.forEach(btn => {
        btn.addEventListener('click', () => {
            // console.log(btn.childNodes)
            if(btn.childNodes[1].alt == 'like'){
                btn.childNodes[1].src = 'img/Vector.svg'
                btn.childNodes[1].alt = 'liked'
                btn.childNodes[3].innerHTML = Number(btn.childNodes[3].innerHTML) + 1
            }else{
                btn.childNodes[1].src = 'img/thumb_up.svg'
                btn.childNodes[1].alt = 'like'
                btn.childNodes[3].innerHTML = Number(btn.childNodes[3].innerHTML) - 1
            }
        })
    })
    timeCard.forEach(card =>{
        card.addEventListener('click', () =>{
            console.log(card.childNodes)
            card.childNodes[1].classList.toggle('timeCardFrot')
            card.childNodes[3].classList.toggle('timeCardBack')
        })
    })
    navBtn.addEventListener('click', function(event){
        event.preventDefault();
        navBtn.classList.toggle("navBtnActive")
        miniMenu.classList.toggle("miniBtnsActive")
    })

})

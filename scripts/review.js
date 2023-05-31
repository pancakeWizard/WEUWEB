document.addEventListener('DOMContentLoaded', function(){
    let btns = document.querySelectorAll(".reviewCardButton")
    let reactView = document.querySelectorAll(".reviewCardReact")
    btns.forEach(btn => {
        btn.addEventListener("click", function(){
            let img = btn.childNodes[1]
            let text = btn.childNodes[3]
            let count = Number(text.innerHTML)
            if(img.alt == "like"){
            img.src = 'img/Vector.svg'
            text.innerHTML = count + 1
            img.alt = "liked"
        } else {
            img.src = 'img/thumb_up.svg'
            text.innerHTML = count - 1
            img.alt = "like"
        }
        })
    })
    reactView.forEach(react => {
        react.childNodes[1].addEventListener("click", () => {
            let counter = react.childNodes[5]
            let relative = react.childNodes[3]
            if(react.childNodes[1].alt == "dislike" && relative.alt == "like"){
                    react.childNodes[1].src = "img/thumb_down_red_review.svg"
                    react.childNodes[1].alt = "disliked"
                    counter.innerHTML = Number(counter.innerHTML) - 1
            }else if(react.childNodes[1].alt == "dislike" && relative.alt == "liked"){
                    relative.src = "img/thumbs_up_combo.svg"
                    relative.alt = "like"
                    react.childNodes[1].src = "img/thumb_down_red_review.svg"
                    react.childNodes[1].alt = "disliked"
                    counter.innerHTML = Number(counter.innerHTML) - 2
            }else{
                react.childNodes[1].src = "img/thumbs_down_combo.svg"
                react.childNodes[1].alt = "dislike"
                counter.innerHTML = Number(counter.innerHTML) + 1
            }
        })
        react.childNodes[3].addEventListener("click", () => {
            let counter = react.childNodes[5]
            let relative = react.childNodes[1]
            if(react.childNodes[3].alt == "like" && relative.alt == "dislike"){
                react.childNodes[3].src = "img/thumb_up_red_review.svg"
                react.childNodes[3].alt = "liked"
                counter.innerHTML = Number(counter.innerHTML) + 1
            }else if(react.childNodes[3].alt == "like" && relative.alt == "disliked"){
                relative.src = "img/thumbs_down_combo.svg"
                relative.alt = "dislike"
                react.childNodes[3].src = "img/thumb_up_red_review.svg"
                react.childNodes[3].alt = "liked"
                counter.innerHTML = Number(counter.innerHTML) + 2
            }else{
                react.childNodes[3].src = "img/thumbs_up_combo.svg"
                react.childNodes[3].alt = "like"
                counter.innerHTML = Number(counter.innerHTML) - 1
            }
        })
    })  
})
    
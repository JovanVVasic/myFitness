window.addEventListener('scroll', function(){
    let header = this.document.querySelector("header");
    let windowPosition = window.scrollY > 0;

    header.classList.toggle('scrolling-active', windowPosition);
})

let begin = document.querySelector("#begin");
let promise = document.querySelector("#promise");
let strong = document.querySelector("#strong");
let packages = document.querySelector("#packages");
let container = document.querySelector("#conainer");

const section = [begin,promise,strong,packages,container];
const navLi = document.querySelectorAll('header nav ul li');

window.addEventListener('scroll', ()=>{
    let current='';

    section.forEach(section => {
        const secTop = section.offsetTop;
        const secHeight = section.clientHeight;
        if (pageYOffset >= secTop - secHeight / 3 ){
            current=section.getAttribute('id');
            
        }

        navLi.forEach(li =>{
            li.classList.remove("active");
            if (li.classList.contains(current)){
                li.classList.add("active");
            }
        })

    })
})




let box = document.getElementsByClassName("shadow");

for (let i =0; i< box.length; i++){
    box[i].addEventListener("mouseover", ()=>{
        box[i].classList.add("b-shadow");
    })
    box[i].addEventListener("mouseout", ()=>{
        box[i].classList.remove("b-shadow");
    }
    )
}

$(document).ready(function(){
    $('.your-class').slick({
        autoplay: true,
        autoplaySpeed:2000,
        arrows: false
    });
  });










window.addEventListener('scroll', function () {
    let header = this.document.querySelector("header");
    let windowPosition = window.scrollY > 0;

    header.classList.toggle('scrolling-active', windowPosition);
})

let begin = document.querySelector("#begin");
let promise = document.querySelector("#promise");
let strong = document.querySelector("#strong");
let packages = document.querySelector("#packages");
let container = document.querySelector("#conainer");

const section = [begin, promise, strong, packages, container];
const navLi = document.querySelectorAll('header nav ul li');

let finish = false;

window.addEventListener('scroll', () => {
    let current = '';

    section.forEach(section => {
        const secTop = section.offsetTop;
        const secHeight = section.clientHeight;
        if (pageYOffset >= secTop - secHeight / 3) {
            current = section.getAttribute('id');

        }

        navLi.forEach(li => {
            li.classList.remove("active");
            if (li.classList.contains(current)) {
                li.classList.add("active");
            }
        })

    })

    $(function () {
        if (finish==false){
            $(".info-style-more").fadeOut(1000).fadeIn(2000);
            finish=true;
        }
        

    })

   
})




let box = document.getElementsByClassName("shadow");

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("mouseover", () => {
        box[i].classList.add("b-shadow");
    })
    box[i].addEventListener("mouseout", () => {
        box[i].classList.remove("b-shadow");
    }
    )
}

$(document).ready(function () {
    $('.your-class').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });
});






let nameSapmle = /^[A-ZČĆŠĐŽ][a-zčćšđž]{2,15}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,15})?(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,20})\s*$/;


var jumpThis = document.getElementById("open");
let openThis = false;
jumpThis.addEventListener("click", () => {


    if (!openThis) {

        openThis = true;

        let div = document.createElement("div");
        let div2 = document.createElement("div");
        div2.setAttribute("class", "clr-back")
        div2.setAttribute("id", "div-cont");

        let centerDiv = document.createElement("div");
        let title = document.createElement("h2");
        title.textContent = "Schedule the training";

        let from = document.createElement("form")
        from.setAttribute("method", "post");
        from.setAttribute("id", "meeting");

        let close = document.createElement("i")
        close.setAttribute("class", "fas fa-times pozX")





        let txtBox = document.createElement("input");
        txtBox.setAttribute("type", "text");
        txtBox.setAttribute("placeholder", "Full name:");
        txtBox.setAttribute("class", "form-control");
        txtBox.setAttribute("id", "txtBoxModal")

        let x1 = document.createElement("span");
        x1.setAttribute("class", "clr-word hide");
        x1.setAttribute("id", "d-name")
        x1.textContent = "Wrong name!"

        let x2 = document.createElement("span");
        x2.setAttribute("class", "clr-word hide");
        x2.textContent = "Choose the date!"

        let x3 = document.createElement("span");
        x3.setAttribute("class", "clr-word hide");
        x3.textContent = "Choose the time!"

        let x4 = document.createElement("p");
        x4.setAttribute("class", "hide text-form-sent")
        x4.innerHTML = "Training is scheduled!";

        let btn = document.createElement("button")
        btn.setAttribute("type", "button")
        btn.setAttribute("class", "btn-form")
        btn.setAttribute("value", "Send")
        btn.textContent = "Send"





        let mainDate = new Date();
        let year = mainDate.getFullYear();
        let month = mainDate.getMonth() + 1;
        let day = mainDate.getDate() + 1;
        let maxMonth = mainDate.getMonth() + 2;
        let maxYear = mainDate.getFullYear();

        if (month == 12) {
            maxYear++;
            maxMonth = "01";
        }
        if (month + 1 < 10)
            month = `0${month}`;
        if (month + 2 < 10)
            maxMonth = `0${month}`
        if (day < 10)
            day = `0${day}`;
        /* console.log(year + "-" + month + "-" + day)
        console.log(maxYear + "-" + maxMonth + "-" + day) */
        let combo1 = document.createElement("input");
        combo1.setAttribute("value", year + "-" + month + "-" + day)
        combo1.setAttribute("id", "scheduleTime");
        combo1.setAttribute("type", "date");
        combo1.setAttribute("class", "form-control")
        combo1.setAttribute("min", year + "-" + month + "-" + day);
        combo1.setAttribute("max", maxYear + "-" + maxMonth + "-" + day);





        let combo2 = document.createElement("select");
        combo2.setAttribute("id", "meeting-1");
        combo2.setAttribute("class", "form-control")
        let op = document.createElement("option");
        op.setAttribute("value", "Choose your time");
        op.innerHTML = "Choose your time";
        combo2.appendChild(op);




        let h = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
        let min = [0];

        for (let i = 0; i < h.length; i++) {
            let op1 = document.createElement("option");
            op1.setAttribute("value", `${h[i]}:${min[0]}`);
            op1.innerHTML = `${h[i]}:${min[0]}0`;
            combo2.appendChild(op1);
        }





        div.classList.add("style-this");
        div.classList.add("center-mid");
        centerDiv.classList.add("center-mid")
        div2.classList.add("style-div-2")




        div.appendChild(div2)
        div.appendChild(centerDiv);
        div.appendChild(close);
        centerDiv.appendChild(div2)
        div2.appendChild(title);
        div2.appendChild(from);
        from.appendChild(x1)
        from.appendChild(txtBox);
        from.appendChild(x2)
        from.appendChild(combo1);
        from.appendChild(x3)
        from.appendChild(combo2);
        from.appendChild(btn);
        from.appendChild(x4);
        /* from.appendChild(cBox); */
        document.body.appendChild(div);




        close.addEventListener("click", () => {
            div.classList.add("img-close");
            document.body.removeChild(div);
            openThis = false;
        })





        btn.addEventListener("click", () => {
            if (combo2.value == "Choose your time") {
                x3.classList.remove("hide");
            }
            if (combo2.value != "Choose your time") {
                x3.classList.add("hide");
            }
            let name = txtBox.value;
            name.replace(/\s\s+/g, ' ');
            if (!nameSapmle.test(name)) {
                let namePlace = document.getElementById('d-name');
                if (name == "" || !name.trim()) {
                    namePlace.innerHTML = "Write the name!";
                }
                else {
                    namePlace.innerHTML = "Wrong name entry!";
                }
                namePlace.classList.remove('hide');
            }
            if (nameSapmle.test(name)) {
                let namePlace = document.getElementById('d-name');
                namePlace.classList.add('hide');
            }
            if (isNaN(combo1.valueAsNumber)) {
                x2.classList.remove("hide")
            }
            if (!isNaN(combo1.valueAsNumber)) {
                x2.classList.add("hide");
            }

            if (combo2.value != "Choose your time" && nameSapmle.test(name) && !isNaN(combo1.valueAsNumber)) {
                x4.classList.remove("hide");
            }
            else {
                x4.classList.add("hide");
            }
        })
    }
});





var jumpThis1 = document.getElementById("open-1");
let openThis1 = false;
jumpThis1.addEventListener("click", () => {


    if (!openThis1) {

        openThis1 = true;

        let div = document.createElement("div");
        let div2 = document.createElement("div");
        div2.setAttribute("class", "clr-back")
        div2.setAttribute("id", "div-cont");

        let centerDiv = document.createElement("div");
        let title = document.createElement("h2");
        title.textContent = "Schedule the training";

        let from = document.createElement("form")
        from.setAttribute("method", "post");
        from.setAttribute("id", "meeting");

        let close = document.createElement("i")
        close.setAttribute("class", "fas fa-times pozX")





        let txtBox = document.createElement("input");
        txtBox.setAttribute("type", "text");
        txtBox.setAttribute("placeholder", "Full name:");
        txtBox.setAttribute("class", "form-control");
        txtBox.setAttribute("id", "txtBoxModal")

        let x1 = document.createElement("span");
        x1.setAttribute("class", "clr-word hide");
        x1.setAttribute("id", "d-name")
        x1.textContent = "Wrong name!"

        let x2 = document.createElement("span");
        x2.setAttribute("class", "clr-word hide");
        x2.textContent = "Choose the date!"

        let x3 = document.createElement("span");
        x3.setAttribute("class", "clr-word hide");
        x3.textContent = "Choose the time!"

        let x4 = document.createElement("p");
        x4.setAttribute("class", "hide text-form-sent")
        x4.innerHTML = "Training is scheduled!";

        let btn = document.createElement("button")
        btn.setAttribute("type", "button")
        btn.setAttribute("class", "btn-form")
        btn.setAttribute("value", "Send")
        btn.textContent = "Send"





        let mainDate = new Date();
        let year = mainDate.getFullYear();
        let month = mainDate.getMonth() + 1;
        let day = mainDate.getDate() + 1;
        let maxMonth = mainDate.getMonth() + 2;
        let maxYear = mainDate.getFullYear();

        if (month == 12) {
            maxYear++;
            maxMonth = "01";
        }
        if (month + 1 < 10)
            month = `0${month}`;
        if (month + 2 < 10)
            maxMonth = `0${month}`
        if (day < 10)
            day = `0${day}`;
        /* console.log(year + "-" + month + "-" + day)
        console.log(maxYear + "-" + maxMonth + "-" + day) */
        let combo1 = document.createElement("input");
        combo1.setAttribute("value", year + "-" + month + "-" + day)
        combo1.setAttribute("id", "scheduleTime");
        combo1.setAttribute("type", "date");
        combo1.setAttribute("class", "form-control")
        combo1.setAttribute("min", year + "-" + month + "-" + day);
        combo1.setAttribute("max", maxYear + "-" + maxMonth + "-" + day);





        let combo2 = document.createElement("select");
        combo2.setAttribute("id", "meeting-1");
        combo2.setAttribute("class", "form-control")
        let op = document.createElement("option");
        op.setAttribute("value", "Choose your time");
        op.innerHTML = "Choose your time";
        combo2.appendChild(op);




        let h = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
        let min = [0];

        for (let i = 0; i < h.length; i++) {
            let op1 = document.createElement("option");
            op1.setAttribute("value", `${h[i]}:${min[0]}`);
            op1.innerHTML = `${h[i]}:${min[0]}0`;
            combo2.appendChild(op1);
        }





        div.classList.add("style-this");
        div.classList.add("center-mid");
        centerDiv.classList.add("center-mid")
        div2.classList.add("style-div-2")




        div.appendChild(div2)
        div.appendChild(centerDiv);
        div.appendChild(close);
        centerDiv.appendChild(div2)
        div2.appendChild(title);
        div2.appendChild(from);
        from.appendChild(x1)
        from.appendChild(txtBox);
        from.appendChild(x2)
        from.appendChild(combo1);
        from.appendChild(x3)
        from.appendChild(combo2);
        from.appendChild(btn);
        from.appendChild(x4);
        /* from.appendChild(cBox); */
        document.body.appendChild(div);




        close.addEventListener("click", () => {
            div.classList.add("img-close");
            document.body.removeChild(div);
            openThis1 = false;
        })





        btn.addEventListener("click", () => {
            if (combo2.value == "Choose your time") {
                x3.classList.remove("hide");
            }
            if (combo2.value != "Choose your time") {
                x3.classList.add("hide");
            }
            let name = txtBox.value;
            name.replace(/\s\s+/g, ' ');
            if (!nameSapmle.test(name)) {
                let namePlace = document.getElementById('d-name');
                if (name == "" || !name.trim()) {
                    namePlace.innerHTML = "Write the name!";
                }
                else {
                    namePlace.innerHTML = "Wrong name entry!";
                }
                namePlace.classList.remove('hide');
            }
            if (nameSapmle.test(name)) {
                let namePlace = document.getElementById('d-name');
                namePlace.classList.add('hide');
            }
            if (isNaN(combo1.valueAsNumber)) {
                x2.classList.remove("hide")
            }
            if (!isNaN(combo1.valueAsNumber)) {
                x2.classList.add("hide");
            }

            if (combo2.value != "Choose your time" && nameSapmle.test(name) && !isNaN(combo1.valueAsNumber)) {
                x4.classList.remove("hide");
            }
            else {
                x4.classList.add("hide");
            }
        })
    }
});











const toTop = document.querySelector(".to-up");


function heightCheck() {
    if (window.scrollY > 800) {
        toTop.style.display = "flex";
    }
    else {
        toTop.style.display = "none";
    }
}

window.addEventListener('scroll', heightCheck)

toTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0
    })
})
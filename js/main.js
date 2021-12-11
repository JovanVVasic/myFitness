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






  let nameSapmle = /^[A-ZČĆŠĐŽ][a-zčćšđž]{2,15}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,15})?(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,20})\s*$/;


  var modal = document.getElementById("otvori");
  console.log(modal)
  let otvorenModal = false;
  modal.addEventListener("click", () => {
  
      //Pravljenje novih elemenata
      if (!otvorenModal) {
          otvorenModal = true;
          console.log("wew");
          let div = document.createElement("div");
          let div2 = document.createElement("div");
          div2.setAttribute("class", "pozadina-siva")
          div2.setAttribute("id", "divKontejner");
          let divCentar = document.createElement("div");
          let naslov = document.createElement("h2");
          naslov.textContent = "Zakazivanje termina";
          let forma = document.createElement("form")
          forma.setAttribute("method", "post");
          forma.setAttribute("id", "formaSastanak");
          let zatvori = document.createElement("i")
          zatvori.setAttribute("class", "fas fa-times pozX")
  
          let txtBox = document.createElement("input");
          txtBox.setAttribute("type", "text");
          txtBox.setAttribute("placeholder", "Ime i prezime:");
          txtBox.setAttribute("class", "form-control");
          txtBox.setAttribute("id", "txtBoxModal")
          let x1 = document.createElement("span");
          x1.setAttribute("class", "crvenaSlova levo sakrij");
          x1.setAttribute("id", "poljeImeD")
          x1.textContent = "Pogresno ste uneli ime!"
          let x2 = document.createElement("span");
          x2.setAttribute("class", "crvenaSlova levo sakrij");
          x2.textContent = "Niste izabrali datum!"
          let x3 = document.createElement("span");
          x3.setAttribute("class", "crvenaSlova levo sakrij");
          x3.textContent = "Niste izabrali vreme!"
          let x4 = document.createElement("p");
          x4.setAttribute("class", "sakrij poslataFormaText")
          x4.innerHTML = "Uspešno ste zakazali sastanak!";
          let dugme = document.createElement("button")
          dugme.setAttribute("type", "button")
          dugme.setAttribute("class", "dugmeForma")
          dugme.setAttribute("value", "Pošalji")
          dugme.textContent = "Posalji"
          let danasnjiDatum = new Date();
          let god = danasnjiDatum.getFullYear();
          let mesec = danasnjiDatum.getMonth() + 1;
          let dan = danasnjiDatum.getDate() + 1;
          let maxMesec = danasnjiDatum.getMonth() + 2;
          let maxGodine = danasnjiDatum.getFullYear();
  
          if (mesec == 12) {
              maxGodine++;
              maxMesec = "01";
          }
          if (mesec + 1 < 10)
              mesec = `0${mesec}`;
          if (mesec + 2 < 10)
              maxMesec = `0${mesec}`
          if (dan < 10)
              dan = `0${dan}`;
          console.log(god + "-" + mesec + "-" + dan)
          console.log(maxGodine + "-" + maxMesec + "-" + dan)
          let combo1 = document.createElement("input");
          combo1.setAttribute("value", god + "-" + mesec + "-" + dan)
          combo1.setAttribute("id", "terminVreme");
          combo1.setAttribute("type", "date");
          combo1.setAttribute("class", "form-control")
          combo1.setAttribute("min", god + "-" + mesec + "-" + dan);
          combo1.setAttribute("max", maxGodine + "-" + maxMesec + "-" + dan);
  
          let combo2 = document.createElement("select");
          combo2.setAttribute("id", "razlogSastanka");
          combo2.setAttribute("class", "form-control")
          let op = document.createElement("option");
          op.setAttribute("value", "Izaberite vreme");
          op.innerHTML = "Izaberite vreme";
          combo2.appendChild(op);
  
          let sati = [10, 11, 12, 13, 14];
          let minuti = [0, 30];
  
          for (let i = 0; i < sati.length; i++) {
              let op1 = document.createElement("option");
              op1.setAttribute("value", `${sati[i]}:${minuti[0]}`);
              op1.innerHTML = `${sati[i]}:${minuti[0]}0`;
              combo2.appendChild(op1);
              let op2 = document.createElement("option");
              op2.setAttribute("value", `${sati[i]}:${minuti[1]}`);
              op2.innerHTML = `${sati[i]}:${minuti[1]}`;
              combo2.appendChild(op2);
          }
  
          //Dodavanje clasa
          div.classList.add("stilModal");
          div.classList.add("centrirano");
          divCentar.classList.add("centrirano")
          div2.classList.add("stilDiv2")
  
          //Dodavanje elemenata na stranicu
          div.appendChild(div2)
          div.appendChild(divCentar);
          div.appendChild(zatvori);
          divCentar.appendChild(div2)
          div2.appendChild(naslov);
          div2.appendChild(forma);
          forma.appendChild(x1)
          forma.appendChild(txtBox);
          forma.appendChild(x2)
          forma.appendChild(combo1);
          forma.appendChild(x3)
          forma.appendChild(combo2);
          forma.appendChild(dugme);
          forma.appendChild(x4);
          /* forma.appendChild(cBox); */
          document.body.appendChild(div);
  
          //Zatvaranje modala
          zatvori.addEventListener("click", () => {
              console.log("lmao")
              div.classList.add("zatvoriSliku");
              document.body.removeChild(div);
              otvorenModal = false;
          })
  
          dugme.addEventListener("click", () => {
              if (combo2.value == "Izaberite vreme") {
                  x3.classList.remove("sakrij");
              }
              if (combo2.value != "Izaberite vreme") {
                  x3.classList.add("sakrij");
              }
              let ime = txtBox.value;
              ime.replace(/\s\s+/g, ' ');
              if (!nameSapmle.test(ime)) {
                  let poljeIme = document.getElementById('poljeImeD');
                  if (ime == "" || !ime.trim()) {
                      poljeIme.innerHTML = "Niste popunili Ime i prezime!";
                  }
                  else {
                      poljeIme.innerHTML = "Pogšan unos imena i prezimena!";
                  }
                  poljeIme.classList.remove('sakrij');
              }
              if (nameSapmle.test(ime)) {
                  let poljeIme = document.getElementById('poljeImeD');
                  poljeIme.classList.add('sakrij');
              }
              if (isNaN(combo1.valueAsNumber)) {
                  x2.classList.remove("sakrij")
              }
              if (!isNaN(combo1.valueAsNumber)) {
                  x2.classList.add("sakrij");
              }
  
              if (combo2.value != "Izaberite vreme" && nameSapmle.test(ime) && !isNaN(combo1.valueAsNumber)) {
                  x4.classList.remove("sakrij");
              }
              else {
                  x4.classList.add("sakrij");
              }
          })
      }
  });
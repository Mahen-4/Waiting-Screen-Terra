
// ----------------------------- SLIDER -------------------------------------------


//taking all slides and all btn
const slides = document.querySelectorAll('.slide')
const btns = document.querySelectorAll('.btn')

let currentSlide = 1;


//change background image when slider change 
const imageBackground = document.getElementById("imgBackground")
function changeBackground(currentImg){
  switch (currentImg) {
    case 0:
      imageBackground.style.background = 'url(./images/slider/univer.png)'
      break;
    case 1:
      imageBackground.style.background = 'url(./images/slider/explor.jpg)'
      break;
    case 2:
      imageBackground.style.background = 'url(./images/slider/geogra.jpg)'
      break;
    case 3:
      imageBackground.style.background = 'url(./images/slider/civili.jpg)'
      break;
    default:
      imageBackground.style.background = 'url(./images/slider/univer.png)'
      break;
  }
}

// manual navigation 

const manualNav = (manual) => {

  //remove all active class 
  slides.forEach((slide) => {
    slide.classList.remove('active')

    btns.forEach((btn)=>{
      btn.classList.remove('active')
    })
  })


  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

// for each button give onclick function
btns.forEach((btn,i)=>{
  btn.addEventListener('click', ()=>{
    manualNav(i);
    currentSlide = i;
    changeBackground(i)
  })
})


// auto navigation

const repeat = (activeClass)=>{
  let active = document.getElementsByClassName('active');
  let i = 1;

  const repeater = () => {
    setTimeout(()=>{

      //remove all active class
      [...active].forEach((activeSlide)=>{
        activeSlide.classList.remove('active')
      })


      slides[i].classList.add('active')
      btns[i].classList.add('active')

      changeBackground(i)
      i++

      if(slides.length == i){
        i = 0;
      }
      if(i >= slides.length){
        return;
      }
      repeater();
    }, 5000)
  }
  repeater();
}
repeat();


// ----------------------------- comité -------------------------------------------

const options = document.querySelectorAll('.option');

options.forEach((option) => {
  option.addEventListener('click', () => {  
    console.log("oka");
    options.forEach((option) => {
      option.classList.remove('active_option')
    })
    option.classList.add('active_option')
  })
})


// ----------------------------- objectifs  -------------------------------------------


const objectifs = document.querySelectorAll(".block");
const h1_objectif = document.querySelectorAll(".h1_objectif");
const img_objectif = document.getElementById("logoTerra_objectif");

function animate(animateThis, theAnimation){
  animateThis.forEach((animate) => {
    animate.style.animation = theAnimation;
  })
}


document.addEventListener("scroll", (e)=>{
  if(window.scrollY > 2100){
    animate(objectifs,"mainBlock 2s cubic-bezier(.74, .06, .4, .92) forwards");
    animate(h1_objectif, "mainFadeIn 2s forwards");
  }
})

// ----------------------------- slider comité  -------------------------------------------
function prev(){
  document.getElementsByClassName("card_container")[0].scrollLeft -= 350;
}
function next(){
  document.getElementsByClassName("card_container")[0].scrollLeft += 350;
}

// ----------------------------- form -------------------------------------------

//get input country value
function countryValue(country){
  console.log(country.toUpperCase())
  if(country.toUpperCase() == "FRANCE"){
    document.getElementById("regionSelect").style.display = "block";
  }
  else{
    document.getElementById("regionSelect").style.display = "none";
  }
  if(country.toUpperCase() == "ÉTATS-UNIS" || 
      country.toUpperCase() == "ETATS-UNIS" || 
        country.toUpperCase() == "ETATS UNIS" ||
          country.toUpperCase() == "ÉTATS UNIS" ){
            document.getElementById("etatSelect").style.display = "block";
          }
          else{
            document.getElementById("etatSelect").style.display = "none";
          }
}
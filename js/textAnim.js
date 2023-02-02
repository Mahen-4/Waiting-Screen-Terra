
// ----------------------------- SLIDER -------------------------------------------


//taking all slides and all btn
const slides = document.querySelectorAll('.slide')
const btns = document.querySelectorAll('.btn')

let currentSlide = 1;


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
  if(window.scrollY > 1300){
    animate(objectifs,"mainBlock 2s cubic-bezier(.74, .06, .4, .92) forwards");
    animate(h1_objectif, "mainFadeIn 2s forwards");
    img_objectif.style.width = "100%"
  }
})

// ----------------------------- slider comité  -------------------------------------------
function prev(){
  document.getElementsByClassName("card_container")[0].scrollLeft -= 350;
}
function next(){
  document.getElementsByClassName("card_container")[0].scrollLeft += 350;
}

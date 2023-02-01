
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

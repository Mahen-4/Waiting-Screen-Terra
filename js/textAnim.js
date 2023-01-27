const circles = document.getElementById("circles")

document.addEventListener('scroll', (e)=>{
    const scrollY = window.scrollY
    if(scrollY <= 0){
        circles.style.gap = "30px";
    }
})

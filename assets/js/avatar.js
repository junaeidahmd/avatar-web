const burger=document.querySelector('.burger')
const nav=document.querySelector('.nav-links')
const navLinksFade = document.querySelectorAll('.nav-links li');
burger.addEventListener('click',function(){
    burger.classList.toggle('toggle');
    nav.classList.toggle('active');
    navLinksFade.forEach(function(link,index){
        if(link.style.animation){
            link.style.animation='';
        }
        else{
            link.style.animation=` navLinkFade 0.5s ease forwards ${index / 8}s`;
        }
    })

})




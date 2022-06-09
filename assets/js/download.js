const tag=document.querySelector('div');


window.addEventListener('scroll','DOMContentLoaded',function(){
    var body=document.querySelectorAll('div');
    Headers.call.toggle('sticky',window.scrollY)
    body.forEach(function(link,index){
        if(link.style.animation){
            link.style.animation='';
        }
        else{
            link.style.animation=` navLinkFade 0.5s ease forwards ${index / 8}s`;
        }
    })

})



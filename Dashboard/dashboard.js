const dashBoard=document.querySelector('.dash');
const list=document.querySelectorAll('.list')
const bodyDash=document.querySelectorAll('.body-dash')

dashBoard.addEventListener('click',function(e){
    const id=e.target.dataset.id;
    if(id){
        list.forEach(function(lists){
            lists.classList.remove('active');
            e.target.classList.add('active');
        })
        bodyDash.forEach(function(article){
            article.classList.remove('active')
        })
        const element=document.getElementById(id);
        element.classList.add('active');
    }
})

   
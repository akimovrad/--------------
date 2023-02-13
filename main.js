// chage navbar

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})



// snow/hide faqsanswer


const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //chage icon 

        const icon = faq.querySelector('faq__icon i');
        if(icon.className === 'fa-light fa-plus'){
            icon.className = "fa-light fa-minus"
        } else{
            icon.className = "fa-light fa-plus";

        }
    })
})





// ========navbar=========
const menu = document.querySelector(".nav__menu")
const menuBtn = document.querySelector("#open-menu-btn")
const closeBtn = document.querySelector("#close-menu-btn")



menuBtn.addEventListener('click' , () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})



//close menu 

const closeNav = () =>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}



closeBtn.addEventListener('click' , closeNav)
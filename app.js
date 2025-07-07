// nav-bar active link
const sections = document.querySelectorAll("section[id]");

function scrollTracker(){
    const currentYscroll = window.scrollY; 

    sections.forEach((section) => {
    const pageHeight = section.offsetHeight;
    const pageTop = section.offsetTop - 100;
    const id = section.getAttribute("id");
    const currentNavLink = document.querySelector(`.nav-bar a[href*="#${id}" i]`);
    if(currentYscroll > pageTop && currentYscroll <= pageTop + pageHeight){
        currentNavLink.classList.add("active");
    }else{
        currentNavLink.classList.remove("active");
    }
    });
}
window.addEventListener("scroll",scrollTracker);

// scroll-reveal

function revealFunction(){
    window.sr = ScrollReveal({
        duration:'500',distance: '50px',easing: 'ease-in',reset:true
    })
    sr.reveal('.slide-right',{origin:'left'})
    sr.reveal('.slide-left',{origin:'right'})
    sr.reveal('.slide-up',{origin:'bottom'})
    sr.reveal('.slide-down',{origin:'top'})

}

window.addEventListener('load',() => {
    revealFunction();
});

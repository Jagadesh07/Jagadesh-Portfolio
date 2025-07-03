// scroll-reveal
function revealFunction(){
    window.sr = ScrollReveal({
        duration:'500',distance: '50px',easing: 'ease-in'
    })
    sr.reveal('.slide-right',{origin:'left'})
    sr.reveal('.slide-left',{origin:'right'})
    sr.reveal('.slide-up',{origin:'bottom'})

}

window.addEventListener('load',() => {
    revealFunction();
});

// active-link

const sections = document.querySelectorAll("section[id]");

function scrollTracker(){
    const currentYscroll = window.scrollY; 

    sections.forEach((section) => {
    const pageHeight = section.offsetHeight;
    const pageTop = section.offsetTop - 100;
    const id = section.getAttribute("id");
    const currentNavLink = document.querySelector(`.navmenu a[href*="#${id}"]`);
    if(currentYscroll > pageTop && currentYscroll <= pageTop + pageHeight){
        currentNavLink.classList.add("active");
    }else{
        currentNavLink.classList.remove("active");
    }
    });
}

window.addEventListener("scroll",scrollTracker);


// mail
    const name = document.querySelector('.mail-name').value;
    const email = document.querySelector('.mail-email').value;
    const message = document.querySelector('.mail-message').value;

function sendMail(){
    const subject = encodeURIComponent(`Message from: ${name}`);
    const body = encodeURIComponent(`Email: ${email} \n\n ${message} `);

    window.location.href = `mailto:jagz07x@gmail.com?subject=${subject}&body=${body}.`;
}

const mailBtn = document.querySelector('.post');

mailBtn.addEventListener('click',sendMail);
mailBtn.addEventListener('click', () => {
    document.querySelector('.mail-name').value = '';
    document.querySelector('.mail-email').value = '';
    document.querySelector('.mail-message').value = '';
});
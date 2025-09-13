// scroll-reveal
function revealFunction(){
    window.sr = ScrollReveal({
        duration:'500',distance: '50px',easing: 'ease-in',reset: true
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

function sendMail(){
    const name = document.querySelector('.mail-name').value;
    const email = document.querySelector('.mail-email').value;
    const message = document.querySelector('.mail-message').value;

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

// theme-change
const root = document.querySelector(':root');
let dark = false;
document.querySelector('.js-theme-switch').addEventListener('click', () => {
    if(!dark){
        root.style.setProperty('--page-color', 'rgb(36, 36, 36)');
        root.style.setProperty('--text-color', 'white');
        root.style.setProperty('--body-color', 'rgb(36, 36, 36)');
        root.style.setProperty('--highlight-color', 'rgba(177, 18, 18, 1)');
        root.style.setProperty('--input-box-color','rgba(66, 55, 55, 0.74)')
        root.style.setProperty( '--clip-box-color','rgba(155, 132, 132, 0.88)');
        root.style.setProperty('--highlight-text-color','rgba(230, 190, 190, 1)')
        document.querySelector('.js-theme-icon').classList.remove('fa-moon');
        document.querySelector('.js-theme-icon').classList.add('fa-sun');
        dark = true;
    }
    else{
        root.style.setProperty('--page-color', 'white');
        root.style.setProperty('--body-color', 'white');
        root.style.setProperty('--text-color', 'black');
        root.style.setProperty('--highlight-color', 'gray');
        root.style.setProperty('--highlight-text-color','rgb(68, 62, 62)')
        root.style.setProperty('--input-box-color','rgba(255, 255, 255, 0.74)')
        root.style.setProperty( '--clip-box-color','rgba(214, 206, 206, 0.884)');
        document.querySelector('.js-theme-icon').classList.add('fa-moon');
        document.querySelector('.js-theme-icon').classList.remove('fa-sun');
        dark = false;
    }
})

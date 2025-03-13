/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})
sr.reveal('.about__cv', { delay: 700 });


/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".about__cv");

    function checkVisibility() {
        const rect = button.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.25) {
            button.classList.add("visible");
            window.removeEventListener("scroll", checkVisibility);
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Vérifie immédiatement au cas où il est déjà visible au chargement
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const messageDiv = document.getElementById("form-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche la redirection

        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Erreur lors de l'envoi");
            }
        })
        .then(data => {
            // Afficher le message avec fade-in
            messageDiv.innerHTML = "<p style='color: green;'>Message envoyé avec succès !</p>";
            messageDiv.style.opacity = "1";

            form.reset(); // Réinitialiser le formulaire

            // Masquer le message après 5 secondes
            setTimeout(() => {
                messageDiv.style.opacity = "0";
            }, 5000);
        })
        .catch(error => {
            // En cas d'erreur
            messageDiv.innerHTML = "<p style='color: red;'>Une erreur est survenue. Réessayez plus tard.</p>";
            messageDiv.style.opacity = "1";

            setTimeout(() => {
                messageDiv.style.opacity = "0";
            }, 5000);
        });
    });
});






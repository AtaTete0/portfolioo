
function currentyear() {
    const date = new Date();
    const year = date.getFullYear();
    document.querySelector("#displayYear").textContent = year;
}


function smoothScroll() {
    const navLinks = document.querySelectorAll('.space'); 

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 

            const targetId = this.getAttribute('href').slice(1); 
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); 
            }
        });
    });
}


currentyear();
smoothScroll();
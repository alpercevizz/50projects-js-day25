const navbar = document.querySelector("nav");
const list = document.querySelector('li');
window.addEventListener("scroll", () => {
    if(window.scrollY > 67) {
        navbar.classList.add('active1');
        list.classList.add('li-colors');
    }

    else {
        navbar.classList.remove('active1');
    }
})
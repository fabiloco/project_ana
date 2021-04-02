function Navigation() {
    const menu = document.querySelector(".primaryNav__menu");
    const button = document.querySelector(".bar__button .button");

    // button.addEventListener('click', (e) => {
    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
    // });
}

//Testimonials cards

const tButton1 = document.getElementById("testimonial__button1");
const tButton2 = document.getElementById("testimonial__button2");
const tButton3 = document.getElementById("testimonial__button3");
const slides = document.querySelectorAll(".testimonial__card");

tButton1.addEventListener("click", (e) => {
    document.querySelector(".testimonial__card-active").classList.remove("testimonial__card-active");
    slides[0].classList.add("testimonial__card-active");
});

tButton2.addEventListener("click", (e) => {
    document.querySelector(".testimonial__card-active").classList.remove("testimonial__card-active");
    slides[1].classList.add("testimonial__card-active");
});

tButton3.addEventListener("click", (e) => {
    document.querySelector(".testimonial__card-active").classList.remove("testimonial__card-active");
    slides[2].classList.add("testimonial__card-active");
});

console.log(slides[0]);
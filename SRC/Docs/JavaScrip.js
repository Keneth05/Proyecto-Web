function toggleDescription(event) {

    const wrapper = event.target.closest('.individual-service').querySelector('.img-information');

    wrapper.classList.toggle('show-description');
    
    const button = event.target;
    if (wrapper.classList.contains('show-description')) {
        button.textContent = "Ver Menos";
    } else {
        button.textContent = "Ver Más"; 
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach((faq) => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("active");

            const answer = faq.querySelector(".Question-answer");
            if (faq.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = 0;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuCheckbox = document.getElementById("Hamburger-menu");
    const MenuDarkView = document.getElementById("MenuDarkView");

    menuCheckbox.addEventListener("change", () => {
        if (menuCheckbox.checked) {
            MenuDarkView.classList.add("active");
        } else {
            MenuDarkView.classList.remove("active");
        }
    });

    MenuDarkView.addEventListener("click", () => {
        menuCheckbox.checked = false;
        MenuDarkView.classList.remove("active");
    });
});
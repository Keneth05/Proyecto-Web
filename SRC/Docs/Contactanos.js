document.addEventListener('DOMContentLoaded', function(){
    M.AutoInit();
});

document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq__item");

    faqs.forEach((faq) => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("active");

            const answer = faq.querySelector(".faq__answer");
            if (faq.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = 0;
            }
        });
    });
});
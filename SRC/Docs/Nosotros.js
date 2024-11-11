document.addEventListener("DOMContentLoaded", function() {
    const botonUp = document.querySelector(".BotonUP");
    const MisionTitle = document.getElementById("MisionTitle");
    
    window.addEventListener("scroll", function() {
        const rect = MisionTitle.getBoundingClientRect(); 
        
        if (rect.top >= 0 || (rect.top < window.innerHeight && rect.bottom > 0)) {
            botonUp.classList.add("hidden");
        } else {
            botonUp.classList.remove("hidden"); 
        }
    });
});
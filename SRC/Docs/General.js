document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-wrapper ul li a");
    const currentURL = window.location.pathname;
    navLinks.forEach(link => {
    if (link.getAttribute("href") === currentURL) {
        link.parentElement.classList.add("active");
    }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, { edge: 'left' });

    document.querySelector('.close-sidenav').addEventListener('click', function(event) {
        event.preventDefault();
        var instance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
        instance.close();
    });
});

document.addEventListener('DOMContentLoaded', function(){
    M.AutoInit();
});

document.addEventListener("DOMContentLoaded", function() {
    const botonUp = document.querySelector(".BotonUP");
    const productsTitle = document.getElementById("ProductsTitle");
    
    window.addEventListener("scroll", function() {
        const rect = productsTitle.getBoundingClientRect(); 
        
        if (rect.top >= 0 || (rect.top < window.innerHeight && rect.bottom > 0)) {
            botonUp.classList.add("hidden");
        } else {
            botonUp.classList.remove("hidden"); 
        }
    });
});

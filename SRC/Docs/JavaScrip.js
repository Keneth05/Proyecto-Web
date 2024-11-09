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

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems,{edge:'right'});

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

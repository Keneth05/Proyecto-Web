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
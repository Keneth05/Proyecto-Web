function toggleDescription(event) {

    const wrapper = event.target.closest('.individual-service').querySelector('.img-information');

    wrapper.classList.toggle('show-description');
    
}
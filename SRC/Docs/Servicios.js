function toggleDescription(id, event) {
    var description = document.getElementById(id);
    description.classList.toggle('show');
    

    if (description.classList.contains('show')) {
        event.currentTarget.innerHTML = '<i class="material-icons right">arrow_downward</i>Ver menos';
    } else {
        event.currentTarget.innerHTML = '<i class="material-icons right">arrow_upward</i>Ver más';
    }

    event.currentTarget.blur();
}

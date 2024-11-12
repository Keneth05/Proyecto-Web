function toggleDescription(id, event) {
    var description = document.getElementById(id);
    description.classList.toggle('show');
    

    if (description.classList.contains('show')) {
        event.currentTarget.innerHTML = '<i class="material-icons right">remove</i>Ver menos';
    } else {
        event.currentTarget.innerHTML = '<i class="material-icons right">add</i>Ver más';
    }

    event.currentTarget.blur();
}

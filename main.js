var listadeNotas = [];
$(document).ready(function() {
    if(localStorage.getItem('listadeNotas')) {
        listadeNotas = JSON.parse(localStorage.getItem('listadeNotas'));        
        crearLista(listadeNotas, $('#guardadas'));
    }

$('#nota').on('submit', function(evento) {    
    evento.preventDefault();
    let notita = $('#notita').val();
     let titulo = $('#titulo').val();
    $('#notita').val('');
     $('#titulo').val('');
    cargarNota(notita, titulo, listadeNotas);
     crearLista(listadeNotas, $('#guardadas'));
})

function cargarNota (notita, titulo, listadeNotas) {
    if (!titulo) {
        alert('Ingrese un titulo, nombre o fecha');
    } else if (!notita) {
        alert('Ingresa algun tipo de texto')
    } else {
        listadeNotas.push({'titulo' : titulo, 'notita' : notita})
        localStorage.setItem('listadeNotas', JSON.stringify(listadeNotas));    
    }
    
}

function crearLista (listadeNotas, nodo) {
    var nodoLista = '';
    for(i = 0; i < listadeNotas.length; ++i){
        nodoLista += '<dt>Titulo</dt><dd>' + listadeNotas[i].titulo + '</dd><dd><strong>Notita</strong>: ' + listadeNotas[i].notita + '</dd>';
    }    
    nodo.html(nodoLista);
}

$('#clear').on('click', function(event){
    localStorage.clear();
    location.reload();
    $('#guardadas').html('');
    console.log('Limpiar');

})


})


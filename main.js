// Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api
// Ciclare quindi i dischi ottenuti
// per ognuno di essi disegnare in pagina una card utilizzando handlebars
$(document).ready(function() {

$.ajax({
    'url': 'https://flynn.boolean.careers/exercises/api/array/music',
    'method': 'GET',
    'success': function(data) {
        // che funzione devo utilizzare?
    },
    'error': function() {
        alert('si è verificato un errore');
    }
});
});

//  creo un oggetto che mi contiene tutti gli elementi dei miei dischi
var dischi = [
    {
        'titolo': 'h3',
        'autore': '<span class="author"></span>',
        'anno': '<span class="year"></span>',
        'foto': 'img src'
    }
];

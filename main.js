// Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api
// Ciclare quindi i dischi ottenuti
// per ognuno di essi disegnare in pagina una card utilizzando handlebars
$(document).ready(function() {

$.ajax({
    'url': 'https://flynn.boolean.careers/exercises/api/array/music',
    'method': 'GET',
    'success': function(data) {
        // console.log(data);
        // console.log(data.response);
        var dischi = data.response;
        // recupero la struttura html del template di base
        var template_html = $('#template-dischi').html();
        // preparo la funzione da utilizzare per utilizzare il template
        var template_function = Handlebars.compile(template_html);
        //
        for (var i = 0; i < dischi.length; i++) {
            var disco = dischi[i];
            console.log(disco);

            var dati_disco = {
                'autore': disco.author,
                'titolo': disco.title,
                'anno': disco.year,
                'immagine': disco.poster
            }

            // tramite handlebars preparo l'html finale con i dati dello studente all'interno
            var html_finale = template_function(dati_disco);

            // appendo in pagina una card con i dati dello studente
            $('.cds-container').append(html_finale);
        }
    },
    'error': function() {
        alert('si è verificato un errore');
    }
});
});

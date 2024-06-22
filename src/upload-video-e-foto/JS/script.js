$(document).ready(function() {
    $('#filmForm').submit(function(e) {
        e.preventDefault();

        var formData = new FormData(this);

        $.ajax({
            url: './PHP/insert_film.php',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                $('#responseMessage').html(response.message);
                if (response.success) {
                    $('#filmForm')[0].reset();
                }
            },
            error: function(xhr, status, error) {
                var errorMessage = xhr.status + ': ' + xhr.statusText;
                $('#responseMessage').html('Erro ao enviar o formulário: ' + errorMessage);
            }
        });
    });
});

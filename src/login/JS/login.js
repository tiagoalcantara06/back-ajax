$(document).ready(function () {
    $('#login').submit(function (e) {
        e.preventDefault();

        console.log('me chamaram');

        var formData = $(this).serialize();
        console.log('Form Data:', formData);

        $.ajax({
            url: './PHP/login.php',
            type: 'POST',
            data: formData,
            dataType: 'json',
            success: function (response) {
                console.log('Server Response:', response);
                if (response.success) {
                    t();
                } else {
                    w(response.message);
                }
            },
            error: function (xhr, status, error) {
                var errorMessage = xhr.status + ': ' + xhr.statusText;
                console.error('Erro ao enviar o formulário:', errorMessage);
            }
        });
    });
});

function t() {
    window.location.href = '../principal/HTML/principal.html';
}

function w(message) {
    alert('Erro ao enviar o formulário: ' + message);
}

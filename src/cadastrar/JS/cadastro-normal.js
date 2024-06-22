$(document).ready(function () {
    $('#cadastrar').submit(function (e) {
        e.preventDefault();

        var formData = $(this).serialize();

        $.ajax({
            url: 'PHP/cadastro-normal.php',
            type: 'POST',
            data: formData,
            success: function (response) {
                response == true ? t() : e()

            },
            error: function (xhr, status, error) {
                var errorMessage = xhr.status + ': ' + xhr.statusText;
                console.error('Erro ao enviar o formulário:', error);

            }
        });
    });
});

function t() {
    Swal.fire({
        icon: 'success',
        title: 'Enviado com sucesso!',
        customClass: {
            confirmButton: 'swal-button' 
        }
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = '../login';
        }
    });

}
function e() {
        Swal.fire({
          icon: 'error',
          title: 'Erro ao enviar o formulário',
          text: 'Por favor, tente novamente mais tarde.',
          customClass: {
            confirmButton: 'swal-button' 
        }
        }).then((result) => {
            if(result.isConfirmed){
                window.location.reload();
            }
        });
}
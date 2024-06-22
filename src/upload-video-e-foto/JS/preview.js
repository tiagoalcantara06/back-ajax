document.getElementById('imagem').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.innerHTML = `<img src="${e.target.result}" alt="Imagem do Filme">`;
    };
    
    reader.readAsDataURL(file);
});


document.getElementById('video').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const videoPreview = document.getElementById('videoPreview');
        videoPreview.innerHTML = `<video controls>
                                    <source src="${e.target.result}" type="${file.type}">
                                    Seu navegador não suporta a exibição de vídeos.
                                  </video>`;
    };
    
    reader.readAsDataURL(file);
});

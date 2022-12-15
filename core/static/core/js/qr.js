const contenedorQR = document.getElementById('contenedorQR');

new QRCode(contenedorQR, 'https://drive.google.com/file/d/1ZdVSx27kEpD_Sr5VkCedTQOvTQah64s_/view?usp=share_link');

function mostrar() {
    div = document.getElementById('flotante');
    div.style.display = '';
}

function cerrar() {
    div = document.getElementById('flotante');
    div.style.display = 'none';
}
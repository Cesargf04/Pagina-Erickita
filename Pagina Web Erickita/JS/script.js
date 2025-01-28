function mostrarMas() {
    const masHistoria = document.getElementById('masHistoria');
    if (masHistoria.style.display === 'none') {
        masHistoria.style.display = 'block';
    } else {
        masHistoria.style.display = 'none';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const mensaje = localStorage.getItem('notificacion');
    if (mensaje) {
        // Muestra el mensaje en la notificación
        const mensajeToast = document.getElementById('mensajeToast');
        mensajeToast.textContent = mensaje;

        // Muestra la notificación con Bootstrap
        const toastElement = document.getElementById('toastNotificacion');
        const toast = new bootstrap.Toast(toastElement);
        toast.show();

        // Limpia el mensaje del localStorage después de mostrarlo
        localStorage.removeItem('notificacion');

        // Opcional: Desaparece automáticamente después de 5 segundos
        setTimeout(() => {
            toast.hide();
        }, 5000);
    }
});
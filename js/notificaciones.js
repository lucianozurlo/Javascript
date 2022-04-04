//Notificación para cierre de carnicería
const alerta = () => {
    iziToast.warning({
        title: '¡No te cuelgues!',
        message: 'La carnicería cierra a las 19:00',
        position: 'topRight',
        messageColor: '#fff',
        backgroundColor: '#f37d00',
        transitionIn: 'fadeInLeft',
        transitionOut: 'fadeOut',
    });
}
setTimeout(() => { alerta() }, 3000);
setInterval(() => { alerta() }, 25000)

//Notificación para cierre de carnicería
const stockError = () => {
    iziToast.error({
        title: '¡Error!',
        message: 'No se pudo encontrar stock',
        position: 'topRight',
        messageColor: '#fff',
        backgroundColor: '#ff000',
        transitionIn: 'fadeInLeft',
        transitionOut: 'fadeOut',
    });
}
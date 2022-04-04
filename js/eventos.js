//Generar lista
document.addEventListener('DOMContentLoaded', () => {
    precioFinal;
})
let btnCalcular = document.querySelector('#btnCalcular');
btnCalcular.onclick = () => generarLista();

//Hago que vuelva a tomar la variable de los input y que escuche el evento
corteAPeso.addEventListener('input', () => {
    resultado();
});
corteAPrecio.addEventListener('input', () => {
    resultado();
});
corteBPeso.addEventListener('input', () => {
    resultado();
});
corteBPrecio.addEventListener('input', () => {
    resultado();
});
corteCPeso.addEventListener('input', () => {
    resultado();
});
corteCPrecio.addEventListener('input', () => {
    resultado();
});
carbonBoolean.addEventListener('input', () => {
    resultado();
});
beneficiosBoolean.addEventListener('input', () => {
    resultado();
});
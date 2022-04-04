//Mensaje y calculo de cantidad de comensales
const cuantosSomosSelect = document.querySelector("#cuantosSomosSelect");

//Declaro la variable individual del peso por persona
let pesoXPersona = 0.450;
let cuantosSomosPeso = pesoXPersona;

//Declaro variable del input y hago que escuche el evento
let cuantosSomosP = document.querySelector('#cuantosSomosP').innerHTML;
cuantosSomosSelect.addEventListener('input', () => {
    cuantosSomosPeso = pesoXPersona * cuantosSomosSelect.value;
    document.querySelector('#cuantosSomosP').innerHTML = `Vamos a necesitar comprar, por lo menos, <strong>${cuantosSomosPeso}kg</strong> en total.`;
    resultado();
});

//Mensaje check si alcanza la cantidad en kg
const cuantosSomos = document.querySelector("#cuantosSomos");
const cuantoPesa = () => {
    let pesoCarbon = asado[3].peso;
    let totalPeso = asado.reduce((sumas, item) => sumas + item.peso, 0);
    let totalPesoSinCarbon = totalPeso - pesoCarbon;

    if (totalPesoSinCarbon >= cuantosSomosPeso) {
        document.querySelector('#alcanzaInput').innerHTML = '';
        document.querySelector('#btnCalcular').disabled = false;
    } else {
        document.querySelector('#alcanzaInput').innerHTML = `Somos <strong>${cuantosSomosSelect.value}</strong>, necesitamos <strong>${cuantosSomosPeso}kg</strong> y estamos comprando <strong>${totalPesoSinCarbon}kg</strong>. ¡NO ALCANZA!`;
        document.querySelector('#btnCalcular').disabled = true;
    }
}

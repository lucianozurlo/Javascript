const stockJson = () => {
    try {
        fetch("../json/stock.json")
            .then((stock) => {
                return stock.json();
            })
            .then((cortes) => {
                const [corteA, corteB, corteC] = cortes;
                corteANombre.innerHTML = corteA.nombre;
                corteBNombre.innerHTML = corteB.nombre;
                corteCNombre.innerHTML = corteC.nombre;
                corteAPrecio.value = corteA.precioKilo;
                corteBPrecio.value = corteB.precioKilo;
                corteCPrecio.value = corteC.precioKilo;
                corteAImagen.src = corteA.imagen;
                corteBImagen.src = corteB.imagen;
                corteCImagen.src = corteC.imagen;
            })
    } catch (error) {
        stockError();
    }
};

stockJson();

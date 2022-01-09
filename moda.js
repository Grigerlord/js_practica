const lista1 = [];

function guardarElemento() {
    let nuevo_elemento = parseInt(document.getElementById("elemento").value);
    lista1.push(nuevo_elemento);
    alert(`Has ingresado el elemento: ${nuevo_elemento}`);
}



function mostrarResultado() {
    let lista1Count = {};

    lista1.map(
        function (elemento) {
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            }else{
                lista1Count[elemento] = 1;
            }
        }
    );

    const lista1Array = Object.entries(lista1Count).sort(
        function (elemento_a, elemento_b) {
            return elemento_a[1] - elemento_b[1]
        }
    ); // Se le puede enviar como argumento el objeto que queremos convertir en un array

    const moda = lista1Array[lista1Array.length - 1];

    let area_respuesta = document.getElementById("respuesta");
    area_respuesta.innerHTML = `La Moda es: ${moda}`;
}
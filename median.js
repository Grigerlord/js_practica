const list = [];
let mediana;

function guardarElemento() {
    let nuevo_elemento = parseInt(document.getElementById("elemento").value);
    list.push(nuevo_elemento);
    alert(`Has ingresado el elemento: ${nuevo_elemento}`);
}

function mostrarResultado() {
    const mitadLista1 = parseInt(list.length / 2);

    function esPar(numerito) {
        if (numerito % 2 === 0) {
            return true;
        }else{
            return false;
        }
    }

    if (esPar(list.length)) {
        const elemento1 = list[mitadLista1 - 1];
        const elemento2 = list[mitadLista1];
        const promedioElemento1y2 = calculateAricmeticMedia([
            elemento1,
            elemento2
        ]);
        mediana = promedioElemento1y2;
    }else{
        mediana = list[mitadLista1];
    }

    function calculateAricmeticMedia(list) {
        const sumList = list.reduce( // reduce recibe una funcion para +-*/ cada elemento que se le envie
            function (acumulateValue = 0, newElement) {
                return acumulateValue + newElement;
            }
        );
        const averageList = sumList / list.length;
        return averageList;
    }

    let area_respuesta = document.getElementById("respuesta");
    area_respuesta.innerHTML = `La mediana es: ${mediana}`;
}
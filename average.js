

function calculateAricmeticMedia(list) {
    // let sumList = 0;
    // for (let i = 0; i < list.length; i++) {
    // sumList = sumList + list[i];
    // }

    const sumList = list.reduce( // reduce recibe una funcion para +-*/ cada elemento que se le envie
        function (acumulateValue = 0, newElement) {
            return acumulateValue + newElement;
        }
    );

    const averageList = sumList / list.length;

    return averageList;
}
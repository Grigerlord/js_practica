// const ven_salary = venezuela.map(
//     function (person) {
//         return person.salary;
//     }
// );

// const ven_salary_sorted = ven_salary.sort(
//     function (salaryA, salaryB) {
//         return salaryA - salaryB;
//     }
// );

// function esPar(numero) {
//     return (numero % 2 === 0);
// }

// function calculateAricmeticMedia(list) {
//     const sumList = list.reduce( // reduce recibe una funcion para +-*/ cada elemento que se le envie
//         function (acumulateValue = 0, newElement) {
//             return acumulateValue + newElement;
//         }
//     );
// }

// function salaryMedian(list) {
//     const midle = parseInt(list.lenght  / 2);

//     if (esPar(list.lenght)) {
//         const midle_person_1 = list[midle - 1];
//         const midle_person_2 = list[midle];

//         const median = calculateAricmeticMedia(midle_person_1, midle_person_2);
//         return median;
//     } else {
//         const midle_person = list[midle];
//         return midle_person;
//     }
// }

// console.log(salaryMedian(ven_salary_sorted));

// Helpers
function esPar(numerito) {
    return (numerito % 2 === 0);
  }
  
  function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  
  // Calculadora de mediana
  function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
  
    if (esPar(lista.length)) {
      const personitaMitad1 = lista[mitad - 1];
      const personitaMitad2 = lista[mitad];
  
      const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
      return mediana;
    } else {
      const personitaMitad = lista[mitad];
      return personitaMitad;
    }
  }
  
  // Mediana General
  const salariosCol = venezuela.map(
    function (personita) {
      return personita.salary;
    }
  );
  
  const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
      return salaryA - salaryB;
    }
  );
  
  const medianaGeneralCol = medianaSalarios(salariosColSorted);
  
  // Mediana del top 10%
  const spliceStart = (salariosColSorted.length * 90) / 100;
  const spliceCount = salariosColSorted.length - spliceStart;
  
  const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
  );
  
  const medianaTop10Col = medianaSalarios(salariosColTop10);
  
  console.log({
    medianaGeneralCol,
    medianaTop10Col,
  });
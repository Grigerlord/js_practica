// Código del Cuadrado
console.group("Cuadrado");
const perimetroCuadrado = (lado) => lado * 4;
// function perimetroCuadrado(lado) {
//     return lado * 4;
// }
function areaCuadrado(lado) {
    return ladoCuadrado * ladoCuadrado;
}
console.groupEnd("Cuadrado");
// Código del triágulo
console.group("Triángulo");
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd("Triángulo");
// Código del Círculo
console.group("Círculo");
// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}
//Circunferencia-Perímetro
function perimetroCirculo(diametro) {
    return diametro * Math.PI;
}
//Area
function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
}
console.groupEnd("Círculo");

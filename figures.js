// Code of Square______________________________
function squarePerimeter(lado) {
  return lado * 4;
}
function squareArea(side) {
    return side * side;
}

// Code of triangle____________________________
function trianglePerimeter(side1, side2, base){
    return Number(side1) + Number(side2) + Number(base);
}
function triangleArea(base, height) {
    return (Number(base) * Number(height)) / 2;
}

// Code of Circle______________________________
// Diameter
function circleDiameter(radio) {
    return Number(radio) * 2;
}
//Circumference-perimeter
function circlePerimeter(radio) {
    return circleDiameter(radio) * Math.PI;
}
//Area
function circleArea(radio) {
    return (Number(radio) * Number(radio)) * Math.PI;
}



//CALCULATE THE SQUARE_________________________
//_____________________________________________
function calculateSquarePerimeter() {
    const input = document.getElementById("input_square");
    const value = input.value;
    const perimeter = squarePerimeter(value);
    alert(perimeter);
}

function calculateSquareArea() {
    const value = document.getElementById("input_square").value;
    const area = squareArea(value);
    alert(area);
}



//CALCULATE THE TRIANGLE_________________________
//_______________________________________________
function calculateTrianglePerimeter() {
    const side_1 = document.getElementById("first_side_triangle").value;
    const side_2 = document.getElementById("second_side_triangle").value;
    const base = document.getElementById("base_triangle").value;
    const perimeter = trianglePerimeter(side_1, side_2, base);
    alert(perimeter);
}

function calculateTriangleArea() {
    const base = document.getElementById("base_triangle").value;
    const height = document.getElementById("height_triangle").value;
    const area = triangleArea(base, height);
    alert(area);
}



//CALCULATE THE CIRCLE___________________________
//_______________________________________________
function calculateCircle() {
    const radio = document.getElementById("radio").value;
    const diameter = circleDiameter(radio);
    const perimeter = circlePerimeter(radio);
    const area = circleArea(radio);
    alert(diameter.toFixed(2) + "\n" + perimeter.toFixed(2) + "\n" + area.toFixed(2));
}
// const precio = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentaje_precio_con_descuento = 100 - descuento;
    const precio_con_descuento = (precio * porcentaje_precio_con_descuento) / 100;

    return precio_con_descuento;
}

function onClickButtonPriceDiscount() {
    const input_price = document.getElementById("input_price");
    const price_value = input_price.value;

    const input_discount = document.getElementById("input_discount");
    const discount_value = input_discount.value;

    const precio_con_descuento = calcularPrecioConDescuento(price_value, discount_value);

     const result_price = document.getElementById("result_price");
     result_price.innerText = "El precio con descuento son: $" + precio_con_descuento;
}

// console.log({
//     precio_original,
//     descuento,
//     porcentaje_precio_con_descuento,
//     precio_con_descuento,
// });
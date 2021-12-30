// OBJECTS CHARACTERISTICS
const choosed_shoe = {
    name: " ",
    price: 0,
    discount: 0,
    color: " ",
    size: 0
}

let color_choosed = " ";

let amount_choosed = 1;

let new_coupon = 0;




function converseCharacteristics(){
    choosed_shoe.name = "Converse";
    choosed_shoe.price = 20;
    choosed_shoe.discount = 20;
    choosed_shoe.color = "White";
    choosed_shoe.size = 35;

    choosedShoe(choosed_shoe.name, choosed_shoe.price, choosed_shoe.discount, choosed_shoe.color, choosed_shoe.size);
}

function christianLouboutinCharacteristics() {
    choosed_shoe.name = "Christian Louboutin";
    choosed_shoe.price = 40;
    choosed_shoe.discount = 15;
    choosed_shoe.color = "White";
    choosed_shoe.size = 35;

    choosedShoe(choosed_shoe.name, choosed_shoe.price, choosed_shoe.discount, choosed_shoe.color, choosed_shoe.size);
}

function jimmyChooCharacteristics() {
    choosed_shoe.name = "Jimmy Choo";
    choosed_shoe.price = 50;
    choosed_shoe.discount = 5;
    choosed_shoe.color = "White";
    choosed_shoe.size = 35;

    choosedShoe(choosed_shoe.name, choosed_shoe.price, choosed_shoe.discount, choosed_shoe.color, choosed_shoe.size);
}

function aquazzuraCharacteristics() {
    choosed_shoe.name = "Aquazzura";
    choosed_shoe.price = 60;
    choosed_shoe.discount = 0;
    choosed_shoe.color = "White";
    choosed_shoe.size = 35;

    choosedShoe(choosed_shoe.name, choosed_shoe.price, choosed_shoe.discount, choosed_shoe.color, choosed_shoe.size);
}

function stuartWeitzmanCharacteristics() {
    choosed_shoe.name = "Stuart Weitzman";
    choosed_shoe.price = 100;
    choosed_shoe.discount = 5;
    choosed_shoe.color = "White";
    choosed_shoe.size = 35;

    choosedShoe(choosed_shoe.name, choosed_shoe.price, choosed_shoe.discount, choosed_shoe.color, choosed_shoe.size);
}


//SHOE CHOOSED


function choosedShoe(name, price, discount, color, size) {
    let choosed_shoe = {
        name: name,
        price: price,
        discount: discount,
        color: color,
        size: size
    }

    let print_characteristics = document.getElementById("characteristics");
    print_characteristics.innerHTML =
      "<p><b>Name: </b>" + name + "</p>"
    + "<p><b>Price: </b>" + price + "</p>"
    + "<p><b>Discount: </b>" + discount + "</p>"
    + "<label> <b>Color</b>"
      + "<select name='color' id='choose_color' onclick='colorChoosed()'>"
       + "<option value='white' name='color'>White</option>"
       + "<option value='black' name='color'>Black</option>"
       + "<option value='Blue' name='color'>Blue</option>"
      + "</select>"
    + "</label>"
    + "<label> <b>Amount</b>"
      + "<input type='number' max='99' id='choose_amount' onclick='amountChoosed()' onKeyUp='amountChoosed()'>"
    + "</label>"
}




// SPECIFICS CHARACTERISTICS


function colorChoosed() {
    color_choosed = document.getElementById("choose_color").value;
}

function amountChoosed() {
    amount_choosed = document.getElementById("choose_amount").value;
}

function generateCoupon() {
    new_coupon = (Math.floor(Math.random() * (6 - 0)) + 0) * 10;
    let amount_coupon = document.getElementById("amount_coupon");

    if (new_coupon === 0) {
        amount_coupon.innerHTML = "<b>keep trying</b>"
    }else if (new_coupon === 10 || new_coupon === 20 || new_coupon === 30) {
        amount_coupon.innerHTML = "<b>Good</b> Your coupon is: " + new_coupon + "%";
    } else{
        amount_coupon.innerHTML = "<b>WOW!</b> Your coupon is: " + new_coupon + "%";
    }

}



function calculatePrice() {

    const total_price = amount_choosed * choosed_shoe.price;

    const percentage_discounted_1 = 100 - choosed_shoe.discount;
    const percentage_discounted_2 = 100 - new_coupon + choosed_shoe.discount;

    const price_with_discount = (total_price * percentage_discounted_1) / 100;

    const total_to_pay = (choosed_shoe.price * percentage_discounted_2) / 100;

    let price_place = document.getElementById("price");
    price_place.innerHTML =
          `<h1>${choosed_shoe.name}</h1>`
        + `<p><b>Unity Price: </b> $${choosed_shoe.price}</p>`
        + `<p><b>Amount: </b> ${amount_choosed}</p>`
        + `<p><b>Total Price: </b> $${total_price}</p>`
        + `<p><b>Discount: </b> ${percentage_discounted_1}%</p>`
        + `<p><b>Total with discount: </b> $${price_with_discount}</p>`
        + `<p><b>Coupon: </b> ${new_coupon}%</p>`
        + `<p><b>TOTAL TO PAY:  $${total_to_pay}</b></p>`
        + `<p><small>Saved:  $${total_price - total_to_pay}</small></p>`;

}
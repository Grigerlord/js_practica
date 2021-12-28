let a = 0;
let b = 0;

function calculateIsoscelesHeight() {
    const f_side = parseInt(document.getElementById("f_side").value);
    const s_side = parseInt(document.getElementById("s_side").value);
    const t_side = parseInt(document.getElementById("t_side").value);

    if (f_side === s_side || f_side === t_side || s_side === t_side) {
        b = t_side;
        if (s_side === t_side) {
            b = f_side;
            a = s_side;
        } else if (t_side === f_side) {
            b = s_side;
            a = t_side;
        }

        let g = coDe(a, b);

        if (b === a) {
            alert("These measurements correspond to an equilateral triangle " + g);
        } else if (b > a + a) {
            alert("These measurements are wrong");
        } else{
            alert("The Height of your Triangle is: " + g);
        }
    } else{
        alert("These measurements do not correspond to an isosceles triangle");
    }
}

function coDe(a, b) {
    let h = Math.sqrt(a**2 - (b**2 / 4)).toFixed(2);
    return h;
}
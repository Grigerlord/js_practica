function calculateIsoscelesHeight() {
    const f_side = parseInt(document.getElementById("f_side").value);
    const s_side = parseInt(document.getElementById("s_side").value);
    const t_side = parseInt(document.getElementById("t_side").value);

    if (f_side === s_side || f_side === t_side || s_side === t_side) {
        let min = Math.min(f_side, s_side, t_side);
        let max = Math.max(f_side, s_side, t_side);

        const a = max;
        const b = min;

        const h = Math.sqrt(a**2 - (b**2 / 4)).toFixed(2);

        alert("The Height of your Triangle is: " + h)

    }else{
        alert("These measurements do not correspond to an isosceles triangle")
    }
}
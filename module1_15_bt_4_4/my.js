let num = prompt("nhập vào dãy số")
let array = num.split(",");
function isMin() {
    let min = Number(array[0]);
    for (let i = 1; i < array.length; i++) {
        if (min > Number(array[i])) {
            min = Number(array[i]);
        }
    }

    return min;
}

document.write(isMin(array));
const poundsId = document.getElementById("pounds");
const resultId = document.getElementById("result");
const errorId = document.getElementById("error");

function computePound(event) {
    const poundsValue = +event.target.value;
    if (poundsValue <= 0 || isNaN(poundsId.value)) {
        errorId.innerHTML = "please enter the correct value";
        setTimeout(() => {
            errorId.textContent = "";
            resultId.textContent = "0.0";
            poundsId.value = "";
        }, 2000);
        return
    }
    const poundsInKg = poundsValue * 0.45359237;
    resultId.textContent = poundsInKg.toFixed(2);

    setTimeout(() => {
        resultId.textContent = "0.0";
        errorId.textContent = "";
        poundsId.value = "";
    }, 3000);
}
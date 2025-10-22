const calculate = document.getElementById('calculate');
const tip = document.getElementById('tip');
const bill = document.getElementById('bill')
const total = document.getElementById('total');
const clear = document.getElementById('clear');

function func() {
    const billValue = bill.value;
    const tipValue = tip.value
    const totalValue = billValue * (1 + tipValue / 100);
    total.innerText = totalValue.toFixed(2);
}


clear.addEventListener('click', function() {
    tip.value = "";
    bill.value = "";
    total.innerText = "";
});

calculate.addEventListener('click', func);
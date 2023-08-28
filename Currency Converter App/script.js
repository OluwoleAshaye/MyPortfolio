const currencyEL_one = document.getElementById('currency_one');
const currencyEL_two = document.getElementById('currency_two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');
const exchangeBtn = document.getElementById('exchangeBtn');
const rateEl = document.getElementById('rate');


currencyEL_one.addEventListener('change', calculate);
currencyEL_two.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
amountEl_two.addEventListener('input', calculate);

// Fetch currency rates and update the fom
function calculate(){
    const currency_one = currencyEL_one.value;
    const currency_two = currencyEL_two.value;

    fetch(' https://v6.exchangerate-api.com/v6/1d814b41dc8c56ad1949a11c/latest/USD')
    .then(resp => resp.json())
    .then(data => {
       // console.log(data);
        const rate = data.conversion_rates[currency_two]
        rateEl.innerText = `1 ${currency_one} = ${currency_two}`;


        amountEl_two.value = (amountEl_one.value * rate). toFixed(2);
    })
}
exchangeBtn.addEventListener('click', () => {
    const temp = currencyEL_one.value;
    currencyEL_one.value = currencyEL_two.value;
    currencyEL_two.value = temp;
    calculate();
})
calculate();
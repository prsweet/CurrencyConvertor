const amount = document.getElementById("amount")
const fromCurrency = document.getElementById("from_currency")
const toCurrency = document.getElementById("to_currency")
const convertedResult = document.getElementById("result")
const submitButton = document.getElementById("convert")

window.addEventListener("load",fetchcurrencies)
submitButton.addEventListener("click",(e)=>{e.preventDefault(); convertCurrency()})

async function fetchcurrencies() {
    const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD")
    const data = await response.json()
    console.log(data);
    
    const currencyOptions = Object.keys(data.rates)
    console.log(currencyOptions)

    currencyOptions.forEach(currency => {
        const optionfrom = document.createElement("option")
        optionfrom.value = currency;
        optionfrom.textContent = currency;
        fromCurrency.appendChild(optionfrom)

        const optionto = document.createElement("option")
        optionto.value = currency;
        optionto.textContent = currency;
        toCurrency.appendChild(optionto)
    })
}

async function convertCurrency() {
    const amountInput = parseFloat(amount.value) 
    const fromCurrencyValue = fromCurrency.value 
    const toCurrencyValue = toCurrency.value 

    if( amountInput < 0 ) {
        alert("Please enter a valid amount")
        return;
    }

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrencyValue}`)
    const data = await response.json();

    const rate = data.rates[toCurrencyValue]
    const convertedAmount = (amountInput*rate).toFixed(2)

    const answer = `${amountInput} ${fromCurrencyValue} = ${convertedAmount} ${toCurrencyValue}`
    convertedResult.textContent = answer;
}
let currentResult = "";

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
tab.addEventListener("click", () => {

tabs.forEach(t => t.classList.remove("active"));
contents.forEach(c => c.classList.remove("active"));

tab.classList.add("active");

document
.getElementById(tab.dataset.tab)
.classList.add("active");

});
});

function showResult(text){
currentResult = text;
document.getElementById("result").innerText = text;
}

function calculatePercent(){

let num =
parseFloat(document.getElementById("num1").value);

let percent =
parseFloat(document.getElementById("percent1").value);

if(isNaN(num) || isNaN(percent)) return;

let result = (num * percent) / 100;

showResult(
`${percent}% of ${num} = ${result.toFixed(2)}`
);
}

function calculateDiscount(){

let price =
parseFloat(document.getElementById("price").value);

let discount =
parseFloat(document.getElementById("discountPercent").value);

if(isNaN(price) || isNaN(discount)) return;

let finalPrice =
price - ((price * discount)/100);

showResult(
`Final Price = ${finalPrice.toFixed(2)}`
);
}

function calculateVAT(){

let amount =
parseFloat(document.getElementById("vatPrice").value);

let vat =
parseFloat(document.getElementById("vatPercent").value);

if(isNaN(amount) || isNaN(vat)) return;

let total =
amount + ((amount * vat)/100);

showResult(
`Total with VAT = ${total.toFixed(2)}`
);
}

function calculateChange(){

let oldVal =
parseFloat(document.getElementById("oldValue").value);

let newVal =
parseFloat(document.getElementById("newValue").value);

if(isNaN(oldVal) || isNaN(newVal) || oldVal === 0)
return;

let change =
((newVal-oldVal)/oldVal)*100;

showResult(
`Change = ${change.toFixed(2)}%`
);
}

document
.getElementById("copyBtn")
.addEventListener("click", () => {

navigator.clipboard.writeText(currentResult);

});
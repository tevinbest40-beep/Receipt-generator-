function generateReceipt(){

let customer = document.getElementById("customer").value;
let service = document.getElementById("service").value;
let amount = document.getElementById("amount").value;

let receiptNo = "VW-" + Date.now();

let date = new Date().toLocaleString();

let receipt = document.getElementById("receipt");

receipt.style.display = "block";

receipt.innerHTML = `
<h2>🟣 VOID WHISPER</h2>

<p><strong>Receipt ID:</strong> ${receiptNo}</p>

<p><strong>Date:</strong> ${date}</p>

<p><strong>Customer:</strong> ${customer}</p>

<p><strong>Service:</strong> ${service}</p>

<p><strong>Amount Paid:</strong> KES ${amount}</p>

<hr>

<p>WhatsApp: 0793981523</p>

<p>5 Weeks Warranty Available On Selected Products</p>

<p><strong>Not Just A Product, It's A Void Experience</strong></p>
`;
}

function generateReceipt() {

let customer = document.getElementById("customer").value;
let service = document.getElementById("service").value;
let amount = document.getElementById("amount").value;

let receiptNo = "VW" + Math.floor(Math.random() * 99999);

let date = new Date().toLocaleString();

document.getElementById("receipt").innerHTML = `
<hr>
<h2>VOID WHISPER</h2>
<p>Receipt No: ${receiptNo}</p>
<p>Date: ${date}</p>
<p>Customer: ${customer}</p>
<p>Service: ${service}</p>
<p>Amount: KES ${amount}</p>
<p>WhatsApp: 0793981523</p>
<p>Thank you for choosing Void Whisper</p>
`;
}

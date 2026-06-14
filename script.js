function generateReceipt(){

let customer=document.getElementById("customer").value;
let service=document.getElementById("service").value;
let amount=document.getElementById("amount").value;

let receiptNo="VW-"+Date.now();

let date=new Date().toLocaleString();

let receipt=document.getElementById("receipt");

receipt.style.display="block";

receipt.innerHTML=`
<h2>VOID WHISPER</h2>

<p><b>Receipt ID:</b> ${receiptNo}</p>

<p><b>Date:</b> ${date}</p>

<p><b>Customer:</b> ${customer}</p>

<p><b>Service:</b> ${service}</p>

<p><b>Amount:</b> KES ${amount}</p>

<hr>

<p>WhatsApp: 0793981523</p>

<p>Thank you for choosing Void Whisper</p>
`;

let popup=document.getElementById("popup");

popup.style.display="block";

setTimeout(()=>{
popup.style.display="none";
},3000);
}

function downloadPDF(){

let element=document.getElementById("receipt");

html2pdf().from(element).save("VoidWhisperReceipt.pdf");
}
const messages = [
    "Derrick Koech just created a receipt for Data Bundles 📄",
    "Brian Otieno just generated a receipt 💰",
    "Faith Njeri just downloaded a PDF receipt 📥",
    "Kevin Mutiso just created a payment receipt 🧾",
    "Void Whisper user just generated a receipt ⚡"
];

function showPopup() {
    const popup = document.getElementById("popup");

    popup.textContent =
        messages[Math.floor(Math.random() * messages.length)];

    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 4000);
}

setInterval(showPopup, 10000);
showPopup();

// Targetting the Containers
const qrScannerDiv = document.getElementById("QR_Reading");
const qrResultDiv = document.getElementById("QR_CODE_result");
var lastresult = 0;
 var countresult = 0;

// Callback for the scenario when scan is successful
const onScanSuccess = (decodeText, decodeResult) => {
  
  if (decodeText !== lastresult) {
    ++countresult;
    lastresult = decodeText;

    alert("You Qr is : " + decodeText, decodeResult);
    qrResultDiv.innerHTML = `your scan ${countresult}:${decodeText} `;
  }
};

// On DOMContentLoaded event, the scanner is initialised and mounted
window.addEventListener("DOMContentLoaded", () => {
  var htmlscanner = new Html5QrcodeScanner("QR_Reading", {
    fps: 10,
    qrbos: 250,
  });

  htmlscanner.render(onScanSuccess);
});
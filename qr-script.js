const qrInput = document.getElementById('qrInput');
const qrCanvas = document.getElementById('qrcode-canvas');
const downloadBtn = document.getElementById('downloadBtn');

// สร้าง QR Code เริ่มต้น
const qrcode = new QRCode(qrCanvas, {
    text: "https://yosora62-yoho.github.io/my-tools/",
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

// ตรวจจับการพิมพ์
qrInput.addEventListener('input', () => {
    const val = qrInput.value.trim();
    if (val) {
        qrcode.makeCode(val);
        downloadBtn.style.display = "block";
    } else {
        downloadBtn.style.display = "none";
    }
});

// ปุ่มดาวน์โหลด
downloadBtn.addEventListener('click', () => {
    const img = qrCanvas.querySelector('img');
    const link = document.createElement('a');
    link.href = img.src;
    link.download = 'my-qrcode.png';
    link.click();
});
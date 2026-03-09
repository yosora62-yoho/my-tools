const input = document.getElementById('userInput');
const countDisplay = document.getElementById('count');

// เมื่อมีการพิมพ์ใน textarea
input.addEventListener('input', () => {
    const textLength = input.value.length;
    countDisplay.innerText = textLength; // แสดงตัวเลขบนหน้าจอ
});
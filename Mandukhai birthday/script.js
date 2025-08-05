const messages = [
  "Үзэсгэлэнт гүнж Мандухайдаа төрсөн өдрийн мэнд хүргье",
  "Чамдаа хязгааргүй их хайртай жүү",
  "Мундаг хайр шүү",
  "愛してるよ 🫀♾️"
];

let index = 0;
const textElement = document.getElementById("text");

function showNextMessage() {
  textElement.innerText = messages[index];
  index = (index + 1) % messages.length;
  setTimeout(showNextMessage, 3000);
}

window.onload = showNextMessage
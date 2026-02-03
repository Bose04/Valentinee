<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Be My Valentine ❤️</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="card">
    <img src="https://i.imgur.com/4AiXzf8.png" alt="Cute" />
    <h2>Premika, will you be my Valentine? 💘</h2>

    <div class="buttons">
      <button id="yesBtn">Yes ❤️</button>
      <button id="noBtn">No 💔</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
* {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: linear-gradient(to right, #ffdde1, #ee9ca7);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  width: 90%;
  max-width: 320px;
}

.card img {
  width: 120px;
  margin-bottom: 10px;
}

.buttons {
  margin-top: 20px;
  position: relative;
}

button {
  padding: 10px 18px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

#yesBtn {
  background: #ff4d6d;
  color: white;
}

#noBtn {
  background: #ccc;
  position: absolute;
}
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function moveButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background:#ffdde1;
      font-size:22px;
    ">
      <h1>Yaaay! 💖🥰</h1>
      <p>You made my day!</p>
    </div>
  `;
});

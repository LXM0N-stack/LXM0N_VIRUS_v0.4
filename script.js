
const errorSound = document.getElementById("errorSound");
const laughSound = document.getElementById("laughSound");

function createPopup() {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.style.top = Math.random() * (window.innerHeight - 200) + "px";
  popup.style.left = Math.random() * (window.innerWidth - 400) + "px";
  popup.style.width = "400px";
  popup.innerHTML = `
    <div class="title-bar">
      <span>System Error</span>
      <button onclick="this.closest('.popup').remove()">X</button>
    </div>
    <div class="message"><strong>WARNING! LXM0N IS COMING!!</strong></div>
    <div class="buttons">
      <button onclick="alert('OK clicked')">OK</button>
      <button onclick="alert('Cancel clicked')">Cancel</button>
    </div>
  `;
  document.body.appendChild(popup);
  errorSound.currentTime = 0;
  errorSound.play();
}

function spamPopups(speed) {
  createPopup();
  setTimeout(() => spamPopups(speed * 0.95), speed);
}

setTimeout(() => {
  document.getElementById("boss").style.display = "block";
  laughSound.play();
}, 20000);

spamPopups(1500);

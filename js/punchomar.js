const hand = document.querySelector('.hand');
const omar = document.querySelector('.omar');
const scoreDisplay = document.querySelector('.score');
const itemUpgrade = document.querySelectorAll('div[id^="item"]');

let score = 0
let damage = 1
let damageMultiplier = 1
let item = "item0"

updateScore()
updateItem()

// Cursor
window.addEventListener('mouseover', () => {
  hand.classList.remove('hidden');
});

window.addEventListener('mousemove', (event) => {
  hand.style.left = `${event.clientX - 75}px`;
  hand.style.top = `${event.clientY - 25}px`;
});

window.addEventListener('mouseout', () => {
  hand.classList.add('hidden');
});

// Punch
window.addEventListener('click', (event) => {
  const handRect = hand.getBoundingClientRect();
  const omarRect = omar.getBoundingClientRect();

  if (
    handRect.right >= omarRect.left &&
    handRect.left <= omarRect.right &&
    handRect.bottom >= omarRect.top &&
    handRect.top <= omarRect.bottom
  ) {
    const particle = document.createElement('img');
    particle.src = "images/" + item + "_particle.gif";
    particle.classList.add('particle');
    particle.draggable = false;
    particle.style.left = `${event.clientX - 50}px`;
    particle.style.top = `${event.clientY - 50}px`;
    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 300);

    score += damage * damageMultiplier;

    updateScore()
    updateShop()
  }
});

// Update Score
function updateScore() {
  scoreDisplay.innerHTML = "ghirnzelle verlore: " + score;
}

//Update Shop
function updateShop() {
  //Upgrades
  itemUpgrade.forEach((div) => {
    const itemPrice = div.querySelector('#p').textContent.replace("'", "");

    if (!div.classList.contains('unlocked')) {
      if (score >= itemPrice) {
        div.classList.add("buyable");
      }

      if (score < itemPrice) {
        div.classList.remove("buyable");
      }
    }
  });
}

//Buy Item
itemUpgrade.forEach((div) => {
  const itemPrice = div.querySelector('#p').textContent.replace("'", "");

  div.addEventListener("click", () => {
    if (!div.classList.contains('unlocked')) {
      if (score >= itemPrice) {
        score -= itemPrice;
        div.classList.remove("buyable");
        div.classList.add("unlocked");
        updateScore()
        updateShop()
      }
    }
  });
});

//Equip Item
itemUpgrade.forEach((div) => {
  const itemDamage = div.querySelector('#d').textContent;
  const itemEquipped = document.querySelector('.equipped');

  div.addEventListener("click", () => {
    if (div.classList.contains('unlocked')) {
      if (itemEquipped) {
        itemEquipped.classList.remove('equipped');
      }

      div.classList.add('equipped');
      item = div.id;
      damage = itemDamage;
      updateItem()
      console.log("great success")
    }
  });
});

//Update Item
function updateItem() {
  hand.src = "images/" + item + ".png";
}


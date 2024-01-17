const bubble = document.getElementById("bubble");
const text = ["Not right meow.<br>I'm working", "Fuck off.", "They're paying me too little for this.", "rrrrrrrrr", "I fucking hate working here.", "hueremichi?<br>In this economy??", "my favourite movie is cats.", "who ate my canned anchovies??", "Yeah, nyan cat is my brother. wdya?", "Don't touch me!!"];

function bubbleText() {
  const randomIndex = Math.floor(Math.random() * text.length);
  bubble.innerHTML = "";
  bubble.innerHTML = text[randomIndex];
}

bubbleText();
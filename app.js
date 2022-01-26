"use strict";
const psCount = document.getElementById("PScount");
const bsCount = document.getElementById("BScount");
const reset = document.getElementById("reset");
const player = document.getElementById("player");
const bot = document.getElementById("bot");
const choices = document.getElementById("choices");
let chosenEmoji;
let index;
const emojis = ["✊", "✌️", "✋"];

choices.addEventListener("click", function (e) {
  if (!e.target.closest("button")) return;
  const id = e.target.id;
  if (id === "rock") rock();
  if (id === "paper") paper();
  if (id === "scissors") scissors();
});
function rock() {
  index = 0;
  game(index);
}
function paper() {
  index = 2;
  game(index);
}
function scissors() {
  index = 1;
  game(index);
}

function game(number) {
  chosenEmoji = emojis[number];
  player.textContent = chosenEmoji;
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  bot.textContent = randomEmoji;
  if (chosenEmoji === emojis[0]) {
    if (randomEmoji === emojis[1]) psCount.textContent++;
    if (randomEmoji === emojis[2]) bsCount.textContent++;
  }
  if (chosenEmoji === emojis[1]) {
    if (randomEmoji === emojis[0]) bsCount.textContent++;
    if (randomEmoji === emojis[2]) psCount.textContent++;
  }
  if (chosenEmoji === emojis[2]) {
    if (randomEmoji === emojis[0]) psCount.textContent++;
    if (randomEmoji === emojis[1]) bsCount.textContent++;
  }
}

function clear() {
  psCount.textContent = 0;
  bsCount.textContent = 0;
  player.textContent = "";
  bot.textContent = "";
}
reset.addEventListener("click", clear);

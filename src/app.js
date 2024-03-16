/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let cardLetter = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  /*  let cardType = ["♦", "♥", "♠", "♣"]; */
  let cardType = [
    { type: "♦", color: "red" },
    { type: "♥", color: "red" },
    { type: "♠", color: "black" },
    { type: "♣", color: "black" }
  ];
  let cardNumber = Math.floor(Math.random() * cardLetter.length);
  let cardStyle = Math.floor(Math.random() * cardType.length);

  let letra = cardLetter[cardNumber];
  /* document.querySelector(".letra").innerHTML = letra; */
  let letraColor = document.querySelector(".letra");
  letraColor.innerHTML = letra;

  let pinta = cardType[cardStyle].type;
  let colorPinta = cardType[cardStyle].color;

  let elemento1 = document.querySelector(".pinta");
  let elemento2 = document.querySelector(".pinta2");

  elemento1.innerHTML = pinta;
  elemento2.innerHTML = pinta;
  elemento1.style.color = colorPinta;
  elemento2.style.color = colorPinta;
  letraColor.style.color = colorPinta;

  document.querySelector(".shuffle").onclick = shuffle;
};

const shuffle = () => {
  let cardLetter = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  /*  let cardType = ["♦", "♥", "♠", "♣"]; */
  let cardType = [
    { type: "♦", color: "red" },
    { type: "♥", color: "red" },
    { type: "♠", color: "black" },
    { type: "♣", color: "black" }
  ];
  let cardNumber = Math.floor(Math.random() * cardLetter.length);
  let cardStyle = Math.floor(Math.random() * cardType.length);

  let letra = cardLetter[cardNumber];
  /* document.querySelector(".letra").innerHTML = letra; */
  let letraColor = document.querySelector(".letra");
  letraColor.innerHTML = letra;

  let pinta = cardType[cardStyle].type;
  let colorPinta = cardType[cardStyle].color;

  let elemento1 = document.querySelector(".pinta");
  let elemento2 = document.querySelector(".pinta2");

  elemento1.innerHTML = pinta;
  elemento2.innerHTML = pinta;
  elemento1.style.color = colorPinta;
  elemento2.style.color = colorPinta;
  letraColor.style.color = colorPinta;
};

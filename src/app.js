/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//This function its execute the HTML document first
window.onload = function() {
  document.querySelector("#press").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Hello from the from console");
};


//This function is to generate de excuse
let generateExcuse = function() {
  let who = ["The dog", "My uncle", "His cat", "My parrot"];
  let action = ["ate", "peed", "crushed", "stole"];
  let what = ["my phone", "the window", "the food"];
  let when = [
    "before the meeting",
    "yesterday",
    "when I wasn´t at home",
    "during I was having breakfast",
    "while I was studying"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};

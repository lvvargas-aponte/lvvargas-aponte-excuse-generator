/* eslint-disable */
import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector("#excuse").innerHTML = generateExcuse();
};

let generateExcuse = () => {
  //pieces of the sentence used to generate my excuse
  let who = ["The cat", "His turtle", "Her bird", "The bear"];
  let action = ["ate", "peed", "crushed", "broke", "burned", "lost"];
  let what = ["my homework", "the keys", "the car", "the house", "my phone"];
  let when = [
    "before the class",
    "right on time",
    "at dawn",
    "during my lunch",
    "while I was asleep",
    ""
  ];

  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomWhat = Math.floor(Math.random() * what.length);
  let randomWhen = Math.floor(Math.random() * when.length);

  return (`${who[randomWho]} ${action[randomAction]} ${what[randomWhat]} ${when[randomWhen]}`);
};

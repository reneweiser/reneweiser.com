import "./css/style.css";
import "./images/sp-rene.png";

import Utils from "./js/utilities.js";

const quotes = [
  "Sharing some bits of my internet life",
  "Monokai is the best color scheme there is. EVER.",
  "I like mondays!",
  "Clean code is very life, except when your deadline is tomorrow.",
];

const quoteContainer = document.querySelector("#random-quote");
quoteContainer.innerText = quotes[Utils.getRandomInt(quotes.length)];

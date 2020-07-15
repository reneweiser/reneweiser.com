import "./css/style.css";
import "material-icons";

import Utils from "./js/utilities.js";

// Handle image uploads
const requireAll = (r) => r.keys().forEach(r);
requireAll(require.context("./images", true, /\.(png|svg|jpg|gif)$/));
requireAll(require.context("../content/images", true, /\.(png|svg|jpg|gif)$/));

const quotes = [
  "Sharing some bits of my internet life",
  "Monokai is the best color scheme there is. EVER.",
  "I like mondays!",
  "Clean code is very life, except when your deadline is tomorrow.",
];

const quoteContainer = document.querySelector("#random-quote");
quoteContainer.innerText = quotes[Utils.getRandomInt(quotes.length)];

const articleImages = document.querySelectorAll("[data-article-image]");
for (let articleImage of articleImages) {
  articleImage.style = `
    background-image: url('./images/bg-tint.png'), url('${articleImage.getAttribute(
      "data-article-image"
    )}');
    background-repeat: repeat, no-repeat;
    background-position: top left, center center;
    background-size: auto, cover;
    background-attachment: fixed, fixed;
  `;
}

let quote = document.getElementById("quote");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

const quoteArr = [
  "So many books, so little time.",
  "Life would be tragic if it weren't funny.",
  "Tough times never last but tough people do.",
  "You miss 100 percent of the shots you never take.",
  "The opposite of love is not hate; it's indifference.",
  "The journey of a thousand miles begins with one step.",
  "Those who dare to fail miserably can achieve greatly.",
  "No one can make you feel inferior without your consent.",
  "If you tell the truth, you don't have to remember anything.",
  "You only live once, but if you do it right, once is enough.",
  "A friend is someone who knows all about you and still loves you.",
  "To live is the rarest thing in the world. Most people exist, that is all.",
  "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  "Life is ten percent what happens to you and ninety percent how you respond to it.",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
];

const fontArr = [
  "Arial, sans-serif",
  "Verdana, sans-serif",
  "Tahoma, sans-serif",
  "Trebuchet MS, sans-serif",
  "Times New Roman, serif",
  "Georgia, serif",
  "Garamond, serif",
  "Courier New, monospace",
  "Brush Script MT, cursive",
];

const randomNum = Math.floor(Math.random() * quoteArr.length);
quote.innerHTML = quoteArr[randomNum];

function showRandomQuote(e, elem) {
  const randomNum = Math.floor(Math.random() * quoteArr.length);
  const randomFont = Math.floor(Math.random() * fontArr.length);

  let btnBGCol = getComputedStyle(elem).backgroundColor;
  let quoteContainer = document.querySelector(".quoteContainer");
  let randR = Math.floor(Math.random() * 255);
  let randG = Math.floor(Math.random() * 255);
  let randB = Math.floor(Math.random() * 255);
  quoteContainer.style.backgroundColor = btnBGCol;
  quoteContainer.style.borderColor = `rgb(${randR}, ${randG}, ${randB})`;

  let quote = document.getElementById("quote");
  quote.style.fontFamily = fontArr[randomFont];
  quote.innerHTML = quoteArr[randomNum];
}

btn1.addEventListener("click", (e) => showRandomQuote(e, btn1));
btn2.addEventListener("click", (e) => showRandomQuote(e, btn2));
btn3.addEventListener("click", (e) => showRandomQuote(e, btn3));
btn4.addEventListener("click", (e) => showRandomQuote(e, btn4));

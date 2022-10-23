const addNumBtn = document.getElementById("add");
const capitalizeBtn = document.getElementById("cap");
const clearAllBtn = document.getElementById("clr");
const reverseBtn = document.getElementById("rev");
const shuffleBtn = document.getElementById("shf");
const sortBtn = document.getElementById("srt");
const stripBlankBtn = document.getElementById("stp");

function addNumFn() {
  const textarea = document.querySelector("#input-text");
  const textareaArr = textarea.value.split("\n");
  let result = textareaArr.map((element, index) => `${index + 1}. ${element}`);
  textarea.value = result.join("\n");
}

function capitalizeFn() {
  const textarea = document.querySelector("#input-text");
  const textareaArr = textarea.value.split("\n");
  let result = textareaArr.map((variable) => variable.toUpperCase());
  textarea.value = result.join("\n");
}

function clearAllFn() {
  const textarea = document.querySelector("#input-text");
  textarea.value = "";
}

function reverseFn() {
  const textarea = document.querySelector("#input-text");
  const textareaArr = textarea.value.split("\n");
  let result = textareaArr.map((variable) =>
    variable.split("").reverse().join("")
  );
  textarea.value = result.join("\n");
}

function shuffleFn() {
  const textarea = document.querySelector("#input-text");
  const textareaArr = textarea.value.split("\n");
  for (i = textareaArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [textareaArr[i], textareaArr[j]] = [textareaArr[j], textareaArr[i]];
  }
  textarea.value = textareaArr.join("\n");
}

function sortFn() {
  const textarea = document.querySelector("#input-text");
  const textareaArr = textarea.value.split("\n");
  let result = textareaArr.sort();
  textarea.value = result.join("\n");
}

function stripBlankFn() {
  const textarea = document.querySelector("#input-text");
  const textareaArr = textarea.value.split("\n");
  let result = textareaArr
    .map((element) => element.trim())
    .filter((element) => element.length > 0);
  textarea.value = result.join("\n");
}

addNumBtn.addEventListener("click", addNumFn);
capitalizeBtn.addEventListener("click", capitalizeFn);
clearAllBtn.addEventListener("click", clearAllFn);
reverseBtn.addEventListener("click", reverseFn);
shuffleBtn.addEventListener("click", shuffleFn);
sortBtn.addEventListener("click", sortFn);
stripBlankBtn.addEventListener("click", stripBlankFn);

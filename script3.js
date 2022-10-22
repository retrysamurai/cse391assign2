let screen = document.querySelector(".screen");
let text = document.querySelectorAll(".screen p");
const addNumBtn = document.getElementById("add");
const capitalizeBtn = document.getElementById("cap");
const clearAllBtn = document.getElementById("clr");
const reverseBtn = document.getElementById("rev");
const shuffleBtn = document.getElementById("shf");
const sortBtn = document.getElementById("srt");
const stripBlankBtn = document.getElementById("stp");

let textNodeList = text;
let textArr = [];

function addNumFn() {
  textNodeList.forEach((element, index) => {
    textNodeList[index].innerHTML = `${index + 1}. ${element.innerHTML}`;
  });
}

function capitalizeFn() {
  textNodeList.forEach((element, index) => {
    textArr[index] = element.innerHTML;
  });

  textArr.forEach((element, index) => {
    textNodeList[index].innerHTML = element.toUpperCase();
  });
}

function clearAllFn() {
  const childCount = screen.childElementCount;
  for (i = 0; i < childCount; i++) {
    screen.removeChild(screen.lastElementChild);
  }

  setTimeout(() => location.reload(), 1000);
}

function reverseFn() {
  textNodeList.forEach((element, index) => {
    textArr[index] = element.innerHTML;
  });

  for (i = textArr.length - 1; i >= 0; i--) {
    textNodeList[textArr.length - 1 - i].innerHTML = textArr[i];
  }
}

function shuffleFn() {
  textNodeList.forEach((element, index) => {
    textArr[index] = element.innerHTML;
  });

  let randArr = [];

  for (i = 0; i < textArr.length; i++) {
    randArr.push(i);
  }

  for (i = randArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [randArr[i], randArr[j]] = [randArr[j], randArr[i]];
  }

  textNodeList.forEach((element, index) => {
    textNodeList[index].innerHTML = textArr[randArr[index]];
  });
}

function sortFn() {
  textNodeList.forEach((element, index) => {
    textArr[index] = element.innerHTML;
  });

  textArr = textArr.sort();

  textArr.forEach((element, index) => {
    textNodeList[index].innerHTML = textArr[index];
  });
}

function stripBlankFn() {
  const brTag = screen.getElementsByTagName("br");
  while (brTag.length) {
    brTag[0].parentNode.removeChild(brTag[0]);
  }
}

addNumBtn.addEventListener("click", addNumFn);
capitalizeBtn.addEventListener("click", capitalizeFn);
clearAllBtn.addEventListener("click", clearAllFn);
reverseBtn.addEventListener("click", reverseFn);
shuffleBtn.addEventListener("click", shuffleFn);
sortBtn.addEventListener("click", sortFn);
stripBlankBtn.addEventListener("click", stripBlankFn);

const input = document.getElementById("series-input");
let max = document.getElementById("max");
let min = document.getElementById("min");
let sum = document.getElementById("sum");
let avg = document.getElementById("avg");
let rev = document.getElementById("rev");

let globalSum = 0;

function getMax(arr) {
  let maxNum = 0;
  arr.forEach((element) => {
    if (Number(element) > maxNum) {
      maxNum = element;
    }
  });

  max.innerHTML = maxNum;
}

function getMin(arr) {
  let minNum = Number.MAX_VALUE;
  arr.forEach((element) => {
    if (Number(element) < minNum) {
      minNum = element;
    }
  });

  min.innerHTML = minNum;
}

function getSum(arr) {
  let summation = 0;
  arr.forEach((element) => {
    summation += Number(element);
  });

  globalSum = summation;
  sum.innerHTML = summation;
}

function getAvg(arr) {
  let avgVal = globalSum / arr.length;
  avg.innerHTML = avgVal;
}

function getRev(arr) {
  let revArr = arr.reverse();
  let container = revArr[0];
  for (i = 1; i < revArr.length; i++) {
    container += `, ${revArr[i]}`;
  }

  rev.innerHTML = container;
}

input.addEventListener("keydown", (e) => {
  const series = input.value.split(", ");
  if (e.key === "Enter") {
    getMax(series);
    getMin(series);
    getSum(series);
    getAvg(series);
    getRev(series);
  }
});

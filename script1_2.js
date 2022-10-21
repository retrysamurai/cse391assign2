const convert = document.getElementById("convert");

convert.addEventListener("click", () => {
  const input = document.getElementById("numInput").value;
  const select = document.getElementById("dropdown");
  console.log(select.value);
  switch (select.value) {
    case "lb2kg":
      document.getElementById("result").innerHTML = input * 0.4536;
      break;
    case "kg2lb":
      document.getElementById("result").innerHTML = input * 2.2046;
      break;
  }
});

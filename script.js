let dark = true;

document.getElementById("themeBtn").addEventListener("click", function () {
  if (dark) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "#111";
    document.body.style.color = "white";
  }

  dark = !dark;
});

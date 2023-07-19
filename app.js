var radioButton = document.getElementById("radio-button");

radioButton.addEventListener("click", function (e) {
  if (e.checked === true) {
    e.checked = false;
  }
});

window.addEventListener("scroll", function () {
  const value = window.scrollY * 0.8;
  document.querySelector(".disk94").style.transform =
    "rotate(" + value + "deg)";
});

const textbox = document.querySelector("#texx");
const letterCount = document.querySelector("#a");
textbox.addEventListener("input", function() {
  letterCount.innerHTML = this.value.length;
});
const textbox = document.querySelector("#evaluatedText");
const letterCount = document.querySelector("#letterCount");
textbox.addEventListener("input", function() {
  letterCount.innerHTML = this.value.length;
});
var button = document.querySelector("button");
button.addEventListener("click", TurnButton);

function TurnButton() {
  let luz = document.querySelector(".light");
  luz.classList.toggle("active");

  let ballSpan = document.querySelector("span");
  ballSpan.classList.toggle("span-active");
  
  button.classList.toggle('buttonActive')

}

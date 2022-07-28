const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const setBG = document.querySelector("#main")
const textContent = document.querySelector("#text")
btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    
    setBG.style.backgroundColor = colors[randomNumber];
    color.textContent=colors[randomNumber];
    
  });
  
  function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }
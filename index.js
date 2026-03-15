const hum = document.querySelector(".hum");
const list = document.querySelector(".list");

hum.addEventListener("click", function(){
  list.classList.toggle("show");
});
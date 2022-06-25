"sue script";
const menu = document.querySelector(".menu");
const hide = document.querySelector(".a");
const close = document.querySelector(".m");

menu.addEventListener("click", () => hide.classList.remove("li"));
close.addEventListener("click", () => hide.classList.add("li"));
document
  .querySelector(".con")
  .addEventListener("click", () => hide.classList.add("li"));

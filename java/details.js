const btnDecrement = document.getElementById("popup-decrement");
const btnIncrement = document.getElementById("popup-increment");
const popupCount = document.getElementById("popup-count");

const topDiscountBar = document.getElementsByClassName("discount")[0];

btnDecrement.addEventListener("click", () => {
  let count = parseInt(popupCount.textContent);
  if (count > 1) {
    count--;
    popupCount.textContent = count;
  }
});
btnIncrement.addEventListener("click", () => {
  let count = parseInt(popupCount.textContent);
  count++;
  popupCount.innerText = count;
});

window.addEventListener("scroll", () => {
  if (+window.scrollY > 0) {
    topDiscountBar.classList.add("discount-hidden");
    // header.classList.add("sticky");
  } else {
    topDiscountBar.classList.remove("discount-hidden");
  }
});

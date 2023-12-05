let counter = 0;
const button = document.querySelector(".button");
const lights = document.querySelectorAll<HTMLElement>(".light");

// increment counter and re-render lights
if (button) {
  button.addEventListener("click", () => {
    counter++;
    checkAllProducts();
  });
}
// re-render function
function checkAllProducts() {
  lights.forEach((light) => {
    if (Number.parseInt(light.innerHTML) <= counter) {
      light.style.backgroundColor = "green";
    } else {
      light.style.backgroundColor = "red";
    }
  });
}

// event listner on parent to decrement counter
const products = document.querySelector(".products");
products?.addEventListener("click", (e) => handlePurchase(e));

function handlePurchase(e: Event) {
  if (e.target instanceof HTMLElement) {
    if (e.target && e.target.className === "product") {
      const price = Number.parseInt(e.target.children[0].innerHTML);

      if (counter >= price) {
        counter = counter - price;
        checkAllProducts();
      }
    }
  }
}

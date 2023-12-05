"use strict";
let counter = 0;
const button = document.querySelector(".button");
const lights = document.querySelectorAll(".light");
// increment counter and re-render lights
if (button) {
    button.addEventListener("click", () => {
        counter++;
        checkAllProducts();
        updateCounter();
    });
}
// re-render function
function checkAllProducts() {
    lights.forEach((light) => {
        if (Number.parseInt(light.innerHTML) <= counter) {
            light.style.backgroundColor = "green";
        }
        else {
            light.style.backgroundColor = "red";
        }
    });
}
// event listner on parent to decrement counter
const products = document.querySelector(".products");
products === null || products === void 0 ? void 0 : products.addEventListener("click", (e) => handlePurchase(e));
function handlePurchase(e) {
    if (e.target instanceof HTMLElement) {
        if (e.target && e.target.className === "product") {
            const price = Number.parseInt(e.target.children[0].innerHTML);
            if (counter >= price) {
                counter = counter - price;
                checkAllProducts();
                updateCounter();
            }
        }
    }
}
function updateCounter() {
    screen = document.querySelector(".screen");
    screen.innerHTML = counter;
}

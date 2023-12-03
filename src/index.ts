let counter = 0;
const button = document.querySelector(".button");
console.log("button", button);

if (button) {
  button.addEventListener("click", () => {
    console.log("click");
  });
}

function handleClick() {
  console.log("click");
}

const button2 = document.getElementById("button");

console.log("but2", button2);

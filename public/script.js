let content = document.getElementById("target");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (content.innerText === "hello") {
    content.innerText = "world";
  } else {
    content.innerText = "hello";
  }
});

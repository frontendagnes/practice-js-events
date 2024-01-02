const body = document.querySelector("body");
const child = document.querySelector(".child");
const parent = document.querySelector(".parent");
const grandparent = document.querySelector(".grandparent");

const arr = [child, parent, grandparent];

function addClass(e) {
  e.stopPropagation();
  this.classList.add("clicked");
}

function removeClass(e) {
  arr.forEach((item) => {
    if (item.classList.contains("clicked")) {
      item.classList.remove("clicked");
    }
  });
}

function changeColor(e) {
  e.stopPropagation();
  let time = this.dataset.time;
  arr.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("clicked");
    }, index * time);
  });
}

child.addEventListener("click", changeColor);

parent.addEventListener("click", addClass);

grandparent.addEventListener("click", addClass);

body.addEventListener("click", removeClass);

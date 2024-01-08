const stats = {
  paragraphs: {
    p1: 0,
  },
  links: {
    "/dolor.html": 0,
  },
};

/* tutaj umieść swój kod */

const link = document.querySelectorAll("[href]");
const text = document.querySelectorAll("[data-id]");


function count(obj, atr, data) {
  if (!obj[atr][data]) {
    obj[atr][data] = 1;
  } else {
    obj[atr][data]++;
  }
}

link.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const dataL = item.getAttribute("href");
    count(stats, "links", dataL)
  });
});

text.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const dataP = item.dataset.id;
    count(stats, "paragraphs", dataP);
  });
});
/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector(".stats");
const fireCustomEvent = function (element, name) {
  console.log(element, "=>", name);

  const event = new CustomEvent(name, {
    bubbles: true,
  });

  element.dispatchEvent(event);
};

const renderStats = function (data, element) {
  let html = "";
  for (let elementType in data) {
    html += "<ul>";

    for (let key in data[elementType]) {
      html += "<li>";
      html += key + " -> " + data[elementType][key];
      html += "</li>";
    }

    html += "</ul>";
  }

  element.innerHTML = html;
};

document.addEventListener("click", function (e) {
  const tagName = e.target.tagName;
  if (tagName.includes("P") || tagName.includes("A")) {
    fireCustomEvent(statsElement, "render");
  }
});
statsElement.addEventListener(
  "render",
  renderStats.bind(this, stats, statsElement)
);
document.addEventListener(
  "DOMContentLoaded",
  fireCustomEvent.bind(null, statsElement, "render")
);

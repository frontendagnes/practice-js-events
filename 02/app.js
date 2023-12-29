const element = document.querySelector("div");

if (element) {
  element.addEventListener("mousemove", () => {
    console.log("Jestem w elemencie div");
  });

  element.addEventListener("mouseout", () => {
    console.log("Opóściłem div");
  });
}

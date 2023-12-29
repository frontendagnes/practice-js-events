const buttons = document.querySelectorAll("button");

buttons && buttons.forEach((item) => {
    item.addEventListener("click", () =>{
        item.innerText = "clicked"
        item.disabled = "false"
        console.log("clicked")
    })
})

// buttons &&
//   buttons.forEach((item) => {
//     item.addEventListener("click", clickedBtn);
//   });

// function clickedBtn() {
//   this.innerHTML = "Clicked";
//   console.log("Clicked");

//   this.removeEventListener("click", clickedBtn);
// }

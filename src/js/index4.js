const showButton = document.getElementById("show-btn");
const hiddenButtons = document.querySelectorAll(".hidden");
const repeatButton = document.querySelectorAll(".repeat-btn2");
const btnContainer = document.querySelector(".btn-container");
const showButtonText = showButton.querySelector("span");
let isVisible = false;



showButton.addEventListener("click", () => {
    isVisible = !isVisible;
    hiddenButtons.forEach(button => {
        button.style.display = isVisible ? "flex" : "none";
    });
    
    showButton.innerHTML = isVisible 
        ? `<img src="img/iconUp.svg"> Cкрыть` 
        : `<img src="img/icon down.svg"> Показать`;
    
});









const showButton2 = document.getElementById("container-repair__show-btn");
const hiddenButtons2 = document.querySelectorAll(".hidden2");
let isVisible2 = false;

showButton2.addEventListener("click", () => {
    isVisible2 = !isVisible2;

    hiddenButtons2.forEach(button => {
        button.style.display = isVisible2 ? "flex" : "none";
    });

    showButton2.innerHTML = isVisible2
        ? `<img src="img/iconUp.svg"> Скрыть`
        : `<img src="img/icon down.svg"> Показать`;
});


document.addEventListener("click", () => {
    const click = new Audio("click.mp3");
    click.play();
});

document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".type");
    const message = title.textContent;

    title.textContent = "";

    let i = 0;

    function typeText() {
        if (i < message.length) {
            title.textContent += message[i];
            i++;

            setTimeout(typeText, 200);
        } else {
            title.classList.add("done");
        }
    }

    typeText();
});
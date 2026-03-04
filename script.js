let div1 = document.getElementById("divTest");

let texts = ["prova", "fatto"];

let count = 0;

let text = "";

window.onload = setInterval(
    () => {
        count = !count;
        text = texts[count];
        div1.innerHTML = text;
    }, 1000
);
let div1 = document.getElementById("divTest");

let texts = ["prova", "fatto"];

let count = 0;

let text = texts[count];

setInterval(
    () => {
        count = !count;
    }, 1000
);
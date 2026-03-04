let div1 = document.getElementById("divTest");

let texts = ["prova", "fatto"];

let count = 0;

let text = texts[count];

do {
    setInterval(
        () => {
            count = !count;
        }, 1000
    );
    div1.innerHTML = text;
} while(true);
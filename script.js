let div1 = document.getElementById("divTest");

let texts = ["prova", "fatto"];

let count = 0;

let text = texts[count];

div1.innerHTML = text;

while (1) {
    setInterval(
        () => {
            count += 1;
            count = count % 2;
        }, 1000
    )
};
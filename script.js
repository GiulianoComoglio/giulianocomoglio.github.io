let div1 = document.getElementById("divTest");

let texts = ["prova", "fatto"];

let count = 0;

let text = "";

setInterval(
    () => {
        count = !count;
        text = texts[count];
    }, 1000
    
);
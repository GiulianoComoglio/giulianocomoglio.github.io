let div1 = document.getElementById("divTest");

let texts = ["prova", "fatto"];

let count = 0;

window.onload = setInterval(
    () => {
        count += 1;
        count = count % 2; 
        div1.innerHTML = texts[count];
    }, 1000
);
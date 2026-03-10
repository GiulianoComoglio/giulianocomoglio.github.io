let div1 = document.getElementById("divTest");

let texts = ["prova", "fatto"];

let count = 0;
let audioCount = 0;

let audio = new Audio(`https://cdn.freesound.org/previews/504/504819_9961300-lq.mp3`);

audio.volume = 0.1;


window.onload = setInterval(
    () => {
        count += 1;
        count = count % 2; 
        div1.innerHTML = texts[count];

    }, 1000
);

window.onscroll = setInterval(
    () => {
        audioCount += 1;
        audioCount = audioCount % 2; 
        if (audioCount !=0) {
            audio.play();
        } else {
            audio.pause();
        };

    }, 1000
)

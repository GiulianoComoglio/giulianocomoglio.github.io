let div1 = document.getElementById('div1');

div1.innerHTML = "prova";

while(1) {
    setInterval(
        () => {
            div1.innerHTML = "fatto"
        }, 2000
    );
    setInterval(
        () => {
            div1.innerHTML = "prova"
        }, 2000
    );
};
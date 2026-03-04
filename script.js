let div1 = document.getElementById('div1');

div1.innerHTML = "prova";

while(1) {
    setTimeout(
        () => {
            div1.innerHTML = "fatto"
        }, 2000
    );
    setTimeout(
        () => {
            div1.innerHTML = "prova"
        }
    );
};
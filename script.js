function loop() {
    while(1) {
        setTimeout(() => {
            document.getElementById('tentativo').textContent="ciao"
        }, 2000);
        setTimeout(() => {
            document.getElementById('tentativo').textContent="arrivederci"
        }, 2000);
    }
};

window.onload = loop();

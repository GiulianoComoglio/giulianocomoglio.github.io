function loop() {
    while(1) {
        setTimeout(() => {
            document.getElementById('tentativo').innerHTML="ciao"
        }, 2000);
        setTimeout(() => {
            document.getElementById('tentativo').innerHTML="arrivederci"
        }, 2000);
    }
};

window.onload = loop();


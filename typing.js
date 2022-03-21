var i = 0;
var speed = 50;
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("judul").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 250);
    }
}
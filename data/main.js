var myButton = document.getElementById("mi_boton");
var myText = document.getElementById("mi_texto");
var count = 0;

myButton.onclick = function() {
    count++;
    if (count == 10) {
        count = 0;
    }
    myText.innerHTML = count;
}
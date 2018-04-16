function roll() {
    var x = document.getElementById('roll');
    var y = document.getElementById('rollButton');
    if (x.classList.contains('expand')) {
        y.innerHTML = "MORE";
    } else y.innerHTML = "LESS";
    x.classList.toggle('expand');
}
window.onload = function () {
    document.getElementById("loader").style.display = "none"
}

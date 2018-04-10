//function roll() {
//    var x = document.getElementById('roll');
//    var y = document.getElementById('rollButton');
//    if (x.classList.contains('rollOver')) {
//        x.classList.remove('rollOver');
//        x.classList.add('rollDown');
//        y.innerHTML = "LESS";
//    } else if (x.classList.contains('rollDown')) {
//        x.classList.remove('rollDown');
//        x.classList.add('rollOver');
//        y.innerHTML = "MORE";
//    }
//}
function roll() {
    var x = document.getElementById('roll');
    var y = document.getElementById('rollButton');
    if (x.classList.contains('expand')) {
        y.innerHTML = "MORE";
    } else y.innerHTML = "LESS";
    x.classList.toggle('expand');
}

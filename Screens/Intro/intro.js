var AM = document.getElementById("AM");
var offset = 4525;
function Animate() {
    offset = offset-20;
    window.requestAnimationFrame(Animate);
    AM.style.strokeDasharray = 4525,4525
    AM.style.strokeDashoffset = offset;
}

Animate();
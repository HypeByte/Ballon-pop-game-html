var GH = document.getElementById("GH");
var GH_COLORS = ["#613DC1","#FB4D3D","#00A7E1","#6EFF51","#FFF47C"];

var i =-1;

function ColorSwitch() {
i = i+1;
if(i === 5){
    i = 0;
}
GH.style.color = GH_COLORS[i];
};

ColorSwitch();
var int = setInterval(ColorSwitch,1000);

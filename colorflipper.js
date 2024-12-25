const body= document.getElementsByTagName('body')[0];
body.style.backgroundColor='green';

function setColor(name){
    body.style.backgroundColor=name;
}
function setRandomColor(){
    const red= Math.round(Math.random()*255);
    const green= Math.round(Math.random()*255);
    const blue= Math.round(Math.random()*255);
    const randomColor= `rgb(${red},${green}, ${blue})`;
    body.style.backgroundColor= randomColor;
}
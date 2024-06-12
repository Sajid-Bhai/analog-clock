const hourHand=document.getElementById("hour-hand");
const minuteHand=document.getElementById("minute-hand");
const secondHand=document.getElementById("second-hand");


function setHand(){
    const time=new Date();
    // console.dir(time)

    var second=time.getSeconds()/60;
    var minute=(second+time.getMinutes())/60;
    var hour=(minute+time.getHours())/12;

    rotateHands(secondHand,second);
    rotateHands(minuteHand,minute);
    rotateHands(hourHand,hour);
}

function rotateHands(element,rotation){
    element.style.setProperty('--rotate',rotation*360);
}

setInterval(setHand,100);
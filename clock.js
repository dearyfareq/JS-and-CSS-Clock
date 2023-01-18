function setclock(){
    const jetzt = new Date();

    //now to select the seconds and min with the hour and set the transformation
    const second = jetzt.getSeconds();
    const secDeg = ((second/60) * 360) + 90;
    document.getElementById("seconds").style.transform = `rotate(${secDeg}deg)`;

    const minute= jetzt.getMinutes();
    const minDeg = ((minute/60) * 360) + 90;
    document.getElementById("minutes").style.transform = `rotate(${minDeg}deg)`;

    const hour = jetzt.getSeconds();
    const hourDeg = ((hour/12) * 360) + 90;
    document.getElementById("hours").style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setclock, 1000);
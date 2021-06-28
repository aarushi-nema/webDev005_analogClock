const hourHand= document.querySelector('#hourHand');
const minuteHand= document.querySelector('#minuteHand');
const secondHand= document.querySelector('#secondHand');

(setInterval(()=>{
    let date= new Date();
    let hours= date.getHours();
    let minutes= date.getMinutes();
    let seconds= date.getSeconds();
    let hourHandRotation= 30*hours+minutes/2;
    let minuteHandRotation= 6*minutes;
    let secondHandRotation= 6*seconds;

    hourHand.style.transform= `rotate(${hourHandRotation}deg)`;
    minuteHand.style.transform= `rotate(${minuteHandRotation}deg)`;
    secondHand.style.transform= `rotate(${secondHandRotation}deg)`;
}, 1000));
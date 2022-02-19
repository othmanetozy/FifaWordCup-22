const DaysEL=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minutesEl=document.getElementById('minute');
const secondsEl=document.getElementById('second');

const fifaWOrdCu = "22 nov 2022";

function countDouwn(){
 
     const FifaWOrdCup = new Date(fifaWOrdCu);
     const currentdate = new Date();

    const Tseconds = (FifaWOrdCup-currentdate) /1000 ;
 



    const Days  =Math.floor( Tseconds / 3600 / 24 );

    const hours =Math.floor(Tseconds / 3600 ) %24;
    
    const minute =Math.floor(Tseconds / 60 )% 60;
    
    const second =Math.floor(Tseconds) % 60;
    
    
     DaysEL.innerHTML= FormTime(Days);
     hoursEl.innerHTML= FormTime(hours);
     minutesEl.innerHTML= FormTime(minute);
     secondsEl.innerHTML=FormTime(second);
    }


      function FormTime(time) {
 
        return time < 10 ? `0${time}` : time;
      }




       //init
    countDouwn();

    setInterval(countDouwn, 1000);    // dé crementation ctr 

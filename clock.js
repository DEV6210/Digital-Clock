setInterval(()=>{
        
    let hours=document.getElementById('hours');
    let minutes=document.getElementById('minutes');
    let seconds=document.getElementById('seconds');
    let ampm=document.getElementById('ampm');

    let hh=document.getElementById('hh');
    let mm=document.getElementById('mm');
    let ss=document.getElementById('ss');


    let hh_dot=document.querySelector('.hh_dot');
    let mm_dot=document.querySelector('.mm_dot');
    let ss_dot=document.querySelector('.ss_dot');

    let h= new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let am= h>=12 ? "PM" : "AM";

    //convert 24 hours to 12 hours

    if(h>12){
        h=h-12;
    }
    //add zero before single digit number
    h=(h<10)? "0" + h : h;
    m=(m<10)? "0" + m : m;
    s=(s<10)? "0" + s : s;


    hours.innerHTML=h + "<br/><span>Hours</span>";
    minutes.innerHTML=m + "<br/><span>Minutes</span>";
    seconds.innerHTML=s + "<br/><span>Seconds</span>";
    ampm.innerHTML=am;        
    
    //12 hour
    hh.style.strokeDashoffset = 440-(440 * h)/12;
    //60 minites
    mm.style.strokeDashoffset = 440-(440 * m)/60;
    //60 second
    ss.style.strokeDashoffset = 440-(440 * s)/60;


    hh_dot.style.transform = `rotate(${h * 30}deg)`;
    mm_dot.style.transform = `rotate(${m * 6}deg)`;
    ss_dot.style.transform = `rotate(${s * 6}deg)`;

})
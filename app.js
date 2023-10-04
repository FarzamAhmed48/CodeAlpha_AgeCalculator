var dateBirth=document.getElementById("dob");


function get(){
    var sr=String(dateBirth.value)
    var year =sr.slice(0,4)
    var month =sr.slice(5,7)
    var dt=sr.slice(8,10)
    if(month==="01"){
        month="jan"
    }
    else if(month==="02"){
        month="feb"
    }
    else if(month==="03"){
        month="mar"
    }
    else if(month==="04"){
        month="apr"
    }
    else if(month==="05"){
        month="may"
    }
    else if(month==="06"){
        month="jun"
    }
    else if(month==="07"){
        month="jul"
    }
    else if(month==="08"){
        month="aug"
    }
    else if(month==="09"){
        month="sep"
    }
    else if(month==="10"){
        month="oct"
    }
    else if(month==="11"){
        month="nov"
    }
    else if(month==="12"){
        month="dec"
    }
    var date = new Date(dt+month+year);
    var getMilli=date.getTime();
    var conv=1000*60*60*24*30.41667*12
    var currentdate=new Date();
    // var nd= new Date("4 oct 2023")
    // var ndm=nd.getTime();
    var currentMilli=currentdate.getTime();
    var diff = currentMilli-getMilli;
    var ageyear= diff/conv
    var accyear=Math.floor(ageyear)
    var agemonth=(ageyear-accyear)
    var accmon=Math.floor(agemonth*12)
    var agedays=(agemonth-Math.floor(agemonth))
    var accdays=Math.floor(agedays*30)
    var h2=document.getElementById("age")
    h2.innerHTML="Your age is "+ accyear+" years "+accmon+" month "+accdays+" days" 
}



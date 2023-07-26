function currenttime()
{
    var date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
   // hour = updateTime(hour);
    //min = updateTime(min);
    //sec = updateTime(sec);


    document.getElementById("clock").innerText = hour + ":" + min + ":" + sec;
   var t = setTimeout(function() {currenttime()},1000);
}

// function updateTime(k)
// {
//     if(k<10)
//     {
//         return "0"+k;
//     }
//     else{
//         return k;
//     }
// }
currenttime();
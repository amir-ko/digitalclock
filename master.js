function showtime(){
    let date = new Date();
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let ses ="AM"
    
    if(h == 0){
        h =12;
    }
    if(h>12){
        h = h - 12;
        ses = "PM"
    }
    h = (h <10) ? "0" + h : h;
    m = (m <10) ? "0" + m : m;
    s = (s <10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + "" + ses;
    document.getElementById("myclock").innerHTML= time ;
    setTimeout(showtime,1000);
}

showtime();
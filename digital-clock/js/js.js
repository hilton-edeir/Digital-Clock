
setInterval(()=>{
    const time = document.querySelector(".display #time")

    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    let prepand = "AM"

    if(hours >  12){
        hours -= 12
        prepand = "PM"
    }
    if(hours < 10) {
        hours = "0"  + hours
    }
    if(minutes < 10) {
        minutes = "0"  + minutes
    }
    if(seconds < 10) {
        seconds = "0"  + seconds
    }
    
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + prepand
});
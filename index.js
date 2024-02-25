let x = 10;
// fetches the current date
const countdownDate = new Date();

// Adds ten days to the current day
countdownDate.setDate(countdownDate.getDate() + x);

// grabs the html attributes with the corresponding ID
const d = document.getElementById("days");
const h = document.getElementById("hour");
const m = document.getElementById("min");
const s = document.getElementById("sec");

// repeats the function every second
const timer = setInterval(countdown,1000);

//declaration of the function
countdown();


function countdown() {
    //gets the current time and date
    const now = new Date().getTime();

    //gets the difference between the time 10 days from now and the current time
    const difference = countdownDate - now;

    //computation 
    let days = Math.floor(difference/ (1000*60*60*24));
    let hours = Math.floor((difference % (1000*60*60*24))/ (1000*60*60));
    let minute = Math.floor((difference % (1000*60*60))/ (1000*60));
    let seconds= Math.floor((difference % (1000*60))/ 1000);
    
    //adds a zero infront the time if it becomes a one digit 
    days = days < 10? '0' + days:days;
    hours = hours < 10? '0' + hours:hours;
    minute = minute < 10? '0' + minute:minute;
    seconds = seconds < 10? '0' + seconds:seconds;

     //displays the values in realtime in html document
    d.innerHTML = `${days}`;
    h.innerHTML = `${hours}`;
    m.innerHTML = `${minute}`;
    s.innerHTML = `${seconds}`;

    //Stops the timer if it reaches zero
    if (difference < 0){
        clearInterval(timer);
    }
}





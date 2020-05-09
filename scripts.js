
let time =new Date();    //retrieve time
let timeAbbr = time.getHours()>12 ? "p.m." : "a.m";   //set time abbreviation
let hours = time.getHours()>12 ? time.getHours() - 12 : time.getHours(); //no military time
let minutes = time.getMinutes(); 
if (minutes<10){                        //add zero before single digit minutes
    minutes="0"+ minutes.toString();
}

let displayTime = hours + ":" + minutes + " "+ timeAbbr;    //put the time together
$("#time").text(displayTime);       //display time on DOM

if (time.getHours()<20 && time.getHours()>7){      // background color based on time of day 
    //day time hours
    $("#weather-container").css("background", "linear-gradient(180deg, rgba(37,27,215,1) 0%, rgba(65,188,236,0.95) 60%)")
}else{
    //night time hours
    $("#weather-container").css("background", "linear-gradient(180deg, rgba(3,2,22,1) 0%, rgba(9,9,121,0.95) 50%, rgba(14,111,130,1) 100%)")
}
//CALL FOR WEATHER CONDITIONS
$.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=texarkana&units=imperial&appid=610c6bd442f660648855be9d7080adc6",
    function(data){
        
        let icon = "https://openweathermap.org/img/wn/" + data.weather[0].icon +".png"; //get icon
        let temp = Math.round(data.main.temp);  //get temp
        let weather = data.weather[0].main; //get weather condition
        //Display weather on DOM
        $("#icon").attr("src", icon);
        $("#temp").append(temp + " &deg;");
        $("#weather").append(weather);
})



let time =new Date();    //retrieve time
let timeAbbr = time.getHours()>11 ? "p.m." : "a.m";   //set time abbreviation
let hours = time.getHours()>12 ? time.getHours() - 12 : time.getHours(); //no military time
let minutes = time.getMinutes(); 
if (minutes<10){                        //add zero before single digit minutes
    minutes="0"+ minutes.toString();
}

let displayTime = hours + ":" + minutes + " "+ timeAbbr;    //put the time together
$("#time").text(displayTime);       //display time on DOM

// GALACTUS QUOTES - 19 items//
let quote = ['"My Herald, the great hunger is upon me. Where is the next world upon which I can feed?"',
             "My journey is ended! This planet shall sustain me until it has been drained of all elemental life! So speaks Galactus!",
             "I HUNGER!",
             "I have come from the farthest reaches of space &mdash; to proclaim the doom of the human race!",
             "I have need of a new Herald...",
             "I am power incarnate! To Galactus, nothing is impossible!",
             "Galactus does what Galactus must to survive.",
             "Galactus... Hungers.",
             "I am inevitable. I am... Destiny. I am Galactus and I hunger.",
             "Soon I will outgrow this form... and I grow... hungry.",
             '"No living thing dares ignore my call. For I am that which has always been, since this Universe was birthed from the ashes of the last."',
             "I am the hunger that dooms worlds.",
             "I am he who is beyond such frail Concepts as good and evil. I am Galactus.",
             "These beings die for the highest of callings -- to keep me alive. Such is the way of things.",
             "Human suffering is irrelevant to me!",
             "Who are you? Who is so ignorant as to confront Galactus in his sanctum?",
             "I know not who or what they are below! I only know Galactus must feed!",
             "I am Galactus. The be-all and end-all am I!",
             "You exist solely by the grace I have given and the leash you tug against. Or have you forgotten whom you serve, Little God?!"
];

$("#quote").text(quote[10])
             

//CALL FOR WEATHER CONDITIONS
$.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=texarkana&units=imperial&appid=610c6bd442f660648855be9d7080adc6",
    function(data){
        
       // let icon = "https://openweathermap.org/img/wn/" + data.weather[0].icon +".png"; //get icon
        let temp = Math.round(data.main.temp);  //get temp
        let weather = data.weather[0].main; //get weather condition
        //Display weather on DOM
        // $("#icon").attr("src", icon);
        $("#temp").append(temp + " &deg;");
        $("#weather").append(weather);
})


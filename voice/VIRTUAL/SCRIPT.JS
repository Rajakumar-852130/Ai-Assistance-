
let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice =document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

 function wishMe(){
    let day = new Date();
    let hours = day.getHours();

    if(hours >= 0 && hours < 12){      
    speak("Good Morning Sir");
}
else if(hours >= 12 && hours < 16){ 
    // speak("Good Afternoon Sir");
}
else if(hours >= 16 && hours < 21){ 
    speak("Good Evening Sir");
}
else {                              
    speak("Good Night Sir");
}
}

window.addEventListener('load', ()=>{
  wishMe();
});
window.addEventListener('load',()=>{
    wishMe()
})

let  speechRecognition =window.SpeechRecognition || window.webkitSpeechRecognition 

let recognition = new speechRecognition()

recognition.onresult=(event)=>{
    let currentIndx = event.resultIndex
     let transcript = event.results[currentIndx][0].transcript
     content.innerText=transcript

    
    // console.log(event)
    takeCommand(transcript )


}
btn.addEventListener("click",()=> {
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"

})
  

function takeCommand(message){
    btn.style.display="flex"
    // voice.style.display="none"
    // Lowercase kar dete hain taaki 
    message = message.toLowerCase();

    if(message.includes("hello") || message.includes("hay") || message.includes("what's up")){
        speak("Hello Sir, what can I help you with?");
    } 
    else if (message.includes("who are you")){
        speak("I am a virtual assistant created by Raja");
    } 
    else if (message.includes("time")){
        let time = new Date().toLocaleTimeString(undefined,{hour:"numeric",minute:"numeric"});
        speak("Sir, the time is " + time);
    }
    else if (message.includes("date")){
        let date = new Date().toLocaleDateString();
        speak("Sir, today's date is " + date);
    }
    else if (message.includes("open youtube")){
        speak("Opening YouTube for you Sir");
        window.open("https://www.youtube.com", "_blank");


    }
    else if (message.includes("open google")){
        speak("Opening Google for you Sir");
        window.open("https://www.google.com", "_blank");
    }
    else if (message.includes("search for")){
        // Example: "search for cricket"
        let query = message.replace("search for", "").trim();
        if(query){
            speak("Here are the search results for " + query);
            window.open(`https://www.google.com/search?q=${query}`, "_blank");
        } else {
            speak("Please tell me what to search for Sir");
        }
    }
    else if (message.includes("where am i") || message.includes("my location")){
        speak("Fetching your current location Sir");
        window.open("https://www.google.com/maps", "_blank");

    }  else if(message.includes("open calculater")) {
        speak("openninge calculater ...")
        window.open("calculater://")

    }   else if(message.includes("open whatsapp")) {
        speak("openninge whatsapp ...")
        window.open("whatsapp ://")



    } else if(message.includes("weather in")){
        let city = message.replace("weather in", "").trim();
        if(city){
            speak("Fetching weather for " + city);
            // OpenWeatherMap website for now (browser fetch)
            window.open(`https://openweathermap.org/find?q=${city}`, "_blank");
        } else {
            speak("Please tell me the city name Sir");
        }
    }

    // News
    else if(message.includes("latest news") || message.includes("news")){
        speak("Fetching latest news Sir");
        window.open("https://news.google.com/", "_blank");
    }

    // Wikipedia search
    else if(message.includes("wikipedia for") || message.includes("search wikipedia for")){
        let query = message.replace(/wikipedia for|search wikipedia for/, "").trim();
        if(query){
            speak("Searching Wikipedia for " + query);
            window.open(`https://en.wikipedia.org/wiki/${query}`, "_blank");
        } else {
            speak("Please tell me the topic Sir");
        }
    }

    // Jokes
    else if(message.includes("joke") || message.includes("tell me a joke")){
        let jokes = [
            "Why did the programmer quit his job? Because he didn't get arrays!",
            "Why do Java developers wear glasses? Because they can't C#!",
            "Why was the computer cold? Because it left its Windows open!"
        ];
        let joke = jokes[Math.floor(Math.random() * jokes.length)];
        speak(joke);
    }

    // Calculator
    else if(message.includes("open calculator") || message.includes("calculator")){
        speak("Opening Calculator for you Sir");
        window.open("https://www.online-calculator.com/", "_blank");
    }

    // Reminder / Alarm
    else if(message.includes("set reminder") || message.includes("set alarm")){
        speak("Sir, you can set your reminder or alarm in your device or Google Calendar.");
        window.open("https://calendar.google.com/", "_blank");
    }

    // Dark Mode toggle
    else if(message.includes("dark mode on")){
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#ffffff";
        speak("Dark mode activated Sir");
    }
    else if(message.includes("dark mode off")){
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";
        speak("Light mode activated Sir");
    }

    // Play Music on YouTube
    else if(message.includes("play") && message.includes("song")){
        let song = message.replace("play", "").replace("song", "").trim();
        if(song){
            speak("Playing " + song + " on YouTube");
            window.open(`https://www.youtube.com/results?search_query=${song}`, "_blank");
        } else {
            speak("Please tell me the song name Sir");


        }
    }
    
    else {
        speak(`this is i foundon internet regarding ${message}`)
        window.open(`https://www.google.com/search?q=${message}`)


        // speak("Sorry Sir, I did not understand that command.");
    
    }
}


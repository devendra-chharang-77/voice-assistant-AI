let btn= document.querySelector('#btn')
let content= document.querySelector('#content')
let voice =document.querySelector('#voice')
function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang= "hi-GB"
    window.speechSynthesis.speak(text_speak)

}
function wishMe(){
    let day = new Date()
    let hours = day.getHours()
   if(hours>=0&& hours<12 ){
    speak("Good Morning sir")
   }
   else if(hours>=12 && hours<16){
    speak("Good afternoon sir")
   }else{
   
        speak("Good Evening sir")
   }  
}
// window.addEventListener('load',()=>{
//     wishMe()
// })
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = function(event) {
   let currentIndex =  event.resultIndex
   let transcript = event.results[currentIndex][0].transcript
  content.innerText= transcript
    takeCommand(transcript)

};
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display = "none"
     voice.style.display = "block"

})
function takeCommand(message) {
     btn.style.display = "flex"
      voice.style.display = "none"
    if (message.toLowerCase().includes("hello")||message.toLowerCase().includes("hey")){
        
        speak("Hello sir, what can I help you with?");
    }else if(message.toLowerCase().includes("who are you")){
        speak("i am virtual assistant, created by devendra chharang")
    }
    else if(message.toLowerCase().includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com/","_blank")
    }
    else if(message.toLowerCase().includes("open google translate")){
        speak("opening Google Translate");
        window.open("https://translate.google.co.in/?sl=en&tl=hi&op=translate", "_blank");
    }
    else if(message.toLowerCase().includes("open google")){
        speak("opening Google");
        window.open("https://www.google.com/", "_blank");
    }
    else if(message.toLowerCase().includes("open calculator")){
        speak("opening calculator");
        window.open("calculator://");
    }
    else if(message.toLowerCase().includes("open whatsapp")){
        speak("opening whatsapp");
        window.open("whatsapp://");
    }
    else if(message.toLowerCase().includes("time")){
       let time = new Date().toLocaleDateString(undefined,{hour:"numeric",minute:"numeric"})
       speak(time)
    }
    else if(message.toLowerCase().includes("date")){
        let time = new Date().toLocaleDateString(undefined,{day:"numeric",month:"short"})
        speak(time)
     }
   else {
 let finalText =    "this is what i found on internet regrading" +message.replace("shifra","") || message.replace("shipra","")
    speak(finalText)
    window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
   }
}
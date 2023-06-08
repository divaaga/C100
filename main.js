var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    console.log("a")
    recognition.start();
    console.log("b")
} 

recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    // document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if (Content == "take my selfie" || Content == "selfie" || Content == "click my selfie" || Content == "click my picture") {
        console.log("taking my selfie...");
        speak();
    }
}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


    setTimeout(function(){
        img_id = "selfie1";
        speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_snapshot();
    }, 5000);
    
    setTimeout(function(){
        img_id = "selfie2";
        speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_snapshot();
    }, 10000);

    
    setTimeout(function(){
        img_id = "selfie3";
        take_snapshot();
    }, 15000);
}

function take_snapshot() {
    console.log(img_id)
    Webcam.snap(function(data_img){
        if(img_id=="selfie1") {
            document.getElementById("result1").innerHTML= "<img id = 'selfie1' src = '" + data_img + " ' > ";
        };

        if(img_id=="selfie2") {
            document.getElementById("result2").innerHTML= "<img id = 'selfie2' src = '" + data_img + " ' > ";
        };

        if(img_id=="selfie3") {
            document.getElementById("result3").innerHTML= "<img id = 'selfie3' src = '" + data_img + " ' > ";
        };
    });
}





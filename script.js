let BassDrumButton = document.getElementById("BassDrum");
let FloorDrumButton = document.getElementById("FloorDrum");
let SnareDrumButton = document.getElementById("SnareDrum");
let TomTomButton = document.getElementById("TomTom");
let HiHatButton = document.getElementById("HiHat");
let CrashCymbalButton = document.getElementById("CrashCymbal");
let RideCymbalButton = document.getElementById("RideCymbal");
let SplashCymbalButton = document.getElementById("SplashCymbal");
let ChinaCymbalButton = document.getElementById("ChinaCymbal");
// let _id = 0;
let remove_tune = function(audio){
    audio.remove();
}
BassDrumButton.addEventListener("click", function() {
    // var audio = document.getElementById("bassdrum");
    // audio.play();
    let audio = document.createElement("audio");
    audio.src = "media/BassDrum.mp3";
    audio.play();
    audio.onended = remove_tune(audio);
})
FloorDrumButton.addEventListener("click", function() {
    // var audio = document.getElementById("floordrum");
    // audio.play();

    let audio = document.createElement("audio");
    audio.src = "media/FloorDrum.mp3";
    audio.play();
    audio.onended = remove_tune(audio);
})
SnareDrumButton.addEventListener("click", function() {
    // var audio = document.getElementById("snaredrum");
    // audio.play();

    let audio = document.createElement("audio");
    audio.src = "media/SnareDrum.mp3";
    audio.play();
    audio.onended = remove_tune(audio);
})
TomTomButton.addEventListener("click", function() {
    // var audio = document.getElementById("tomtom");
    // audio.play();

    let audio = document.createElement("audio");
    audio.src = "media/TomTom.mp3";
    audio.play();
    audio.onended = remove_tune(audio);
})
HiHatButton.addEventListener("click", function() {
    // var audio = document.getElementById("hihat");
    // audio.play();

    let audio = document.createElement("audio");
    audio.src = "media/HiHat.mp3";
    audio.play();
    audio.onended = remove_tune(audio);
})
CrashCymbalButton.addEventListener("click", function() {
    // var audio = document.getElementById("crashcymbal");
    // audio.play();

    let audio = document.createElement("audio");
    audio.src = "media/CrashCymbal.mp3";
    audio.play();
    audio.onended = remove_tune(audio);
})
RideCymbalButton.addEventListener("click", function() {
    // var audio = document.getElementById("ridecymbal");
    // audio.play();
    let audio = document.createElement("audio");
    audio.src = "media/RideCymbal.mp3";
    audio.play();
    audio.onended = remove_tune(audio);
})
SplashCymbalButton.addEventListener("click", function() {
    // var audio = document.getElementById("splashcymbal");
    // audio.play();
    let audio = document.createElement("audio");
    audio.src = "media/SplashCymbal.mp3";
    audio.play();
    audio.onended = remove_tune(audio);
})
ChinaCymbalButton.addEventListener("click", function() {
    // var audio = document.getElementById("chinacymbal");
    // audio.play();
    let audio = document.createElement("audio");
    audio.src = "media/ChinaCymbal.mp3";
    audio.play();
    audio.onended = remove_tune(audio);
})
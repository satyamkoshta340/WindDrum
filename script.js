let BassDrumButton = document.getElementById("BassDrum");
let FloorDrumButton = document.getElementById("FloorDrum");
let SnareDrumButton = document.getElementById("SnareDrum");
let TomTomButton = document.getElementById("TomTom");
let HiHatButton = document.getElementById("HiHat");
let CrashCymbalButton = document.getElementById("CrashCymbal");
let RideCymbalButton = document.getElementById("RideCymbal");
let SplashCymbalButton = document.getElementById("SplashCymbal");
let ChinaCymbalButton = document.getElementById("ChinaCymbal");

BassDrumButton.addEventListener("click", function() {
    var audio = document.getElementById("bassdrum");
    audio.play();
})
FloorDrumButton.addEventListener("click", function() {
    var audio = document.getElementById("floordrum");
    audio.play();
})
SnareDrumButton.addEventListener("click", function() {
    var audio = document.getElementById("snaredrum");
    audio.play();
})
TomTomButton.addEventListener("click", function() {
    var audio = document.getElementById("tomtom");
    audio.play();
})
HiHatButton.addEventListener("click", function() {
    var audio = document.getElementById("hihat");
    audio.play();
})
CrashCymbalButton.addEventListener("click", function() {
    var audio = document.getElementById("crashcymbal");
    audio.play();
})
RideCymbalButton.addEventListener("click", function() {
    var audio = document.getElementById("ridecymbal");
    audio.play();
})
SplashCymbalButton.addEventListener("click", function() {
    var audio = document.getElementById("splashcymbal");
    audio.play();
})
ChinaCymbalButton.addEventListener("click", function() {
    var audio = document.getElementById("chinacymbal");
    audio.play();
})
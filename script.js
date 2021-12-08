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
// let remove_tune = function(audio){
//     audio.remove();
// }

BassDrumButton.addEventListener("click", function() {

    let audio = new Audio("media/BassDrum.mp3");
    audio.play();
    // let audio = document.createElement("audio");
    // audio.src = "media/BassDrum.mp3";
    // audio.play();
    // audio.onended = remove_tune(audio);
})
FloorDrumButton.addEventListener("click", function() {
    // var audio = document.getElementById("floordrum");
    // audio.play();

    let audio = new Audio("media/FloorDrum.mp3");
    audio.play();
    // let audio = document.createElement("audio");
    // audio.src = "media/FloorDrum.mp3";
    // audio.play();
    // audio.onended = remove_tune(audio);
})
SnareDrumButton.addEventListener("click", function() {
    // var audio = document.getElementById("snaredrum");
    // audio.play();
    let audio = new Audio("media/SnareDrum.mp3");
    audio.play();
    // let audio = document.createElement("audio");
    // audio.src = "media/SnareDrum.mp3";
    // audio.play();
    // audio.onended = remove_tune(audio);
})
TomTomButton.addEventListener("click", function() {
    // var audio = document.getElementById("tomtom");
    // audio.play();
    let audio = new Audio("media/TomTom.mp3");
    audio.play();
    // let audio = document.createElement("audio");
    // audio.src = "media/TomTom.mp3";
    // audio.play();
    // audio.onended = remove_tune(audio);
})
HiHatButton.addEventListener("click", function() {
    // var audio = document.getElementById("hihat");
    // audio.play();
    let audio = new Audio("media/HiHat.mp3");
    audio.play();
    // let audio = document.createElement("audio");
    // audio.src = "media/HiHat.mp3";
    // audio.play();
    // audio.onended = remove_tune(audio);
})
CrashCymbalButton.addEventListener("click", function() {
    // var audio = document.getElementById("crashcymbal");
    // audio.play();
    let audio = new Audio("media/CrashCymbal.mp3");
    audio.play();
    // let audio = document.createElement("audio");
    // audio.src = "media/CrashCymbal.mp3";
    // audio.play();
    // audio.onended = remove_tune(audio);
})
RideCymbalButton.addEventListener("click", function() {
    // var audio = document.getElementById("ridecymbal");
    // audio.play();

    let audio = new Audio("media/RideCymbal.mp3");
    audio.play();
    // let audio = document.createElement("audio");
    // audio.src = "media/RideCymbal.mp3";
    // audio.play();
    // audio.onended = remove_tune(audio);
})
SplashCymbalButton.addEventListener("click", function() {
    // var audio = document.getElementById("splashcymbal");
    // audio.play();

    let audio = new Audio("media/SplashCymbal.mp3");
    audio.play();
    // let audio = document.createElement("audio");
    // audio.src = "media/SplashCymbal.mp3";
    // audio.play();
    // audio.onended = remove_tune(audio);
})
ChinaCymbalButton.addEventListener("click", function() {
    // var audio = document.getElementById("chinacymbal");
    // audio.play();
    let audio = new Audio("media/ChinaCymbal.mp3");
    audio.play();
    // let audio = document.createElement("audio");
    // audio.src = "media/ChinaCymbal.mp3";
    // audio.play();
    // audio.onended = remove_tune(audio);
})

const setActive= function(id){
    let ele = document.getElementById(id);
    ele.classList.add("active");
    setTimeout(function(){ele.classList.remove("active")}, 100);
}

document.addEventListener('keypress', function(e){
    let k = e.key.toLowerCase();
    switch(k){
        case "w":
            setActive("BassDrum");
            let audio1 = new Audio("media/BassDrum.mp3");
            audio1.play();
            break;
        case "s":
            setActive("FloorDrum");
            let audio2 = new Audio("media/FloorDrum.mp3");
            audio2.play();
            break;
        case "a":
            setActive("SnareDrum");
            let audio3 = new Audio("media/SnareDrum.mp3");
            audio3.play();
            break;
        case "d":
            setActive("TomTom");
            let audio4 = new Audio("media/TomTom.mp3");
            audio4.play();
            break;
        case "e":
            setActive("HiHat");
            let audio5 = new Audio("media/HiHat.mp3");
            audio5.play();
            break;
        case "j":
            setActive("CrashCymbal");
            let audio6 = new Audio("media/CrashCymbal.mp3");
            audio6.play();
            break;
        case "k":
            setActive("RideCymbal");
            let audio7 = new Audio("media/RideCymbal.mp3");
            audio7.play();
            break;
        case "l":
            setActive("ChinaCymbal");
            let audio8 = new Audio("media/ChinaCymbal.mp3");
            audio8.play();
            break;
        case "i":
            setActive("SplashCymbal");
            let audio9 = new Audio("media/SplashCymbal.mp3");
            audio9.play();
            break;
    }
    // if(e.key = "Enter"){
    //     let audio = new Audio("media/BassDrum.mp3");
    //     audio.play();
    // }
})
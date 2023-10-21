// Making sounds using mouse clicks
for(let n = 0; n <= 6; n++){
    document.querySelectorAll("button")[n].addEventListener("click", function (){

        let button = this.innerHTML;
        makeSound(button);
        drumAnimation(button);
    });
}


// Making sounds using keyboard presses
document.addEventListener("keypress", function (event){
    makeSound(event.key);
    drumAnimation(event.key);
});

// Function that makes the sounds
function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "a": 
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
                
    }
};

// Making animation when a drum is played
function drumAnimation(currentKey){
    let currentDrum = document.querySelector("." + currentKey);
    currentDrum.classList.add("pressed");

    setTimeout(function (){
        currentDrum.classList.remove("pressed");
    }, 100);
};

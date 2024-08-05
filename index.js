

for (var index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll("button")[index].addEventListener("click",clicked);
 
}
function clicked() {
    var v = this.innerHTML;
    makesound(v);
    buttons(v);
    
    switch (v) {

        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();

    
        default:
            break;
    }
    document.addEventListener("keypress", function(event){
        makesound(event.key);
        buttons(event.key);
    
    })
    function makesound(key){
        switch (key) {
    
            case "w":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case "a":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
            case "s":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
            case "d":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
            case "j":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
            case "k":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
            case "l":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
    
        
            default:
                break;
        }
    }
    function buttons(press){
        var b = document.querySelector("."+press);
        b.classList.add("pressed");
        setTimeout(function(){
            b.classList.remove("pressed");
        }, 100);
    }
    
    
   


}



//NO paranthesis for handleClick function, because  we are not calling the function, we are passing the function as an argument
// document.querySelector('.set').addEventListener('click', handleClick);

// OR

/*
document.querySelectorAll('.drum').forEach(button =>{
    button.addEventListener('click', handleClick);
});
*/

var numberOfDrumButtons = document.querySelectorAll('.drum').length; //array length of drums

for(let i = 0; i < numberOfDrumButtons; i++){
    // document.querySelectorAll('.drum')[i].addEventListener('click', handleClick);

    // Event listener for single sound
    // document.querySelectorAll('.drum')[i].addEventListener('click', handleSound);

    // Detecting button click press
    // Event listener for different sounds for different buttons
    document.querySelectorAll('.drum')[i].addEventListener('click', soundsForDifferentButtons);    
}

//Detecting keyboard press
document.addEventListener('keydown', soundsOnKeyboardPress);



function handleClick(event){
    alert('I got clicked');
}

function handleSound(event){
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
}

function soundsForDifferentButtons(event){

    let buttonPressed = this.innerHTML;

    switch(buttonPressed){

        case 'w':
            var audioForW = new Audio('./sounds/tom-1.mp3');
            audioForW.play();
            break;

        case 'a':
            var audioForA = new Audio('./sounds/tom-2.mp3');
            audioForA.play();
            break;

        case 's':
            var audioForS = new Audio('./sounds/tom-3.mp3');
            audioForS.play();
            break;

        case 'd':
            var audioForD = new Audio('./sounds/tom-4.mp3');
            audioForD.play();
            break;
        
        case 'j':
            var audioForJ = new Audio('./sounds/snare.mp3');
            audioForJ.play();
            break;

        case 'k':
            var audioForK = new Audio('./sounds/crash.mp3');
            audioForK.play();
            break;

        case 'l':
            var audioForL = new Audio('./sounds/kick-bass.mp3');
            audioForL.play();
            break;

        default:
            console.log(event); //console.log(buttonPressed);
    }

    buttonAnimation(buttonPressed);
}

function soundsOnKeyboardPress(event){

    let keyPressed = event.key;

    switch(keyPressed){

        case 'w':
            var audioForW = new Audio('./sounds/tom-1.mp3');
            audioForW.play();
            break;

        case 'a':
            var audioForA = new Audio('./sounds/tom-2.mp3');
            audioForA.play();
            break;

        case 's':
            var audioForS = new Audio('./sounds/tom-3.mp3');
            audioForS.play();
            break;

        case 'd':
            var audioForD = new Audio('./sounds/tom-4.mp3');
            audioForD.play();
            break;
        
        case 'j':
            var audioForJ = new Audio('./sounds/snare.mp3');
            audioForJ.play();
            break;

        case 'k':
            var audioForK = new Audio('./sounds/crash.mp3');
            audioForK.play();
            break;

        case 'l':
            var audioForL = new Audio('./sounds/kick-bass.mp3');
            audioForL.play();
            break;

        default:
            console.log(event); //console.log(keyPressed);
    }

    buttonAnimation(keyPressed);
}

function buttonAnimation(currentKey){

    let activeButton = document.querySelector('.' + currentKey);

    activeButton.classList.add('pressed');

    setTimeout(function(){
        activeButton.classList.remove('pressed');
    }, 100);
}
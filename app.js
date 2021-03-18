var age=prompt("How old are you?");

if(age<18){
    alert('Welcome!');
} else{
    alert('You are too old, go work!');
}

var favouriteChamp= prompt("Who's your favourite champion?");


if (favouriteChamp=='garen'){

    document.write('<img src="../Photos/Garen_0.jpg"/>');
} else if(favouriteChamp=='caitlyn'){
    document.write('<img src="../Photos/Caitlyn_0.jpg"/>');
} else if(favouriteChamp=='jinx'){
    document.write('<img src="../Photos/Jinx_0.jpg"/>');
} else{
    alert('Please choose between garen, caitlyn or jix');
}

confirm("Press the button if you are not a robot :P");

function changeBackground(color) {
    document.body.style.background = color;
 }
 
 window.addEventListener("load",function() { changeBackground('red') });
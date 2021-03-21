var age=prompt("How old are you?");

if(age >= 13 && age <= 30){
    alert('Welcome!');
}else if(age < 13 || age > 30 ) {
    alert('Sorry! you are either too young or too old for this website');
} else {
    alert('Please input a number');
}

var favouriteChamp= prompt("Who's your favourite champion?");

while (favouriteChamp !=='garen' && favouriteChamp !=='caitlyn' && favouriteChamp !=='jinx'){
favouriteChamp = prompt('Please choose between garen, caitlyn and jinx');

}

var numberOfImages = prompt('How many of them do you want to see?');

var image ='';
var result ='';



if (favouriteChamp=='garen'){

    image = '<img src="Garen_0.jpg"/>';
} else if(favouriteChamp=='caitlyn'){
    image ='<img src="Caitlyn_0.jpg"/>';
} else if(favouriteChamp=='jinx'){
    image ='<img src="Jinx_0.jpg"/>';
} 

for (var i = 0; i<numberOfImages; i++){
    result += image;
}


document.write(result);

confirm("Press the button if you are not a robot :P");


function changeBackground(color) {
    document.body.style.background = color;
 }
 
 window.addEventListener("load",function() { changeBackground('red') });
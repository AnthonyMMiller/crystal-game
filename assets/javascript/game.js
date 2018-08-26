// Starting text for HTML
$('.score').text('Your score: ' + '0')
$('.wins').text('Wins: ')
$('.losses').text('Losses: ')

//sets up random number
$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    console.log(Random)
    $('.number').text(" Target: "+ Random);

//	setting up four random numbers array, total variable and printing the wins & losses variables	
var GeneratedNumbers = []
var total= 0;	
var wins= 0;
var losses = 0;
$('.Wins').text("Wins " + wins);
$('.Losses').text("Losses " + losses);		


//sets up random numbers for each jewel
function fourRandomNumbers(){
for (var i = 0; i < 4; i++) {
    var num = Math.floor(Math.random()*11+1);
    GeneratedNumbers.push(num);
}
console.log(GeneratedNumbers) 
}

fourRandomNumbers();

//resets the game
function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('.number').text(" Target: "+ Random);
    GeneratedNumbers = [];
    fourRandomNumbers();
    total= 0;
    $('.score').text("Your score is: " + total);
    } 

//adds the wins 
function yay(){
alert("You won!!!");
    wins++;	
    $('.Wins').text("Wins "+ wins);
    console.log(wins)
    reset();
}

//adds the losses 
function loser(){
alert ("You lose!!");
    losses++;
    $('.Losses').text("Losses " + losses);
    console.log(losses)
    reset();
}

//sets up click for jewels
    $('#one').on ('click', function(){
        total = total + GeneratedNumbers[0];
        console.log("New total= " + total);
        $('.score').text("your score: " + total);	

                    //sets win/lose conditions
                if (total == Random){
                    yay();
                }
                else if ( total > Random){
                    loser();
                }		
    })	

    $('#two').on ('click', function(){
        total = total + GeneratedNumbers[1];
        console.log("New total= " + total);
        $('.score').text("your score: " + total);	

                if (total == Random){
                    yay();
                }
                else if ( total > Random){
                    loser();
                }	
    })	

    $('#three').on ('click', function(){
        total = total + GeneratedNumbers[2];
        console.log("New total= " + total);
        $('.score').text("your score: " + total);

                    if (total == Random){
                    yay();
                }
                else if ( total > Random){
                    loser();
                }	
    })	

    $('#four').on ('click', function(){
        total = total + GeneratedNumbers[3];
        console.log("New total= " + total);
        $('.score').text("your score: " + total);	

            
                    if (total == Random){
                    yay();
                }
                else if ( total > Random){
                    loser();
                }
    });  	

});	

(function(){
"use strict";	

// initializing some variables
var target = 0;
var guess = 0;
var remained = 10;
var made = 0;
var gameState = "";
var gameWon = false;

var output = document.querySelector("#output");

//The guess button and its relevant binding
var guess_button = document.querySelector("button#guess");
guess_button.style.cursor = "pointer";
guess_button.addEventListener("click", clickHandler, false);

//The reset button and its relevant binding
var reset_button = document.querySelector("button#reset");
reset_button.style.cursor = "pointer";
reset_button.addEventListener("click", resetHandler, false);

//The arrows
var guess_arrow = document.querySelector("#guess_arrow");
var target_arrow = document.querySelector("#target_arrow");


function resetHandler()
{
  window.location.reload(true);
  
}


function render()
{
  // the scale is 300px, but the Math.floor() is in the scale of 100. So we have to multiply it by 3.
  guess_arrow.style.left = guess * 3 + "px";
  target_arrow.style.left = target * 3 + "px";
}

function clickHandler()
{
  play();
}

/* This is the Game's main fucntion */
function play()
{
  target = Math.floor(Math.random() * 100); 	
  guess = Math.floor(Math.random() * 100);  
  
  remained = remained - 1;
  made = made + 1;
  gameState =   " Tried: " + made + ", Remained: " + remained + 
				"<br>"+
				"Your guess: " + guess + ", Target: " + target;
  
    

  if(guess > target)
  {
    output.innerHTML = "Your guess was too high!" + "<br>" + gameState;
    
    if (remained < 1)
    {
      end();
    }
  }
  else if(guess < target)
  {
    output.innerHTML = "Your guess was too low!" + "<br>" + gameState;
    
    if (remained < 1)
    {
      end();
    }
  }
  else if(guess === target)
  {
    gameWon = true;
    end();
  }
  
  //render the graphic display
  render();
}

function end()
{
  if (gameWon)
  {
    output.innerHTML
      = "Yes, it was " + target + "!" + 
      "<br>" + 
      "It only took you " + made + " guesses.";
  }
  else
  {
    output.innerHTML
      = "No more guesses left!" + 
      "<br>" + 
      "The number was: " + target + " !";
  }
  
  //disable the button in the end of game.
  guess_button.removeEventListener("click", clickHandler, false);
  guess_button.disabled = true;

}

}());

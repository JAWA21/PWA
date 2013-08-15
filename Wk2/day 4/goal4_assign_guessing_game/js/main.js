/**
 * GUESSING GAME:
 *
 * Created By: Jeanna Anderson
 * Date: 08/13/13
 * 
 * GUESSING GAME
 */

//Game variables
(function (){
	var randomNum = ~~(Math.random()*10+1) // ~~ doing similar thing to Math.floor
	console.log(randomNum);

	var output = document.querySelector('#output');
	//output.innHTML = 
	var input = document.querySelector('#input');
	//input.innerHTML = 

	var guessBtn = document.querySelector('button');
	console.log('program starting');

	var tally = 0;

	var gameOver = false;
	
	guessBtn.onclick = function(e){
		console.log('clicked');
		if(!gameOver && tally < 3){
			validate();
		}else{
			output.innerHTML = 'Game Over';
		}
	}

	validate = function(){
		if(input.value !== "" && input.value <= 10){
			evaluate();

		}else{
			output.innerHTML = 'Enter a number';
		}
	}

	evaluate = function(){
		if(input.value > randomNum){
			tally++;
			output.innerHTML = 'Guess lower';
		}else if(input.value < randomNum){
			tally++
			output.innerHTML = 'Guess higher';
		}else{
			output.innerHTML = 'Guessed correct!'
			gameOver = true;
		}
		
		//Tally all the wrong guesses and end the game after the 3rd incorrect guess and show appropriate game over message in the HTML.
	}

})();
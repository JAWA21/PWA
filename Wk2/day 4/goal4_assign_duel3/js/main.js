/*
     Name: Jeanna Anderson
     Date: 08/13/2013
     Class & Section:  PWA1-1308
     Duel part 3
 */


// self-executing function
(function(){
	console.log("Ding DING FIGHT!!!");

	//array of two fighters
	var fighters = [
		fighter1 = {name: 'Kabal', damage: 50, health: 100}, //fighter object 1
		fighter2 = {name: 'Kratos', damage: 50, health: 100} //fighter object 2
	];
	console.log(fighters[0].health);

	//round number
	var round = 0;

		//access fighters name
	var playerOneName = fighters[0].name;
	var playerTwoName = fighters[1].name;
		//access fighters health
	var playerOneHealth = fighters[0].health;
	var playerTwoHealth = fighters[1].health;
		//access fighters damage
	var fightDam1 = fighters[0].damage;
	var fightDam2 = fighters[1].damage;

	var gameOver = false;

	//let's fight!
	function fight(){
		console.log('in the fight function');

		//alert(playerOneName + ":" + playerOneHealth + " *START* " + playerTwoName + ":" + playerTwoHealth);
		var fighterOneDesc = document.querySelector('#kabal p');
		fighterOneDesc.innerHTML = playerOneName + ": " + playerOneHealth;

		var fighterTwoDesc = document.querySelector('#kratos p');
		fighterTwoDesc.innerHTML = playerTwoName + ": " + playerTwoHealth;
		console.log(round);

		//minimum damage able to give
		var minDamage1 = fightDam1 * .5;
		var minDamage2 = fightDam2 * .5;

		//random damage
		var f1 = Math.floor(Math.random()*(fightDam1 - minDamage1)+minDamage1);
		var f2 = Math.floor(Math.random()*(fightDam2 - minDamage2)+minDamage2);

		//inflict the damage
		playerOneHealth -= f1;
		playerTwoHealth -= f2;

		console.log(playerOneHealth);
		console.log(playerTwoHealth);
		fighterOneDesc.innerHTML = playerOneName + ": " + playerOneHealth;
		fighterTwoDesc.innerHTML = playerTwoName + ": " + playerTwoHealth;

		console.log(playerOneName + ":" + playerOneHealth + " " + playerTwoName + ":" + playerTwoHealth);
		//roundDesc = playerOneName + ": " + playerOneHealth + " " + playerTwoName + ": " + playerTwoHealth;

		var results = winnerCheck();
		console.log("results: ", results)

		if(results === "no winner"){

			round++;
			console.log(playerOneName + ": " + playerOneHealth + " " + playerTwoName + ": " + playerTwoHealth);
			//alert(playerOneName + ":" + playerOneHealth + " *ROUND " + round + " OVER* " + playerTwoName + ":" + playerTwoHealth);
		}else{
			console.log(results)
			//roundDesc = results;
			//alert(results);
		}
	};
	
	function winnerCheck(){
		console.log("in the winnerCheck function")

		var result="no winner";

		if(playerOneHealth < 1 && playerTwoHealth < 1) {
			result = document.querySelector('#round');
			result.innerHTML = "You Both Die";
			gameOver = true;

		}else if(playerOneHealth < 1){
			result = document.querySelector('#round');
			result.innerHTML = playerTwoName + " WINS!"
			gameOver = true;
		}else if(playerTwoHealth < 1){
			result = document.querySelector('#round');
			result.innerHTML = playerOneName + " WINS!!"
			gameOver = true;
		};

		return result;
	}; 

	var fightBtn = document.querySelector('#fight_btn');
	console.log('program starting');
	
	fightBtn.onclick = function(e){
		if(!gameOver){
			console.log('clicked');

			console.log(round);
			roundDesc = document.querySelector('#round');
			roundDesc.innerHTML = "Round: " + round;
			
			fight();
		}else{
			result = document.querySelector('#round');
			result.innerHTML = "GameOver";
		}

	}


})();

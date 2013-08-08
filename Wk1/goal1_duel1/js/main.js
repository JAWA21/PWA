/*
     Name: Jeanna Anderson
     Date: 08/06/2013
     Class & Section:  PWA1-1308
     Duel part 1
 */


//Player Name
var playerOneName = 'Hulk';
var playerTwoName = 'Iron Man';

//Player Health
var  playerOneHealth = '100';
var  playerTwoHealth = '100';

//Player Damage
var playerOneDamage = '50';
var playerTwoDamage = '50';

// self-executing function
(function(){
	console.log("Ding DING FIGHT!!!");

	var round = 0;

	function fight(){
		console.log('in the fight function');

		alert(playerOneName + ":" + playerOneHealth + " *START* " + playerTwoName + ":" + playerTwoHealth);
		for(var i=0; i <10; i++){
			var minDamage1 = playerOneDamage * .5;
			var minDamage2 = playerTwoDamage * .5;

			var f1 = Math.floor(Math.random()*(playerOneDamage - minDamage1)+minDamage1);
			var f2 = Math.floor(Math.random()*(playerTwoDamage - minDamage2)+minDamage2);

			//inflict the damage
			playerOneHealth -= f1;
			playerTwoHealth -= f2;

			console.log(playerOneHealth);
			console.log(playerTwoHealth);

			console.log(playerOneName + ":" + playerOneHealth + " " + playerTwoName + ":" + playerTwoHealth);

			var results = winnerCheck();
			console.log("results: ", results)

			if(results === "no winner"){
				round++;
				alert(playerOneName + ":" + playerOneHealth + " *ROUND " + round + " OVER* " + playerTwoName + ":" + playerTwoHealth);
			}else {
				alert(results);
				break;
			};
		}
	};
	
	function winnerCheck(){
		console.log("in the winnerCheck function")

		var result="no winner";

		if(playerOneHealth < 1 && playerTwoHealth < 1) {
			result = "You Both Die";
		}else if(playerOneHealth < 1){
			result = playerTwoName + " WINS!"
		}else if(playerTwoHealth < 1){
			result = playerOneName + " WINS!!"
		};

		return result;
	}; 

	console.log('program starting');
	fight();

})();

$(document).ready(function() {


	var computerNumber = Math.floor(Math.random() * 102) + 19; 
		console.log("compPick: " + computerNumber); 
		$(".randomNumber").html(computerNumber); 


	var gemOne = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 1: " + gemOne); 
		$("#img1").html("<img src=" + "assets/images/crystal.png" + " value=" + gemOne + ">"); 

	var gemTwo = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 2: " + gemTwo); 
		$("#img2").html("<img src=" + "assets/images/crystal.png" + " value=" + gemTwo + ">"); 

	var gemThree = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 3: " + gemThree); 
		$("#img3").html("<img src=" + "assets/images/crystal.png" + " value=" + gemThree + ">");
	
	var gemFour = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 4: " + gemFour); 
		$("#img4").html("<img src=" + "assets/images/crystal.png" + " value=" + gemFour + ">");
		
	var wins = 0; 
		console.log("wins: " + wins); 

	var losses = 0; 
		console.log("losses: " + losses); 

	var score = 0; 
		console.log("score: " + score); 

	function reset () {
		computerNumber = Math.floor(Math.random() * 102) + 19; 
			console.log("compPick: " + computerNumber); 
		$(".randomNumber").html(computerNumber); 

		score = 0; 
		$(".scoreDisplay").html(score); 

		gemOne = Math.floor(Math.random() * 12) + 1;  
			console.log("Gem 1: " + gemOne); 
		$("#img1").html("<img src=" + "assets/images/crystal.png" + " value=" + gemOne + ">"); 

		gemTwo = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 2: " + gemTwo); 
		$("#img2").html("<img src=" + "assets/images/crystal.png" + " value=" + gemTwo + ">"); 

		gemThree = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 3: " + gemThree); 
		$("#img3").html("<img src=" + "assets/images/crystal.png" + " value=" + gemThree + ">");
	
		gemFour = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 4: " + gemFour); 
		$("#img4").html("<img src=" + "assets/images/crystal.png" + " value=" + gemFour + ">");

		$("img").on("click", function () {
			var newScore = score += parseInt($(this).attr("value")); 
				console.log("New Score: " + newScore); 
			$(".scoreDisplay").html(newScore); 

			if(newScore === computerNumber) { 
				wins++ ; 
				$(".wins").html("Wins: " + wins); 
					console.log("Wins: " + wins); 
					reset(); 
			
			} 

			else if(newScore > computerNumber) {
				losses++ ; 
				$(".losses").html("Losses: " + losses); 
					console.log("Losses: " + losses); 
					reset(); 
				
			}

		}); 



	}

	$("img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value")); 
			console.log("New Score: " + newScore); 
		$(".scoreDisplay").html(newScore); 

		if(newScore === computerNumber) { 
			wins++ ; 
			$(".wins").html("Wins: " + wins); 
				console.log("Wins: " + wins); 
				reset(); 
		} 

		else if(newScore > computerNumber) {
			losses++ ; 
			$(".losses").html("Losses: " + losses); 
				console.log("Losses: " + losses); 
				reset(); 
		}

	}); 

}); 
      
function marcogame() {
		alert("Welcome to my game!")
		var name = prompt("What Is Your Name");
		alert("Hello " + name + "and welcome to my game!.")
		alert("THIS GAME IS CASE SENSITIVE")
		var Score;
		Score = 0;
		var MCharacter = prompt("Who Is The Main Character?");
		if (MCharacter === "Bruno") {
				alert("Good");
				Score = Score + 1
		} else {
				alert("Wrong");
		}

		var FatherName = prompt("What is father's name??");

		if (FatherName === "Ralph") {
				alert("Correct");
				Score = Score + 1;
		} else {
				alert("Wrong");
		}
		var Auschwitz = prompt("How is out-with supposed to be pronounced?");
		if (Auschwitz === "Auschwitz") {
				alert("Good");
				Score = Score + 1;
		} else {
				alert("Wrong The s is 3rd");
		}
		var Fürer = prompt("How to pronouce fury?")
		switch (Fürer) {

				case "Fürer":
						alert("Good for adding the ü.");
						Score = Score + 2;
						break;

				case "Furer":
						alert("Good but add double quotations and then u to make ü");
						Score = Score + 1;
						break;
				default:
						alert("Wrong");
		}

		var shumuel = prompt("Who Is Bruno's Best Friend?")
		if (shumuel === "Shmuel") {
				alert("Good Job");
				Score = Score + 1;

		} else {
			alert("Wrong");
		}
	
		alert("Thanks For Playing your score is out of 6 and is ...." + Score);

		if (Score < 2) {
			alert("Better Luck Next Time " + name)
		}
		else {
							alert("Good Job " + name)
		alert("Please Rate Below");
		alert("A game by Marco Wilson");
		}

}
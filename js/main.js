function askQuestions() {

	var firstName = prompt('what is your first name?');
	var lastName = prompt('what is your last name?')
	var fullName = firstName + " " + lastName


	//var firstName = prompt('what is your first name?');
	//var lastName = prompt('what is your last name?')
	//var fullName = firstName + " " + lastName//

	//console.log(fullName);
	//var age = prompt('how old are you?');
	//age = parseInt(age);


	if (firstName === 'General') {
		if (lastName !== 'Assembly'); {
			console.log ('Greetings, General!');
		}

	}

	var faveColour = prompt('what is your favourite colour?');
		
	if (faveColour == 'red' ||
		faveColour == 'blue' ||
		faveColour == 'green' ||
		faveColour == 'yellow') {
		$('h1').css('color', faveColour);
	}
}

//this is how you comment
$(function(){

	$('img').on("click", askQuestions);

	//hide all the sections

	$('h3').not(':first').next().hide(); 

	//when the user clicks an h3

	$('h3').on('click',function() {

		//toggle the next section (previous example used hide term)

		$(this).next().slideToggle(2000);

	});

});
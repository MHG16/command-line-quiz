
var currentQuestion = 0;
var totalQuestions = 15;
var answeredCorrect = 0;
var percentCorrect = 0; 


	var answer = prompt('What does HTML stand for?');
	var correct = 'hypertext markup language';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	} else {
		alert('That is incorrect. The correct answer is: '+correct);	
	}

	currentQuestion += 1;

	var answer = prompt('What is a <p> tag used for?');
	var correct = 'paragraph';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	alert('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1; 

	var answer = prompt('What comes first on your html page? Is it <!DOCTYPE = html>?');
	var correct = 'yes';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	alert('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	var answer = prompt('What is the space between two boxes?');
	var correct = 'margin';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	alert('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	var answer = prompt('How do you center a text element? Is it text-align: center; ?');
	var correct = 'yes';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	alert('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	var answer = prompt('Is parseInt() used to convert a string to a number?');
	var correct = 'no';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	alert('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	var answer = prompt('Does the content in a Block DIV fill its container?');
	var correct = 'yes';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	alert('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	var answer = prompt('What it the tag for list item ?');
	var correct = '<li>';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	alert('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	var answer = prompt('How do you get rid of the underline on a link?');
	var correct = 'text-decoration: none';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	alert('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	var answer = prompt('What do we use to apply different css rules depending on different screen sizes?');
	var correct = 'media queries';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	alert('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	var answer = prompt('What feature of Sass allows us to logically chunk code to make it more readable?');
	var correct = 'nesting';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	alert('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	var answer = prompt('Are true and false Booleans?');
	var correct = 'yes';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	alert('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	var answer = prompt('Does Nan have a truthy value ?');
	var correct = 'no';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	alert('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	var answer = prompt('How does JavaScript represent Boolean and ?');
	var correct = '&&';
	if (answer = correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	alert('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	var answer = prompt('Is #picture an example of a css class ?');
	var correct = 'no';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {
	alert('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;




percentCorrect = (answeredCorrect / totalQuestions) * 100 ;

//print out number of questions correct

console.log('You got '+answeredCorrect+ ' questions correct out of '+ totalQuestions+ ' total.');
console.log('You answered '+percentCorrect+'% of the questions correctly.' )


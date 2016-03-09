
var currentQuestion = 0;
var totalQuestions = 15;
var answeredCorrect = 0;
var percentCorrect = 0; 


	console.log('What does HTML stand for?');
	var answer = prompt();
	var correct = 'hypertext markup language';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	} else {
		console.log('That is incorrect. The correct answer is: '+correct);	
	}

	currentQuestion += 1;

	console.log('What is a <p> tag used for?');
	var answer = prompt();
	var correct = 'paragraph';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	console.log('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1; 

	console.log('What comes first on your html page? Is it <!DOCTYPE = html>?');
	var answer = prompt();
	var correct = 'yes';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	alert('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	console.log('What is the space between two boxes?');
	var answer = prompt();
	var correct = 'margin';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	console.log('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	console.log('How do you center a text element? Is it text-align: center; ?');
	var answer = prompt();
	var correct = 'yes';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	console.log('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	console.log('Is parseInt() used to convert a string to a number?');
	var answer = prompt();
	var correct = 'no';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	console.log('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	console.log('Does the content in a Block DIV fill its container?');
	var answer = prompt();
	var correct = 'yes';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	console.log('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	console.log('What it the tag for list item ?');
	var answer = prompt();
	var correct = '<li>';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	console.log('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	console.log('How do you get rid of the underline on a link?');
	var answer = prompt();
	var correct = 'text-decoration: none';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	console.log('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	console.log('What do we use to apply different css rules depending on different screen sizes?');
	var answer = prompt();
	var correct = 'media queries';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	console.log('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	console.log('What feature of Sass allows us to logically chunk code to make it more readable?');
	var answer = prompt();
	var correct = 'nesting';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	console.log('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	console.log('Are true and false Booleans?');
	var answer = prompt();
	var correct = 'yes';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	console.log('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	console.log('Does NaN have a truthy value ?');
	var answer = prompt();
	var correct = 'no';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	console.log('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	console.log('How does JavaScript represent Boolean and ?');
	var answer = prompt();
	var correct = '&&';
	if (answer = correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {	
	console.log('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;

	console.log('Is #picture an example of a css class ?');
	answer = prompt();
	var correct = 'no';
	if (answer === correct) {
		alert('That is correct!');
		answeredCorrect += 1;  
	
	} else {
	console.log('That is incorrect. The correct answer is: '+correct);
	}

	currentQuestion += 1;




percentCorrect = (answeredCorrect / totalQuestions) * 100 ;

//print out number of questions correct

console.log('You got '+answeredCorrect+ ' questions correct out of '+ totalQuestions+ ' total.');
console.log('You answered '+percentCorrect+'% of the questions correctly.' )


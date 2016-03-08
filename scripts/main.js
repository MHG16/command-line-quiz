
var currentQuestion = 0;
var totalQuestions = 15;
var answeredCorrect = 0;
var percentCorrect = 0; 


	var answer = prompt('What does HTML stand for?');
	if (answer === 'hypertext markup language') {
		answeredCorrect += 1;  
	}	

	currentQuestion += 1;

	var answer = prompt('What is a <p> tag used for?');
	if (answer === 'paragraph') {
		answeredCorrect += 1;  
	
	}	
	currentQuestion += 1; 

	var answer = prompt('What comes first on your html page? Is it <!DOCTYPE = html>?');
	if (answer === 'yes') {
		answeredCorrect += 1;  
	
	}	
	currentQuestion += 1;

	var answer = prompt('What is the space between two boxes?');
	if (answer === 'margin') {
		answeredCorrect += 1;  
	
	}	
	currentQuestion += 1;

	var answer = prompt('How do you center a text element? Is it text-align: center; ?');
	if (answer === 'yes') {
		answeredCorrect += 1;  
	
	}	
	currentQuestion += 1;

	var answer = prompt('Is parseInt() used to convert a string to a number?');
	if (answer === 'no') {
		answeredCorrect += 1;  
	
	}	
	currentQuestion += 1;

	var answer = prompt('Does the content in a Block DIV fill its container?');
	if (answer === 'yes') {
		answeredCorrect += 1;  
	
	}	
	currentQuestion += 1;

	var answer = prompt('What it the tag for list item ?');
	if (answer === '<li>') {
		answeredCorrect += 1;  
	
	}	
	currentQuestion += 1;

	var answer = prompt('How do you get rid of the underline on a link?');
	if (answer === 'text-decoration: none') {
		answeredCorrect += 1;  
	
	}	
	currentQuestion += 1;

	var answer = prompt('What do we use to apply different css rules depending on different screen sizes?');
	if (answer === 'media queries') {
		answeredCorrect += 1;  
	
	}	
	currentQuestion += 1;

	var answer = prompt('What feature of Sass allows us to logically chunk code to make it more readable?');
	if (answer === 'nesting') {
		answeredCorrect += 1;  
	
	}	
	currentQuestion += 1;

	var answer = prompt('Are true and false Booleans?');
	if (answer === 'yes') {
		answeredCorrect += 1;  
	
	}	
	currentQuestion += 1;

	var answer = prompt('Does Nan have a truthy value ?');
	if (answer === 'no') {
		answeredCorrect += 1;  
	
	}	
	currentQuestion += 1;

	var answer = prompt('How does JavaScript represent Boolean and ?');
	if (answer ='&&') {
		answeredCorrect += 1;  
	
	}	
	currentQuestion += 1;

	var answer = prompt('Is #picture an example of a class ?');
	if (answer === 'no') {
		answeredCorrect += 1;  
	
	}	
	currentQuestion += 1;


percentCorrect = (answeredCorrect / totalQuestions) * 100 ;

//print out number of questions correct

console.log('You got '+answeredCorrect+ ' questions correct out of '+ totalQuestions+ ' total.');
console.log('You answered '+percentCorrect+'% of the questions correctly.' )


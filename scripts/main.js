
var currentQuestion = 0;
var totalQuestions = 3;
var answeredCorrect = 0;
var percentCorrect = 0; 


while (currentQuestion < totalQuestions) {

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

	var answer = prompt('What comes first on your html page?');
	if (answer === '<!DOCTYPE = html>') {
		answeredCorrect += 1;  
	
	}	
	currentQuestion += 1;

	var answer = prompt('What is the space between two boxes?');
	if (answer === 'margin') {
		answeredCorrect += 1;  
	
	}	
	currentQuestion += 1;




}

percentCorrect = (answeredCorrect / totalQuestions) * 100 ;

//print out number of questions correct

console.log('You got '+answeredCorrect+ ' questions correct out of '+ totalQuestions+ ' total.');
console.log('You answered '+percentCorrect+'% of the questions correctly.' )


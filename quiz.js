var body = document.body;
var highScore = document.querySelector("#highScore");
var timerAREA = document.querySelector("#timer");
var countdownAREA = document.querySelector("#countdown");
var questionArea = document.querySelector("#questions");
var answerArea = document.querySelector("#answers");

var countdownSeconds = "none"; 
var timeStop = "";
var score = 0;
var initials = "";
var initialsINPUT = document.createElement("input");
var scores = document.createElement("div"); 

var start = document.createElement("div");
var startBtn = document.createElement("button");
var buttonContainerHighScores = document.createElement('div');
var lastPageText = document.createElement("div");

var Q1Result = "";
var Q2Result = "";
var Q3Result = "";
var Q4Result = "";
var Q5Result = "";

var startingScreen = function(){
    timeStop = "no"
	countdownSeconds = 75; 
	initials = "";
	score = "";
	
	//HIGHSCORE and TIMER needs to be formatted to be on the same line
	highScore.innerHTML = "High Score"
	countdownAREA.innerHTML = "Time limit: "+ countdownSeconds + " seconds";
	
	
	start.innerHTML ="<h1><center>" + "Coding Quiz Challenge" + "</center></h1>";
	start.innerHTML +="<h4><center><p>" + "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!" + "</p></center></h4>";
	start.id= "startIdEd";
	body.appendChild(start);

	startBtn.textContent ="Start Quiz";
	startBtn.id= "startBtnIdEd";
    startBtn.style.width = "20%";
	
	body.appendChild(startBtn);
    
	
	startBtn.addEventListener("click", clearInstructions_then_Q1); 	
}  

//Countdown timer function
function countDownTimer() {
		
	var downingSecondsInterval = setInterval(function() 
	{    
		if (countdownSeconds <= 0)
		{
		countdownAREA.innerHTML = "Time ended! Game over!"; 
		clearInterval(downingSecondsInterval);
		finalScorePage();
	
		}	
		if (timeStop === "yes")
        {clearInterval(downingSecondsInterval);
        }
	
	    if (countdownSeconds === 1){
			countdownAREA.innerHTML = "Time left: "+ countdownSeconds + " second";
			console.log("1 sec left");
			countdownSeconds--;
		}
	
	    if (countdownSeconds > 1){
		console.log("Time left: " + countdownSeconds);
		countdownAREA.innerHTML = "Time left: "+ countdownSeconds + " seconds";
	    countdownSeconds--;
		}
		
		
	 }, 1000); 
	
}
  
  

var clearInstructions_then_Q1 = function() {
	console.log("CLEAR INSTRUCTIONS THEN Q1");
    start.innerHTML="";
	startBtn.outerHTML="";
	countDownTimer(); 
	firstQuestion(); 
}

var NextQuestion = function() {
	questionArea.innerHTML="";
	document.getElementById("answerButtonDivArea").remove();
}

var firstQuestion = function() 
{
    score=0;
    questionArea.innerHTML ="<h1><center>" + "<i>Q1.</i> Commonly used data types DO Not Include:" + "</center></h1>";

    var Answers = ["1. strings", "2. booleans", "3. alerts", "4. numbers"];
	
	let list = document.createElement('div');
	list.id = "answerButtonDivArea";
	body.appendChild(list);

    Answers.forEach((item, index)=>
	{		
	let buttonCreate = document.createElement('button');

    buttonCreate.textContent = item;
	theButtonId="Q1_"+index.toString();

	buttonCreate.id = theButtonId;
	buttonCreate.classList.add ("theButtonIdClass");

	list.appendChild(buttonCreate);
    
	if(theButtonId=="Q1_0"){buttonCreate.addEventListener("click", Q1Ans1);}
	if(theButtonId=="Q1_1"){buttonCreate.addEventListener("click", Q1Ans2);}
	if(theButtonId=="Q1_2"){buttonCreate.addEventListener("click", Q1Ans3);}
	if(theButtonId=="Q1_3"){buttonCreate.addEventListener("click", Q1Ans4);}
	else{}
    }	
)
}

var secondQuestion = function() 
{
    questionArea.innerHTML ="<h1><center>" + "<i>Q2.</i>The condition in an if / else statement is enclosed with _____." + "</center></h1>";

    var Answers = ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"];
	
	let list = document.createElement('div');
	list.id = "answerButtonDivArea";
	body.appendChild(list);

    Answers.forEach((item, index)=>
	{		
	let buttonCreate = document.createElement('button');

	buttonCreate.textContent = item;
	theButtonId="Q2_"+index.toString();

	buttonCreate.id = theButtonId;
	buttonCreate.classList.add ("theButtonIdClass");

	list.appendChild(buttonCreate);
    
	if(theButtonId=="Q2_0"){buttonCreate.addEventListener("click", Q2Ans1);}
	if(theButtonId=="Q2_1"){buttonCreate.addEventListener("click", Q2Ans2);}
	if(theButtonId=="Q2_2"){buttonCreate.addEventListener("click", Q2Ans3);}
	if(theButtonId=="Q2_3"){buttonCreate.addEventListener("click", Q2Ans4);}
	else{}
    }
)

	start.innerHTML ="<br><hr> Q1 Result: " + Q1Result;
    body.appendChild(start);
}

var thirdQuestion = function() 
{  
    questionArea.innerHTML ="<h1><center>" + "<i>Q3.</i>Arrays in JavaScript can be used to store ________." + "</center></h1>";

    var Answers = ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"];
	
	let list = document.createElement('div');
	list.id = "answerButtonDivArea";
	body.appendChild(list);

    Answers.forEach((item, index)=>
	{		
	let buttonCreate = document.createElement('button');

	buttonCreate.textContent = item;
	theButtonId="Q3_"+index.toString();

	buttonCreate.id = theButtonId;
	buttonCreate.classList.add ("theButtonIdClass");

	list.appendChild(buttonCreate);
    
	if(theButtonId=="Q3_0"){buttonCreate.addEventListener("click", Q3Ans1);}
	if(theButtonId=="Q3_1"){buttonCreate.addEventListener("click", Q3Ans2);}
	if(theButtonId=="Q3_2"){buttonCreate.addEventListener("click", Q3Ans3);}
	if(theButtonId=="Q3_3"){buttonCreate.addEventListener("click", Q3Ans4);}
	else{}
    }
)

	start.innerHTML ="<br><hr> Q2 Result: " + Q2Result;
    body.appendChild(start);
} 

var fourthQuestion = function() 
{
    questionArea.innerHTML ="<h1><center>" + "<i>Q4.</i>String values must be enclosed within _______ when being assigned to variables." + "</center></h1>";

    var Answers = ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"];
	
	let list = document.createElement('div');
	list.id = "answerButtonDivArea";
	body.appendChild(list);

    Answers.forEach((item, index)=>
	{		
	let buttonCreate = document.createElement('button');

	buttonCreate.textContent = item;
	theButtonId="Q4_"+index.toString();

	buttonCreate.id = theButtonId;
	buttonCreate.classList.add ("theButtonIdClass");

	list.appendChild(buttonCreate);
    
	if(theButtonId=="Q4_0"){buttonCreate.addEventListener("click", Q4Ans1);}
	if(theButtonId=="Q4_1"){buttonCreate.addEventListener("click", Q4Ans2);}
	if(theButtonId=="Q4_2"){buttonCreate.addEventListener("click", Q4Ans3);}
	if(theButtonId=="Q4_3"){buttonCreate.addEventListener("click", Q4Ans4);}
	else{}
    }
)
	start.innerHTML ="<br><hr> Q3 Result: " + Q3Result;
    body.appendChild(start);
} 

var fifthQuestion = function() 
{
 
      questionArea.innerHTML ="<h1><center>" + "<i>Q5.</i>A very useful tool used during development and debugging for printing content to the debugger is:" + "</center></h1>";

    var Answers = ["1. javaScript", "2. terminal/bash", "3. for loops", "4. console.log"];
	
	let list = document.createElement('div');
	list.id = "answerButtonDivArea";
	body.appendChild(list);

    Answers.forEach((item, index)=>
	{		
	let buttonCreate = document.createElement('button');

	buttonCreate.textContent = item;
	theButtonId="Q5_"+index.toString();

	buttonCreate.id = theButtonId;
	buttonCreate.classList.add ("theButtonIdClass");

	list.appendChild(buttonCreate);
    
	if(theButtonId=="Q5_0"){buttonCreate.addEventListener("click", Q5Ans1);}
	if(theButtonId=="Q5_1"){buttonCreate.addEventListener("click", Q5Ans2);}
	if(theButtonId=="Q5_2"){buttonCreate.addEventListener("click", Q5Ans3);}
	if(theButtonId=="Q5_3"){buttonCreate.addEventListener("click", Q5Ans4);}
	else{}
    }
)
	start.innerHTML ="<br><hr> Q4 Result: " + Q4Result;
    body.appendChild(start);
} 

//firstQuestion Answer Button Clicks();	

var Q1Ans1 = function()
{
	localStorage.setItem('Q1result', "WRONG! Lose 10 seconds.");
	console.log("hey Q1Ans1");
	countdownSeconds=countdownSeconds-10;
	Q1Result=localStorage.getItem('Q1result')
	
	NextQuestion();
	secondQuestion();
	//start.innerHTML ="<br><hr>" +	Q1Result;
    //body.appendChild(start);
	
}
var Q1Ans2 = function()
{
	localStorage.setItem('Q1result', "WRONG! Lose 10 seconds.");
	console.log("hey Q1Ans2");
	countdownSeconds=countdownSeconds-10;
	Q1Result=localStorage.getItem('Q1result')
	
	NextQuestion();
	secondQuestion();
}
var Q1Ans3 = function()
{    
    localStorage.setItem('Q1result', "CORRECT!");
	console.log("hey Q1Ans3");
	
	Q1Result=localStorage.getItem('Q1result')
	
	NextQuestion();
	secondQuestion();
	
}
var Q1Ans4 = function()
{
	localStorage.setItem('Q1result', "WRONG! Lose 10 seconds.");
	console.log("hey Q1Ans4");
	countdownSeconds=countdownSeconds-10;
	Q1Result=localStorage.getItem('Q1result')
	
	NextQuestion();
	secondQuestion();
}

//secondQuestion();	

var Q2Ans1 = function()
{
	localStorage.setItem('Q2result', "WRONG! Lose 10 seconds.");
	console.log("hey Q2Ans1");
	countdownSeconds=countdownSeconds-10;
	Q2Result=localStorage.getItem('Q2result')
    
	NextQuestion();
    thirdQuestion();
}

var Q2Ans2 = function()
{
	localStorage.setItem('Q2result', "WRONG! Lose 10 seconds.");
	console.log("hey Q2Ans2");
	countdownSeconds=countdownSeconds-10;
	Q2Result=localStorage.getItem('Q2result')
    
	NextQuestion();
    thirdQuestion();
}

var Q2Ans3 = function()
{    
    localStorage.setItem('Q2result', "CORRECT!");
	console.log("hey Q2Ans3");
	Q2Result=localStorage.getItem('Q2result')	
    
	NextQuestion();
    thirdQuestion();
}

var Q2Ans4 = function()
{
	localStorage.setItem('Q2result', "WRONG! Lose 10 seconds.");
	console.log("hey Q2Ans4");
	countdownSeconds=countdownSeconds-10;
	Q2Result=localStorage.getItem('Q2result')

    NextQuestion();
    thirdQuestion();
}

//thirdQuestion();

var Q3Ans1 = function()
{
	localStorage.setItem('Q3result', "WRONG! Lose 10 seconds.");
	console.log("hey Q3Ans1");
	countdownSeconds=countdownSeconds-10;
	Q3Result=localStorage.getItem('Q3result')	
    
	NextQuestion();
    fourthQuestion();
}

var Q3Ans2 = function()
{
	localStorage.setItem('Q3result', "WRONG! Lose 10 seconds.");
	console.log("hey Q3Ans2");
	countdownSeconds=countdownSeconds-10;
	Q3Result=localStorage.getItem('Q3result')
 
    NextQuestion(); 
    fourthQuestion();
}

var Q3Ans3 = function()
{   
    localStorage.setItem('Q3result', "WRONG! Lose 10 seconds.");
	console.log("hey Q3Ans3");
	countdownSeconds=countdownSeconds-10;
	Q3Result=localStorage.getItem('Q3result')

    NextQuestion();
    fourthQuestion();
}

var Q3Ans4 = function()
{
	localStorage.setItem('Q3result', "CORRECT!");
	console.log("hey Q3Ans4");
	Q3Result=localStorage.getItem('Q3result')

    NextQuestion();
    fourthQuestion();
}

//fourthQuestion();

var Q4Ans1 = function()
{
	localStorage.setItem('Q4result', "WRONG! Lose 10 seconds.");
	console.log("hey Q4Ans1");
	countdownSeconds=countdownSeconds-10;
	Q4Result=localStorage.getItem('Q4result')		
 
    NextQuestion();
    fifthQuestion();
}

var Q4Ans2 = function()
{
	localStorage.setItem('Q4result', "WRONG! Lose 10 seconds.");
	console.log("hey Q4Ans1");
	countdownSeconds=countdownSeconds-10;
	Q4Result=localStorage.getItem('Q4result')

    NextQuestion();
    fifthQuestion();
}

var Q4Ans3 = function()
{   
    localStorage.setItem('Q4result', "CORRECT!");
    console.log("hey Q4Ans1");
    Q4Result=localStorage.getItem('Q4result')	

    NextQuestion();
    fifthQuestion();
}

var Q4Ans4 = function()
{
	localStorage.setItem('Q4result', "WRONG! Lose 10 seconds.");
	console.log("hey Q4Ans1");
	countdownSeconds=countdownSeconds-10;
	Q4Result=localStorage.getItem('Q4result')

    NextQuestion();
    fifthQuestion();
}

//fifthQuestion();

var Q5Ans1 = function()
{
	localStorage.setItem('Q5result', "WRONG! Lose 10 seconds.");
	console.log("hey Q5Ans1");
	countdownSeconds=countdownSeconds-10;
	Q5Result=localStorage.getItem('Q5result')	
	finalScorePage();

}

var Q5Ans2 = function()
{
	localStorage.setItem('Q5result', "WRONG! Lose 10 seconds.");
	console.log("hey Q5Ans1");
	countdownSeconds=countdownSeconds-10;
	Q5Result=localStorage.getItem('Q5result')
	finalScorePage();
}

var Q5Ans3 = function()
{   
    localStorage.setItem('Q5result', "WRONG! Lose 10 seconds.");
	console.log("hey Q5Ans1");
	countdownSeconds=countdownSeconds-10;
	Q5Result=localStorage.getItem('Q5result')
	finalScorePage();	
}

var Q5Ans4 = function()
{
	localStorage.setItem('Q5result', "CORRECT!");
	console.log("hey Q5Ans1");
	Q5Result=localStorage.getItem('Q5result')
	finalScorePage();
}


var finalScorePage = function() 
{
   timeStop = "yes";
   
   NextQuestion();
   console.log("next question");	  
  //Clear Out Question Elements   
    
    	if (Q1Result === 'CORRECT!') {score += 5; console.log(score)};
        if (Q2Result === 'CORRECT!') {score += 5; console.log(score)};		
        if (Q3Result === 'CORRECT!') {score += 5; console.log(score)};		
        if (Q4Result === 'CORRECT!') {score += 5; console.log(score)};		
        if (Q5Result === 'CORRECT!') {score += 5; console.log(score)};		

		if (Q1Result === 'WRONG! Lose 10 seconds.') {score -= 5; console.log(score)};		
        if (Q2Result === 'WRONG! Lose 10 seconds.') {score -= 5; console.log(score)};		
        if (Q3Result === 'WRONG! Lose 10 seconds.') {score -= 5; console.log(score)};		
        if (Q4Result === 'WRONG! Lose 10 seconds.') {score -= 5; console.log(score)};		
        if (Q5Result === 'WRONG! Lose 10 seconds.') {score -= 5; console.log(score)};		
	
	finalScore = document.createElement("div");
    finalScore.innerHTML ="<center>" + "<h1>All done!</h1>" + "<h4>Your final score is " + score + ". </h4></center>";
    body.appendChild(finalScore);
    
	var initialsContainer = document.createElement('div');
		initialsContainer.setAttribute("style", "display:flex; justify-content: space-around; margin-bottom: 10px; align-item: center;")

		initialsText = document.createElement('h3')
		initialsText.textContent = ("Enter initials: ");

	 
		initialsINPUT.setAttribute("type", "text");
		initialsINPUT.setAttribute("placeholder", "For example: AB");
		initialsINPUT.setAttribute("style", "height: 20px; margin-top: 17px;");

	var initialsBtn = document.createElement("button"); 		
		initialsBtn.textContent = "Submit";
		
		initialsContainer.appendChild(initialsText);
		initialsContainer.appendChild(initialsINPUT);
		initialsContainer.appendChild(initialsBtn);
		body.appendChild(initialsContainer);

	start.innerHTML ="<br><hr> Q5 Result: " + Q5Result;
    body.appendChild(start);

	initialsBtn.addEventListener("click", function() {

		initials = document.querySelector("input").value;	
				
		if (initials === "" || initials === null) {  
			alert("Please enter your initials.")
		}
		else {
			//Clear out Elements Created in this FinalScore() Function & Proceed to Run lastPage() function
			finalScore.innerHTML="";
			initialsContainer.innerHTML="";
			start.innerHTML ="";
			highScore.innerHTML ="";
			countdownAREA.innerHTML =""; 

			lastPage();
	};
})
}

var lastPage = function() 
{  	
    //in the case the user clicks on the Top  "High Score" link on the High Scores page
    clearHighScorePageElements();
	
	lastPageText.innerHTML ="<center><h1>High Scores</h1></center>";
    body.appendChild(lastPageText);
	
		scores.style.backgroundColor = "rgb(204, 215, 235)";
		scores.style.width = "70%";
		scores.style.minHeight = "30px";
		scores.style.margin = "10px auto";

	var scoreList = document.createElement("ol");

    scores.appendChild(scoreList);

	//Get the variable then push to the score list when quiz is completed:
	if (typeof(Storage) !== "undefined" && initials !== "" && score !== "") {
		
		let highScoreData = JSON.parse(localStorage.getItem("scoreArray") || '[]');
		highScoreData.push({name: initials, number: score});
        localStorage.setItem("scoreArray", JSON.stringify(highScoreData));

		highScoreData.sort((a, b) => b.number - a.number);

        //Show ALL scores with LOOP (looping through each index number of the array)
		for (var i = 0; i < highScoreData.length; i++) 
		{
	    var scoreListItems = document.createElement("li");
		scoreListItems.innerHTML = "<strong>Name: </strong>" +`${highScoreData[i].name}` + "&nbsp;&nbsp;&nbsp;&nbsp;" + "<strong>Score: </strong>" + `${highScoreData[i].number}`;
		scoreList.appendChild(scoreListItems);
		}		
	}
	//If viewing score list without starting the quiz: 
    	if (typeof(Storage) !== "undefined" && initials === "" && score === "") {
		
		let highScoreData = JSON.parse(localStorage.getItem("scoreArray") || '[]');
        
		highScoreData.sort((a, b) => b.number - a.number);

        //Show ALL scores with LOOP (looping through each index number of the array)
		for (var i = 0; i < highScoreData.length; i++) 
		{
	    var scoreListItems = document.createElement("li");
		scoreListItems.innerHTML = "<strong>Name: </strong>" +`${highScoreData[i].name}` + "&nbsp;&nbsp;&nbsp;&nbsp;" + "<strong>Score: </strong>" + `${highScoreData[i].number}`;
		scoreList.appendChild(scoreListItems);
		}		
	} 	
	
    buttonContainerHighScores.appendChild(scores);
	
		
	var backBtn = document.createElement("button"); 		
		backBtn.textContent = "Go back";
		backBtn.style.margin = "10px";
        backBtn.style.width = "20%";

	var clearBtn = document.createElement("button"); 		
		clearBtn.textContent = "Clear high scores";
		clearBtn.style.margin = "10px";
		
		buttonContainerHighScores.appendChild(backBtn);
		buttonContainerHighScores.appendChild(clearBtn);
		body.appendChild(buttonContainerHighScores);

    //Clear High Scores Button Listener
	clearBtn.addEventListener("click", clearHighScores);
   
    //Clear High Score Elements and Return to Start of Quiz Page (instructions)
     backBtn.addEventListener("click", () => {    
     clearHighScorePageElements();
     startingScreen();    
});
}

var clearHighScores = function() 
{
   localStorage.setItem("scoreArray", "");
   scores.textContent="";
   initials = "";
   score = "";

}

var clearHighScorePageElements = function()
{   
    //Clear out all displayed Highscores. This ensures that in the event the GO Back button is used to reDO the test, the Highscores list WOULD not display both the SCORE list previously and the NEW updated Score list 
	//[2 List of Highscores on doing the test twice. [3 List of Highscores on doing the test three times. and so on...
	scores.textContent="";
	
    lastPageText.innerHTML=""; 
	buttonContainerHighScores.innerHTML="";
}

//Onload of page Run the startingScreen function to generate the First Quiz Page (instructions)
window.onload = startingScreen();

var viewScoresOnFirstPage = function() {
	
    start.innerHTML="";
	startBtn.outerHTML="";
	lastPage();
}
highScore.addEventListener("click", viewScoresOnFirstPage);


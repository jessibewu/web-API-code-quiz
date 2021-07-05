var body = document.body;
var highScore = document.querySelector("#highScore");
var timerAREA = document.querySelector("#timer");
var countdownAREA = document.querySelector("#countdown");
var questionArea = document.querySelector("#questions");
var answerArea = document.querySelector("#answers");
var countdownSeconds = 75; 
var timeStop = "";


var start = document.createElement("div");
start.innerHTML ="<h1><center>" + "Coding Quiz Challenge" + "</center></h1>";
start.innerHTML +="<h3><center><p>" + "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!" + "</p></center></h1>";
body.appendChild(start);

var startBtn = document.createElement("div-btn");
startBtn.innerHTML ="<center><button>" + "Start Quiz" + "</button></center>";
body.appendChild(startBtn);

countdownAREA.innerHTML = "Second(s) left "+ countdownSeconds;

function countDownTimer() {
		
	var downingSecondsInterval = setInterval(function() 
	{    
		if (countdownSeconds <= 0)
		{
		countdownAREA.innerHTML = "NO MORE TIME"; 
		clearInterval(downingSecondsInterval);
		}
		if (timeStop === "yes")
        {clearInterval(downingSecondsInterval);
        }
		else
		{
		console.log(countdownSeconds);
		countdownAREA.innerHTML = "Second(s) left "+ Math.floor(countdownSeconds);
		countdownSeconds--;
		}
		
	 }, 1000); 
	
}

var highScoreS = function() {
	highScore.innerHTML= "View high scores";
}
 
  
startBtn.addEventListener("click",() => {    
    clearInstructions_then_Q1();
}); 

var clearInstructions_then_Q1 = function() {
    start.innerHTML="";
	startBtn.innerHTML="";
	highScoreS();
	countDownTimer(); 
	firstQuestion(); 
	//questionArea.innerHTML="";
}

var NextQuestion = function() {
   // start.innerHTML="";
	//startBtn.innerHTML="";
	questionArea.innerHTML="";
	document.getElementById("answerButtonDIVarea").remove();
}

var firstQuestion = function() 
{
    
    questionArea.innerHTML ="<h1><center>" + "<i>Q1.</i> Commonly used data types DO Not Include:" + "</center></h1>";

    var Answers = ["1. strings", "2. booleans", "3. alerts", "4. numbers"];
	
	let list = document.createElement('div');
	list.id = "answerButtonDIVarea";
	body.appendChild(list);

    Answers.forEach((item, index)=>
	{		
	let buttonCreate = document.createElement('button');

    buttonCreate.innerHTML = "<center>" + item + "</center>";
	thebuttonid="Q1_"+index.toString();

	buttonCreate.id = thebuttonid;
	buttonCreate.classList.add ("thebuttonclass");

	list.appendChild(buttonCreate);
    
	if(thebuttonid=="Q1_0"){buttonCreate.addEventListener("click", Q1Ans1);}
	if(thebuttonid=="Q1_1"){buttonCreate.addEventListener("click", Q1Ans2);}
	if(thebuttonid=="Q1_2"){buttonCreate.addEventListener("click", Q1Ans3);}
	if(thebuttonid=="Q1_3"){buttonCreate.addEventListener("click", Q1Ans4);}
	else{}
    }	
)
}

var secondQuestion = function() 
{
  
    questionArea.innerHTML ="<h1><center>" + "<i>Q2.</i>Commonly used data types DO Not Include:" + "</center></h1>";

    var Answers = ["1. zZZstrings", "2. ZZZbooleans", "3. ZZZalerts", "4. ZZZnumbers"];
	
	let list = document.createElement('div');
	list.id = "answerButtonDIVarea";
	body.appendChild(list);

    Answers.forEach((item, index)=>
	{		
	let buttonCreate = document.createElement('button');

    buttonCreate.innerHTML = "<center>" + item + "</center>";
	thebuttonid="Q2_"+index.toString();

	buttonCreate.id = thebuttonid;
	buttonCreate.classList.add ("thebuttonclass");

	list.appendChild(buttonCreate);
    
	if(thebuttonid=="Q2_0"){buttonCreate.addEventListener("click", Q2Ans1);}
	if(thebuttonid=="Q2_1"){buttonCreate.addEventListener("click", Q2Ans2);}
	if(thebuttonid=="Q2_2"){buttonCreate.addEventListener("click", Q2Ans3);}
	if(thebuttonid=="Q2_3"){buttonCreate.addEventListener("click", Q2Ans4);}
	else{}
    }
)

	start.innerHTML ="<br><hr> Question One Result: " + Q1Result;
    body.appendChild(start);
}

var thirdQuestion = function() 
{
 
  
    questionArea.innerHTML ="<h1><center>" + "<i>Q3.</i>Commonly used data types DO Not Include:" + "</center></h1>";

    var Answers = ["1. strings", "2. booleans", "3. alerts", "4. numbers"];
	
	let list = document.createElement('div');
	list.id = "answerButtonDIVarea";
	body.appendChild(list);

    Answers.forEach((item, index)=>
	{		
	let buttonCreate = document.createElement('button');

    buttonCreate.innerHTML = "<center>" + item + "</center>";
	thebuttonid="Q3_"+index.toString();

	buttonCreate.id = thebuttonid;
	buttonCreate.classList.add ("thebuttonclass");

	list.appendChild(buttonCreate);
    
	if(thebuttonid=="Q3_0"){buttonCreate.addEventListener("click", Q3Ans1);}
	if(thebuttonid=="Q3_1"){buttonCreate.addEventListener("click", Q3Ans2);}
	if(thebuttonid=="Q3_2"){buttonCreate.addEventListener("click", Q3Ans3);}
	if(thebuttonid=="Q3_3"){buttonCreate.addEventListener("click", Q3Ans4);}
	else{}
    }
)

	start.innerHTML ="<br><hr> Question Two Result: " + Q2Result;
    body.appendChild(start);
} 

var fourthQuestion = function() 
{

  
        questionArea.innerHTML ="<h1><center>" + "<i>Q4.</i>Commonly used data types DO Not Include:" + "</center></h1>";

    var Answers = ["1. strings", "2. booleans", "3. alerts", "4. numbers"];
	
	let list = document.createElement('div');
	list.id = "answerButtonDIVarea";
	body.appendChild(list);

    Answers.forEach((item, index)=>
	{		
	let buttonCreate = document.createElement('button');

    buttonCreate.innerHTML = "<center>" + item + "</center>";
	thebuttonid="Q4_"+index.toString();

	buttonCreate.id = thebuttonid;
	buttonCreate.classList.add ("thebuttonclass");

	list.appendChild(buttonCreate);
    
	if(thebuttonid=="Q4_0"){buttonCreate.addEventListener("click", Q4Ans1);}
	if(thebuttonid=="Q4_1"){buttonCreate.addEventListener("click", Q4Ans2);}
	if(thebuttonid=="Q4_2"){buttonCreate.addEventListener("click", Q4Ans3);}
	if(thebuttonid=="Q4_3"){buttonCreate.addEventListener("click", Q4Ans4);}
	else{}
    }
)
	start.innerHTML ="<br><hr> Question Three Result: " + Q3Result;
    body.appendChild(start);
} 

var fifthQuestion = function() 
{
 
      questionArea.innerHTML ="<h1><center>" + "<i>Q5.</i>Commonly used data types DO Not Include:" + "</center></h1>";

    var Answers = ["1. strings", "2. booleans", "3. alerts", "4. numbers"];
	
	let list = document.createElement('div');
	list.id = "answerButtonDIVarea";
	body.appendChild(list);

    Answers.forEach((item, index)=>
	{		
	let buttonCreate = document.createElement('button');

    buttonCreate.innerHTML = "<center>" + item + "</center>";
	thebuttonid="Q5_"+index.toString();

	buttonCreate.id = thebuttonid;
	buttonCreate.classList.add ("thebuttonclass");

	list.appendChild(buttonCreate);
    
	if(thebuttonid=="Q5_0"){buttonCreate.addEventListener("click", Q5Ans1);}
	if(thebuttonid=="Q5_1"){buttonCreate.addEventListener("click", Q5Ans2);}
	if(thebuttonid=="Q5_2"){buttonCreate.addEventListener("click", Q5Ans3);}
	if(thebuttonid=="Q5_3"){buttonCreate.addEventListener("click", Q5Ans4);}
	else{}
    }
)
	start.innerHTML ="<br><hr> Question Four Result: " + Q4Result;
    body.appendChild(start);
} 

//firstQuestion();	

var Q1Ans1 = function()
{
	localStorage.setItem('Q1result', "WRONG! LOSE 10 SECONDS");
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
	localStorage.setItem('Q1result', "WRONG! LOSE 10 SECONDS");
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
	localStorage.setItem('Q1result', "WRONG! LOSE 10 SECONDS");
	console.log("hey Q1Ans4");
	countdownSeconds=countdownSeconds-10;
	Q1Result=localStorage.getItem('Q1result')
	
	NextQuestion();
	secondQuestion();
}

//secondQuestion();	

var Q2Ans1 = function()
{
	localStorage.setItem('Q2result', "WRONG! LOSE 10 SECONDS");
	console.log("hey Q2Ans1");
	countdownSeconds=countdownSeconds-10;
	Q2Result=localStorage.getItem('Q2result')
    
	NextQuestion();
    thirdQuestion();
}

var Q2Ans2 = function()
{
	localStorage.setItem('Q2result', "WRONG! LOSE 10 SECONDS");
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
	localStorage.setItem('Q2result', "WRONG! LOSE 10 SECONDS");
	console.log("hey Q2Ans4");
	countdownSeconds=countdownSeconds-10;
	Q2Result=localStorage.getItem('Q2result')

    NextQuestion();
    thirdQuestion();
}

//thirdQuestion();

var Q3Ans1 = function()
{
	localStorage.setItem('Q3result', "WRONG! LOSE 10 SECONDS");
	console.log("hey Q3Ans1");
	countdownSeconds=countdownSeconds-10;
	Q3Result=localStorage.getItem('Q3result')	
    
	NextQuestion();
    fourthQuestion();
}

var Q3Ans2 = function()
{
	localStorage.setItem('Q3result', "WRONG! LOSE 10 SECONDS");
	console.log("hey Q3Ans2");
	countdownSeconds=countdownSeconds-10;
	Q3Result=localStorage.getItem('Q3result')
 
    NextQuestion(); 
    fourthQuestion();
}

var Q3Ans3 = function()
{   
    localStorage.setItem('Q3result', "WRONG! LOSE 10 SECONDS");
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
	localStorage.setItem('Q4result', "WRONG! LOSE 10 SECONDS");
	console.log("hey Q4Ans1");
	countdownSeconds=countdownSeconds-10;
	Q4Result=localStorage.getItem('Q4result')		
 
    NextQuestion();
    fifthQuestion();
}

var Q4Ans2 = function()
{
	localStorage.setItem('Q4result', "WRONG! LOSE 10 SECONDS");
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
	localStorage.setItem('Q4result', "WRONG! LOSE 10 SECONDS");
	console.log("hey Q4Ans1");
	countdownSeconds=countdownSeconds-10;
	Q4Result=localStorage.getItem('Q4result')

    NextQuestion();
    fifthQuestion();
}

//fifthQuestion();

var Q5Ans1 = function()
{
	localStorage.setItem('Q5result', "WRONG! LOSE 10 SECONDS");
	console.log("hey Q5Ans1");
	countdownSeconds=countdownSeconds-10;
	Q5Result=localStorage.getItem('Q5result')	
	finalScore();

}

var Q5Ans2 = function()
{
	localStorage.setItem('Q5result', "WRONG! LOSE 10 SECONDS");
	console.log("hey Q5Ans1");
	countdownSeconds=countdownSeconds-10;
	Q5Result=localStorage.getItem('Q5result')
	finalScore();
}

var Q5Ans3 = function()
{   
    localStorage.setItem('Q5result', "WRONG! LOSE 10 SECONDS");
	console.log("hey Q5Ans1");
	countdownSeconds=countdownSeconds-10;
	Q5Result=localStorage.getItem('Q5result')
	finalScore();	
}

var Q5Ans4 = function()
{
	localStorage.setItem('Q5result', "CORRECT!");
	console.log("hey Q5Ans1");
	Q5Result=localStorage.getItem('Q5result')
	finalScore();
}

var finalScore = function() 
{
   NextQuestion();	  
  //Clear Everything in Body
    
    timeStop = "yes";
    
    var score = 0; 
    
    	if (Q1Result === 'CORRECT!') {score += 5;};		
        if (Q2Result === 'CORRECT!') {score += 5;};		
        if (Q3Result === 'CORRECT!') {score += 5;};		
        if (Q4Result === 'CORRECT!') {score += 5;};		
        if (Q5Result === 'CORRECT!') {score += 5;};		

		if (Q1Result === 'WRONG! LOSE 10 SECONDS') {score -= 5};		
        if (Q2Result === 'WRONG! LOSE 10 SECONDS') {score -= 5};		
        if (Q3Result === 'WRONG! LOSE 10 SECONDS') {score -= 5};		
        if (Q4Result === 'WRONG! LOSE 10 SECONDS') {score -= 5};		
        if (Q5Result === 'WRONG! LOSE 10 SECONDS') {score -= 5};		

    finalScore = document.createElement("div");
    finalScore.innerHTML ="<h1><center>" + "All done! Your final score is " + score + "." + "Enter initials:" + initials + "</center></h1>";
    body.appendChild(finalScore);
    
	

	var initials = 

	start.innerHTML ="<br><hr> Question Four Result: " + Q5Result;
    body.appendChild(start);
}
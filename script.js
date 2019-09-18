var container = document.getElementById('quizContainer');
function showQuestions([questionNumber]) {
     document.getElementById("startSection").style.display = "none";
     document.getElementById("submit").style.display = "none";
     
     //passage styling
     document.getElementById("passage").style.border = "2px solid yellow";
     document.getElementById("passage").style.padding = "15px";
     document.getElementById("passage").style.width = "80%";
     document.getElementById("passage").style.textIndent = "50px";
     
     if(nextTab >= "2" ){
        document.getElementById("passage").style.border = "2px solid blue";
    }
    if(nextTab >= "4" ){
        document.getElementById("passage").style.border = "none";
        document.getElementById("passage").style.textDecoration ="underline";
    }
    if(nextTab >= "6" ){
        document.getElementById("passage").style.border = "2px dotted black";
        document.getElementById("passage").style.textAlign = "center";
        document.getElementById("passage").style.textTransform = "uppercase";
        document.getElementById("passage").style.textDecoration ="none";
    }
    passageHeading.innerHTML = questions[questionNumber].heading;

    passage.innerHTML = questions[questionNumber].content;

    var questionNo = questionNumber + 1;
    getQuestion.innerHTML = questionNo+". "+questions[questionNumber].question;

    var showOptions = document.getElementById("options");
    showOptions.innerHTML =
    "<input type='radio' class='ballon ml-3 mb-3' name='same' value= '1' >" + questions[questionNumber].optionA + "<br>" +
    "<input type='radio' class='ballon ml-3 mb-3' name='same' value='2' >" + questions[questionNumber].optionB + "<br>" +
    "<input type='radio' class='ballon ml-3 mb-3' name='same' value= '3' >" +questions[questionNumber].optionC + "<br>" + 
    "<input type='radio' class='ballon ml-3 mb-3' name='same' value= '4' >" + questions[questionNumber].optionD + "<br>";
     
}



//START TEST BUTTON CALL
var startButton = document.getElementById("start");
startButton.addEventListener("click", startTest);
var time = 45;
var timeClick = document.getElementById("showTime");
timeClick.addEventListener("click", startTest);
function startTest(){
    
    showQuestions([0]);
    document.getElementById("next").style.display = "inline-block";
    function countDownTimer() {
          
        showTime.innerHTML = time--;
        showTime.style.color= 'blue';
        showTime.style.fontSize= '50px';
        showTime.style.backgroundColor= 'gold';
        showTime.style.display= "inline-block";
        if (time == 0){
            clearInterval(timer);
            timeSubmit();
        }
    }
    var timer = setInterval(countDownTimer, 1000);
    
    
}  
// TIME OUT FUNCTION
function timeSubmit(){
            //score += 0;
            // displayScore();
            //console.log(score);   
        container.style.display = 'none'
    var selectedOption = document.querySelector("input[type=radio]:checked");
    var answer = selectedOption.value;
        if(answer == questions[currentQuestion].answer  ){
            score += 10;
            displayScore();
             console.log(score);   
        }
}


  //NEXT AND PREVIOUS BUTTON CALL 
  //NEXT CALL CONDITIONS
 var nextButton = document.getElementById("next");
nextButton.addEventListener("click",nextQuestion);
var nextTab=1;
var score = 0;

//var currentQuestion = 0;
var currentQuestion =0;
function nextQuestion(){
    document.getElementById("next").style.display = "inline-block";
    
    //CHECKING ANSWER IN NEXT CALL CONDITIONS
    var selectedOption = document.querySelector("input[type=radio]:checked");
	if(!selectedOption){
		alert("please select an option before you proceed!");
		return;
    }
    var answer = selectedOption.value;
        if(answer == questions[currentQuestion].answer  ){
            score += 10;
            // console.log(answer);
            // console.log(questions[currentQuestion].answer);
             console.log(score);   
        }
        selectedOption.checked = false;
        currentQuestion++;
       


    //LOADING AND INCREASING QUESTION IN NEXT CALL CONDITIONS
    showQuestions([nextTab]);
    nextTab++;
    // console.log(nextTab);
    if (nextTab === questions.length ){
        document.getElementById("submit").style.display = "inline-block";
        document.getElementById("next").style.display = "none";
    }  
};

//submit button and score display
var submitButton = document.getElementById("submit");
submitButton.addEventListener("click",submitQuestion);
function submitQuestion(){
    var selectedOption = document.querySelector("input[type=radio]:checked");
	if(!selectedOption){
		alert("please select an option before you proceed!");
		return;
    }
    var answer = selectedOption.value;
        if(answer == questions[currentQuestion].answer  ){
            score += 10;

            // console.log(answer);
            // console.log(questions[currentQuestion].answer);
             console.log(score);   
        }
        selectedOption.checked = false;
        container.style.display = 'none'
    displayScore();
}


      //DISPLAY SCORE IN PERCENTAGE
      var resultCont = document.getElementById("scores");
      

      function displayScore(){
        resultCont.style.backgroundColor = 'yellowgreen'
        resultCont.style.textAlign = 'center'

        resultCont.style.color = 'green'
        resultCont.style.fontSize ='50px';
        resultCont.textContent = "You scored: " + score + "%";
    if(score<= 30){
        resultCont.textContent = "You scored: " + score + "%"+ '  TRY HARDER NEXT TIME! ';
        resultCont.style.color = 'red'
    }
        
      };
      

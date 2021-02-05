 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");

         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////






     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [{
            question: "What are the components of open loop control system?", ///// Write the question inside double quotes
            answers: {
                a: "Input", ///// Write the option 1 inside double quotes
                b: "Controller, Process", ///// Write the option 2 inside double quotes
                c: "Output",
                d: "All of above",
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

    {
      question: "What are the components of closed loop control system?",  ///// Write the question inside double quotes
      answers: {
        a: "Amplifier",                  ///// Write the option 1 inside double quotes
        b: "Controller, process",                  ///// Write the option 2 inside double quotes
        c: "All of the above",      
		d: "Feedback"
		},
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
	{
            question: "Coefficient of discharge is directly proportional to ", ///// Write the question inside double quotes
            answers: {
                a: "Discharge", ///// Write the option 1 inside double quotes
                b: "Area", ///// Write the option 2 inside double quotes
                c: "Volume",
                d: "None of the above",
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },{
            question: "Coefficient of velocity is inversely proportional to ", ///// Write the question inside double quotes
            answers: {
                a: "Height ", ///// Write the option 1 inside double quotes
                b: "Square root of Height", ///// Write the option 2 inside double quotes
                c: "Area ",
                d: "Square root of acceleration due to gravity",
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },{
            question: "What is the conversion factor to convert cubic meter into litres?", ///// Write the question inside double quotes
            answers: {
                a: "10", ///// Write the option 1 inside double quotes
                b: "100", ///// Write the option 2 inside double quotes
                c: "1000",
                d: "10000",
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },



     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

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
            question: "Estimate the time required to fill the tank . Tank configuration is as - Inflow = 1000 lph, Tank radius = 10 m, Tank height = 15 m", ///// Write the question inside double quotes
            answers: {
                a: "4710 hrs", ///// Write the option 1 inside double quotes
                b: "4000 hrs", ///// Write the option 2 inside double quotes
                c: "5000 hrs",
                d: "4450 hrs",
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

    {
            question: "Estimate the time required to fill the tank . Tank configuration is as - Inflow = 10000 lph, Tank radius = 20 m, Tank height = 20 m", ///// Write the question inside double quotes
            answers: {
                a: "3000 hrs", ///// Write the option 1 inside double quotes
                b: "2000 hrs", ///// Write the option 2 inside double quotes
                c: "2512  hrs",
                d: "2500 hrs",
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },{
            question: "Estimate the time required to fill the tank . Tank configuration is as - Inflow = 1000 lph, Tank radius = 1 m, Tank height = 1 m", ///// Write the question inside double quotes
            answers: {
                a: "3.10 hrs", ///// Write the option 1 inside double quotes
                b: "2.75 hrs", ///// Write the option 2 inside double quotes
                c: "4.15  hrs",
                d: "3.14 hrs",
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        }


        
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

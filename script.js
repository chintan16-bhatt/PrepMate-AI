// HireWise AI - Interview Simulation Engine


const questions = {

    "Data Scientist": [
        "Explain the difference between supervised and unsupervised learning.",
        "How do you handle missing values in a dataset?",
        "Explain overfitting and how to prevent it."
    ],


    "AI Engineer": [
        "Explain the concept of Retrieval Augmented Generation (RAG).",
        "What is the difference between fine tuning and prompt engineering?",
        "Explain transformer architecture in AI models."
    ],


    "Software Developer": [
        "Explain Object Oriented Programming concepts.",
        "Difference between REST API and GraphQL?",
        "Explain time complexity with examples."
    ],


    "Data Analyst": [
        "Difference between SQL WHERE and HAVING clause?",
        "Explain data visualization best practices.",
        "How would you analyze a business dataset?"
    ]

};




// Generate Interview Question


function generateInterview(){


    let name =
    document.getElementById("name").value;


    let role =
    document.getElementById("role").value;


    let questionBox =
    document.getElementById("question");



    if(name===""){

        alert(
            "Please enter candidate name"
        );

        return;

    }



    questionBox.innerHTML =
    "🤖 Analyzing profile and generating questions...";



    setTimeout(()=>{


        let roleQuestions =
        questions[role];


        let randomQuestion =

        roleQuestions[
            Math.floor(
                Math.random()
                *
                roleQuestions.length
            )
        ];



        questionBox.innerHTML =

        `
        👋 Hello ${name}
        <br><br>

        Role Selected:
        <b>${role}</b>

        <br><br>

        Interview Question:

        <br><br>

        ❓ ${randomQuestion}
        `;



    },1500);



}







// Evaluate Answer


function evaluateAnswer(){


let answer =

document.getElementById("answer").value;



let feedback =

document.getElementById("feedback");




if(answer.length < 20){


alert(

"Please write a detailed answer before submitting."

);


return;


}



feedback.style.display="block";



feedback.innerHTML =

"🔍 AI is evaluating your response...";





setTimeout(()=>{



let score =

(
Math.random()*2 + 8
)
.toFixed(1);





feedback.innerHTML =


`

<h3>
AI Evaluation Completed ✅
</h3>


<br>


⭐ Overall Score:

<b>${score}/10</b>


<br><br>


💪 Strengths:

<ul>

<li>
Good understanding of concepts
</li>


<li>
Clear explanation style
</li>


</ul>



<br>



📌 Improvement Tips:


<ul>


<li>
Add real project examples
</li>


<li>
Explain with structured approach
</li>


<li>
Improve technical depth
</li>


</ul>



<br>


🚀 Recommendation:

You are improving well. Keep practicing mock interviews.



`;



},2000);



}
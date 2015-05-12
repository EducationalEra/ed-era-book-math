/* <EdEra_question type = "CheckBox"> ---- Multiple/CheckBox
        <p>Question text</p>
            <choice correct="true">The iPad</choice>
            <choice correct="false">Napster</choice>
            <choice correct="true">The iPod</choice>
            <choice correct="false">The vegetable peeler</choice>
            <choice correct="true">1</choice>
            <choice correct="false">2</choice>
            <choice correct="true">3</choice>
          <p><message></message></p>    ---- "correct/incorrec" text message for user
          
          <p><explain style="display: none">Because it is so 2</explain></p>
</EdEra_question> */





var questions = document.getElementsByTagName("EdEra_question");


function resetStyle(currentPos) {
    questions[currentPos].getElementsByTagName("explain")[0].setAttribute("style", "display: none");
    var answers = questions[currentPos].getElementsByTagName("choice");
    for (i = 0; i < answers.length; i++) {
           answers[i].getElementsByTagName("m")[0].setAttribute("style", "display: none");     
}
}

function totalCorrect(currentPos) {
    var answers = questions[currentPos].getElementsByTagName("choice"),
        totalCorrect = 0;
    for (i = 0; i < answers.length; i++) {
        if (answers[i].getAttribute("correct") == "true"){
            totalCorrect++;
        }
    }
    return totalCorrect;
}

function findCorrect(currentPos) {
    var answers = questions[currentPos].getElementsByTagName("choice"),
        inputs = questions[currentPos].getElementsByTagName("input"),
        corAns = 0, incorAns = 0;
    resetStyle(currentPos);
    for (i = 0; i < answers.length; i++) {
        
        if (answers[i].getAttribute("correct") == "true"){
            answers[i].getElementsByTagName("m")[0].setAttribute("style", "display");
           answers[i].getElementsByTagName("m")[0].innerHTML = " &#10004";
            answers[i].getElementsByTagName("m")[0].style.color="green";
        }
        
        
        else if (answers[i].getElementsByTagName("input")[0].checked == true && answers[i].getAttribute("correct") == "true") {
           corAns++;
           answers[i].getElementsByTagName("m")[0].setAttribute("style", "display");
           answers[i].getElementsByTagName("m")[0].innerHTML = " &#10004";
            answers[i].getElementsByTagName("m")[0].style.color="green";
        }
        else if (answers[i].getElementsByTagName("input")[0].checked == true && answers[i].getAttribute("correct") == "false") {
            incorAns++;
            answers[i].getElementsByTagName("m")[0].setAttribute("style", "display");
            answers[i].getElementsByTagName("m")[0].innerHTML = " &#10008";
            answers[i].getElementsByTagName("m")[0].style.color="red";
            }
        }
    if (incorAns == 0 && corAns == 0) {
         questions[currentPos].getElementsByTagName("message")[0].innerHTML = "Не вибрано жодного варіанту.";
    }    
    else {
            if (corAns == totalCorrect(currentPos) && incorAns == 0) {
                questions[currentPos].getElementsByTagName("message")[0].innerHTML = "Вірно";
            }
            if (incorAns > 0 || corAns != totalCorrect(currentPos)) {
                questions[currentPos].getElementsByTagName("message")[0].innerHTML = "Невірно";
            }
            inputs[inputs.length-1].setAttribute("style", "display");
         }
   questions[currentPos].getElementsByTagName("explain")[0].setAttribute("style", "display");
    
}



/*creates Multiple choice question type*/
function createMultiple(currentPos) {
    for (i = 0; i < questions[currentPos].getElementsByTagName("choice").length; i++) {
        questions[currentPos].getElementsByTagName("choice")[i].innerHTML = "<input type='radio' name='choices' value='"+ currentPos +"'><label for='" + currentPos + "'> " + questions[currentPos].getElementsByTagName("choice")[i].textContent + "</label><m style='display: none'></m> </br>";  
    }
}

/*creates CheckBox question type*/
function createCheckBox(currentPos) {
    for (i = 0; i < questions[currentPos].getElementsByTagName("choice").length; i++) {
        questions[currentPos].getElementsByTagName("choice")[i].innerHTML = "<input type='checkbox' name='choices'> " + questions[currentPos].getElementsByTagName("choice")[i].textContent + "<m style='display: none'></m>  </br>";  
    }
}


function go() {
var currentPos = 0;
while (currentPos < questions.length) {
        if (questions[currentPos].getAttribute("type") == "Multiple"){createMultiple(currentPos);}
        if (questions[currentPos].getAttribute("type") == "CheckBox"){createCheckBox(currentPos);}
        questions[currentPos].innerHTML += "<button onclick='findCorrect(" + currentPos + ")'>Перевірити</button>";
        currentPos++;
  }
}

window.addEventListener("load", go, false);
//document.addEventListener("load", go, false);
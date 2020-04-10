/*document.querySelector(".btn").addEventListener("mouseover",mouseOver);

function mouseOver(){
  document.querySelector(".btn").style.color ="blue";
}

document.querySelector(".btn").addEventListener("mouseout",mouseOut);

function mouseOut(){
  document.querySelector(".btn").style.color ="white";
}*/

var score = 0;

document.querySelector(".q1").addEventListener("click",function(){
  document.querySelector(".q1blurb").classList.remove("invisible");
  document.querySelector(".q1title").classList.remove("invisible");
  document.querySelector(".q1ansa").classList.remove("invisible");
  document.querySelector(".q1ansb").classList.remove("invisible");
  document.querySelector(".q1ansc").classList.remove("invisible");
  document.querySelector(".q1ansd").classList.remove("invisible");
});

function rightAns1() {
  alert("Congratulations! You just earned 10 points.")
  document.querySelector(".q1blurb").classList.add("invisible");
  document.querySelector(".q1ansa").classList.add("invisible");
  document.querySelector(".q1ansb").classList.add("invisible");
  document.querySelector(".q1ansc").classList.add("invisible");
  document.querySelector(".q1ansd").classList.add("invisible");
  score = score +10;
}

function wrongAns1(){
  alert("Oops. Please try again!");
}

document.querySelector(".q2").addEventListener("click",function(){
  document.querySelector(".q2blurb").classList.remove("invisible");
  document.querySelector(".q2title").classList.remove("invisible");
  document.querySelector(".q2ansa").classList.remove("invisible");
  document.querySelector(".q2ansb").classList.remove("invisible");
  document.querySelector(".q2ansc").classList.remove("invisible");
  document.querySelector(".q2ansd").classList.remove("invisible");
});

function rightAns2() {
  alert("Congratulations! You just earned 20 points.")
  document.querySelector(".q2blurb").classList.add("invisible");
  document.querySelector(".q2ansa").classList.add("invisible");
  document.querySelector(".q2ansb").classList.add("invisible");
  document.querySelector(".q2ansc").classList.add("invisible");
  document.querySelector(".q2ansd").classList.add("invisible");
  score = score +20;
}

function wrongAns2(){
  alert("Oops. Please try again!");
}

document.querySelector(".q3").addEventListener("click",function(){
  document.querySelector(".q3blurb").classList.remove("invisible");
  document.querySelector(".q3title").classList.remove("invisible");
  document.querySelector(".q3ansa").classList.remove("invisible");
  document.querySelector(".q3ansb").classList.remove("invisible");
  document.querySelector(".q3ansc").classList.remove("invisible");
  document.querySelector(".q3ansd").classList.remove("invisible");
});

function rightAns3() {
  alert("Congratulations! You just earned 30 points.")
  document.querySelector(".q3blurb").classList.add("invisible");
  document.querySelector(".q3ansa").classList.add("invisible");
  document.querySelector(".q3ansb").classList.add("invisible");
  document.querySelector(".q3ansc").classList.add("invisible");
  document.querySelector(".q3ansd").classList.add("invisible");
  score = score +30;
}

function wrongAns3(){
  alert("Oops. Please try again!");
}

document.querySelector(".q4").addEventListener("click",function(){
  document.querySelector(".q4blurb").classList.remove("invisible");
  document.querySelector(".q4title").classList.remove("invisible");
  document.querySelector(".q4ansa").classList.remove("invisible");
  document.querySelector(".q4ansb").classList.remove("invisible");
  document.querySelector(".q4ansc").classList.remove("invisible");
  document.querySelector(".q4ansd").classList.remove("invisible");
});

function rightAns4() {
  alert("Congratulations! You just earned 40 points.")
  document.querySelector(".q4blurb").classList.add("invisible");
  document.querySelector(".q4ansa").classList.add("invisible");
  document.querySelector(".q4ansb").classList.add("invisible");
  document.querySelector(".q4ansc").classList.add("invisible");
  document.querySelector(".q4ansd").classList.add("invisible");
  score = score +40;
}

function wrongAns4(){
  alert("Oops. Please try again!");
}

document.querySelector(".q5").addEventListener("click",function(){
  document.querySelector(".q5blurb").classList.remove("invisible");
  document.querySelector(".q5title").classList.remove("invisible");
  document.querySelector(".q5ansbtn").classList.remove("invisible");
  document.querySelector(".q5ans").classList.remove("invisible");
});

function storeValue1(){
  text = document.querySelector(".q5ans").value;
  console.log(text);
  if(text=="fish"){
    alert("Congratulations! You earned 50 points.");
    document.querySelector(".q5blurb").classList.add("invisible");
    document.querySelector(".q5title").classList.add("invisible");
    document.querySelector(".q5ansbtn").classList.add("invisible");
    document.querySelector(".q5ans").classList.add("invisible");
    score = score +50;
  }else{
    alert("Oops. Please try again!")
  };
};

document.querySelector(".q6").addEventListener("click",function(){
  document.querySelector(".q6blurb").classList.remove("invisible");
  document.querySelector(".q6title").classList.remove("invisible");
  document.querySelector(".q6ansbtn").classList.remove("invisible");
  document.querySelector(".q6ans").classList.remove("invisible");
});

function storeValue2(){
  text = document.querySelector(".q6ans").value;
  if(text==="brownies"){
    alert("Congratulations! You earned 10 points.");
    document.querySelector(".q6blurb").classList.add("invisible");
    document.querySelector(".q6title").classList.add("invisible");
    document.querySelector(".q6ansbtn").classList.add("invisible");
    document.querySelector(".q6ans").classList.add("invisible");
    score = score +10;
  }else{
    alert("Oops. Please try again!");
  };
};

document.querySelector(".q7").addEventListener("click",function(){
  document.querySelector(".q7blurb").classList.remove("invisible");
  document.querySelector(".q7title").classList.remove("invisible");
  document.querySelector(".q7ansa").classList.remove("invisible");
  document.querySelector(".q7ansb").classList.remove("invisible");
  document.querySelector(".q7ansc").classList.remove("invisible");
  document.querySelector(".q7ansd").classList.remove("invisible");
});

function rightAns5() {
  alert("Congratulations! You just earned 20 points.")
  document.querySelector(".q7blurb").classList.add("invisible");
  document.querySelector(".q7ansa").classList.add("invisible");
  document.querySelector(".q7ansb").classList.add("invisible");
  document.querySelector(".q7ansc").classList.add("invisible");
  document.querySelector(".q7ansd").classList.add("invisible");
  score = score +20;
}

function wrongAns5(){
  alert("Oops. Please try again!");
}

document.querySelector(".q8").addEventListener("click",function(){
  document.querySelector(".q8blurb").classList.remove("invisible");
  document.querySelector(".q8title").classList.remove("invisible");
  document.querySelector(".q8ansa").classList.remove("invisible");
  document.querySelector(".q8ansb").classList.remove("invisible");
  document.querySelector(".q8ansc").classList.remove("invisible");
  document.querySelector(".q8ansd").classList.remove("invisible");
});

function rightAns6() {
  alert("Congratulations! You just earned 30 points.")
  document.querySelector(".q8blurb").classList.add("invisible");
  document.querySelector(".q8ansa").classList.add("invisible");
  document.querySelector(".q8ansb").classList.add("invisible");
  document.querySelector(".q8ansc").classList.add("invisible");
  document.querySelector(".q8ansd").classList.add("invisible");
  score = score +30;
}

function wrongAns6(){
  alert("Oops. Please try again!");
}

document.querySelector(".q9").addEventListener("click",function(){
  document.querySelector(".q9blurb").classList.remove("invisible");
  document.querySelector(".q9title").classList.remove("invisible");
  document.querySelector(".q9ansa").classList.remove("invisible");
  document.querySelector(".q9ansb").classList.remove("invisible");
  document.querySelector(".q9ansc").classList.remove("invisible");
  document.querySelector(".q9ansd").classList.remove("invisible");
});

function rightAns7() {
  alert("Congratulations! You just earned 40 points.")
  document.querySelector(".q9blurb").classList.add("invisible");
  document.querySelector(".q9ansa").classList.add("invisible");
  document.querySelector(".q9ansb").classList.add("invisible");
  document.querySelector(".q9ansc").classList.add("invisible");
  document.querySelector(".q9ansd").classList.add("invisible");
  score = score +40;
}

function wrongAns7(){
  alert("Oops. Please try again!");
}

document.querySelector(".q10").addEventListener("click",function(){
  document.querySelector(".q10blurb").classList.remove("invisible");
  document.querySelector(".q10title").classList.remove("invisible");
  document.querySelector(".q10ansa").classList.remove("invisible");
  document.querySelector(".q10ansb").classList.remove("invisible");
  document.querySelector(".q10ansc").classList.remove("invisible");
  document.querySelector(".q10ansd").classList.remove("invisible");
});

function rightAns8() {
  alert("Congratulations! You just earned 50 points.")
  document.querySelector(".q10blurb").classList.add("invisible");
  document.querySelector(".q10ansa").classList.add("invisible");
  document.querySelector(".q10ansb").classList.add("invisible");
  document.querySelector(".q10ansc").classList.add("invisible");
  document.querySelector(".q10ansd").classList.add("invisible");
  score = score +50;
}

function wrongAns8(){
  alert("Oops. Please try again!");
}

document.querySelector(".q11").addEventListener("click",function(){
  document.querySelector(".q11blurb").classList.remove("invisible");
  document.querySelector(".q11title").classList.remove("invisible");
  document.querySelector(".q11ansa").classList.remove("invisible");
  document.querySelector(".q11ansb").classList.remove("invisible");
  document.querySelector(".q11ansc").classList.remove("invisible");
  document.querySelector(".q11ansd").classList.remove("invisible");
});

function rightAns9() {
  alert("Congratulations! You just earned 10 points.")
  document.querySelector(".q11blurb").classList.add("invisible");
  document.querySelector(".q11ansa").classList.add("invisible");
  document.querySelector(".q11ansb").classList.add("invisible");
  document.querySelector(".q11ansc").classList.add("invisible");
  document.querySelector(".q11ansd").classList.add("invisible");
  score = score +10;
}

function wrongAns9(){
  alert("Oops. Please try again!");
}

document.querySelector(".q12").addEventListener("click",function(){
  document.querySelector(".q12blurb").classList.remove("invisible");
  document.querySelector(".q12title").classList.remove("invisible");
  document.querySelector(".q12ansa").classList.remove("invisible");
  document.querySelector(".q12ansb").classList.remove("invisible");
  document.querySelector(".q12ansc").classList.remove("invisible");
  document.querySelector(".q12ansd").classList.remove("invisible");
  document.querySelector(".q12anse").classList.remove("invisible");
});

function rightAns10() {
  alert("Congratulations! You just earned 20 points.")
  document.querySelector(".q12blurb").classList.add("invisible");
  document.querySelector(".q12ansa").classList.add("invisible");
  document.querySelector(".q12ansb").classList.add("invisible");
  document.querySelector(".q12ansc").classList.add("invisible");
  document.querySelector(".q12ansd").classList.add("invisible");
  document.querySelector(".q12anse").classList.add("invisible");
  score = score +20;
}

function wrongAns10(){
  alert("Oops. Please try again!");
}

document.querySelector(".q13").addEventListener("click",function(){
  document.querySelector(".q13blurb").classList.remove("invisible");
  document.querySelector(".q13title").classList.remove("invisible");
  document.querySelector(".q13ansa").classList.remove("invisible");
  document.querySelector(".q13ansb").classList.remove("invisible");
  document.querySelector(".q13ansc").classList.remove("invisible");
  document.querySelector(".q13ansd").classList.remove("invisible");
  document.querySelector(".q13anse").classList.remove("invisible");
});

function rightAns11() {
  alert("Congratulations! You just earned 30 points.")
  document.querySelector(".q13blurb").classList.add("invisible");
  document.querySelector(".q13ansa").classList.add("invisible");
  document.querySelector(".q13ansb").classList.add("invisible");
  document.querySelector(".q13ansc").classList.add("invisible");
  document.querySelector(".q13ansd").classList.add("invisible");
  document.querySelector(".q13anse").classList.add("invisible");
  score = score +30;
}

function wrongAns11(){
  alert("Oops. Please try again!");
}

document.querySelector(".q14").addEventListener("click",function(){
  document.querySelector(".q14blurb").classList.remove("invisible");
  document.querySelector(".q14title").classList.remove("invisible");
  document.querySelector(".q14ansa").classList.remove("invisible");
  document.querySelector(".q14ansb").classList.remove("invisible");
  document.querySelector(".q14ansc").classList.remove("invisible");
  document.querySelector(".q14ansd").classList.remove("invisible");
  document.querySelector(".q14anse").classList.remove("invisible");
});

function rightAns12() {
  alert("Congratulations! You just earned 40 points.")
  document.querySelector(".q14blurb").classList.add("invisible");
  document.querySelector(".q14ansa").classList.add("invisible");
  document.querySelector(".q14ansb").classList.add("invisible");
  document.querySelector(".q14ansc").classList.add("invisible");
  document.querySelector(".q14ansd").classList.add("invisible");
  document.querySelector(".q14anse").classList.add("invisible");
  score = score +40;
}

function wrongAns12(){
  alert("Oops. Please try again!");
}

document.querySelector(".q15").addEventListener("click",function(){
  document.querySelector(".q15blurb").classList.remove("invisible");
  document.querySelector(".q15title").classList.remove("invisible");
  document.querySelector(".q15ansa").classList.remove("invisible");
  document.querySelector(".q15ansb").classList.remove("invisible");
  document.querySelector(".q15ansc").classList.remove("invisible");
  document.querySelector(".q15ansd").classList.remove("invisible");
});

function rightAns13() {
  alert("Congratulations! You just earned 50 points.")
  document.querySelector(".q15blurb").classList.add("invisible");
  document.querySelector(".q15ansa").classList.add("invisible");
  document.querySelector(".q15ansb").classList.add("invisible");
  document.querySelector(".q15ansc").classList.add("invisible");
  document.querySelector(".q15ansd").classList.add("invisible");
  score = score +50;
}

function wrongAns13(){
  alert("Oops. Please try again!");
}

document.querySelector(".q16").addEventListener("click",function(){
  document.querySelector(".q16blurb").classList.remove("invisible");
  document.querySelector(".q16title").classList.remove("invisible");
  document.querySelector(".q16ansa").classList.remove("invisible");
  document.querySelector(".q16ansb").classList.remove("invisible");
  document.querySelector(".q16ansc").classList.remove("invisible");
  document.querySelector(".q16ansd").classList.remove("invisible");
});

function rightAns14() {
  alert("Congratulations! You just earned 10 points.")
  document.querySelector(".q16blurb").classList.add("invisible");
  document.querySelector(".q16ansa").classList.add("invisible");
  document.querySelector(".q16ansb").classList.add("invisible");
  document.querySelector(".q16ansc").classList.add("invisible");
  document.querySelector(".q16ansd").classList.add("invisible");
  score = score +10;
}

function wrongAns14(){
  alert("Oops. Please try again!");
}

document.querySelector(".q17").addEventListener("click",function(){
  document.querySelector(".q17blurb").classList.remove("invisible");
  document.querySelector(".q17title").classList.remove("invisible");
  document.querySelector(".q17ansa").classList.remove("invisible");
  document.querySelector(".q17ansb").classList.remove("invisible");
  document.querySelector(".q17ansc").classList.remove("invisible");
  document.querySelector(".q17ansd").classList.remove("invisible");
});

function rightAns15() {
  alert("Congratulations! You just earned 20 points.")
  document.querySelector(".q17blurb").classList.add("invisible");
  document.querySelector(".q17ansa").classList.add("invisible");
  document.querySelector(".q17ansb").classList.add("invisible");
  document.querySelector(".q17ansc").classList.add("invisible");
  document.querySelector(".q17ansd").classList.add("invisible");
  score = score +20;
}

function wrongAns15(){
  alert("Oops. Please try again!");
}

document.querySelector(".q18").addEventListener("click",function(){
  document.querySelector(".q18blurb").classList.remove("invisible");
  document.querySelector(".q18title").classList.remove("invisible");
  document.querySelector(".q18ansa").classList.remove("invisible");
  document.querySelector(".q18ansb").classList.remove("invisible");
  document.querySelector(".q18ansc").classList.remove("invisible");
  document.querySelector(".q18ansd").classList.remove("invisible");
});

function rightAns16() {
  alert("Congratulations! You just earned 30 points.")
  document.querySelector(".q18blurb").classList.add("invisible");
  document.querySelector(".q18ansa").classList.add("invisible");
  document.querySelector(".q18ansb").classList.add("invisible");
  document.querySelector(".q18ansc").classList.add("invisible");
  document.querySelector(".q18ansd").classList.add("invisible");
  score = score +30;
}

function wrongAns16(){
  alert("Oops. Please try again!");
}

document.querySelector(".q19").addEventListener("click",function(){
  document.querySelector(".q19blurb").classList.remove("invisible");
  document.querySelector(".q19title").classList.remove("invisible");
  document.querySelector(".q19ansa").classList.remove("invisible");
  document.querySelector(".q19ansb").classList.remove("invisible");
  document.querySelector(".q19ansc").classList.remove("invisible");
  document.querySelector(".q19ansd").classList.remove("invisible");
});

function rightAns17() {
  alert("Congratulations! You just earned 40 points.")
  document.querySelector(".q19blurb").classList.add("invisible");
  document.querySelector(".q19ansa").classList.add("invisible");
  document.querySelector(".q19ansb").classList.add("invisible");
  document.querySelector(".q19ansc").classList.add("invisible");
  document.querySelector(".q19ansd").classList.add("invisible");
  score = score +40;
}

function wrongAns17(){
  alert("Oops. Please try again!");
}

document.querySelector(".q20").addEventListener("click",function(){
  document.querySelector(".q20blurb").classList.remove("invisible");
  document.querySelector(".q20title").classList.remove("invisible");
  document.querySelector(".q20ansbtn").classList.remove("invisible");
  document.querySelector(".q20ans").classList.remove("invisible");
});

function storeValue3(){
  text = document.querySelector(".q20ans").value;
  if(text==="aesthetic"){
    alert("Congratulations! You earned 50 points.");
    document.querySelector(".q20blurb").classList.add("invisible");
    document.querySelector(".q20title").classList.add("invisible");
    document.querySelector(".q20ansbtn").classList.add("invisible");
    document.querySelector(".q20ans").classList.add("invisible");
    score = score +50;
  }else{
    alert("Oops. Please try again!");
  };
};

function calcValue(){
  alert("Great job! Your final score is " + score);
}

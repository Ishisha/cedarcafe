$("#myBtn").click(function(){
  $("#myModal").modal();
});

// $('.btn').button(){
// };

// $ (document).ready (function() { 
//     $('div').click (function() {
//       $('div').hide();
//     });
// });

// Quiz
$(".box").click(function() {
  $(this).addClass("selected").siblings(".selected").removeClass("selected"); 
});

$(".submit").click(function() {
  var n1 = $(".a.selected").length;
  var n2 = $(".b.selected").length;
  
  if ((n1 >=n2)) {
    $("span").html("Try One of Our Vegetarian Dishes!");
  }
  if ((n2 >= n1)) {
    $("span").html("Try Any of Our Regular Dishes!");
  }
});

// function validate(){
// function check(){

// 	var question1 = document.quiz.question1;
// 	var question2 = document.quiz.question2;
// 	var question3 = document.quiz.question3;
// 	var question1 = document.quiz.question1.value;
// +	var question2 = document.quiz.question2.value;
// +	var question3 = document.quiz.question3.value;
// 	var correct = 0;


// 	if (question1.value == "Chickpea") {
// 		correct++;
// }
// 	if (question2.value == "dessert") {
// 		correct++;
// }	
// 	if (question3.value == "vegetable") {
// 		correct++;
// 	}
// 	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
// 	var messages = ["Great job!", "That's just okay", "You really need to do better"];
// 	var range;

// 	if (correct < 1) {
// 		  range = 2;
// 	}

// 	if (correct > 0 && correct < 3) {
// 		  range = 1;
// 	}

// 	if (correct > 2) {
// 		  range = 0;
// 	}

// 	document.getElementById("after_submit").style.visibility = "visible";

// 	document.getElementById("message").innerHTML = messages[range];
// 	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
// 	document.getElementById("picture").src = pictures[range];
	
// }
	
	

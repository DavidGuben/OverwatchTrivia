//Global function
$(function() {

	var answerKey = { answers: [ 'b', 'd', 'a', 'c', 'a', 'd', 'b', 'a', 'd', 'a', 'd', 'c', 'a', 'b', 'd' ] }

	//All the variables
	var progress = $('#progress'),
			progressKeeper = $('#progressKeeper'),
			notice = $('#notice'),
			progressWidth = 548,
			answers = answerKey.answers,
			userAnswers = [],
			questionLength = answers.length,
			questionStatus = $('#questionNumber'),
			questionList = $('.question');

   //Rounding method
  function roundReloaded(num, dec) {
 	    var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
 	    return result;
  }

  function scoreCard(score) {
	 	  var returnString;
	 		  if (score == 100) returnString = "A+"
	 		  else if (score > 90) returnString = "A"
	 		  else if (score > 70) returnString = "C"
	 		  else if (score > 50) returnString = "D"
	 		  else if (score > 35) returnString = "F"
	 		  else if (score > 20) returnString = "Why bother?"
	 		  else returnString = "Total Failure"
	 		return returnString;
  }

 	function checkAnswers() {
 		var resultArr = [],
 			flag = false;
 		for(i=0; i<answers.length; i++) {
 			if (answers[i] == userAnswers[i]) {
 				flag = true;
 			} else {
 				flag = false;
 			}
 			resultArr.push(flag);
 		}
 	  return resultArr;
 	} 

 	$('.btnStart').click(function(){ 
    $(this).parents('.questionContainer').fadeOut(500, function(){ 
        $(this).next().fadeIn(500, function(){ progressKeeper.show(); }); 
    }); 
         return false; 
	});

$('.btnPrev').click(function(){ 
        notice.hide(); 
    $(this).parents('.questionContainer').fadeOut(500, function(){ 
        $(this).prev().fadeIn(500) 
    }); 
    progress.animate({ width: progress.width() - Math.round(progressWidth/questionLength), }, 500 ); 
         return false; 
});


$('.btnNext').click(function(){ 
        var tempCheck = $(this).parents('.questionContainer').find('input[type=radio]:checked'); 
    if (tempCheck.length == 0) { 
         notice.fadeIn(300);return false; 
    } 
         notice.hide(); 
    $(this).parents('.questionContainer').fadeOut(500, function(){ 
        $(this).next().fadeIn(500); 
    }); 
    progress.animate({ width: progress.width() + Math.round(progressWidth/questionLength), }, 500 ); 
         return false; 
});

$('.btnShowResult').click( function() {
		
});





})
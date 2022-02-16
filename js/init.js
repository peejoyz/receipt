$(document).ready(function(){
	$("#message").fadeIn('slow');
});


$(":text").focusin(function(){
	$(this).css("background-color", "yellow");
})

$(":text").focusout(function(){
	$(this).css("background-color", "#fff");
})


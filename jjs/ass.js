$(document).ready (function() {

	$(".input").focus(function(){
		$(this).parent().addClass("focus");
	}).blur(function(){
		if($(this).val() === ''){
			$(this).parent().removeClass("focus");
		}
	});



	$('#form_name').focusin(function(){
	$('#nmsg').html('Must not contain numbers, between 30 characters');
});

$('#form_name').blur(function(){
	$('#nmsg').html('');
});
 
//end of name onclick

$('#form_email').focusin(function(){
	$('#nmsg2').html('pls enter a valid email');
});

$('#form_email').blur(function(){
	$('#nmsg2').html('');
});

//end of email onclick


$('#form_number').focusin(function(){
	$('#nmsg3').html('pls enter a valid number with 11 characters ');
});

$('#form_number').blur(function(){
	$('#nmsg3').html('');
});

//end of phone number onclick

/*$('#form_number').focusin(function(){
	$('#nmsg4').html('Must not contain numbers and must be between 30 characters');
});

$('#form_number').blur(function(){
	$('#nmsg4').html('');
});*/




	$("name_error").hide();
	$("email_error").hide();
	$("number_error").hide();
	$("#suc").hide();
	$("#err").hide();

	var error_name = false;
	var error_email = false;
	var error_number = false;
	var error_textarea = false;
	var error_subject = false;
	


	$('#form_name').focusout(function(){
		check_name();
	});

	$('#form_email').focusout(function(){
		check_email();
	});

	$('#form_number').focusout(function(){
		check_number();
	});

	$('#textarea').focusout(function(){
		check_textarea();
	});

	$('#subject').focusout(function(){
		check_subject();
	});


	function check_subject(){

		var check_subject = $('#subject').val()

		if($("#subject").val() == ""){
			$('#submsg4').html('this field is required');
		} else {
			$('#submsg4').html('');
			error_subject = true;
		}
	}

	function check_textarea(){

		var check_textarea = $('#textarea').val()

		if($("#textarea").val() == ""){
			$('#textmsg').html('this field is required');
		} else {
			$('#textmsg').html('');
			error_textarea = true;
		}
	}




	function check_name() {

		var check_name = $('#form_name').val()

		if($("#form_name").val() == ""){
			$('#submsg').html('this field is required');
		} else {
			$('#submsg').html('');
			//error_subject = true;
		}

		var pattern = new RegExp (/^[a-zA-Z]{0,29}$/g);

		if(pattern.test($('#form_name').val())) {
			$('#name_error').hide();
		} else {
			$('#name_error').html = $('#err').fadeIn(800);
			$('#name_error').show();
			setTimeout(function(){
				$("#err").fadeOut(5000);
			}, 300);
			error_name = true;
		}
											
	}

											/*$('#err').fadeIn(300);*/
											/*/^[a-z0-9_-]{2,9}$/g;*/
										/*	/\S+@+\S+\.+\S/g;*/

	function check_email() {

		var check_email = $('#form_email').val()

		if($("#form_email").val() == ""){
			$('#submsg2').html('this field is required');
		} else {
			$('#submsg2').html('');
			//error_email = true;
		}

		var pattern = new RegExp(/^[+a-zA-Z0-9,_-]+@[a-zA-Z0-9,-]+\.[a-zA-Z]{2,4}$/i);

		if(pattern.test($('#form_email').val())) {
			$('#email_error').hide();
		} else {
			$('#email_error').html = $('#err').fadeIn(800);
			$('#email_error').show();
			setTimeout(function(){
				$("#err").fadeOut(5000);
			}, 300);
			error_email = true;
		}
	}

	function check_number() {


		var check_number = $('#form_number').val()

		if($("#form_number").val() == ""){
			$('#submsg3').html('this field is required');
		} else {
			$('#submsg3').html('');
			//error_subject = true;
		}

		var pattern = new RegExp (/^[0-9]{11}$/g);

		if(pattern.test($('#form_number').val())) {
			$('#number_error').hide();
		} else {
			$('#number_error').html = $('#err').fadeIn(800);
			$('#number_error').show();
			setTimeout(function(){
				$("#err").fadeOut(5000);
			}, 300);
			error_number = true;
		}
	}

		var text_max = 250;
	$('#textarea_feedback').html(text_max + ' characters remaining ');
	$('#textarea').keyup(function(){
		var text_length = $('#textarea').val().length;
		var text_remaining = text_max - text_length;
		$('#textarea_feedback').html(text_remaining + ' characters remaining ');
	});


/*
		('#registration_form').submit(function(){
			if ('#form_name') = true{
				alert('yes');
				return true;
			}
			else {
			alert('no');
			
		}

		//});




	//validating-----

	('#registration_form').submit(function(){
		error_name = false;
		error_email = false;
		error_number = false;
		error_subject = false;
		error_textarea = false;


		check_name();
		check_number();
		check_email();
		check_textarea();
		check_subject();

		if(error_name == false && error_email == false && error_number == false && error_subject == false && error_textarea == false){
			alert('yes');
			return true;
			
		} else {
			alert('no');
			return false;
			
		}
	});

		






	/*$('#send').submit(function(e) {
		var isValid = true;
		$('input[type="text"]').each(function(){
			($.trim($(this).val()) == ''){
				isValid = false;
				$(this).css({"border": "6px solid red", "background": "#FFCECE"
			});
			} else {
				$(this).css({"border": "", "background": ""});
			}
		});

		if (isValid == false)e.preventDefault();
		else alert('Thank you');
	});

*/

	//$(document).ready(function(){
	


	

	/*var name_regex = /^[a-zA-Z]+$/;*/


	/*var email_default = 'Enter your email address....';
	$('input[type="text"]').attr('value', email_default).focus
	(function(){
		if ($(this).val() == email_default){
			$(this).attr('value', "");
		}
	}).blur(function(){
		if($(this).val() == ""){
			$(this).attr('value', email_default);
		}
	})*/ 
	
	/*$('#send').click(function() {
		var failed = false;
		$('input[type = "text"]').each(function() {
			if ($(this).val() == '') {
				failed = true;
			}
		});

		if(failed == true){
			$('#err').fadeIn(300);
		} else if (failed == false){
			$('#suc').fadeIn(3000);
		}
	});*/

});

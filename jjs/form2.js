$(document).ready(function(){

	$('#submitbutton').click(function(){
			/*$('input[type="text"]').val('');*/
			$('.input').val('');
		});
	

	$('#regForm').on('submit', function(e){

		e.preventDefault();

		$('#formmsg').show = $('#success').fadeIn(2000);
		$('#formmsg').show();
			setTimeout(function(){
				$("#success").fadeOut(2500);
			}, 500);
			


		$("#submitbutton").attr("disabled", true);

		$("#form_name").attr("disabled", true);
		$("#form_email").attr("disabled", true);
		$("#form_number").attr("disabled", true);
		$("#subject").attr("disabled", true);
		$("#textarea").attr("disabled", true);

								
		

		return true;



	});


	
	

	var formValid = {
		form_name:false,
		form_number:false,
		form_email:false,
		subject:false,
		textarea:false
	};
  

	function checkValidation(){
			$('#submitbutton').removeAttr('disabled');
		}else{
			$('#submitbutton').attr('disabled',true);
		}
	}



	$('#form_name').focusout('input', function(){
		var form_name = $(this).val();

		if(form_name.length < 1) {
			$('#username-error').text('This field is required').show();
			formValid.form_name = false;
			checkValidation();
		} else{
			$('#username-error').hide();
			formValid.form_name = true;
			checkValidation();
			var pattern = new RegExp (/^[a-zA-Z]+$/);
			if (!pattern.test(form_name)) {
				$('#username-error').text('Only Alphabet is allowed').show();
				formValid.form_name = false;
				checkValidation();
		} else{
			$('#username-error').hide();
			formValid.form_name = true;
			checkValidation();
			if(form_name.length > 30) {
				$('#username-error').text('should not be morethan 30 characters').show()
				formvalid.form_name = false;
				checkValidation();
			}else{
				$('#username-error').hide();
				formValid.form_name = true;
				checkValidation();
			}
		}
		}

	});


	$('#form_number').focusout('input', function(){
		var form_number = $(this).val();

		if(form_number.length < 1) {
			$('#phone-error').text('This field is required').show();
			formValid.form_number = false;
			checkValidation();
		} else{
			$('#phone-error').hide();
			formValid.form_number = true;
			checkValidation();
			var pattern = new RegExp (/^[0-9]+$/g);
			if (!pattern.test(form_number)) {
				$('#phone-error').text('Must only contain numbers').show();
				formValid.form_number = false;
				checkValidation();
		} else{
			$('#phone-error').hide();
			formValid.form_number = true;
			checkValidation();
			if(form_number.length < 11 || form_number.length >11) {
				$('#phone-error').text(' Number should be 11 characters').show();
				formvalid.form_number = false;
				checkValidation();
			}else{
				$('#phone-error').hide();
				formValid.form_number = true;
				checkValidation();
			}
		}
		}

	});


	$('#form_email').focusout('input', function(){
		var form_email = $(this).val();

		if(form_email.length < 1) {
			$('#email-error').text('This field is required').show();
			formValid.form_email = false;
			checkValidation();
		} else{
			$('#email-error').hide();
			formValid.form_email = true;
			checkValidation();
			var pattern = new RegExp(/^[+a-zA-Z0-9,_-]+@[a-zA-Z0-9,-]+\.[a-zA-Z]{2,4}$/i);
			if (!pattern.test(form_email)) {
				$('#email-error').text('Must be a valid email').show();
				formValid.form_email = false;
				checkValidation();
		} else{
			$('#email-error').hide();
			formValid.form_email = true;
			checkValidation();
			if(form_email.length > 30) {
				$('#email-error').text('should not be morethan 30 characters').show();
				formvalid.form_email = false;
				checkValidation();
			}else{
				$('#email-error').hide();
				formValid.form_email = true;
				checkValidation();
			}
		}
		}

	});


	$('#subject').focusout('input', function(){
		var subject = $(this).val();

		if(subject.length < 1 ) {
			$('#subject-error').text('This field is required').show();
			formValid.subject = false;
			checkValidation();
		} else{
			$('#subject-error').hide();
			formValid.subject = true;
			checkValidation();
		
			if(subject.length > 30) {
				$('#subject-error').text('should not be morethan 30 characters').show();
				formvalid.subject = false;
				checkValidation();
			}else{
				$('#subject-error').hide();
				formValid.subject = true;
				checkValidation();
			}
		}

	});


	$('#textarea').focusout('input', function(){
		var textarea = $(this).val();

		if(textarea.length < 1) {
			$('#textarea-error').text('This field is required').show();
			formValid.textarea = false;
			checkValidation();
		} else{
			$('#textarea-error').hide();
			formValid.textarea = true;
			checkValidation();
		
			if(subject.length > 250) {
				$('#textarea-error').text('only 250 characters is allowed').show();
				formvalid.textarea = false;
				checkValidation();
			}else{
				$('#textarea-error').hide();
				formValid.textarea = true;
				checkValidation();
			}
		}

	});


	var text_max = 250;
	$('#textarea_feedback').html(text_max + ' characters remaining ');
	$('#textarea').keyup(function(){
		var text_length = $('#textarea').val().length;
		var text_remaining = text_max - text_length;
		$('#textarea_feedback').html(text_remaining + ' characters remaining ');
	});

	


});

	
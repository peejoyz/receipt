$(document).ready(function(){
	$('.table').on('input','.prc', function(){
		var totalSum = 0;
		$('.table .prc').each(function(){
			var inputVal = $(this).val();
			if($.isNumeric(inputVal)){
				totalSum += parseFloat(inputVal)
			}
		});
		$('#result').html(totalSum)
	});


	var i = 1;
	var t = 4;
	//for(t = 3; t<= 3; t++){
	$('#add').click(function(){
		i++;

	var increase = t++
		
	/*$('#inc').html(a);*/
	$('#me').append(function(){
		return '<tr id="row'+i+'" style="color:#000"><td id="">'+ increase+'</td><td><input type="text" class="form-control pc"></td><td><input type="text" class="form-control pc"></td><td><input type="text" class="form-control prc"></td><td><input type="text" class="form-control pc"></td><td><button id="button" style="color:#000; font-size:30px;" class="glyphicon glyphicon-edit"></button></td><td align="center"><button id="delete" style="color:#000; font-size:30px;" class="glyphicon glyphicon-remove"></button></td></tr>'});
	});
//}

	$('#rem').click(function(){
		$("tr:last").remove();
	});



	$('#delete').click(function(){
		$('#ip,#in,#it,#is').val('');
		$('#ip,#in,#it,#is').prop('disabled', true);

	});


	$('#delete2').click(function(){
		$('#ip2,#in2,#it2,#is2').val('');
		$('#ip2,#in2,#it2,#is2').prop('disabled', true);

	});


	$('#delete3').click(function(){
		$('#ip3,#in3,#it3,#is3').val('');
		$('#ip3,#in3,#it3,#is3').prop('disabled', true);


	});



	$('#button').click(function(){
		$('#ip,#in,#it,#is').prop('disabled', false);
	});

	$('#button2').click(function(){
		$('#ip2,#in2,#it2,#is2').prop('disabled', false);
	});

	$('#button3').click(function(){
		$('#ip3,#in3,#it3,#is3').prop('disabled', false);
	});


	

	$('#ip').focusout(function(){
		$("#ip").prop('disabled', true);

	});


	$('#in').focusout(function(){
		$("#in").prop('disabled', true);

	});


	$('#it').focusout(function(){
		$("#it").prop('disabled', true);

	});


	$('#is').focusout(function(){
		$("#is").prop('disabled', true);

	});




	$('#ip2').focusout(function(){
		$("#ip2").prop('disabled', true);

	});


	$('#in2').focusout(function(){
		$("#in2").prop('disabled', true);

	});


	$('#it2').focusout(function(){
		$("#it2").prop('disabled', true);

	});


	$('#is2').focusout(function(){
		$("#is2").prop('disabled', true);

	});





	$('#ip3').focusout(function(){
		$("#ip3").prop('disabled', true);

	});


	$('#in3').focusout(function(){
		$("#in3").prop('disabled', true);

	});


	$('#it3').focusout(function(){
		$("#it3").prop('disabled', true);

	});


	$('#is3').focusout(function(){
		$("#is3").prop('disabled', true);

	});


	$('#print').click(function(){
		window.print();
	})


});
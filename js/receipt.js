$(document).ready(function(){
	$('.form-group').on('input','.prc',function(){
		var totalSum = 0;
		$('.form-group .prc').each(function(){
			var inputVal = $(this).val();
			if($.isNumeric(inputVal)){
				totalSum += parseFloat(inputVal);
			}
		});
		$('#result').text(totalSum);
	});


		$('#remove').click(function(){
			var attr = $('input', '.pc', '.prc').attr('disabled');
			$('input', '.pc', '.prc').attr('disabled');
		});


	/*$('.table').on('#remove', function(){
		$('input', '.pc', '.prc').attr('disabled', true);
		return true;
	});*/






	/*$('#remove').click(function(){
		$('input', '.pc', '.prc').val('')(function(){
			$('input', '.pc', '.prc').attr('disabled', true);

		});

		
	});*/



});
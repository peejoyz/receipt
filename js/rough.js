$(window).ready(function(){
	alert('good to go');
});
var count=$('*').length;
alert(count);

$('input[type="button"]').click(function(){
	$(this).attr('value', 'please wait...');
});



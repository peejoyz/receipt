$('#some_text').scroll(function(){
	var scroll_pos=$('#some_text').scrollTop();
$('#feedback').html('You have scroll, and at position '+ scroll_pos);
});
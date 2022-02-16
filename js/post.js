$('#button').click(function(){
	var name= $('#name').val();
	var string= $('#string').val();
$.POST('php/reverse.php', {string:string, name:name}, function(data){
$('#feedback').html(data);
});

});
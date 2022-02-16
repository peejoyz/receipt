$(document).ready(function(){
$('#search_name').keyup(function(){
	search_name= $(this).val();

$('#name li').removeclass('highlight');

if(jQuery.trim (search_name)!=''){
	$("#name li:contains('"+ search_name+"')").addclass('highlight');
}
})
});
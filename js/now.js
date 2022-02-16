$(document).ready(function(){
	setInterval(function(){
		var timestamp= jQuery.now();
		$('#time').text(timestamp);
	}, 1);
});



$(document).ready(function(){
	eventTime=Date.parse('20, August 2017')/1000;
	currentTime=Math.floor(jQuery.now()/1000);
	 seconds= eventTime-currentTime;
days=Math.floor(seconds/(60*60*24));
$('#days').text('Only'+ days + 'days Until event');
});
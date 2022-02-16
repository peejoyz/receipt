 $(':text').focusin(function(){
 	$(this).css('background-color','yellow');
 });

 $(':text').focusout(function(){
 	$(this).css('background-color', '#fff');
 });

 $('#form_submit').click(function(){
 	$(this).attr('value','please wait..');
 	$(this).attr('disabled', true);
 });
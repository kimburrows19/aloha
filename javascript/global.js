$(document).ready(function(){
    // Simple call
    $('.QapTcha').QapTcha();
    
    // More complex call
   // $('.QapTcha').QapTcha({
   //   autoSubmit : true,
    //  autoRevert : true,
   //   PHPfile : 'path_to_my_php_file/Qaptcha.jquery.php'
   // });
  });



$(function(){
	$("#quotes").cycle({
	
		fx: "scrollRight",
		easing: "easeInOutBack",
		random: 1,
		timeout: 10000
	});
	$("#canvas").cycle({
	   	fx: 'custom', 
    	cssBefore: {  
        	top:  0, 
        	left: 0, 
        	width: 0, 
        	height: 0,  
        	display: 'block' 
    	}, 
    	animIn:  {  
        	width: 940, 
        	height: 260  
   		 }, 
    	animOut: {  
        	top:  260, 
        	left: 940, 
       		width: 0, 
        	height: 0 
    	}, 
    	cssAfter: {  
    	    zIndex: 0  
        }, 
    	timeout: 8000 
	});
	
	$("#callouts").cycle({
		random: 1,
		timeout: 8000
	});

	$("form").validate();
	$("#helloForm").submit(function(){
		if( $(this).valid() == false ){
			console.log("in valid is false");
		return false;
		}
		var dataString = $("#helloForm").serialize();
		$.ajax({
		type: "POST",
		url: "/hello.php",
		data: dataString,
		success: function(rt) {
		$("#helloForm").html("<h3>Thanks for talking to<br> us! We'll get right<br> back to you.</h3>");
		}
		});
		return false;
	}); 
	$(".block h3").click(function(){
		$(this).siblings("p").toggle("fast");
		$(this).toggleClass("expand");
		$(this).toggleClass("collapse");
			
	});
	/*$("nav ul li").hover(function(){
			$(this).children("ul").addClass("");
			$(this).children("ul").removeClass("hide");
		},
		function(){
			$(this).children("ul").addClass("hide");
			$(this).children("ul").removeClass("showblock");
		}
	);*/
});
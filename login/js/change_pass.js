   
  
function check(form) { 
		var userid=localStorage.getItem("value");
	   var current_pass=document.getElementById("current_pass").value;
	   var new_pass=document.getElementById("new_pass").value;
	   var retype_pass=document.getElementById("retype_pass").value;
	   var content='';
        content=content+'<div class="alert alert-danger" role="alert">';
        var input = $('.validate-input .input100');

        if (current_pass=='' && new_pass=='' && retype_pass=='') {
        		var thisAlert = $(input).parent();
       			$(thisAlert).addClass('alert-validate');
       			content=content+'Fill Out All The Fields! </div> ';
            	document.getElementById("alert_there").innerHTML=content;
        }
	   else if (current_pass=='' && new_pass=='') {
	 		  	var thisAlert = $(input[0]).parent();
       			$(thisAlert).addClass('alert-validate');

       			var thisAlert = $(input[1]).parent();
       			$(thisAlert).addClass('alert-validate');

       			content=content+'Fill Out All The Fields! </div> ';
            	document.getElementById("alert_there").innerHTML=content;	   		
	   }
	   else if (new_pass=='' && retype_pass=='') {
	 		  	var thisAlert = $(input[1]).parent();
       			$(thisAlert).addClass('alert-validate');

       			var thisAlert = $(input[2]).parent();
       			$(thisAlert).addClass('alert-validate');

       			content=content+'Fill Out All The Fields! </div> ';
            	document.getElementById("alert_there").innerHTML=content;	   		
	   }
	   else if (current_pass=='' && retype_pass=='') {
	 		  	var thisAlert = $(input[0]).parent();
       			$(thisAlert).addClass('alert-validate');

       			var thisAlert = $(input[2]).parent();
       			$(thisAlert).addClass('alert-validate');

       			content=content+'Fill Out All The Fields! </div> ';
            	document.getElementById("alert_there").innerHTML=content;	   		
	   }
	   else if(new_pass!=retype_pass){
	   			content=content+'New Password and Retype Password Field not matched! </div> ';
            	document.getElementById("alert_there").innerHTML=content;

	   }
	   else if(current_pass==''){
	   	 	var thisAlert = $(input[0]).parent();
	        $(thisAlert).addClass('alert-validate');
	  	 	content=content+'Empty Current Password field not allowed! </div> ';
            document.getElementById("alert_there").innerHTML=content;

	   }
	   else if (new_pass=='') {
	   		
		   	var thisAlert = $(input[1]).parent();
	        $(thisAlert).addClass('alert-validate');

	   		content=content+'New Password is required! </div> ';
            document.getElementById("alert_there").innerHTML=content;
	   }
	   else if (retype_pass=='') {
	   	
		   	var thisAlert = $(input[2]).parent();
	        $(thisAlert).addClass('alert-validate');

	   		content=content+'Retype New Password! </div> ';
            document.getElementById("alert_there").innerHTML=content;
	   }
	   else{
      new_pass = CryptoJS.AES.encrypt(new_pass, "CIPHERKEY").toString();
     //alert(new_pass);
	   	firebase.database().ref('User/' + userid).once('value').then(function(snapshot) {
                     //alert("hello");

                      var s_userpass = snapshot.val().userpass;
                      var s_username = snapshot.val().username;
                      var s_usercategory = snapshot.val().usercategory;
                      //alert('hello');

                      if(s_userpass==current_pass){
                        	
                      	firebase.database().ref('User/' + userid).set({
				   		username: s_username,
				   		userpass : new_pass,
				   		usercategory: s_usercategory
					  }, function(error) {
					    if (error) {
					    	content=content+'<strong>Failed </strong> to save new Password!! </div> ';
                       		 document.getElementById("alert_there").innerHTML=content;
					      // The write failed...
					    } else {
					    	
		                      		// window.close()
                          //  			window.open('change_password_confirm.html')
                           			window.location.replace("change_password_confirm.html");

		                      
					    }
					  });


                      }
                      else{

                      	//location.reload("../html/STUDENT/student_main.html");
                        content=content+'<strong>Current Password </strong> did not matched!! </div> ';
                        document.getElementById("alert_there").innerHTML=content;
                        document.getElementById("userid").style.borderColor = "red";
                        //alert("Error Password or Username")
                      }
                     
                      
                  }).catch(function(error) {
                   // content=content+'Unknown Error occurred!! </div> ';
                 //   document.getElementById("alert_there").innerHTML=content;
                    //document.getElementById("userid").style.borderColor = "red";
  // Uh-oh, an error occurred!
                });
	   	
	   	 

	   }



              
                 
                     
     }

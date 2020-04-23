   
  
function check(form) { 
		var s_mail;
	    var s_username;
	   	var s_userpass;
	   	var m_body='';
		//var userid=localStorage.getItem("value");
	   var userid=document.getElementById("userid").value;
	   var mail='asassa';
	  // var retype_pass=document.getElementById("retype_pass").value;
	   var content='';
        content=content+'<div class="alert alert-danger" role="alert">';
        var input = $('.validate-input .input100');

        if (userid=='' && mail=='') {
        		var thisAlert = $(input).parent();
       			$(thisAlert).addClass('alert-validate');
       			content=content+'Fill Out All The Fields! </div> ';
            	document.getElementById("alert_there").innerHTML=content;
        }
	   else if (userid=='') {
	 		  	var thisAlert = $(input[0]).parent();
       			$(thisAlert).addClass('alert-validate');

       			content=content+'UserID cannot be empty! </div> ';
            	document.getElementById("alert_there").innerHTML=content;	   		
	   }
	   else if (mail=='') {
	 		  	var thisAlert = $(input[1]).parent();
       			$(thisAlert).addClass('alert-validate');

       			
       			content=content+'E-mail cannot be empty! </div> ';
            	document.getElementById("alert_there").innerHTML=content;	   		
	   }
	  //  else if($(input[1]).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null)
	  // {
	  // 		var thisAlert = $(input[1]).parent();
   //     		$(thisAlert).addClass('alert-validate');
	  // 		content=content+'Invalid Email! </div> ';
   //          document.getElementById("alert_there").innerHTML=content;
	  // }
	   else{
	   		//if(true)
	   		// alert(userid);
	   		firebase.database().ref('User/' + userid).once('value').then(function(snapshot) {
                     //alert("hello");

                     s_username = snapshot.val().username;
                      s_userpass = snapshot.val().userpass;
                      s_mail = snapshot.val().useremail;

                      s_userpass = CryptoJS.AES.decrypt(s_userpass, "CIPHERKEY");
                      s_userpass = s_userpass.toString(CryptoJS.enc.Utf8);
                     // alert(s_userpass);

                      //alert("in here"+s_userpass);
                      //alert("in here"+s_username);
                      //alert("out here"+s_username);

		                 // alert(s_userpass);
		                 if (s_mail==s_mail) {

		                  m_body=m_body+s_username;
					   	  m_body=m_body+"!! Your Password is : ";
					   	  m_body=m_body+s_userpass;
					   	  m_body=m_body+"  (Change the Password after log in!)";

			   
			   			
			   			
					   	  //alert(s_mail);
					 
						Email.send({
						Host: "smtp.gmail.com",
						Username : "mist.attendance.system@gmail.com",
						Password : "01534313504row",
						To : s_mail,
						From : "mist.attendance.system@gmail.com",
						Subject : "Recovery Password",
						Body : m_body ,
						}).then(function(message){
				            alert("mail sent successfully");
				   //          window.close();
							// window.open('forgot_password_confirm.html');
							window.location.replace("forgot_password_confirm.html");

						});

		                 }
		                 else
		                 {
		                 	content=content+' <strong> Email </strong> did not matched! </div> ';
      				      document.getElementById("alert_there").innerHTML=content;

		                 }
		                
						

                      
                     
                      
                  }).catch(function(error) {
                    content=content+'Invalid UserID or Password!! </div> ';
                    document.getElementById("alert_there").innerHTML=content;
                    //document.getElementById("userid").style.borderColor = "red";
  // Uh-oh, an error occurred!
                });
                  


				

	   		// window.close();
              //  	window.open('forgot_password_confirm.html');
	   			   	 

	   }



              
                 
                     
     }

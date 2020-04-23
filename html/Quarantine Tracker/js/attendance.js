




	 document.getElementById("detailed_content").style.visibility = "hidden";
function attendance() {
	var s_id = localStorage.getItem("value");
	var basic_content=''
    var final_content='';
	var table_content='';
	var content='';

// 	var faculty;
	
// 	var rootRef = firebase.database().ref();
//   var urlRef = rootRef.child('attendance/CSE-17A/CSE-401/');
//   urlRef.once("value", function(snapshot) {
//     snapshot.forEach(function(child) {
//     var m=child.key; //teacher name
//     faculty=m;
//    // alert(m);

//     var rootRef2 = firebase.database().ref();
//   	var urlRef2 = rootRef2.child('attendance/CSE-17A/CSE-401/'+m+'/');
//  	urlRef2.once("value", function(snapshot) {
//     snapshot.forEach(function(child) {
//     var m2=child.key; //date is there
//    // alert(m2);
//     	var rootRef3 = firebase.database().ref();
// 	  	var urlRef3 = rootRef3.child('attendance/CSE-17A/CSE-401/'+m+'/'+m2+'/');
// 	 	urlRef3.once("value", function(snapshot) {
// 	    snapshot.forEach(function(child) {
// 	    var m3=child.key; //got the time slot
// 	    alert(m3);
// 	    var s_present;
// 	    var s_excused;
// 		    firebase.database().ref('attendance/CSE-17A/CSE-401/'+m+'/'+m2+'/'+m3+'/'+'201714043').once('value').then(function(snapshot) {
// 	  				if (snapshot.exists()) {
// 	  					 s_present = snapshot.val().p_status;
// 	  					 s_excused = snapshot.val().p_excused;
// 	  					 alert(s_present+'  '+s_excused);
// 	  				}
// 	  				else
// 	  				{
// 	  					content='<br>';
// 		   				content=content+'<div style="font-size: 16pt" class="alert alert-danger" role="alert">';
// 		   				content=content+'<strong>No data </strong>found! </div> ';
// 	   				 	document.getElementById("alert_there").innerHTML=content;
// 	  				}
			     
			  
// 			}, function(error) {
// 			    if (error) {
// 			    	alert("asasasas");
// 			    	content='<br>';
// 	   				content=content+'<div style="font-size: 16pt" class="alert alert-danger" role="alert">';
// 	   				content=content+'<strong>No data </strong>found! </div> ';
// 	   				 document.getElementById("alert_there").innerHTML=content;
// 			      // The write failed...
// 			    } else {
// 			    	alert('asasas');
// 			    	content='<br>';
// 	   				content=content+'<div style="font-size: 16pt" class="alert alert-success" role="alert">';
// 	   				content=content+'<strong>Data </strong> found! </div> ';
// 	   				 document.getElementById("alert_there").innerHTML=content;
			   
// 			    }
// 			  });

// 		  });
// 		});

    
// 	  });
// 	});

    
//   });
// });

//quarantine








		// firebase.database().ref('Course_Teacher/CSE-17A/CSE-460(HW)').push({
		   
	 //   		 Name:'8320-06',
	   		 

		//   }, function(error) {
		//     if (error) {
		//     	alert("failed to save data");
		//     } else {
		//     	alert("successfully saved data");
		//     }
		//   });

	// firebase.database().ref('attendance/CSE-17A/CSE-402/Lt Col Nazrul Islam/11-03-2020/08:00-08:55/201714023').set({
		   
	//    		 p_status:1,
	   		 

	// 	  }, function(error) {
	// 	    if (error) {
	// 	    	alert("failed to save data");
	// 	    } else {
	// 	    	alert("successfully saved data");
	// 	    }
	// 	  });

	

	// firebase.database().ref('Enrolled/CSE-17A/CSE-460').push({
		   
	//    		 ID:201714023,

	// 	  }, function(error) {
	// 	    if (error) {
	// 	    	alert("failed to save data");
	// 	    } else {
	// 	    	alert("successfully saved data");
	// 	    }
	// 	  });


	var course=document.getElementById("course");
	var course_text=course.options[course.selectedIndex].text;

	var level_term=document.getElementById("level_term");
	var level_term_text=level_term.options[level_term.selectedIndex].text;
	


	

    content=content+'<div style="font-size: 16pt" class="alert alert-danger" role="alert">';
	 
	if (course_text=='Choose your option' && level_term_text=='Choose your option') {
		document.getElementById("course").style.borderColor = "red";
		document.getElementById("level_term").style.borderColor = "red";
		content=content+'<strong>Fill Out </strong>The Fields! </div> ';
        document.getElementById("alert_there").innerHTML=content;
		
	}
	else if(course_text=='Choose your option')
	{
		document.getElementById("course").style.borderColor = "red";
		content=content+'Select <strong> Course </strong></div> ';
        document.getElementById("alert_there").innerHTML=content;
	}
	else if(level_term_text=='Choose your option')
	{
		document.getElementById("level_term").style.borderColor = "red";
		content=content+'Select <strong> Level/Term </strong></div> ';
        document.getElementById("alert_there").innerHTML=content;
	}
	else
	{
		 
		  //document.getElementById("present").innerHTML='<h4>60</h4>';
		basic_content='';
		basic_content=basic_content+'<table class="table table-striped" border="2">';

		basic_content=basic_content+'<thead class="thead-light">';
		basic_content=basic_content+'<tr class="bg-success">';
		basic_content=basic_content+'<th scope="col">Ser No.</th>';
		basic_content=basic_content+'<th scope="col">Course Code</th>';
		basic_content=basic_content+'<th scope="col">Faculty</th>';
		basic_content=basic_content+'<th scope="col">Date</th>';
		basic_content=basic_content+'<th scope="col">Time</th>';
		basic_content=basic_content+'<th scope="col">Present</th>';
		basic_content=basic_content+'<th scope="col">Absent</th>';
		basic_content=basic_content+'<th scope="col">Excused</th>';
		//content=content+'<th scope="col">Excused</th>';
		basic_content=basic_content+'  </tr>';
		basic_content=basic_content+' </thead>';
		basic_content=basic_content+'<tbody>';


	

		var c=1;
		var present_count=0;
		var absent_count=0;
		var excused_count=0;
		//alert(batch_text+course_text);


    	

    	var s_present;
    	var s_excused;
    	var s_absent;
    	


        

       
	var count=0;

  var rootRef = firebase.database().ref();
  var urlRef = rootRef.child('attendance/CSE-17A/'+course_text+'/');
  urlRef.once("value", function(snapshot) {
    snapshot.forEach(function(child) {
    	 
    var faculty=child.key; //teacher name
    	//alert(faculty);
   
	    var rootRef2 = firebase.database().ref();
	  	var urlRef2 = rootRef2.child('attendance/CSE-17A/'+course_text+'/'+faculty+'/');
	 	urlRef2.once("value", function(snapshot) {
	    snapshot.forEach(function(child) {
	    var m2=child.key; //date is there
	  //date is assigned as m2=date

	    //alert(m2);
	    	var rootRef3 = firebase.database().ref();
		  	var urlRef3 = rootRef3.child('attendance/CSE-17A/'+course_text+'/'+faculty+'/'+m2+'/');
		 	urlRef3.once("value", function(snapshot) {
		    snapshot.forEach(function(child) {
		    var m3=child.key; //got the time slot
		   

		    //alert(m3);
		    
			    firebase.database().ref('attendance/CSE-17A/'+course_text+'/'+faculty+'/'+m2+'/'+m3+'/'+s_id).once('value').then(function(snapshot) {
		  				if (snapshot.exists()) {
		  					 s_present = snapshot.val().p_status;
		  					 s_excused = snapshot.val().p_excused;
		  					 s_absent  = 1- s_present;
		  					// alert(s_present+'  '+s_excused);
		  					 table_content=table_content+'<tr>';
					   		 table_content=table_content+'<td>'+c+'</td>';
					  		 
					  		 table_content=table_content+'<td>'+course_text+'</td>';
		  					  table_content=table_content+'<td>'+faculty+'</td>';
		  					  table_content=table_content+'<td>'+m2+'</td>';
		  					  table_content=table_content+'<td>'+m3+'</td>';
		  					 if (s_present==1) {
		  					 	present_count=present_count+1;
		  					 	table_content=table_content+'<td><label><input type="checkbox"  disabled checked></label></td>';
		  					 }
		  					 else
		  					 {
		  					 	absent_count=absent_count+1;
		  					 	table_content=table_content+'<td><label><input type="checkbox" disabled></label></td>';
		  					 }



		  					  if (s_absent==1) {

		  					 	table_content=table_content+'<td><label><input type="checkbox" onclick="return false" disabled checked></label> </td>';
		  					 }
		  					 else
		  					 {
		  					 	table_content=table_content+'<td><label><input type="checkbox" disabled></label> </td>';
		  					 }



		  					  if (s_excused==1) {
		  					  	excused_count=excused_count+1;
		  					 	table_content=table_content+'<td><label><input type="checkbox" disabled checked></label> </td>';
		  					 }
		  					 else
		  					 {
		  					 	table_content=table_content+'<td><label><input type="checkbox" disabled></label> </td>';
		  					 }
		  					 table_content=table_content+'</tr>';
		  					 final_content=final_content+'</tbody>';
							final_content=final_content+'</table>';
							document.getElementById("table_content").innerHTML=basic_content+table_content+final_content;
							final_content='';
							//alert(c);
							document.getElementById("detailed_content").style.visibility = "visible";
							document.getElementById("present").innerHTML = '<h4>'+present_count+'</h4>';
							document.getElementById("absent").innerHTML = '<h4>'+ absent_count +'</h4>';
							//alert()
							document.getElementById("percentage").innerHTML = '<h4>'+ parseFloat((present_count/(c- excused_count) )*100 )+'% </h4>';
							var content='';
					    	content=content+'<div style="font-size: 16pt" class="alert alert-success" role="alert">';
					 		content=content+'<strong>Data </strong>Found! </div> ';
					        document.getElementById("alert_there").innerHTML=content;
							c=c+1;




		  					 
		  				}
		  				else
		  				{
		  					content='<br>';
			   				content=content+'<div style="font-size: 16pt" class="alert alert-danger" role="alert">';
			   				content=content+'<strong>No data </strong>found! </div> ';
		   				 	document.getElementById("alert_there").innerHTML=content;
		  				}
				     
				  
				}, function(error) {
				    if (error) {
				    	alert("asasasas");
				    	content='<br>';
		   				content=content+'<div style="font-size: 16pt" class="alert alert-danger" role="alert">';
		   				content=content+'<strong>No data </strong>found! </div> ';
		   				 document.getElementById("alert_there").innerHTML=content;
				      // The write failed...
				    } else {
				    	alert('asasas');
				    	content='<br>';
		   				content=content+'<div style="font-size: 16pt" class="alert alert-success" role="alert">';
		   				content=content+'<strong>Data </strong> found! </div> ';
		   				 document.getElementById("alert_there").innerHTML=content;
				   
				    }
				  });

			  });
			});

	    
		  });
		});

    
  });
});




    	



  					
  					
  					
  					
  					
  					
  					
  					//table_content=table_content+'<td><div class="checkbox"><label><input type="checkbox" value=""></label></div> </td>';
  					//table_content=table_content+'<td><div class="checkbox"><label><input type="checkbox" value=""></label></div> </td>';
  					
  					
		  			

		
		
		


	


}
	
}

function application_status() {
	// <table id="table" class="table table-striped" border="1">
 //              <thead class="thead-light">
 //                <tr class="bg-success">
 //                  <th>Ser No.</th>
 //                  <th>Course Code</th>
 //                  <th>Faculty</th>
 //                  <th>Date</th>
 //                  <th>Status</th>
                 
 //                </tr>
 //              </thead>
 //              <tbody>
 //                <tr >
 //                   <td>1</td>
 //                  <td>CSE-401</td>
 //                  <td>Lt Col Nazrul Islam</td>
 //                  <td>21/03/2020</td>
 //                  <td>Approved</td>
                  
 //                </tr>
 //              </tbody>
 //            </table> 

 var c=1;
		var basic_content=''
    	var final_content='';
		var table_content='';
		basic_content='';
		basic_content=basic_content+'<table class="table table-striped" border="2">';
	
		basic_content=basic_content+'<thead class="thead-light">';
		basic_content=basic_content+'<tr>';
		basic_content=basic_content+'<th scope="col">Ser No.</th>';
		basic_content=basic_content+'<th scope="col">Course Code</th>';
		basic_content=basic_content+'<th scope="col">Faculty</th>';
		basic_content=basic_content+'<th scope="col">Date</th>';
		basic_content=basic_content+'<th scope="col">Status</th>';
		basic_content=basic_content+'</tr>';
		basic_content=basic_content+' </thead>';
		basic_content=basic_content+'<tbody>';

		table_content=table_content+'<tr>';

 		var s_id = localStorage.getItem("value");
 		var faculty;
 		var course_id;

 	var rootRef = firebase.database().ref();
  var urlRef = rootRef.child('application/');
  urlRef.once("value", function(snapshot) {
    snapshot.forEach(function(child) {
    	 
    var faculty=child.key; //teacher name
    
   
	    var rootRef2 = firebase.database().ref();
	  	var urlRef2 = rootRef2.child('application/'+faculty+'/');
	 	urlRef2.once("value", function(snapshot) {
	    snapshot.forEach(function(child) {
	    var m2=child.key; //date is there
	  //date is assigned as m2=date

	    //alert(m2);
	    	var rootRef3 = firebase.database().ref();
		  	var urlRef3 = rootRef3.child('application/'+faculty+'/'+m2);
		 	urlRef3.once("value", function(snapshot) {
		    snapshot.forEach(function(child) {
		    var m3=child.key; //got the time slot
		   

		    if (child.val().App_ID==s_id) {
		    	table_content=table_content+'<td>'+c+'</td>';
  					
  					table_content=table_content+'<td>'+child.val().App_course+'</td>';
  					table_content=table_content+'<td>'+child.val().App_faculty+'</td>';  //total present
  					table_content=table_content+'<td>'+child.val().App_date+'</td>';  //absent
  					table_content=table_content+'<td>'+child.val().App_status+'</td>';  //excused
  			
  					
					table_content=table_content+'</td>';
					table_content=table_content+'</tr>';
  					 
					 final_content=final_content+'</tbody>';
					final_content=final_content+'</table>';
					
					document.getElementById("table_content").innerHTML=basic_content+table_content+final_content;
					final_content='';
					c=c+1;

					var content='';
			content=content+'<div style="font-size: 16pt" class="alert alert-success" role="alert">';
			content=content+'<strong>Data </strong>Found! </div> ';
        	document.getElementById("alert_there").innerHTML=content;
		    }
		    else
		    {
		    	if(c>1)
		    	{

		    	}
		    	else
		    	{
		    		var content='';
					content=content+'<div style="font-size: 16pt" class="alert alert-danger" role="alert">';
					content=content+'Data<strong> Not </strong>Found! </div> ';
        			document.getElementById("alert_there").innerHTML=content;
		    	}
		    	
		    }
		   // alert(faculty+" "+ child.val().App_ID);
		    
			    

			  });
			});
			// if (c>1) {

			// }
			// else
			// {
			// 	content=content+'<div style="font-size: 16pt" class="alert alert-danger" role="alert">';
			// content=content+'No <strong>Data </strong>Found! </div> ';
   //      	document.getElementById("alert_there").innerHTML=content;
			// }

	    
		  });
		});

    
  });
});


		

  					
	
}
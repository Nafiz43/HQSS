
(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        //direct();
        

        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }
       // alert($(input[1]).val());
        //$(location).attr('href', 'http://stackoverflow.com')
        if($(input[0]).val()=='admin' && $(input[1]).val()=='1234')
        {
          //alert('Comig There');
           

            direct1();
        }
        else if($(input[0]).val()=='student' && $(input[1]).val()=='1234'){
            direct2();

        }
        else if($(input[0]).val()=='teacher' && $(input[1]).val()=='1234'){
              
              direct3();
        }
        else
        {
            alert('Cannot redirect');
        }
        //$(location).attr('href', 'http://stackoverflow.com');

        return check;
    });

    function direct1(){
        $(location).attr('href', 'About.html');
        
         alert('Hello');
    }
      function direct2(){
        $(location).attr('href', 'student_main.html');
        
         alert('Hello');
    }
      function direct3(){
        $(location).attr('href', 'teacher.html');
        
         alert('Hello');
    }


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).find('i').removeClass('fa-eye');
            $(this).find('i').addClass('fa-eye-slash');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).find('i').removeClass('fa-eye-slash');
            $(this).find('i').addClass('fa-eye');
            showPass = 0;
        }
        
    });
    

})(jQuery);
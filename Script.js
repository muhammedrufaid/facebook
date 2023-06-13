$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:8
            },
      
        emailAddress:{
            required:true,
            email:true

        },
        password:{
            required:true,
            minlength:6
        },
        day:{
            required:true
        },
        gender:{
            required:true
        }
        },
        messages:{
            fname:{
                required:"enter first name",
                minlength:"enter at least 4 character"
            }
           
        }

    })
})